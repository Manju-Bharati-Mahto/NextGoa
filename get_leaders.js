const cheerio = require('cheerio');
fetch('https://www.paruluniversity.ac.in/about-us/leadership/').then(r=>r.text()).then(t=>{
    const $ = cheerio.load(t);
    $('.leadership-box, .team-one__single, .team-member, h2, h3').parent().each((i, el) => {
        const text = $(el).text();
        if (text.includes('Devanshu') || text.includes('Parul Patel')) {
            const links = $(el).find('a').map((j, a) => $(a).attr('href')).get();
            if (links.some(l => l && (l.includes('linkedin') || l.includes('instagram')))) {
                console.log($(el).text().substring(0, 50).trim().replace(/\n/g, ''), links.filter(l => l.includes('linkedin') || l.includes('instagram')));
            }
        }
    });
});
