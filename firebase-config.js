module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{css,ico,png,svg,html,js,json,txt}'
  ],
  swDest: 'public/firebase-messaging-sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ]
};
