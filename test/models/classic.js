import {HTTP} from '../util/http.js'

class ClassicModel extends HTTP {
  getLatest(callback){
    this.request({
      url: '/classic/latest',
      success: (res) => {
        callback(res)
        this.setLatestIndex(res.index)
        wx.setStorageSync(this.getKey(res.index), res)
      }
    })
  }
  getClassic(index, nextOrPrevious, callback){
    let key = nextOrPrevious == 'next' ? this.getKey(index+1) : this.getKey(index-1)
    let classic = wx.getStorageSync(key)

    if(!classic){
      this.request({
        url: `/classic/${index}/${nextOrPrevious}`,
        success: (res) => {
          callback(res)
          wx.setStorageSync(key, res)
        }
      })
    }else{
      callback(classic)
    }
  }

  isFirst(index){
    return index == 1 ? true : false
  }
  isLatest(index){
    let latestIndex = this.getLatestIndex()
    return latestIndex == index ? true : false
  }
  setLatestIndex(index){
    wx.setStorageSync('latest', index)
  }
  getLatestIndex(){
    let index = wx.getStorageSync('latest')
    return index
  }

  getKey(index){
    let key = 'classic-' + index
    return key
  }
}

export {ClassicModel}