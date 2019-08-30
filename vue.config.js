const path = require('path')

function mock(app, url, data) {
  app.get(url, (request, response) => {
    response.json(data)
  })
}
const homeData = require('./src/mock/bookHome')
const shelfData = require('./src/mock/bookShelf')
// const listData = require('./src/mock/bookList')
// const homeData = require('./src/mock/bookHome')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/assets/style/*.scss')]
    }
  },
  devServer: {
    before(app) {
      mock(app, '/store', homeData)
      mock(app, '/shelf', shelfData)
    }
  }
}
