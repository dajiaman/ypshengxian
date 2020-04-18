<template>
	<view class="order_panel">
		<uni-list><uni-list-item title="我的订单" rightText="查看更多"></uni-list-item></uni-list>
		<view class="footer">
			<view class="item">
				<image class="icon" src="../../../static/images/order_pay.png"></image>
				<text>待付款</text>
			</view>
			<view class="item"><image class="icon" src="../../../static/images/order_share.png"></image>
			<text>待分享</text></view>
			<view class="item"><image class="icon" mode="aspectFit" src="../../../static/images/order_pick.png"></image>
			<text>待自提</text></view>
			<view class="item"><image class="icon" mode="aspectFit" src="../../../static/images/order_done.png"></image>
			<text>已完成</text></view>
			<view class="item"><image class="icon" mode="aspectFit" src="../../../static/images/mine_after_icon.png"></image>
			<text>售后记录</text></view>
		</view>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';

export default {
	components: {
		uniList,
		uniListItem
	}
};
</script>

<style lang="scss">
.order_panel {
	background-color: #ffffff;
	margin-bottom: $uni-spacing-row-base;
	
	.footer{
		display: flex;
		flex-direction: row;
		
		.item{
			display: flex;
			width: 20%;
			flex-direction: column;
			align-items: center;
			font-size: 20rpx;
			color: #333333;
			padding: 14rpx;
			
			.icon{
				width: 54rpx;
				height: 54rpx;
			}
			
		}
	}
	
}
</style>
