<template>
  <div>
    <div class="hz">
      <div class="top">
        <img src="/static/切图/logo.png" alt />
        <h2>装修预算</h2>
        <div class="xhz">
          <van-icon name="wap-nav" style="font-size:0.4rem" />
          <span style="width:0.6rem">导航</span>
        </div>
      </div>
      <div class="swip">
        <img src="/static/切图/house_info.jpg" alt />
      </div>
      <div class="fxs">房先森/装修攻略/装修预算/正文</div>
      <h3>装修预算注意事项</h3>
      <p class="time">
        <van-icon name="clock-o" style="margin-left:1.94rem;margin-right:0.1rem;font-size:0.3rem" />2016-07-06
        <van-icon name="eye" style="margin-left:0.5rem;font-size:0.28rem;margin-right:0.1rem" />115
      </p>
      <hr style="border:1px solid #eaeaea;margin-top:0.3rem" />
      <ul class="bj">
        <li>客厅装修隔断</li>
        <li>客厅装修图</li>
        <li>客厅装修效果</li>
        <li>客厅装修隔断</li>
        <li>客厅装修图</li>
        <li>客厅装修效果</li>
      </ul>
      <div class="bt">
        <h4>
          导语：在装修时如果没有提前最好装修预算，很容易造成最后开支过大，
          添置很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢？
        </h4>
        <img src="/static/切图/banner2.jpg" alt />
        <img src="/static/切图/11.png" alt="" class="ct">
      </div>
      <p class="zw">点击展开全文</p>
      <ul class="ll">
        <li>
          <img src="/static/切图/common/icon_qzone.png" alt />
          <p>评价(10)</p>
        </li>
        <li>
          <img src="/static/切图/common/icon_qzone.png" alt />
          <p>分享</p>
        </li>
      </ul>
      <p class="zw">进入装修预算</p>
      <p class="yy"></p>
         <h5 class="xh">猜你喜欢</h5>
     <ul class="lb">
       <li>
         <img src="/static/切图/common/icon_logo.png" alt="">
         <div class="dx">
           <p>遇到有这样房子的男人就嫁了吧</p>
            <p class="time">
        <van-icon name="clock-o" style="margin-right:0.1rem;font-size:0.3rem" />2016-07-06
        <van-icon name="eye" style="margin-left:0.5rem;font-size:0.28rem;margin-right:0.1rem" />115
      </p>
         </div>
       </li>
        <li>
         <img src="/static/切图/common/icon_logo.png" alt="">
         <div class="dx">
           <p>遇到有这样房子的男人就嫁了吧</p>
            <p class="time">
        <van-icon name="clock-o" style="margin-right:0.1rem;font-size:0.3rem" />2016-07-06
        <van-icon name="eye" style="margin-left:0.5rem;font-size:0.28rem;margin-right:0.1rem" />115
      </p>
         </div>
       </li>
        <li>
         <img src="/static/切图/common/icon_logo.png" alt="">
         <div class="dx">
           <p>遇到有这样房子的男人就嫁了吧</p>
            <p class="time">
        <van-icon name="clock-o" style="margin-right:0.1rem;font-size:0.3rem" />2016-07-06
        <van-icon name="eye" style="margin-left:0.5rem;font-size:0.28rem;margin-right:0.1rem" />115
      </p>
         </div>
       </li>
        <li>
         <img src="/static/切图/common/icon_logo.png" alt="">
         <div class="dx">
           <p>遇到有这样房子的男人就嫁了吧</p>
            <p class="time">
        <van-icon name="clock-o" style="margin-right:0.1rem;font-size:0.3rem" />2016-07-06
        <van-icon name="eye" style="margin-left:0.5rem;font-size:0.28rem;margin-right:0.1rem" />115
      </p>
         </div>
       </li>
        <li>
         <img src="/static/切图/common/icon_logo.png" alt="">
         <div class="dx">
           <p>遇到有这样房子的男人就嫁了吧</p>
            <p class="time">
        <van-icon name="clock-o" style="margin-right:0.1rem;font-size:0.3rem" />2016-07-06
        <van-icon name="eye" style="margin-left:0.5rem;font-size:0.28rem;margin-right:0.1rem" />115
      </p>
         </div>
       </li>
     </ul>
     <p class="yy"></p>
     <div class="fx">
       房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师
       与项目经理，杜绝项目转包外包，利用互联网讲工地进行在线全景直播，通过去中间环节，提供装修
       套餐+个性化定制服务。
     </div>
     <p class="yy"></p>
     <div class="db">
       <p class="fw">服务热线：400-9977-658</p>
       <p class="fk">
         <span>触屏版</span>
         <span>电脑版</span>
         <span>关于我们</span>
         <span>联系我们</span>
         </p>
     </div>
     <div class="zp">
       <img src="/static/切图/loans/loans1.png" alt="">
     </div>
    </div>
  </div>
</template>

<script>
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="scss"  scoped>
*{
  margin: 0;
  padding: 0;
}
.hz {
  width: 7.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top {
  width: 100%;
  height: 1rem;
  display: flex;
  // padding: 0 0.18rem;
  align-items: center;
  img {
    width: 2.18rem;
    height: 0.72rem;
  }
  h2 {
    margin-left: 0.76rem;
    font-weight: 400;
    font-size: 0.36rem;
  }
  .xhz {
    width: 0.5rem;
    margin-left: 2.48rem;
    height: 0.72rem;
    display: flex;
    flex-direction: column;
    span {
      line-height: 0.4rem;
      font-size: 0.24rem;
    }
  }
}
.swip {
  width: 100%;
  height: 2.56rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.fxs {
  width: 7.2rem;
  height: 0.48rem;
  margin-left: 0.16rem;
  margin-top: 0.18rem;
  background: #eaeaea;
  border-radius: 0.1rem;
  line-height: 0.48rem;
  font-size: 0.24rem;
  // padding-left: 0.14rem;
  letter-spacing: 0.06rem;
}
h3 {
  width: 100%;
  height: 0.94rem;
  line-height: 0.94rem;
  font-size: 0.32rem;
  text-align: center;
  font-weight: 200;
}
.time {
  width: 100%;
  height: 0.3rem;
  font-size: 0.24rem;
  color: #999;
  display: flex;
  align-items: center;
}
.bj {
  width: 100%;
  height: 1.36rem;
  // padding-right:0.3rem;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 1.66rem;
    height: 0.32rem;
    border: 0.01rem solid #eaeaea;
    border-radius: 0.2rem;
    font-size: 0.24rem;
    list-style: none;
    margin-top: 0.24rem;
    margin-left: 0.12rem;
    font-weight: 200;
    text-align: center;
  }
}
.bt {
  padding-top: 0.36rem;
  // padding-left:0.18rem ;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  h4 {
    font-size: 0.24rem;
    font-weight: 200;
    text-indent: 0.6rem;
  }
  img {
    margin-top: 0.36rem;
    width: 5.28rem;
    height: 3.56rem;
  }
  .ct{
    position: absolute;
  width: 7rem;
  height: 4.6rem;
  bottom: -3.2rem;
  left: 0.26rem;

  }
}
.zw {
  margin: 0 auto;
  width: 7.12rem;
  height: 0.72rem;
  border: 1px solid green;
  color: green;
  font-size: 0.36rem;
  text-align: center;
  line-height: 0.7rem;
  border-radius: 0.1rem;
  margin-top: 0.5rem;
}
.ll {
  width: 100%;
  height: 2.2rem;
  // padding:  0 1.83rem;
  display: flex;
  justify-content: space-around;
  li {
    list-style: none;
    // margin-left: 2.56rem;
    width: 1.1rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 0.4rem;
    flex-direction: column;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
    p {
      font-size: 0.24rem;
    }

    p {
      // color:yellow;
      line-height: 0.8rem;
    }
  }
  li:nth-of-type(1) p {
    color: blue;
  }
  li:nth-of-type(2) p {
    color: rgb(224, 224, 55);
  }
}
.yy{
  width: 100%;
  background: rgb(128, 120, 120);
  margin-top:0.32rem ;
  margin-bottom:0.32rem ;
  height: 0.2rem;
}
.xh{
  font-size:0.32rem ;
  margin-left: 0.17rem;
  text-indent: 0.25rem;
  font-weight: 400;
  border-left: 0.06rem solid green;
}
.lb{
  width: 100%;
  margin-top:0.35rem;
  
  li{
    display: flex;
    // justify-content: space-between;
    margin-left: 0.18rem;
    height: 2.06rem;
    border-bottom:0.01rem solid black;
    padding-top: 0.3rem;
    img{
      width: 1.9rem;
      height: 1.44rem;
    }
      .dx{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 0.24rem;
  
  }
  }

}
.fx{
  font-weight: 300;
  text-indent: 0.3rem;
  padding:0 0.2rem ;
  font-size: 0.28rem;
  line-height: 0.5rem;
}
.db{
  .fw{
    text-align: center;
    width: 100%;
    height: 0.94rem;
    line-height: 0.94rem;
  }
  .fk{
    width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span:nth-of-type(1){
    color:blue;
  }
  }
}
.zp{
  width: 100%;
  height: 1.5rem;
  img{
    width: 100%   ;
    height: 100%;
  }
}
</style>
