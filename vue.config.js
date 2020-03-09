module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/theme/_defaultTheme.scss";`
            }
        }
    }
};
