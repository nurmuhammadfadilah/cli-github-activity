#!/usr/bin/env node

const fetchActivity = require("../src/fetchActivity");

// Get the GitHub username from command line arguments
const username = process.argv[2];

if (!username) {
  console.error("❌ Please provide a GitHub username.\nUsage: github-activity <username>");
  process.exit(1);
}

fetchActivity(username);
