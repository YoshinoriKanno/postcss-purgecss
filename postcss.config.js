// postcss.config.js
module.exports = {
  plugins: [
    // 他の必要なプラグインがあればここに追加
    require('@fullhuman/postcss-purgecss')({
      // PurgeCSSの設定を追加
      content: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
        // 使っているファイルの拡張子を追加
      ],
      // 他のPurgeCSSのオプションを追加
    }),
  ],
};
