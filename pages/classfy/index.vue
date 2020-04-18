<template>
	<view class="classify">
		<view class="header">
			<Header></Header>
		</view>
		<view class="container">
				<scroll-view scroll-y="true" class="sider"><GoodsCategory :list="categoryList" @change="handleChange"></GoodsCategory></scroll-view>
				<scroll-view scroll-y="true" class="menu"><GoodsList :list="goodsList"></GoodsList></scroll-view>
		</view>
	</view>
</template>

<script>
import { getGoodsCategoryAll, getGoodsList } from '@/api/goods.js';

import Header from '@/components/classify/header/index.vue'
import GoodsCategory from '@/components/classify/goods/category.vue';
import GoodsList from '@/components/classify/goods/list.vue';

export default {
	data() {
		return {
			categoryList: [],
			goodsList: []
		};
	},
	components: {
		Header,
		GoodsCategory,
		GoodsList
	},
	onLoad() {
		this.getGoodsCategory();
	},
	methods: {
		getGoodsCategory() {
			getGoodsCategoryAll().then(res => {
				this.categoryList = res.result.result.category;
				this.getGoods();
			});
		},
		getGoods() {
			getGoodsList().then(res => {
				this.goodsList = res.result.result.items;
			});
		},

		handleChange(index) {
			this.getGoods();
		}
	}
};
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	
.classify {	
	flex: 1;
	height: 100%;
	position: relative;
	
	.header {
		width: 750rpx;
		height: 100rpx;
		background: #ffffff;
	}

	.container {
		display: flex;
		width: 750rpx;
		flex: 1;
		flex-direction: row;
		position:absolute;
		top: 100rpx;
		bottom: 0;
	
		.sider{
			width: 200rpx;
		}
		
		.sider, .menu{
			display: flex;
		}
		
		.menu{
			width: 550rpx;
		}
		
	}
}
</style>
