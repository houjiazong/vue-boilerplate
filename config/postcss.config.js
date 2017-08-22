module.exports = [
  require('autoprefixer')({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9'
    ]
  }),
  require('postcss-pxtorem')({
    rootValue: 16,
    propWhiteList: []
  })
]
