import * as cheerio from 'cheerio';

export interface BlogStory {
  tag: string;
  tagClass: string;
  title: string;
  body: string;
  image: string;
  link: string;
  date: string;
  timestamp: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  'News': 'bg-brand text-white',
  'Events': 'bg-violet-600 text-white',
  'Academic': 'bg-pink-600 text-white',
  'Placement': 'bg-ocean text-white',
  'Research': 'bg-teal-600 text-white',
  'Student Life': 'bg-emerald-600 text-white',
  'Admissions Tips': 'bg-yellow-600 text-white',
  'Default': 'bg-brand text-white'
};

function determineCategory(title: string, tags: string[]): string {
  const t = title.toLowerCase();
  const allTags = tags.map(tag => tag.toLowerCase()).join(' ');
  const content = t + " " + allTags;
  
  if (content.includes('placement') || content.includes('career') || content.includes('job') || content.includes('offer')) return 'Placement';
  if (content.includes('research') || content.includes('study') || content.includes('paper')) return 'Research';
  if (content.includes('event') || content.includes('fest') || content.includes('tour') || content.includes('competition')) return 'Events';
  if (content.includes('admission') || content.includes('apply')) return 'Admissions Tips';
  if (content.includes('student') || content.includes('campus') || content.includes('life')) return 'Student Life';
  if (content.includes('academic') || content.includes('curriculum') || content.includes('class')) return 'Academic';
  return 'News';
}

function parseDate(dateStr: string): number {
  if (!dateStr) return 0;
  const parsed = Date.parse(dateStr);
  return isNaN(parsed) ? 0 : parsed;
}

export async function fetchAllBlogs(): Promise<{ goaStories: BlogStory[]; mainStories: BlogStory[] }> {
  const goaStories: BlogStory[] = [];
  const mainStories: BlogStory[] = [];

  try {
    const goaRes = await fetch('https://goa.paruluniversity.ac.in/blog/', { cache: 'no-store' });
    if (goaRes.ok) {
      const html = await goaRes.text();
      const $ = cheerio.load(html);
      
      $('article').each((i, el) => {
        const title = $(el).find('h1, h2, h3, h4').text().replace(/\s+/g, ' ').trim();
        const link = $(el).find('.blog-title a').attr('href') || $(el).find('a').attr('href') || '#';
        const image = $(el).find('.blog-img img').attr('src') || '';
        const body = $(el).find('.blog-desc, .entry-content, p').text().replace(/\s+/g, ' ').trim();
        const dateStr = $(el).find('.rt-clock-regular').next('span').text().trim() || $(el).find('time').text().trim();
        
        const tags: string[] = [];
        $(el).find('.cat a').each((_, a) => { tags.push($(a).text().trim()); });
        
        const tag = determineCategory(title, tags);
        
        if (title) {
          goaStories.push({
            tag,
            tagClass: CATEGORY_COLORS[tag] || CATEGORY_COLORS['Default'],
            title,
            body: body.length > 150 ? body.substring(0, 150) + '...' : body,
            image,
            link,
            date: dateStr,
            timestamp: parseDate(dateStr)
          });
        }
      });
    }
  } catch (err) {
    console.error('Error fetching Goa blog:', err);
  }

  try {
    const mainRes = await fetch('https://www.paruluniversity.ac.in/blog/', { cache: 'no-store' });
    if (mainRes.ok) {
      const html = await mainRes.text();
      const $ = cheerio.load(html);
      
      $('.featured-content').each((i, el) => {
        const title = $(el).find('h2').text().trim();
        const link = $(el).find('a.blog-read-more-btn').attr('href') || '#';
        const image = $(el).parent().find('img').attr('src') || '';
        const body = $(el).find('p').text().trim();
        const dateStr = $(el).find('.blog-date').text().trim();
        
        const tag = determineCategory(title, []);
        
        if (title) {
          mainStories.push({
            tag,
            tagClass: CATEGORY_COLORS[tag] || CATEGORY_COLORS['Default'],
            title,
            body: body.length > 150 ? body.substring(0, 150) + '...' : body,
            image,
            link,
            date: dateStr,
            timestamp: parseDate(dateStr)
          });
        }
      });

      $('.card-blog-content').each((i, el) => {
        const title = $(el).find('h2').text().trim();
        const link = $(el).find('a.blog-read-more-btn').attr('href') || '#';
        const image = $(el).parent().find('img').attr('src') || '';
        const body = $(el).find('p').text().trim();
        const dateStr = $(el).find('.blog-date').text().trim();
        
        const tag = determineCategory(title, []);
        
        if (title) {
          mainStories.push({
            tag,
            tagClass: CATEGORY_COLORS[tag] || CATEGORY_COLORS['Default'],
            title,
            body: body.length > 150 ? body.substring(0, 150) + '...' : body,
            image,
            link,
            date: dateStr,
            timestamp: parseDate(dateStr)
          });
        }
      });
    }
  } catch (err) {
    console.error('Error fetching main blog:', err);
  }

  goaStories.sort((a, b) => b.timestamp - a.timestamp);
  const uniqueGoa = Array.from(new Map(goaStories.map(s => [s.link, s])).values());

  mainStories.sort((a, b) => b.timestamp - a.timestamp);
  const uniqueMain = Array.from(new Map(mainStories.map(s => [s.link, s])).values());

  return { goaStories: uniqueGoa, mainStories: uniqueMain };
}
