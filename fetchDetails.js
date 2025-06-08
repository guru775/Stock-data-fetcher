require("dotenv").config();

async function fetchAnnouncements() {
  const url = process.env.NSE_URL;

  const headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.7",
    "referer": "https://www.nseindia.com/companies-listing/corporate-filings-announcements",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest",
    "cookie": process.env.COOKIE,
  };

  const response = await fetch(url, { headers });

  if (!response.ok) throw new Error("Failed to fetch announcements");

  return await response.json();
}

module.exports = fetchAnnouncements;
