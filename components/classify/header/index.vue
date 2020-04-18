<template>
	<view>
		<uni-search-bar placeholder="商品搜索" clearButton="false" cancelButton="false" :radius="100" @confirm="search"></uni-search-bar>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
	   components: {uniSearchBar}
	}
</script>

<style>
</style>
