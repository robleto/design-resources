# Design Resources

## Setup Instructions

### 1. Get a new Notion API key
1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Give it a name (e.g., "Design Resources Sync")
4. Select the workspace where your page is located
5. Click "Submit" to create the integration
6. Copy the "Internal Integration Token" (this is your API key)

### 2. Share your Notion page with the integration
1. Open the Notion page you want to sync
2. Click the "..." menu in the top right
3. Scroll down and click "Add connections"
4. Search for and select your integration name
5. Click "Confirm"

### 3. Get your Notion page ID
The page ID is in the URL of your Notion page:
```
https://www.notion.so/Your-Page-Title-{PAGE_ID}?...
```
Copy the part between the last `/` and the `?` (32 characters with hyphens)

### 4. Configure environment variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edit `.env` and add your values:
   ```
   NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxx
   NOTION_PAGE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### 5. Install dependencies and run
```bash
npm install
npm run notion:sync
```

## Important Security Notes
- ⚠️ **NEVER commit the `.env` file** - it contains your secret API key
- ✅ The `.env` file is already in `.gitignore` to prevent accidental commits
- ✅ Use `.env.example` as a template (without real credentials) to help others set up
- 🔄 If you ever accidentally commit credentials, immediately:
  1. Revoke the API key in Notion
  2. Generate a new one
  3. Update your `.env` file
