export default {
  fileName: state => state.book.fileName,
  menuVisibility: state => state.book.menuVisibility,
  fontSizeSettingVisibility: state => state.book.fontSizeSettingVisibility,
  readingBook: state => state.book.readingBook,
  defaultFontSize: state => state.book.defaultFontSize,
  settingVisibility: state => state.book.settingVisibility,
  fontFamilyList: state => state.book.fontFamilyList,
  activatedFontFamily: state => state.book.activatedFontFamily
}
