#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function init() {
    try {
        // Get project name from user
        const projectName = await new Promise((resolve) => {
            rl.question('What is your project name? ', (answer) => {
                resolve(answer);
            });
        });

        const targetPath = path.join(process.cwd(), projectName);
        
        // Copy template files
        const templatePath = path.join(__dirname, '../template');
        console.log('Creating new project...');
        await fs.copy(templatePath, targetPath);

        // Copy development dependencies from root package.json
        const rootPkg = require('../package.json');
        const templatePkg = require('../template/package.json');
        
        templatePkg.devDependencies = rootPkg.devDependencies;
        
        // Write updated package.json
        await fs.writeJson(path.join(targetPath, 'package.json'), templatePkg, { spaces: 2 });

        // Change directory to the new project
        process.chdir(targetPath);

        // Install dependencies
        console.log('Installing dependencies...');
        execSync('npm install', { stdio: 'inherit' });

        console.log(`
🎉 Successfully created ${projectName}!

To get started:
    cd ${projectName}
    npm run dev
        `);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
}

init();
