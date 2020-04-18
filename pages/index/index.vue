<template>
	<view class="home">
		<view class="app-banner"><Banner :list="banners"></Banner></view>
		<NavigationInfo :list="navigationInfoList"></NavigationInfo>

		<HotSale :hotSalesInfo="hotSalesInfo"></HotSale>

		<goToTop :show="display"></goToTop>
	</view>
</template>

<script>
import Banner from '../../components/home/banner/index.vue';
import NavigationInfo from '../../components/home/navigation/index.vue';
import HotSale from '../../components/home/hotsale/index.vue';
import goToTop from '@/components/home/goTop.vue';

import { getIndexConfig, getHotSale } from '@/api/home.js';

import {debounce} from '@/utils/index.js'


export default {
	data() {
		return {
			title: 'Hello',

			banners: [],
			navigationInfoList: [],

			hotSalesInfo: {},
			
			display: false
		};
	},
	components: {
		Banner,
		NavigationInfo,
		HotSale,
		goToTop
	},
	onLoad() {
		getIndexConfig().then(res => {
			this.banners = res.result.result.banner;
			this.navigationInfoList = res.result.result.navigationInfo;
		});
		this.getHotSaleList();
	},
	onPageScroll(e) {
		if(e.scrollTop > 500){
			this.display = true;
		}else{
			this.display = false;
		}
	},
	methods: {
		getHotSaleList() {
			getHotSale().then(res => {
				this.hotSalesInfo = res.result.result;
			});
		}
	},
	onPullDownRefresh() {},
	onReachBottom() {
		// 加载更多
		getHotSale().then(res => {
			res.result.result.contents.forEach(item => {
				this.hotSalesInfo.contents.push(item);
			});
		});
	}
};
</script>

<style>
.app-banner {
	background-color: #9151ff;
	width: 100%;
	height: 260upx;
	display: flex;
	position: relative;
	margin-bottom: 90upx;
}
</style>
