<template>
  <div id="search">
    <!-- 搜索栏 -->
    <form action="/" style="width: 100%">
      <van-search
        v-model="searchText"
        background="#3b5ef6"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch(searchText)"
        @cancel="$router.push('/statistics')"
        @focus="isResultShow = false"
      />
    </form>

    <!-- 搜索结果 -->
    <SearchResult v-if="isResultShow" :search-text="searchText" />

    <!-- 联想建议 -->
    <SearchSuggestion v-else-if="searchText" :search-text="searchText"  @search="onSearch" />
  </div>
</template>

<script>
import SearchResult from "@/components/Search/SearchResult.vue";
import SearchSuggestion from '@/components/Search/SearchSuggestion.vue'
import { companyQuery } from "@/api/company.js";
export default {
  components: { SearchResult,SearchSuggestion },
  data() {
    return {
      searchText: "", //输入框内容
      isResultShow: false, //控制搜索结果的显示状态
    };
  },
  created() {
    // this._m_init()
  },
  mounted() {},
  methods: {
    onSearch(searchText) {
      this.searchText = searchText;
      //渲染搜索结果
      this.isResultShow = true;
    },
  },
};
</script>

<style lang="less">
#search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .van-search__action {
    color: #fff;
  }
}
</style>