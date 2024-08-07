// workbox-config.js
module.exports = {
    globDirectory: 'build/',
    globPatterns: [
      '**/*.{html,js,css,png,jpg}'
    ],
    swDest: 'build/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 10,
          },
        },
      },
      {
        urlPattern: new RegExp('https://your.api/'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api',
        },
      },
    ],
  };