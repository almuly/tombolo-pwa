/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
module.exports = {
    images: {
        domains: ['localhost']
    }
}
const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
    }
})
