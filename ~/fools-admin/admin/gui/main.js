const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const { marked } = require('marked');
const fetch = require('node-fetch');
const deployer = require('./scripts/deploy');
require('dotenv').config();

// Create the browser window
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Update the deploySite function
async function deploySite() {
    try {
        console.log('Starting site deployment');
        await deployer.deploy();
        console.log('Site deployed successfully');
    } catch (error) {
        console.error('Error deploying site', error);
        throw error;
    }
}

// Add new IPC handler for content sync
ipcMain.handle('sync-content', async () => {
    try {
        console.log('Starting content sync');
        await deployer.syncContent();
        console.log('Content synced successfully');
        return { success: true };
    } catch (error) {
        console.error('Error syncing content', error);
        throw error;
    }
});

// Update the generateQuiz function to use Hugging Face API
async function generateQuiz(content) {
    try {
        const prompt = `Generate a quiz based on this content. Format the response as a JSON array of questions, each with a question text and an array of 4 possible answers. The first answer should be the correct one. Content: ${content}`;
        
        const response = await fetch(
            `https://api-inference.huggingface.co/models/${process.env.MODEL_NAME}`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        max_length: 1000,
                        temperature: 0.7,
                        top_p: 0.9,
                        return_full_text: false
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const generatedText = data[0].generated_text;
        
        // Parse the generated text to extract questions
        try {
            const questions = JSON.parse(generatedText);
            return questions;
        } catch (parseError) {
            console.error('Error parsing generated questions:', parseError);
            return [];
        }
    } catch (error) {
        console.error('Error generating quiz:', error);
        return [];
    }
}

// Add delete post handler
ipcMain.handle('delete-post', async (event, postId) => {
    try {
        console.log('Starting post deletion', { postId });
        
        // Read the current posts
        const notesPath = path.join(process.env.MAIN_REPO_PATH, 'data/sampleNotes.ts');
        const notesContent = await fs.promises.readFile(notesPath, 'utf8');
        
        // Extract the posts array
        const postsMatch = notesContent.match(/export const posts = (\[[\s\S]*?\]);/);
        if (!postsMatch) {
            throw new Error('Could not find posts array in file');
        }
        
        // Parse the posts array
        const posts = eval(postsMatch[1]);
        
        // Find and remove the post
        const postIndex = posts.findIndex(post => post.id === postId);
        if (postIndex === -1) {
            throw new Error(`Post with ID ${postId} not found`);
        }
        
        posts.splice(postIndex, 1);
        
        // Format the updated content
        const updatedContent = notesContent.replace(
            /export const posts = (\[[\s\S]*?\]);/,
            `export const posts = ${JSON.stringify(posts, null, 2)};`
        );
        
        // Write back to file
        await fs.promises.writeFile(notesPath, updatedContent);
        
        // Deploy the changes
        await deploySite();
        
        console.log('Post deleted successfully', { postId });
        return { success: true };
    } catch (error) {
        console.error('Error deleting post', error);
        throw error;
    }
}); 