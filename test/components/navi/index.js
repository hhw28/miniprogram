// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    latest: Boolean,
    first: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    triangleDisLeft: "images/triangle.dis@left.png",
    triangleLeft: "images/triangle@left.png",
    triangleDisRight: "images/triangle.dis@right.png",
    triangleRight: "images/triangle@right.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function(e){
      //当不是第一期的时候才能够被点击
      if(!this.properties.latest){
        this.triggerEvent('left', {}, {})
      }
    },
    onRight: function(e){
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
