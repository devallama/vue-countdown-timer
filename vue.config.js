module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/theme/_defaultTheme.scss";
                    @import "@/util/_style.scss";
                `
            }
        }
    }
};
