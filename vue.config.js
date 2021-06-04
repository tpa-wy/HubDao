const path = require('path')
module.exports = {
	pluginOptions: {
	  'style-resources-loader': {
	      preProcessor: 'less',
	      patterns: [path.resolve(__dirname, './src/assets/common/global.less')]
	  }
	},
	transpileDependencies: [
	    'vue-echarts',
	    'resize-detector'
	],
	productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
}