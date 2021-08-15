<!-- 折线图组件 -->
<template>
  <div class="oneline" style="width: 100%; height: 100%" :id="elemId" ref="Echarts"></div>
</template>

<script>
export default {
  props: {
    elemId: { type: String, required: true }, // 标签id 必传
    content: { type: String, required: true }, // 标签id 必传
    data: { type: Array, required: true }, // 图表数据必传
  },
  data() {
    return {
      myChart: undefined,
      option: {},
      datax:[],
      datay:[]
    };
  },
  watch: {
    data: {
      handler: function (val, oldval) {
        // 动态渲染
        console.log(val, oldval);
        this.echartsInit();
        this.inits();
      },
      deep: true,
    },
  },
  mounted() {
    this.echartsInit();
    this.inits();
    // this.click()
  },
  methods: {
    echartsInit() {
      this.data.forEach(item => {
        let name = ""
        if(item.county_name){
          name = item.county_name;
        }
        this.datax.push(name)
        this.datay.push(item.total)
      });
      this.myChart = this.$echarts.init(
        document.getElementById(`${this.elemId}`)
      );

      this.option = {
        title: {
          text:this.content,
          top:10,
          left:44,
          textStyle: {
            color: "#000",
            fontWeight:550
          },
          subtextStyle:{
            fontSize:18
          }
        },
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            interval:0,
            rotate:40,
            textStyle: {
                color: '#333'
            },
            formatter: function (name) {
              return name.length > 3 ? name.substring(0, 3) + '...' : name;
            },
          },
          data: this.datax
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: this.datay,
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
        }]
      };
      this.myChart.setOption(this.option);
      this.myChart.on('click', function(param){
        console.log(param.name);
        $emit("getname",param)
      })
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
<style scoped>
</style>
