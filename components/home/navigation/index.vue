<template>
	<view class="app-nav">
	<view class="app-nav-list">
		<view class="app-nav-item" v-for="(item, index) in list" :key="index">
			<image class="icon" :src="item.image"></image>
			<text class="title">{{item.title}}</text>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array
			}
		}
	}
</script>

<style lang="scss">
	.app-nav{
		padding: 10rpx $uni-spacing-row-base;
		background-color: #FFFFFF;
	}
	.app-nav-list{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		
		.app-nav-item{
			width: 20%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		
		.icon{
			width: 50px;
			height: 50px;
		}
		
		.title{
			font-size: 24rpx;
			color: #333333;
		}
	}
</style>
