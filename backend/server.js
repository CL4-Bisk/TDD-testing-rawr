// backend/server.js
// TODO: app.js is created in Part 2 GREEN phase
const app = require("./app");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});