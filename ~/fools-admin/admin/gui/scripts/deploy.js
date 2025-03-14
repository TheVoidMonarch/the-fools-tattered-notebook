const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const execAsync = promisify(exec);
require('dotenv').config();

class Deployer {
    constructor() {
        // Use environment variable for main repo path, fallback to relative path
        this.mainRepoPath = process.env.MAIN_REPO_PATH || path.join(__dirname, '../../../../the-fools-tattered-notebook');
        this.adminRepoPath = path.join(__dirname, '../../..');
    }

    async deploy() {
        try {
            console.log('Starting deployment process...');

            // Verify main repo exists
            if (!fs.existsSync(this.mainRepoPath)) {
                throw new Error(`Main repository not found at ${this.mainRepoPath}`);
            }

            // 1. Build the main site
            console.log('Building main site...');
            await execAsync('npm run build', { cwd: this.mainRepoPath });

            // 2. Deploy to GitHub Pages
            console.log('Deploying to GitHub Pages...');
            await execAsync('npm run deploy', { cwd: this.mainRepoPath });

            // 3. Commit and push changes to main repo
            console.log('Committing and pushing changes to main repo...');
            await execAsync('git add .', { cwd: this.mainRepoPath });
            await execAsync('git commit -m "Update content from admin app"', { cwd: this.mainRepoPath });
            await execAsync('git push', { cwd: this.mainRepoPath });

            console.log('Deployment completed successfully!');
            return true;
        } catch (error) {
            console.error('Deployment failed:', error);
            throw error;
        }
    }

    async syncContent() {
        try {
            console.log('Starting content sync...');

            // Verify main repo exists
            if (!fs.existsSync(this.mainRepoPath)) {
                throw new Error(`Main repository not found at ${this.mainRepoPath}`);
            }

            // 1. Pull latest changes from main repo
            console.log('Pulling latest changes from main repo...');
            await execAsync('git pull', { cwd: this.mainRepoPath });

            // 2. Copy content files from main repo to admin app
            console.log('Copying content files...');
            const contentFiles = [
                'data/sampleNotes.ts',
                'data/magicalTrials.ts',
                'data/tags.ts'
            ];

            for (const file of contentFiles) {
                const sourcePath = path.join(this.mainRepoPath, file);
                const targetPath = path.join(this.adminRepoPath, 'content', file);
                
                // Create target directory if it doesn't exist
                await execAsync(`mkdir -p ${path.dirname(targetPath)}`);
                
                // Copy file if it exists
                if (fs.existsSync(sourcePath)) {
                    await execAsync(`cp ${sourcePath} ${targetPath}`);
                    console.log(`Copied ${file}`);
                } else {
                    console.log(`Warning: ${file} not found in main repo`);
                }
            }

            console.log('Content sync completed successfully!');
            return true;
        } catch (error) {
            console.error('Content sync failed:', error);
            throw error;
        }
    }
}

module.exports = new Deployer(); 