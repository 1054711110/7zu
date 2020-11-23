<template>
  <div>
    <div class="zgj_header">
      <img src="切图/logo.png" alt style="width:232px" />
      <span style="font-size:30px;">设计师</span>

      <div class="zgj_right">
        <van-icon name="contact" />
        <van-icon name="apps-o" />
      </div>
    </div>
    <nav>
      <span style="margin-left:70px;">筛选</span>
      <span>风格</span>
      <span>排序</span>
      <span style="color:green;font-size:35px;display:block;width:50px;float:left">
        <van-icon name="search" />
      </span>
    </nav>
    <div
      class="zgj_jb"
      style="font-size:40px;width:750px;height:150px;float:left;line-height:150px;;
      "
    >级别</div>
    <div class="zgj_jb1" style="width:750px;height:150px;background:#f8f8f8;float:left;">
      <div class="zgj_but" style="border:green solid 1px;width:30%;height:50px;line-height:50px">不限</div>
      <div class="zgj_but" style=" solid 1px;width:30%;height:50px;line-height:50px">总监</div>
      <div class="zgj_but" style=" solid 1px;width:30%;height:50px;line-height:50px">主任</div>
      <div class="zgj_but" style=" solid 1px;width:25%;height:50px;line-height:50px">优秀</div>
    </div>
    <div
      class="zgj_jb"
      style="font-size:40px;width:750px;height:150px;float:left;line-height:150px;;
      "
    >收费</div>
    <div class="zgj_jb1" style="width:750px;height:150px;background:#f8f8f8;float:left;">
      <div class="zgj_but" style="border:green solid 1px;width:30%;height:50px;line-height:50px">不限</div>
      <div class="zgj_but" style=" solid 1px;width:30%;height:50px;line-height:50px">0-50/m2</div>
      <div class="zgj_but" style=" solid 1px;width:30%;height:50px;line-height:50px">50-100/m</div>
      <div class="zgj_but" style=" solid 1px;width:25%;height:50px;line-height:50px">100-150/m</div>
      <div class="zgj_but" style=" solid 1px;width:25%;height:50px;line-height:50px">200/m以上</div>
    </div>
    <div class="db"></div>
  
        <img src="切图/d.jpg" alt="">
  

  </div>
</template>

<script>
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
  //   border: 1px solid #000;
  span {
    margin-left: 95px;
  }
  .van-icon {
    font-size: 45px;
  }
  .zgj_right {
    margin-left: 185px;
    margin-top: 14px;
  }
}
nav {
  width: 750px;
  height: 104px;
  line-height: 104px;
  background: #f0f0f0;
  float: left;
  span {
    font-size: 25px;
    // margin-left: 100px;
    display: block;
    width: 25%;
    float: left;
  }
}
.zgj_jb1{
    display: flex;
    flex-wrap: wrap;
    div{
        margin-left: 10px;
        text-align: center;
        font-size: 20px;
        background: white;
    }
}
.db{
    width: 750px;
    height: 450px;
    background: rgba(39, 37, 37, 0.2);
    float: left;
}
</style>
