export default {
  saveProgress(newProgress, fileName) {
    //  缓存阅读进度
    let progress = localStorage.getItem('progress')
    if (progress) {
      let progressObj = JSON.parse(progress)
      progressObj[fileName] = newProgress
      localStorage.setItem('progress', JSON.stringify(progressObj))
    } else {
      localStorage.setItem('progress', `{${fileName}:${newProgress}}`)
    }
  }
}
