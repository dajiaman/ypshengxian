<template>
	<view class="goodscard_list">
		<scroll-view>
			<GoodsCard :data="item" v-for="(item, index) in list" :key="index"></GoodsCard>
		</scroll-view>
	</view>
</template>

<script>
	import GoodsCard from '@/components/classify/goods/card.vue'
	
	export default {
		components:{
			GoodsCard
		},
		props: {
			list: {
				type: Array
			}
		}
	}
</script>

<style lang="scss">
	.goodscard_list{
		width: 100%;
		height: 100%;
		flex-direction: column;
	}
</style>
