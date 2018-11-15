import {HTTP} from '../util/http.js'

class LikeModel extends HTTP {
  getLikeStatus(behavior, artId, category){
    let url = behavior == 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artId,
        type: category
      }
    })
  }

  getClassicLikeStatus(likeStatus, artId, callback){
    this.request({
      url: 'classic/'+ likeStatus +'/'+ artId +'/favor',
      success: (res) => {
        callback(res)
      }
    })
  }
}

export {LikeModel}