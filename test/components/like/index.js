// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type: Boolean
      // 所需默认值刚好为false，则无需定义value
      // 函数obersever
    },
    count:{
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    liked:"images/like.png",
    unliked: "images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(e){
      let like = !this.properties.like
      let count = this.properties.count

      count = like ? count + 1 : count - 1

      this.setData({
        like: like,
        count: count
      })

      let behavior = like ? 'like' : 'cancel'
      //激活自定义事件, '事件名称', {属性}, {}
      this.triggerEvent('like', {
        behavior: behavior
      }, {})
    }
  }
})
