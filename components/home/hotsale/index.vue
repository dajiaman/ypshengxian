<template>
	<view class="floor_hotsale">
		<view class="header" >
			<image class="header_img" mode="widthFix" v-if="hotSalesInfo.head" :src="hotSalesInfo.head.layoutPic"></image>
		</view>
		<view class="hotsale_list" >
			<HotSaleCard v-for="(item, index) in hotSalesInfo.contents" :key="index" :data="item"></HotSaleCard>
		</view>
	</view>
</template>

<script>
import HotSaleCard from './card.vue';
import { getHotSale } from '../../../api/home.js'

export default {
	components: {
		HotSaleCard
	},
	props: {
		hotSalesInfo: {}
	}
};
</script>

<style lang="scss">
	.floor_hotsale{
			
			.header{
				width: 710rpx;
				padding: $uni-spacing-row-base;
				
				.header_img{
					width: 710rpx;
				}
			}
			
			.hotsale_list{
				margin: $uni-spacing-row-base;
			}
			
	}
</style>
