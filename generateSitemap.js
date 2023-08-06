import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const hostname = "https://www.yourwebsite.com"; // Replace with your actual website URL

// Define your website's routes
const routes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/my-garage", changefreq: "monthly", priority: 0.7 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
];

(async () => {
  // Create a sitemap instance
  const sitemap = new SitemapStream({ hostname });

  // Add routes to the sitemap
  routes.forEach((route) => {
    sitemap.write(route);
  });

  sitemap.end();

  // Generate the sitemap XML
  const xml = await streamToPromise(sitemap).then((data) => data.toString());

  // Write the sitemap XML to a file
  fs.writeFileSync("./public/sitemap.xml", xml);

  console.log("Sitemap generated successfully.");
})();
