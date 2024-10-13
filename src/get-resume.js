const { resolve } = require("node:path");
const { readFile } = require("node:fs/promises");

module.exports =  async () => {
    const path = resolve(__dirname, '..', 'resume.json');
    const content = await readFile(path, { encoding: 'utf-8'});
    if (!content) {
        throw new Error('Unable to get content');
    }

    return JSON.parse(content);
};