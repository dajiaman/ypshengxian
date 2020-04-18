<template>
	<view class="goods_card">
		<view class="goodsdetail">
			<view class="goodscard_image_wrapper"><image class="goods_image" :src="data.itemCover"></image></view>
			<view class="goodscard_right">
				<view class="name">{{ data.saleName }}</view>
				<text class="desc">{{ data.itemTitle }}</text>

				<view class="salesinfo_price">
					<text>￥{{ data.salePrice | formatMoney }}</text>
					<text class="saleunit">/{{ data.saleUnit }}</text>
					<text class="originprice" v-if="data.originPrice">￥{{ data.originPrice | formatMoney }}</text>
				
				</view>
				<image class="cart_btn" src="/static/images/category_add_cart.webp"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object
		}
	},
	filters: {
		formatMoney(value) {
			return value / 100;
		}
	}
};
</script>

<style lang="scss">
.goods_card {
	background-color: #ffffff;
	position: relative;
	padding-left: 20upx;

	.goodsdetail {
		display: flex;
		padding: 20upx 0;
	}

	.goodscard_image_wrapper {
		margin-right: 20upx;
		position: relative;

		.goods_image {
			width: 200rpx;
			height: 200rpx;
		}
	}

	.goodscard_right {
		flex: 1;
		padding-right: 20upx;
		font-size: 26rpx;
		overflow: hidden;
		padding-bottom: 20upx;
		position: relative;
	}

	.name {
		font-weight: 700;
		overflow: hidden;
		font-size: 28rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.desc {
		font-size: 26rpx;
		color: #999;
	}

	.salesinfo_price {
		font-size: 24rpx;
		color: #ff5339;
		padding-bottom: 0;
		display: -webkit-flex;
		display: flex;
		-webkit-align-items: baseline;
		align-items: baseline;
		position: absolute;
		bottom: 0;
	}

	.saleunit {
		color: #999999;
		margin-right: 10rpx;
	}

	.originprice {
		color: #999;
		text-decoration: line-through;
	}
	
	.cart_btn{
		position: absolute;
		bottom: 0;
		right: 20rpx;
		width: 50rpx;
		height: 50rpx;
		background: #9151FF;
		border-radius: 50%;
		overflow: hidden;
	}
	
}
</style>
