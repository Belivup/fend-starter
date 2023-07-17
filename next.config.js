/** @type {import('next').NextConfig} */

const path = require('path')


const nextConfig = {

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },

    webpack: (config, { defaultLoaders }) => {
        config.module.rules.push({
            test: /\.+(js|jsx)$/,
            include: /node_modules[\\/]iconview/,
            use: defaultLoaders.babel,
        });
        return config;
    },

}

module.exports = nextConfig
