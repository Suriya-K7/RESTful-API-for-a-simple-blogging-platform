const app = require("./app");

const { PORT } = require("./utils/config");

// starting the server
app.listen(PORT, () => {
  console.log("server is running");
});
