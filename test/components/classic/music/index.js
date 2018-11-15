// components/classic/music/index.js
import {classicBeh} from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    playSrc: "images/player@play.png",
    pauseSrc: "images/player@pause.png",
    playing: false,
  },
  // 生命周期函数
  attached: function(){
    this.recoverStatus()
    this.monitorSwitch()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function(){
      if(!this.data.playing){
        this.setData({
          playing: true
        })
        mMgr.src = this.properties.src
      }else{
        this.setData({
          playing: false
        })
        mMgr.pause()
      }
    },
    recoverStatus: function(){
      if(mMgr.paused){
        this.setData({
          playing: false
        })
        return
      }
      if(mMgr.src == this.properties.src){
        this.setData({
          playing: true
        })
      }
    },
    monitorSwitch: function(){
      mMgr.onPlay(() => {
        this.recoverStatus()
      }),
      mMgr.onPause(() => {
        this.recoverStatus()
      }),
      mMgr.onStop(() => {
        this.recoverStatus()
      }),
      mMgr.onEnded(() => {
        this.recoverStatus()
      })
    }
  },



})
