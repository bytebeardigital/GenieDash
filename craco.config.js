module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/assets/styles/_mixins.scss";
          @import "src/assets/styles/variables.scss";
        `
      }
    }
  }
};
