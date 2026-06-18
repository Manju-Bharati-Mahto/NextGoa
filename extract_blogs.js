const fs = require('fs');
const cheerio = require('cheerio');

const files = [
  '/Users/apple/.gemini/antigravity/brain/f96d587c-e950-4846-b99c-3fe7025a9675/.system_generated/steps/436/content.md',
  '/Users/apple/.gemini/antigravity/brain/f96d587c-e950-4846-b99c-3fe7025a9675/.system_generated/steps/437/content.md',
  '/Users/apple/.gemini/antigravity/brain/f96d587c-e950-4846-b99c-3fe7025a9675/.system_generated/steps/438/content.md',
  '/Users/apple/.gemini/antigravity/brain/f96d587c-e950-4846-b99c-3fe7025a9675/.system_generated/steps/439/content.md'
];

let stories = [];

for (const f of files) {
  try {
    const content = fs.readFileSync(f, 'utf8');
    const $ = cheerio.load(content);
    
    const title = $('meta[property="og:title"]').attr('content')?.replace(/&#8217;/g, "'").replace(/&#8211;/g, '-') || '';
    const excerpt = $('meta[property="og:description"]').attr('content')?.replace(/&#8217;/g, "'").replace(/&#8211;/g, '-') || '';
    const image = $('meta[property="og:image"]').attr('content') || '';
    
    let slugMatch = $('meta[property="og:url"]').attr('content');
    let slug = slugMatch ? slugMatch.split('/').filter(Boolean).pop() : 'unknown';
    
    let blocks = [];
    let seenTexts = new Set();
    
    // We want content from the main article body
    // Often it's inside an elementor section that is NOT header/footer.
    // Let's just find all text editors and headings that are inside .elementor-widget-wrap
    
    $('.elementor-widget-heading, .elementor-widget-text-editor, .rt-custom-accordions, .elementor-widget-rt-custom-accordions').each((i, widget) => {
      // Exclude header and footer by checking ancestors
      if ($(widget).closest('header, footer, nav, .menu').length > 0) return;
      
      if ($(widget).hasClass('elementor-widget-rt-custom-accordions') || $(widget).hasClass('rt-custom-accordions')) {
        console.log('Found accordion widget in', slug);
        let faqItems = [];
        $(widget).find('.accordion-item').each((j, item) => {
          const q = $(item).find('.accordion-button').text().trim().replace(/\s+/g, ' ').replace(/&#8217;/g, "'").replace(/&#8211;/g, '-');
          const a = $(item).find('.accordion-collapse').text().trim().replace(/\s+/g, ' ').replace(/&#8217;/g, "'").replace(/&#8211;/g, '-');
          console.log(`Debug Q: ${q}`);
          console.log(`Debug A: ${a}`);
          if (q && a) {
            faqItems.push({ question: q, answer: a });
          }
        });
        console.log('Found FAQs:', faqItems.length);
        if (faqItems.length > 0) {
          blocks.push({ type: 'faq', items: faqItems });
        }
        return;
      }

      $(widget).find('h2, h3, h4, p, ul, ol, blockquote').each((j, el) => {
        const tag = el.tagName.toLowerCase();
        
        // Prevent duplicates from nested components
        if ($(el).parents('ul, ol, blockquote').length > 0 && tag !== 'li') return;
        
        const text = $(el).text().trim().replace(/\s+/g, ' ').replace(/&#8217;/g, "'").replace(/&#8211;/g, '-');
        if (!text || seenTexts.has(text)) return;
        seenTexts.add(text);
        
        // ignore common menu/footer texts
        if (text.includes('About Us') || text.includes('Admissions') || text.includes('Contact Us') || text.includes('Parul University')) {
          if (text.length < 50) return; // likely a menu item
        }
        
        if (['h2', 'h3', 'h4'].includes(tag)) {
          blocks.push({ type: tag, content: text });
        } else if (tag === 'p') {
          if (text.length > 20 && !text.includes('function(') && !text.includes('document.getElementById')) {
            blocks.push({ type: 'p', content: text });
          }
        } else if (tag === 'ul' || tag === 'ol') {
          let items = [];
          $(el).find('li').each((k, li) => {
            let itemText = $(li).text().trim().replace(/\s+/g, ' ').replace(/&#8217;/g, "'").replace(/&#8211;/g, '-');
            if (itemText && itemText.length > 5) items.push(itemText);
          });
          if (items.length > 0) {
            blocks.push({ type: tag, items });
          }
        } else if (tag === 'blockquote') {
          blocks.push({ type: 'blockquote', content: text });
        }
      });
    });
    
    // Extract blockquote text if there is one that matches the excerpt
    let finalBlocks = [];
    let quoteFound = false;
    for (let b of blocks) {
      if (b.type === 'p' && (b.content === excerpt || b.content.includes(excerpt.substring(0, 50)))) {
         finalBlocks.push({ type: 'blockquote', content: b.content });
         quoteFound = true;
      } else {
         finalBlocks.push(b);
      }
    }
    
    if (!quoteFound && finalBlocks.length > 0 && finalBlocks[0].type === 'p') {
      finalBlocks[0].type = 'blockquote';
    }

    stories.push({
      slug,
      title,
      excerpt,
      image,
      date: "2024-08-10",
      category: "News",
      blocks: finalBlocks
    });
  } catch (e) {
    console.error("Error parsing", f, e.message);
  }
}

const fileContent = `export interface StoryBlock {
  type: string;
  content?: string;
  items?: string[] | { question: string; answer: string; }[];
}

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  blocks: StoryBlock[];
}

export const stories: Story[] = ${JSON.stringify(stories, null, 2)};
`;

fs.writeFileSync('/Users/apple/Downloads/NextGoa-main/src/data/stories.ts', fileContent);
console.log('Saved stories.ts');
