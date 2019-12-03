module.exports = {
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/styles/_mixin.scss";@import "~@/assets/styles/_variables.scss";`
      },
      postcss: {
        // 这是rem适配的配置
        plugins: [
          require('postcss-px2rem')({
            remUnit: 50
          })
        ]
      }
    }
  }
}