const { Client } = require("@notionhq/client");
require("dotenv").config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const pageId = process.env.NOTION_PAGE_ID;

(async () => {
	try {
		// Retrieve the page properties
		const response = await notion.pages.retrieve({ page_id: pageId });
		console.log(
			"✅ Page Properties:",
			JSON.stringify(response.properties, null, 2)
		);
	} catch (error) {
		console.error("❌ Error fetching page properties:", error.message);
		process.exit(1);
	}
})();
