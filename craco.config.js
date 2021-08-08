const path = require("path")

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    //别名配置
    alias: {
      "@": resolve("src"),
      "pages": resolve("src/pages"),
      "components": resolve("src/components"),
      "assets": resolve("src/assets"),
      "common": resolve("src/common"),
      "request": resolve("src/request"),
      "router": resolve("src/router"),
      "store": resolve("src/store"),
      "utils": resolve("src/utils"),
    }
  }
}