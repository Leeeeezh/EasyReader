import Mock from 'mockjs'
import home from './bookHome'
import shelf from './bookShelf'
// import list from './bookList'
// import flatList from './bookFlatList'

Mock.mock(/\/storedata/, 'get', home)
Mock.mock(/\/shelfdata/, 'get', shelf)
// Mock.mock(/\/book\/list/, 'get', list)
// Mock.mock(/\/book\/flat-list/, 'get', flatList)
