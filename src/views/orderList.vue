<template>
<div>
    <div class="tab-tt">
      订单列表
    </div>
    <ul class="tab-select">
        <li >
        <label><span>CID</span> 
    
       <Input v-model="cid" placeholder="请输入..." style="width:130px"></Input>
       </label>

         <label><span>订单状态</span>
    <Select v-model="state2" style="width:270px">
        <Option value="待支付" label="待支付">
            <span>待支付</span> 
        </Option>
        <Option  value="未激活" label="未激活">
            <span>未激活</span>
        </Option>
        <Option value="使用中" label="使用中">
            <span>使用中</span>
        </Option>
         <Option value="激活失败" label="激活失败">
            <span>激活失败</span>
        </Option>
         <Option value="已使用" label="已使用">
            <span>已使用</span>
        </Option>
         <Option value="已退款" label="已退款">
            <span>已退款</span>
          
        </Option>
    </Select>
         </label>
        </li>
        <li class="margin-bottom0 clearfix">
          <label class="date-bg ">
          <span class="date-ex">订单生成时间</span>
  <Date-picker v-model="deadline" type="date" placeholder="选择日期" format="yyyy-MM-dd" style="width: 130px">
    
  </Date-picker>
         </label>
         <label class="date-bg">
          <span class="date-ex">套餐启动时间</span>
            <Date-picker  v-model="starttime" type="date" placeholder="选择日期"  format="yyyy-MM-dd" style="width:130px" > 
            </Date-picker>
         </label>
           <Button type="ghost" class="select-btn"  v-on:click="selectResult">搜索</Button>
          <Button type="ghost" class="select-btn"  v-on:click="delete2">取消</Button>
           <Button type="ghost" class="export"  @click="exportData(1)">导出</Button>
        </li>
    </ul>
    <!--  tab-select end -->
  <div class="table-bg">
  <Table border :columns="columns4" :data="data2" ref="table">
  </Table>
  <div class="page-bg">
  <Page :total="8" :current="1" @on-change="changePage" :page-size="1"></Page>
  </div>
  </div>

<!--   table-bg end -->
</div>
</template>

<style scoped>
    .input-item{border:1px solid #efefef;height:50px; margin-left:2px;}
    .tab-tt{
        height:60px;
        line-height:60px;
        text-indent:25px;
        border-bottom:1px solid #efefef;
        width:100%;
    }
    .tab-select{padding:30px 0px 30px 20px;
    }
    .tab-select li{ margin-bottom:15px; }
    .tab-select li label{ margin-right:25px; }
    .tab-select li span{display:inline-block;width:84px; text-align:right; margin-right:7px;}
    .margin-bottom0{ margin-bottom:0px!important; }
    .ivu-date-picker {
    line-height: normal;
    float: left;}
   .date-ex{ float:left;display:block;height:32px;line-height:32px; }
   .date-bg{margin-right:33px!important; float:left;}
   .export{ float:right; }
   .table-bg{width:100%;padding:0 0 0 20px; }
   .button{ margin-right:20px; }
   .select-btn{ margin-right:25px; }
   .page-bg{margin-top:30px; float:right;}
</style>

<script>
    import {getData} from '../api/getTableData.js';
    import util from '../libs/util.js';
    export default {
       data () {
            return {
                cid:'',
                deadline:'',
                starttime:'',
                state2: '',
                state: [
                    {
                     
                        label: '待支付'
                    },
                    {
                 
                        label: '未激活'
                    },
                    {
                        label: '使用中'
                    },
                    {
                        label: '激活失败'
                    },
                    {
                        label: '已使用'
                    },
                    {
                        label: '退款中'
                    },
                    {
                        label: '已退款'
                    }
                ],
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                    },
                    {
                        title: 'CID',
                        key: 'CID'
                    },
                    {
                        title: 'IMSI',
                        key: 'IMSI'
                    },
                    {
                        title: '订单ID',
                        key: 'ID'
                    },
                    {   width: 130,
                        title: '订单生成时间',
                        key: 'time'
                    },
                    {
                        title: '套餐名称',
                        key: 'name'
                    },
                    {
                        title: '套餐启动时间(生效时间)',
                        width: 130,
                        align: 'center',
                        key: 'startTime'
                    },
                    {
                        title: '订单状态',
                        key: 'orderState'
                    },
                    {
                        title: '订单金额',
                        key: 'orderAccount'
                    },
                     {
                        title: '操作',
                        key: 'detail'
                    }
                ],
                data1: [],
                data2:[],
                 data3:[],
                model4: 0
            }
        },
        methods: {  
            selectResult () {
    let result = this.data2;
    let cid = this.cid;
    let deadline = util.format(this.deadline,'yyyy-MM-dd');
    let starttime = util.format(this.starttime,'yyyy-MM-dd');
    let orderState = this.state2;
// cid筛选
    if (cid) {
        let arr = this.data2.filter(item => {
            return item.CID === cid;
        });
        result = arr;
        console.log(result);
    }
// //使用状态筛选
  if (orderState) {
         let arr = this.data2.filter(item => {
         return item.orderState === orderState;
         });
         result = arr;
                  }
//订单生成时间筛选
//       if (deadline) {
//          let arr = this.data1.filter(item => {
//          return item.time === deadline;
//          console.log(item.time);
//          });
//          result = arr;
//                   }
// //套餐启动时间筛选      
//        if (starttime) {
//          let arr = this.data1.filter(item => {
//          return item.time === starttime;
//          });
//          result = arr;
//                   }
    this.data2 = result;
                             }, 

 // selectResult end
           delete2 () {
              getData().then(response => {
                // console.log(response);
                this.data2 = response.data.data.users;
this.data2.forEach(item => {
    item.time = util.formatDate(new Date(item.time), 'yyyy-MM-dd');
    item.startTime = util.formatDate(new Date(item.startTime), 'yyyy-MM-dd');
});
            });
              },   
           changePage () {
                // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
                  getData().then(response => {
                // console.log(response);
                   this.data1 = response.data.data.users;
                   this.data1.forEach(item => {
                item.time = util.formatDate(new Date(item.time), 'yyyy-MM-dd');
                item.startTime = util.formatDate(new Date(item.startTime), 'yyyy-MM-dd');
                 });
                 });
              console.log(this.data1);
              // let sliced = this.data1.selice(1,2);
               let data = [];
                  for (let i = 0; i < 2; i++) {
                      data.push({
                     
                       })
                 } 

                 this.data2 = data;
            },
            exportData () {
                    this.$refs.table.exportCsv({
                        filename: '原始数据'
                    });
                },
         },
        created () {
            getData().then(response => {
                // console.log(response);
                this.data2 = response.data.data.users;
this.data2.forEach(item => {
    item.time = util.formatDate(new Date(item.time), 'yyyy-MM-dd');
    item.startTime = util.formatDate(new Date(item.startTime), 'yyyy-MM-dd');
});
            });
          
        }  

    };
</script>