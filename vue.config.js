const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
// const CopyPlugin = require('copy-webpack-plugin')
// const { GenerateSW } = require('workbox-webpack-plugin')
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Starburst',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    }
    // plugins: [
    //   new ServiceWorkerWebpackPlugin({
    //     entry: path.join(__dirname,'/firebase-messaging-sw.js'),
    //     filename: 'fb-messaging-sw.js'
    //
    //   })
    // ]
  // },
  // configureWebpack: {
  //   plugins: [
  //     new CopyPlugin({
  //       patterns: [{
  //       from: './src/fb-messaging-sw.js',
  //       to: './dist/fb-messaging-sw.js'
  //     }]
  // }),
//   new GenerateSW({
//     importScripts: ['fb-messaging-sw.js'],
//     swDest: './firebase-messaging-sw.js'
//   })
// ]
}
})
