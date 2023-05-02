/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    const prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
    };
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/join',
        destination: '/join/phone',
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      'cuser-images.githubusercontent.com',
      'user-images.githubusercontent.com',
      'cphoto.asiae.co.kr',
      'media.bunjang.co.kr',
      'www.fnnews.com',
      'cdn.ksilbo.co.kr',
      'cdn.ggilbo.com',
      'search.pstatic.net',
      'img.mbn.co.kr',
      'news.nateimg.co.kr',
      'encrypted-tbn0.gstatic.com',
      'img.freepik.com',
      'images.unsplash.com',
      'media.istockphoto.com',
      'dontgetserious.com',
      'p4.wallpaperbetter.com',
      'i.pinimg.com',
      'images.all-free-download.com',
      'vistapointe.net',
      'hips.hearstapps.com',
      'www.thegoodmorningpics.com',
      'www.goodmorningimagesdownload.com',
      'fiverr-res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
