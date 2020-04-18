<template>
	<view class="goTop" @click="clickHandler" v-if="show">
		<image class="goTop_image" src="/static/images/home_top_icon.webp"></image>
	</view>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			clickHandler(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
			}
		}
	}
</script>

<style>
	.goTop_image{
		width: 100rpx;
		height: 100rpx;
	}
	
	.goTop{
		position: fixed;
		bottom: 200rpx;
		right: 50rpx;
	}
	
</style>
