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
        
        let found = false;
        $('*').each((i, el) => {
            const text = $(el).text();
            if (text.includes('Designation:') && !found) {
                console.log("Found Designation block:");
                // Let's traverse up a few levels and dump the html to see the whole card
                console.log($(el).parent().parent().parent().parent().html());
                found = true;
            }
        });
        
    } catch (e) {
        console.error(e);
    }
}
scrape();
