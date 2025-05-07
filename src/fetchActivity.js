const axios = require("axios");

async function fetchActivity(username) {
  const url = `https://api.github.com/users/${username}/events`;

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "node.js",
      },
    });

    const events = response.data;

    if (events.length === 0) {
      console.log("ℹ️ No recent activity found.");
      return;
    }

    events.slice(0, 10).forEach((event) => {
      switch (event.type) {
        case "PushEvent":
          console.log(`🔄 Pushed ${event.payload.commits.length} commit(s) to ${event.repo.name}`);
          break;
        case "IssuesEvent":
          const action = event.payload.action;
          console.log(`🐛 ${action === "opened" ? "Opened" : action} an issue in ${event.repo.name}`);
          break;
        case "WatchEvent":
          console.log(`⭐ Starred ${event.repo.name}`);
          break;
        case "ForkEvent":
          console.log(`🍴 Forked ${event.repo.name}`);
          break;
        case "PullRequestEvent":
          console.log(`🔀 ${event.payload.action} a pull request in ${event.repo.name}`);
          break;
        default:
          console.log(`📌 ${event.type} on ${event.repo.name}`);
      }
    });
  } catch (error) {
    console.error("❌ Failed to fetch activity:", error.response?.data?.message || error.message);
  }
}

module.exports = fetchActivity;
