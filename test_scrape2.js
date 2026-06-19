const axios = require('axios');
const cheerio = require('cheerio');

async function scrape() {
    try {
        const url = 'https://goa.paruluniversity.ac.in/faculty-of-engineering-it-cs/';
        const res = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/111.0'
            }
        });
        const $ = cheerio.load(res.data);
        
        let count = 0;
        $('.elementor-widget-heading').each((i, el) => {
            const text = $(el).text().trim();
            if (text.startsWith('Dr.') || text.startsWith('Ms.') || text.startsWith('Mr.')) {
                if (count < 2) {
                    console.log("Found name:", text);
                    const container = $(el).closest('.e-con-full');
                    console.log("Container text:\n", container.text().replace(/\s+/g, ' '));
                    count++;
                }
            }
        });
        
    } catch (e) {
        console.error(e.message);
    }
}
scrape();
