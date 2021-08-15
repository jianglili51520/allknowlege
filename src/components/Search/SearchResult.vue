<template>
  <div class="SearchResult">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.enterprise_name"
        :to="{
          name: 'companyDetail',
          params: {
            companyId: item.enterprise_id,
          },
        }"
      />
    </van-list>
  </div>
</template>

<script>
import { companyQuery } from "@/api/company.js";
export default {
  name: "SearchResult",
  components: {},
  props: {
    searchText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageNo: 1,
      pageSize: 10,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onLoad() {
      // 1. 请求获取数据
      const { data } = await companyQuery({
        pageNo: this.pageNo, // 页码
        pageSize: this.pageSize, // 每页大小
        enterprise_name: this.searchText,
      });
      // 2. 将数据添加到列表中
      this.list.push(...data.data);

      // 3. 设置加载状态结束
      this.loading = false;

      // 4. 判断数据是否加载完毕
      if (data.data.length == 10) {
        this.pageNo++; // 更新获取下一页数据的页码
      } else {
        this.finished = true; // 没有数据了，将加载状态设置结束，不再 onLoad
      }
    },
  },
};
</script>

<style scoped lang="less">
.SearchResult {
  position: fixed;
  top: 54px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  .van-cell  {
      text-align: left;
  }
}
</style>