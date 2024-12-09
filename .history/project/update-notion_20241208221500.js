const { Client } = require("@notionhq/client");

// Initialize Notion client
const notion = new Client({ auth: "YOUR_NOTION_API_KEY" });

// Replace this with your Notion Database ID
const databaseId = "YOUR_DATABASE_ID";

async function updateNotion() {
  try {
    console.log("🔄 Fetching database properties...");

    // Step 1: Fetch the database to validate properties
    const database = await notion.databases.retrieve({ database_id: databaseId });

    // Log all property names in the database for debugging
    const properties = Object.keys(database.properties);
    console.log("✅ Available properties:", properties);

    if (!properties.includes("Name")) {
      throw new Error(`❌ Required property 'Name' does not exist in the database.`);
    }

    console.log("🔄 Updating the database...");

    // Step 2: Perform a sample update (modify as needed)
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: "Updated Title" } }] }
      }
    });

    console.log("✅ Notion updated successfully!", response.url);

  } catch (error) {
    console.error("❌ Error updating Notion:", error.message || error);
  }
}

updateNotion();
