const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('~!',resolve('src/assets'))
      .set('~@',resolve('src/components'))
      .set('$@',resolve('src/views'))
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/kakaopay2020-homework-2/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'UI 컴포넌트 | 카카오페이'
    }
  }
}