const cheerio = require('cheerio');

async function run() {
  const urls = [
    'https://goa.paruluniversity.ac.in/faculty-of-hotel-management/',
    'https://goa.paruluniversity.ac.in/faculty-of-physiotherapy/',
    'https://goa.paruluniversity.ac.in/faculty-of-pharmacy/',
    'https://goa.paruluniversity.ac.in/faculty-of-applied-and-health-sciences-2/',
    'https://goa.paruluniversity.ac.in/faculty-of-engineering-it-cs/',
    'https://goa.paruluniversity.ac.in/faculty-of-nursing/',
    'https://goa.paruluniversity.ac.in/faculty-of-management-studies/',
    'https://goa.paruluniversity.ac.in/about-us/'
  ];
  
  for (const url of urls) {
    try {
      const pageRes = await fetch(url);
      if (!pageRes.ok) continue;
      const html = await pageRes.text();
      const $ = cheerio.load(html);
      
      console.log(`URL: ${url}`);
      $('.tpg-el-main-wrapper .rt-grid-item').each((i, el) => {
        const name = $(el).find('h3, h4, h2, .rt-detail h3 a').text().trim();
        const linkedin = $(el).find("a[href*='linkedin.com']").attr('href');
        if (name) {
          console.log(`  ${name} -> ${linkedin || 'None'}`);
        }
      });
      // Try another layout
      $('.elementor-widget-container .elementor-image-box-wrapper').each((i, el) => {
        const name = $(el).find('.elementor-image-box-title').text().trim();
        const linkedin = $(el).find("a[href*='linkedin.com']").attr('href');
        if (name) {
          console.log(`  ${name} -> ${linkedin || 'None'}`);
        }
      });
      // Try generic search for leaders
      $('.tpg-el-main-wrapper').each((i, el) => {
          const names = $(el).find('h3 a').map((_, a) => $(a).text().trim()).get();
          const linkedins = $(el).find("a[href*='linkedin.com']").map((_, a) => $(a).attr('href')).get();
          if (names.length > 0) {
              // console.log("Generic layout:", names, linkedins);
          }
      });
    } catch (err) {
      console.log(`Error on ${url}: ${err.message}`);
    }
  }
}

run();
