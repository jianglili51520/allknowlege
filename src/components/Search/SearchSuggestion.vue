<template>
    <div class="search-suggestion">
        <van-cell
        v-for="(item,index) in suggestions"
        :key="index"
        :title="item.enterprise_name"
        icon="search"
        :to="{
          name: 'companyDetail',
          params: {
            companyId: item.enterprise_id,
          },
        }"
        >
            <div slot="title" v-html="highlight(item.enterprise_name,searchText)"></div>
        </van-cell>
    </div>
</template>

<script>
import { companyQuery } from "@/api/company.js";
// lodash 支持按需加载，有利于打包结果优化
import { debounce } from "lodash"
export default {
    name: 'SearchSuggestion',
    components: {},
    props: {
        searchText:{
            type:String,
            required:true
        }
    },
    data () {
        return {
            suggestions:[],
            pageNo: 1,
            pageSize: 100,

        }
    },
    computed: {},
    watch: {
        //属性名：要监视的数据的名称
        searchText:{
            handler: debounce(async function(){
                //在这里监听到了数据的变化，然后进行数据请求以及绑定展示等操作
                const { data } = await  await companyQuery({
                    pageNo: this.pageNo, // 页码
                    pageSize: this.pageSize, // 每页大小
                    enterprise_name: this.searchText,
                });
                console.log(data)
                this.suggestions = data.data
            },200),
            immediate:true
        }
    },
    created () {},
    methods: {
        // 参数 source: 原始字符串
        // 参数 keyword: 需要高亮的关键词
        // 返回值：替换之后的高亮字符串
        highlight (source, keyword) {
            // 这里可以 new RegExp 方式根据字符串创建一个正则表达式
            // RegExp 是原生 JavaScript 的内置构造函数
            // 参数1：字符串，注意，这里不要加 //
            // 参数2：匹配模式，g 全局，i 忽略大小写
            const reg = new RegExp(keyword, 'gi')
            return source.replace(reg, `<span style="color: #3296fa">${keyword}</span>`)
        },
    }
}
</script>

<style scoped lang="less">
.search-suggestion {
    position: fixed;
    top: 54px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    .van-cell  {
        text-align: left!important;
    }
}

</style>