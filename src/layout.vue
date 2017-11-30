
<template>
<div class="bg">
<div class="head">
SIM卡网页销售管理系统（Bayer）
<div class="message clearfix" style="display:none;">
<li class="user">用户名</li>
<li class="clock"><img src="./assets/images/message.png"></li>
<li class="clock margin-right0"><img src="./assets/images/clock.png"></li>
</div>
</div>
<!-- head end -->
<div class="main clearfix">
     <div class="tab-left">
                      <Menu active-name="1-2" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                    订单管理
                            </template>
                            <!-- <router-link :to="{path:'/abc'}"> -->
                         <Menu-item name="1-1"><span @click="showDetail">订单趋势</span></Menu-item>
                      <!--       </router-link> -->
                            <Menu-item name="1-2">订单列表</Menu-item>
                            <Menu-item name="1-3">上下行查询</Menu-item>
                              <Menu-item name="1-4">退款订单(20)</Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                套餐管理
                            </template>
                            <Menu-item name="2-1">拉格朗日套餐列表</Menu-item>
                            <Menu-item name="2-2">红土狗套餐列表</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                SIM卡管理
                            </template>
                            <Menu-item name="3-1">SIM状态</Menu-item>
                            <Menu-item name="3-2">卡片管理</Menu-item>
                        </Submenu>
                         <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                 术语词典
                            </template> 
                        </Submenu>
                    </Menu>

     </div>
  <!--    tab-left end -->
  <div class="tab-content">
    <router-view></router-view>
    <!-- <Index2></Index2> -->
  </div>

<!-- tab-content end -->

</div>
<!-- main end -->

</div>
<!-- bg end -->
</template>
<style>
@charset "UTF-8";
* {
  margin: 0;
  padding: 0;
  list-style: none; }

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, select, blockquote, th, td {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family:Microsoft Yahei,SimSun,Helvetica;
  font-size: 14px;
  color: #757575; }

select {
  outline: none; }

input[type="text"] {
  -webkit-box-shadow: 0 0 0px 1000px white inset; }

img {
  vertical-align: middle;
  border: none; }

a {
  cursor: pointer;
  text-decoration: none; }

/* 清除浮动 */
.clearfix {
  *zoom: 1;
  /*IE/7/6*/ }

.clearfix:after {
  content: "\200B";
  display: block;
  height: 0;
  clear: both; }

.fl {
  float: left; }

.fr {
  float: right; }

.ib {
  display: inline-block; }

.tc {
  text-align: center; }

.tl {
  text-align: left; }

.head{ width:100%;height:95px;line-height:95px; font-size:20px;color:#4a4a4a;text-align: center;
border-bottom:1px solid #efefef;position:relative;
}
.message{width:200px;height:20px;position:absolute;top:50%;margin-top:-10px;right:50px;}
.message li{ float:left;height:20px;line-height:20px; margin-right:30px;}
.user{background:url(./assets/images/person.png) no-repeat;width:82px;text-indent:40px;}
.clock{width:20px;height:20px;}
.margin-right0{ margin-right:0px!important; }
.tab-left{ float:left;width:17%; border-right:1px solid #efefef; }
.second-level{margin-left:25px;}
.second-level li{ margin-bottom:15px; }
.second-level li a{color:#4a4a4a!important;}
.second-level li a:hover{text-decoration:underline;}
.tab-content{ float:left;width:83%;}
</style>
<script>
import Index2 from './views/index2.vue'
    export default {
        data () {
            return {
              social: ['facebook', 'github'],
                fruit: ['苹果']
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            },
            detail (){
               // this.$router.push('/abc');
               console.log('on-select');
            },
            showDetail() {
              this.$router.push('/demo');
            }

        },
        components: {
            Index2

        }
    }
</script>