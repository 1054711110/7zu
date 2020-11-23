<template>
  <div>
    <div class="zgj_header">
      <img src="切图/logo.png" alt style="width:232px" />
      <span style="font-size:30px;">设计师</span>

      <div class="zgj_right">
        <ul>
          <li style="width:50px;height:30px;">
            <van-icon name="contact" />
          </li>
          <li>我的</li>
        </ul>
        <ul>
          <li style="width:50px;height:30px;">
            <van-icon name="apps-o" />
          </li>
          <li>导航</li>
        </ul>
      </div>
    </div>
    <div style="width:750px;height:190px;margin-top:5px;">
      <p style="font-size:28px;">
        观澜时代国际花园运抵5栋
        <span style="background:green;color:white">泥木工程</span>
      </p>
      <p style="font-size:28px">
        <span>户型：二室</span>
        <span>面积:60-90m</span>
        <span>装修预算:18万</span>
      </p>
      <p style="font-size:25px;">工地概括: <span>百万屏幕超级大盘，占据钱塘江北岸最美的江湾和湿地</span></p>
    </div>
    <div style='width:750px;font-size:28px;'>
        <div style='color:blue;width:48%;border:solid 1px;float:left;height:70px;text-align:center;line-height:70px;margin-left:10px'> <i class="iconfont icon-pencle"></i> 评论(10)</div>
        <div style='color:green;width:48%;border:solid 1px;float:left;height:70px;text-align:center;line-height:70px;margin-left:10px'><i class="iconfont icon-tag"></i>预约参观工地</div>
    </div>
    <div class='zgj_nr'>
      <p>
        <span>设计师</span><span>吴飞柯</span>
      </p>
    </div>
  </div>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  components: {},
  computed: {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.zgj_header {
  display: flex;
  width: 750px;
  height: 100px;
  line-height: 100px;
  span {
    margin-left: 95px;
  }
  .van-icon {
    font-size: 45px;
  }
  .zgj_right {
    margin-left: 150px;
    margin-top: 14px;
    display: flex;
    li {
      text-align: center;
    }
  }
}
.zgj_nr{
  width:750px;
  height:790px;
  border:solid 1px ;
  float:left;
  margin-top:36px;
}
</style>
