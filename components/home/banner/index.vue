<template>
	<view class="banner-box">
		<view class="home-banner">
			<swiper class="swiper" :indicator-dots="indicatorDots" 
			:autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item, index) in list" :key="index">
					<image class="image" mode="aspectFill" :src="item.image"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array
		}
	},
	data() {
		return {
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		};
	},
	methods: {
		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots;
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay;
		},
		intervalChange(e) {
			this.interval = e.target.value;
		},
		durationChange(e) {
			this.duration = e.target.value;
		}
	}
};
</script>
<style lang="scss">
.banner-box {
	// margin: 0 20upx;
	width: 100%;
	height: 268upx;
	
	position: absolute;
	bottom: -60upx;
	overflow: hidden;
	margin: 0 auto;
}

.home-banner {
	width: 100%;
	height: 268upx;
	border-radius: 45upx;
	overflow: hidden;
	
	.swiper{
		padding: 0 $uni-spacing-row-base;;
		height: 268upx;
	}

	.image{
		width: 100%;
		height: 268upx;
	}
}
</style>
