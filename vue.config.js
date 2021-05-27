module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                require('path').resolve(__dirname, '.src/assets/common/global.less')
            ]
        }
    },
}