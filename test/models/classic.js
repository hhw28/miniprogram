import {HTTP} from '../util/http.js'

class ClassicModel extends HTTP {
  getLatest(){
    this.request({
      url: '/classic/latest',
      success: (res) => {
        console.log(res)
      }
    })
  }
}

export {ClassicModel}