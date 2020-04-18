<template>
	<view>
		<UserInfoPanel></UserInfoPanel>
		
		<OrderPanel></OrderPanel>
		
		<uni-list><uni-list-item :title="item.title" :thumb="item.thumb" :rightText="item.rightText" :show-arrow="true" v-for="(item, index) in items" :key="index"></uni-list-item></uni-list>
		
		<view class="banner-wrapper"><image class="banner" src="/static/images/shop_ower_join.png" mode="widthFix"></image></view>
	</view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import UserInfoPanel from '@/components/mine/user_panel.vue'
import OrderPanel from '@/components/mine/order/panel.vue'

const items = [
	{
		title: '礼品卡充值',
		thumb: '/static/images/mine_topup_center.webp',
	},
	{
		title: '收货地址',
		thumb: '/static/images/mine_topup_center.webp',
	},
	{
		title: '联系客服',
		thumb: '/static/images/mine_topup_center.webp',
	},
	{
		title: '关于我们',
		thumb: '/static/images/mine_topup_center.webp',
		rightText:"好生活，不贵"
	},
	{
		title: '会员支付密码',
		thumb: '/static/images/mine_topup_center.webp',
		rightText:"去设置"
	}
];

export default {
	components: { UserInfoPanel, uniList, uniListItem, OrderPanel },
	data() {
		return {
			items: items
		};
	}
};
</script>

<style lang="scss">
	.banner-wrapper{
		width: 750rpx;
		padding: $uni-spacing-row-base;
		
		.banner{
			width: 710rpx;
		}
	}
</style>
