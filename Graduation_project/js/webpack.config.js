'use strict'

module.exports = {
  entry: ["babel-polyfill", "../node_modules/babel-polyfill/dist/polyfill.min.js"]
}

module.exports = {
	entry: "./importList.js",
	output: {
		filename: "./bundle.js",
		library: "Mylib"
	}

}
