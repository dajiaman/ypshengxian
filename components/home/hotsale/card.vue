<template>
	<view class="hotsale_card" @click="clickHandler">
		<view class="card_header">
			<text class="area_title">{{ data.specialAreaTitle }}</text>
		</view>
		<view class="card_img_wrapper"><image :src="data.scenePic" mode="widthFix" class="img"></image></view>
		<view class="card_meta">
			<view class="card_meta_left">
				<text class="salename">{{ data.item.saleName }}</text>
				<text class="picktime">提货时间：明天</text>
			</view>
			<view class="card_meta_right">
				<text class="follownum">{{ data.followNum }}</text>
				<text class="followtext">关注人数</text>
			</view>
		</view>
		<view class="card_ft"></view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object
		}
	},
	methods: {
		clickHandler(){
			uni.navigateTo({
				url: '/pages/goods/detail?goodId='+ this.data.item.itemId
			})
		}
	}
};
</script>

<style lang="scss">
.hotsale_card {
	width: 710rpx;
	background: #ffffff;
	margin-bottom: 30rpx;

	.card_header {
		display: flex;
		align-items: center;
		justify-content: center;

		.area_title {
			font-size: 28rpx;
			color: #333333;
			text-align: center;
			line-height: 2.2;
		}
	}

	.card_img_wrapper {
		position: relative;
		padding: 0 $uni-spacing-row-base;

		.img {
			width: 100%;
		}
	}

	.card_meta {
		padding: $uni-spacing-row-base;
		font-size: 32rpx;
		color: #333333;
		display: flex;
		flex-direction: row;
		width: 670rpx;

		.card_meta_left {
			display: flex;
			width: 530rpx;
			flex-direction: column;
			padding-right: 10rpx;

			.salename {
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				font-size: 32rpx;
				color: #000;
				font-weight: bold;
			}
			
			.picktime{
				font-size: 28rpx;
			}
		}

		.card_meta_right {
			display: flex;
			width: 140rpx;
			flex-direction: column;
			font-size: 24rpx;
			align-items: center;
			border-left: 1rpx solid #f3f3f3;
			
			.follownum{
				font-size: 28rpx;
				color: #DD524D;
			}
			
			.followtext{
				font-size: 22rpx;
			}
			
		}
	}

	.card_ft {
		padding: 0 $uni-spacing-row-base;
	}
}
</style>
