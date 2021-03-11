const pwaConfig = require('./src/config/pwa_config.ts');

module.exports = {
  // 在 Production 環境中，不生成 .map 文件
  productionSourceMap: false,
  devServer: {
    // 端口號
    port: process.env.port || 5200,

    // dev-server在服務器啟動後打開默認瀏覽器
    open: true,

    // 出現編譯器錯誤或警告時，在瀏覽器中顯示全屏覆蓋。
    overlay: {
      // 不顯示警告
      warnings: false,

      // 顯示錯誤
      errors: true,
    },

    // 如果你的前端應用和後端 API 服務器沒有運行在同一個主機上，
    // 你需要在開發環境下將 API 請求代理到 API 服務器。
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 要代理的API地址
        changeOrigin: true, // 允許跨域
        pathRewrite: {
          // 這裡理解成用'/api'代替target裡面的地址，後面組件中我們掉接口時直接用api代替
          // 比如我要調用'http://www.abc.com/user/add'，直接寫'/api/user/add'即可'
          '^/api': '',
        },
      },
    },
  },

  css: {
    loaderOptions: {
      // 向所有 Sass 樣式傳入共享的全局變量
      scss: {
        prependData: `@import "@/assets/css/index.scss";`,
      },
    },
  },

  // ...other vue-cli plugin options...
  pwa: {
    ...pwaConfig,
  },

  chainWebpack: (config) => {
    // image-webpack-loader : compress image
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        disable: process.env.NODE_ENV === 'production' ? false : true,
      });

    // 更改路徑名為 ima/(各資料夾名稱)/(資料夾底下圖片)
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options.fallback.options.name = 'img/[name]/[hash:8].[ext]';
        return options;
      });
  },
};
