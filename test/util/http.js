import {config} from '../config.js'

class HTTP{
  request(params){
    let url = config.api_base_url + params.url

    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.method,
      header: {
        'content-type': 'application/json',
        'appkey':config.appkey
      },
      success: function (res) {
        // 判断以2（2xx)开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        var code = res.statusCode.toString()
        var startChar = code.charAt(0)
        if (startChar == '2') {
          params.success && params.success(res.data)
        } else {
          const error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: function (err) {
        this._show_error(error_code)
      }
    })
  }
  _show_error(error_code){
    if(!error_code){
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export {HTTP}