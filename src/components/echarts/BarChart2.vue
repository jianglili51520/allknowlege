<!-- 柱状图组件 -->
<template>
  <div class="sort_content">
    <div class="sort_left">
      <el-tooltip effect="light" placement="right" v-for="(item,index) in datas.name" :key="index">
        <p>{{item}}</p>
      </el-tooltip>
    </div>
    <div class="bar">
      <div :id="elemId" ref="Echarts" style="width:100%;height:100%;"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    elemId: { type: String, required: true }, // 标签id 必传
    data: { type: Object, required: true }, // 图表数据必传
  },
  data() {
    return {
      myChart: undefined,
      option: {},
      myColor: ["#658dff", "#4aa4ff", "#8f67de", "#d9228e", "#f5086f"],
      datas:{
        name:[],
        total:[],
        index:[]
      }
    };
  },
  watch: {
    data: {
      handler: function () {
        // 动态渲染
        this._m_data()
      },
      deep: true,
    },
  },
  mounted() {
    this._m_data()
  },
  methods: {
    _m_data(){
      this.datas.name = [...this.data.name]
      this.datas.total = [...this.data.total]
      this.echartsInit();
      this.inits();
    },
    echartsInit() {
      this.myChart = this.$echarts.init(
        document.getElementById(`${this.elemId}`)
      );
      let self = this
      this.option = {
        tooltip: {
          trigger: "item",
          padding: [10, 10, 10, 10],
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(args,b,c,d){
            return self.data.name[self.data.name.length-args.dataIndex-1]+": "+self.data.total[self.data.name.length-args.dataIndex-1];
          },
          extraCssText:'z-index:2;',
        },
        grid: {
          left: "3%",
          bottom: 0,
          top: 0,
          containLabel: true,
        },
        xAxis: {
          type: "value",
          show: false,
          interval:0,
        },
        yAxis: {
          type: "category",
          interval:0,
          axisLabel: {
            show: false,
            color: "#1c5bd1",
            fontSize: 10,
            formatter: (value, index) => {
              return this.datas.name[index].length > 5 ? this.datas.name[index].substring(0,5) + '...' : this.datas.name[index];
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          data: this.datas.name,
        },
        series: [
          {
            type: "bar",
            barWidth: 15,
            data: this.datas.total.reverse(),
            label: {
              show: true,
              fontSize:16,
              color: "#000",
              position: "right",
              formatter: (value) => {
                if (value.value.toString().length > 5) {
                  return value.value.toFixed(3);
                } else {
                  return value.value;
                }
              },
            },
            itemStyle: {
              normal: {
                barBorderRadius: 16,
              },
            },
          },
        ],
      };
      this.myChart.clear();
      this.myChart.setOption(this.option);
      this.myChart.off("click");
      this.myChart.on('click', (params) => {
        console.log(333333);
        this.$emit("getname",params)
      })
      // this.myChart.off('click', (params) => {
      //   console.log(222222);
      // })
    },
    inits() {
      const self = this;
      window.addEventListener("resize", function () {
        self.chart = self.$echarts.init(
          document.getElementById(`${self.elemId}`)
        );
        self.chart.resize();
      });
    },
  },
};
</script>
<style lang="less">
.sort_content{
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-left: 0;
  align-items: center;
  display: flex;
  .sort_left{
    width: 18%;
    height: 100%;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p{
      font-size: 15px;
      color: #1c5bd1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin:0;
    }
  }
  .bar{
    width: 80%;
    height: 100%;
    #sort{
      div:first-child{
        width:100%!important;
      }
    }
  }
}

</style>
