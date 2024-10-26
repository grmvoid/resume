const styles = require('./styles');

const renderer =  async (resume) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>${resume.basics.name}</title>
                <style>${styles}</style>
            </head>
            <body>
                <header class="basics">
                    <h1 class="name">${resume.basics.name}</h1>
                    <div>
                        <span>${resume.basics.email}</span> |
                        <span>${resume.basics.github}</span>
                    </div>
                </header>
                <section class="works">
                    <h2>Experience</h2>
                    ${resume.works.map(work => `
                        <section class="blocks">
                            <header>
                                <div class="details">
                                    <span class="position">${work.position}</span>,
                                    <span class="company">${work.name}</span> - 
                                    <span class="location">${work.location}</span>
                                </div>
                                <div class="date">
                                    <span>${work.date}</span>   
                                </div>
                            </header>
                            <ul class="highlights">
                                ${work.highlights.map(highlight => `
                                    <li>${highlight}</li>
                                `).join('')}
                            </ul>
                        </section>
                    `).join('')}
                </section>
                <section class="projects">
                    <h2>Projects</h2>
                    ${resume.projects.map(project => `
                        <section class="blocks">
                            <header>
                                <div class="name">${project.name}</div>
                                <div class="url">${project.url}</div>
                            </header>
                            <p class="description">${project.description}</p>
                        </section>
                    `).join('')}
                </section>
                <section class="skills">
                    <h2>Skills</h2>
                    ${Object.entries(resume.skills).map(([key, skills]) => `
                        <div>
                            <span class="category">${key}:</span>
                            <span>${skills.map(skill => skill).join(', ')}</span>
                        </div>
                    `).join('\n')}
                </section>
                <section class="gdpr">
                    <p>I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p>
                </section>
            </body>
        </html>
    `;
};

module.exports = {
    render: renderer
}