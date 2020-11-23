<template>
  <div class="app">
    <div class="btn">
      <van-image fit="contain" src="/img/logo.png" />
      <div class="dmt">
        <van-icon name="manager-o" color="#999999" size="30" />
        <p class="p1">我的</p>
      </div>

      <div class="mtn">
        <van-icon name="coupon-o" color="#999999" size="30" />
        <p class="p1">导航</p>
      </div>

      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        v-for="(item,index) in img"
        :key="index"
      >
        <van-swipe-item>
          <img src="/img/banner.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/img/banner.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/img/banner.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/img/banner.jpg" alt />
        </van-swipe-item>
      </van-swipe>

      <van-grid :column-num="4">
        <van-grid-item v-for="(item,index) in list" :key="index" icon="photo-o" :text="item.title" />
      </van-grid>
    </div>

    <div class="box">
      <div class="quan">
        <p>全屋装修费</p>
        <ul class="bao">
          <li>包设计、</li>
          <li>包主材、</li>
          <li>包水电、</li>
          <li>包施工</li>
        </ul>
      </div>
      <div class="url">
        <img src="/img/img1.jpg" alt />
        <span class="sp"></span>
        <span class="an"></span>
      </div>
      <ul class="ul1">
        <li>
          <van-icon name="cart-circle-o" class="icon" color="#00be9c" />0增项，标准施工
        </li>
        <li>
          <van-icon name="cart-circle-o" class="icon" color="#00be9c" />杜绝项目包装
        </li>
        <li>
          <van-icon name="cart-circle-o" class="icon" color="#00be9c" />装修贷款
        </li>
      </ul>
    </div>
    <!-- <i class=".icon-popularity"></i> -->
    <div class="zhuang">
      <div class="quan">
        <p>装修预约</p>
        <ul class="bao">
          <li>免费上门量房,设计方案满意为止</li>
        </ul>
      </div>
      <div class="inp">
        <input type="text" class="ut" placeholder="小区名" />
        <input type="text" class="ut" placeholder="手机号" />
        <input type="text" class="ut" placeholder="建工面积" />
        <button class="btn2">立即申请</button>
      </div>
    </div>
    <div class="ji">
      <div class="quan">
        <p>设计师</p>
      </div>
      <ul class="tul">
        <li>
          <img src="/img/6.jpg" alt />
          <p>吴飞柯</p>
          <p class="qin">优秀</p>
        </li>
        <li>
          <img src="/img/6.jpg" alt />
          <p>路炎龙</p>
          <p class="qin">主任</p>
        </li>
        <li>
          <img src="/img/6.jpg" alt />
          <p>张海建</p>
          <p class="qin">总监</p>
        </li>
        <li>
          <img src="/img/6.jpg" alt />
          <p>陈冲</p>
          <p class="qin">优秀</p>
        </li>
      </ul>

      <span class="sl">换一换</span>
      <span class="sl1">更多设计师</span>
    </div>

    <div class="div1">
      <div class="quan">
        <p>效果图</p>
      </div>
      <div class="daimg">
        <img src="img/y5.jpg" alt class="yiimg" />
        <p>客厅</p>
      </div>
      <ul class="xiaoul">
        <li>
          <img src="/img/6.jpg" alt />
          <p>卧室</p>
        </li>
        <li>
          <img src="/img/6.jpg" alt />
          <p>餐厅</p>
        </li>
        <li>
          <img src="/img/6.jpg" alt />
          <p>厨房</p>
        </li>
        <li>
          <img src="/img/6.jpg" alt />
          <p>阳台</p>
        </li>
      </ul>

      <span class="sl">换一换</span>
      <span class="sl1">更多设计师</span>
    </div>

    <div class="gong">
      <div class="quan">
        <p>工地直播</p>
      </div>
      <div class="daimg">
        <img src="img/y5.jpg" alt class="yiimg" />
      </div>
      <p class="chong">
        重汽贾泽源7栋
        <span>泥木工程</span>
      </p>
      <span class="sl">换一换</span>
      <span class="sl1">更多设计师</span>
    </div>

    <div class="xui">
      <div class="quan">
        <p>装修攻略</p>
      </div>
      <ul class="qian">
        <li>
          <img src="img/y5.jpg" alt />
          <div class="xi">
            <p>能让您长工资的家居风水</p>
            <span class="sjian">2001-09-07</span>
            <span class="guan">115</span>
          </div>
        </li>
        <li>
          <img src="img/y5.jpg" alt />
          <div class="xi">
            <p>能让您长工资的家居风水</p>
            <span class="sjian">2001-09-07</span>
            <span class="guan">115</span>
          </div>
        </li>
        <li>
          <img src="img/y5.jpg" alt />
          <div class="xi">
            <p>能让您长工资的家居风水</p>
            <span class="sjian">2001-09-07</span>
            <span class="guan">115</span>
          </div>
        </li>
        <li>
          <img src="img/y5.jpg" alt />
          <div class="xi">
            <p>能让您长工资的家居风水</p>
            <span class="sjian">2001-09-07</span>
            <span class="guan">115</span>
          </div>
        </li>
      </ul>
      <span class="sl">换一换</span>
      <span class="sl1">更多设计师</span>
    </div>

  <div class="xia">
    <van-icon name="arrow-up" size='30px' />
  </div>


  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      img: [{ url: "/img/banner.jpg" }],
      list: [
        {
          url: "",
          title: "装修方案"
        },
        {
          url: "",
          title: "效果图"
        },
        {
          url: "",
          title: "设计师"
        },
        {
          url: "",
          title: "装修工地"
        },
        {
          url: "",
          title: "装修攻略"
        },
        {
          url: "",
          title: "装修贷款"
        },
        {
          url: "",
          title: "免费预订"
        },
        {
          url: "",
          title: "十秒报价"
        }
      ]
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  // 以下是生命周期钩子 注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {}
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang='scss' scoped>
* {
  margin: 0px;
  padding: 0px;
}
.app {
  background: #eee;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
  img {
    width: 100%;
    height: 100%;
    // height: 300px;
  }
}
.van-swipe__indicator--active {
  background: #00be9c !important;
  font-size: 12px;
}
.van-image {
  line-height: 0;
  margin-top: 16px;
  height: 50px;
  width: 150px;
  margin-left: 18px;
  margin-bottom: 16px;
}
.dmt {
  float: right;
  margin-right: 80px;
  margin-top: 20px;
}
.p1 {
  font-size: 18px;
  color: #999;
  margin-left: -5px;
}
.mtn {
  float: right;
  margin-right: -80px;
  margin-top: 20px;
}
.van-swipe-item {
  img {
    width: 100%;
    height: 300px;
  }
  border: 1px solid #000;
  height: 100%;
  width: 100%;
}
span .van-grid-item__icon + .van-grid-item__text {
  font-size: 100px !important;
  color: #333;
}
.btn {
  background: #fff;
}
.box {
  background: #ffff;
  margin-top: 20px;
  // border: 1px solid #000;
}
.quan {
  width: 80%;
  height: 42px;
  margin-top: 18px;
  margin-bottom: 18px;
  margin-left: 10px;
  border-left: #00be9c 6px solid;
  float: left;

  p {
    line-height: 42px;
    font-size: 24px;
    margin-left: 10px;
    margin-top: 5px;
  }
}

.bao {
  float: right;
  margin-right: -50px;
  display: flex;
  margin-top: -20px;
  li {
    text-align: center;
    font-size: 14px;
    color: #9999;
  }
}
.url {
  width: 100%;
  height: 300px;
  background: #fff;
  img {
    width: 100%;
    height: 200px;
  }
  .sp {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: #00be9c;
    float: left;
    margin-left: 150px;
  }
  .an {
    background: #eee;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    float: left;
    margin-left: 10px;
  }
}
.ul1 {
  width: 100%;
  float: right;
  display: flex;
  background: #fff;
  height: 50px;
  margin-top: -5px;
  li {
    text-align: center;
    margin-left: 10px;
    line-height: 50px;
    .icon {
      font-size: 22px;
      float: left;
      margin-top: 15px;
    }
  }
}
.zhuang {
  width: 100%;
  margin-top: 60px;
  background: #fff;
}
.ut {
  width: 80%;
  margin-left: 40px;
  height: 40px;
  border: 1px #eaeaea solid;
  border-radius: 5px;
  text-indent: 40px;
  color: #eaeaea;
  font-size: 18px;
  margin-top: 10px;
}
.btn2 {
  width: 80%;
  margin-left: 40px;
  background: orange;
  height: 20px;
  line-height: 20px;
  height: 40px;
  color: #fff;
  border: none;
  margin-top: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.ji {
  width: 100%;
  background: #ffff;
  margin-top: 10px;
  height: 300px;
}
.tul {
  display: flex;
  width: 100%;
  li {
    width: 20%;
    text-align: center;
    margin-left: 20px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
}
.qin {
  width: 100px;
  background: #00be9c;
  color: #fff;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  border-radius: 5px;
}
.sl {
  border: 1px #eee solid;
  height: 30px;
  width: 30%;
  display: block;
  color: #00be9c;
  margin-left: 50px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  float: left;
}
.sl1 {
  border: 1px #eee solid;
  border-left: none;
  height: 30px;
  width: 40%;
  display: block;
  color: #00be9c;
  // margin-left: -20px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  float: left;
}
.div1 {
  width: 100%;
  background: #fff;
  margin-top: 10px;
  height: 695px;
}
.yiimg {
  width: 90%;
  height: 300px;
  margin-left: 25px;
}
.daimg {
  position: relative;
  p {
    position: absolute;
    opacity: 0.3;
    background: #000;
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    right: 50px;
    bottom: 10px;
    color: #fff;
  }
}
.xiaoul {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  li {
    text-align: center;
    width: 40%;
    margin-left: 25px;
    position: relative;
    margin-top: 15px;
    img {
      width: 210px;
      height: 100px;
    }
    p {
      position: absolute;
      opacity: 0.3;
      background: #000;
      width: 50px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      right: 10px;
      bottom: 10px;
      color: #fff;
    }
  }
}
.gong {
  width: 100%;
  background: #fff;
  height: 500px;
  margin-top: 20px;
}
.chong {
  font-size: 22px;
  margin-left: 20px;
  margin-top: 10px;
  span {
    background: #00be9c;
    font-size: 14px;
    color: #fff;
    border-radius: 3px;
  }
}
.xui {
  width: 100%;
  background: #fff;
  margin-top: 20px;
  height: 500px;
}
.qian {
  margin-top: 50px;
  width: 100%;
  li {
    width: 100%;
    border-bottom: 1px #ddd solid;
    height: 180px;
    margin-top: 50px;
    img {
      width: 180px;
      height: 100px;
      margin-left: 20px;
      float: left;
    }
  }
}
.xi {
  float: left;
  margin-left: 20px;
  p {
    font-size: 20px;
  }
  .sjian {
    display: block;
    color: #9999;
    float: left;
    margin-top: 50px;
  }
  .guan {
    display: block;
    color: #9999;
    float: left;
    margin-top: 50px;
    margin-left: 30px;
  }
}
.xia{
  width: 50px;
  height: 50px;
  background: burlywood;
  color: #fff;
  border-radius: 50%;
  z-index: 1;
  position: fixed;
  right: 20px;
  bottom: 50px;
  line-height: 70px;
  text-align: center;
}
</style>

