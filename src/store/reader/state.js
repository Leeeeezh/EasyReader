export default {
  language: 'en',
  fileName: '',
  menuVisibility: true,
  fontSizeSettingVisibility: false,

  fontFamilyList: [
    'daysOne',
    'cabin',
    'montserrat',
    'tangerine'
  ],

  activatedFontFamily: 'daysOne',
  readingBook: null,
  coverURL: null,
  bookAvailable: false,
  metaData: {
    creator: '加载中',
    title: '加载中'
  },
  section: '',
  catalog: [],
  chapter: 'Cover',
  progress: 10,
  defaultFontSize: 22,

  themeList: [
    'default',
    'dark',
    'jungle',
    'pink'
  ],

  activatedTheme: 'default',

  settingVisibility: {
    fontSize: false,
    fontFamily: false,
    theme: false,
    catalog: false,
    progress: false,
    more: false
  }
}
