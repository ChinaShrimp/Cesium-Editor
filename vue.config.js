module.exports = {
    outputDir: "renderer",
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/'
}