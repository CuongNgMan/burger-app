if (process.env.NODE_ENV === "production") {
  module.exports = require("./configuredStore.prod.js");
} else {
  module.exports = require("./configuredStore.dev.js");
}
