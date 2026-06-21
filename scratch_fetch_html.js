const fs = require('fs');
const cheerio = require('cheerio');

async function run() {
    console.log("Fetching main careers page...");
    const res = await fetch('https://goa.paruluniversity.ac.in/careers/');
    const html = await res.text();
    const $ = cheerio.load(html);

    const jobs = [];
    let id = 1;

    const items = $('.job-item').toArray();
    console.log(`Found ${items.length} job items`);

    for (const item of items) {
        const titleEl = $(item).find('h5');
        if (!titleEl.length) continue;
        
        let title = titleEl.text().replace(/&#8211;/g, '-').trim();
        const applyLink = $(item).find('a.react_button').attr('href');
        if (!applyLink) continue;

        let department = "Administration";
        let position = "Administration";
        
        if (title.toLowerCase().includes("teaching") || title.toLowerCase().includes("professor")) {
            department = "Academics";
            position = "Teaching";
        } else if (title.toLowerCase().includes("director")) {
            department = "Administration";
            position = "Leadership";
        } else if (title.toLowerCase().includes("assistant") || title.toLowerCase().includes("officer") || title.toLowerCase().includes("executive") || title.toLowerCase().includes("engineer") || title.toLowerCase().includes("plumber") || title.toLowerCase().includes("electrician")) {
            department = "Administration";
            position = "Non Teaching";
        }

        console.log(`Fetching details for ${title}...`);
        
        let descriptionHTML = `Parul University Goa invites applications from qualified candidates for the position of ${title}. Join our vibrant campus and contribute to our academic and administrative excellence.`;
        let cardDescription = descriptionHTML;
        
        try {
            const detailRes = await fetch(applyLink);
            const detailHtml = await detailRes.text();
            const $d = cheerio.load(detailHtml);

            let resHTML = "";
            let qualHTML = "";
            
            const listEl = $d('ol');
            if (listEl.length) {
                resHTML = "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Key Responsibilities</h3><ol class='list-decimal pl-5 space-y-2'>" + listEl.html() + "</ol></div>";
            }
            
            const ulList = $d('.elementor-icon-list-items').first();
            if (ulList.length) {
                let liHTML = "";
                ulList.find('li').each((i, el) => {
                    const text = $d(el).text().replace(/\s+/g, ' ').trim();
                    if (text && !text.includes('1800') && !text.includes('@')) {
                        liHTML += `<li>${text}</li>`;
                    }
                });
                if (liHTML) {
                    qualHTML = "<div class='mb-6'><h3 class='text-lg font-bold mb-3'>Qualifications & Eligibility</h3><ul class='list-disc pl-5 space-y-2'>" + liHTML + "</ul></div>";
                }
            }

            if (resHTML || qualHTML) {
                descriptionHTML = resHTML + qualHTML;
                cardDescription = $d('ol li').first().text().replace(/\s+/g, ' ').trim() || descriptionHTML.replace(/<[^>]+>/g, ' ').trim();
            }

        } catch (e) {
            console.error(`Error fetching ${applyLink}: ${e.message}`);
        }

        jobs.push({
            id: id++,
            department: department,
            position: position,
            title: title,
            location: "Goa",
            type: "On-site",
            description: descriptionHTML,
            cardDescription: cardDescription
        });
    }

    const fileContent = `export interface Job {
  id: number;
  department: string;
  position: string;
  title: string;
  location: string;
  type: string;
  description: string;
  cardDescription?: string;
}

export const MOCK_JOBS: Job[] = ${JSON.stringify(jobs, null, 2)};
`;

    fs.writeFileSync('/Users/apple/Downloads/NextGoa-main/src/data/jobs.ts', fileContent);
    console.log("Jobs updated with HTML descriptions!");
}

run().catch(console.error);
