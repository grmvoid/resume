const styles = require('./styles');

const renderer =  async (resume, lang) => {
    return `
        <!DOCTYPE html>
        <html lang=${lang}>
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
                        <span>${resume.basics.github}</span> |
                        <span>${resume.basics.linkedin}</span>
                    </div>
                    <div class="summary">${resume.basics.summary}</div>
                </header>
                <section class="works">
                    <h2>${resume.translations.work}</h2>
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
                    <h2>${resume.translations.projects}</h2>
                    ${resume.projects.map(project => `
                        <section class="blocks">
                            <header>
                                <div class="name">${project.name}</div>
                                <div class="url">${project.url}</div>
                            </header>
                            <p class="description">${project.description}</p>
                            <ul class="highlights">
                                ${project.highlights.map(highlight => `
                                    <li>${highlight}</li>
                                `).join('')}
                            </ul>
                        </section>
                    `).join('')}
                </section>
                <section class="skills">
                    <h2>${resume.translations.skills}</h2>
                    ${Object.entries(resume.skills).map(([key, skills]) => `
                        <div>
                            <span class="category">${key}:</span>
                            <span>${skills.map(skill => skill).join(', ')}</span>
                        </div>
                    `).join('\n')}
                </section>
                <section class="gdpr">
                    <p>${resume.translations.rodo}</p>
                </section>
            </body>
        </html>
    `;
};

module.exports = {
    render: renderer
}