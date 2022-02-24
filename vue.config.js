// vue.config.js file to be placed in the root of your repository

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        // same as <repo-name>
        ? '/w6-main-vue3/'
        : '/'
}