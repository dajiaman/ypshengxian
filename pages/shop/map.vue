<template>
	<view class="shop-map">
		<view class="map_box">
				<map :markers="covers" style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" @callouttap="markerTapHandler" @markertap="markerTapHandler"></map>
		</view>
		<view class="info_box">
			<view class="content">
				<view>
					<text class="shopname">{{ shopInfo.shopName }}</text>
				</view>
				<text class="distance">据您100m</text>
				<text class="shopaddress">{{ shopInfo.shopAddress }}</text>
			</view>
			<view class="footer">
				门店详情
				
				<text>重新定位</text>
				<text>确定</text>
			</view>
		</view>
	</view>
</template>

<script>
import { getShopList } from '@/api/shop.js';

export default {
	data() {
		return {
			latitude: 0,
			longitude: 0,
			shopList: [],
			covers: [],
			shopInfo: {}
		};
	},
	onLoad() {
		const that = this;
		uni.getLocation({
			type: 'wgs84',
			success: function(res) {
				that.latitude = res.latitude;
				that.longitude = res.longitude;
				that.getShops();
			}
		});
	},
	methods: {
		getShops() {
			getShopList().then(res => {
				this.shopList = res.result.result;
				// for debug
				this.shopInfo = res.result.result[0];
				this.createCovers(res.result.result);
			});
		},
		createCovers(shopList) {
			let covers = [];
			shopList.forEach(item => {
				covers.push({
					id: item.id,
					latitude: item.shopLat,
					longitude: item.shopLng,
					callout: {
						content: item.shopName,
						color: '#ffffff',
						bgColor: '#9151FF',
						fontSize: 12,
						borderRadius: 5,
						textAlign: 'center',
						padding: 10
					}
					// iconPath: '/static/ic_launcher.png'
				});
			});
			this.covers = covers;
		},
		markerTapHandler(e) {
			const shopId = parseInt(e.markerId);
			const info = this.findInfoByShopId(shopId);
			this.shopInfo = info;
		},
		findInfoByShopId(shopId) {
			const arr =  this.shopList.filter(item => {
				return item.id == shopId;
			});
			return arr[0]
		}
	}
};
</script>

<style lang="scss">
	page{
		height: 100vh;
	}
.shop-map {
	flex: 1;
	height: 100%;
	position: relative;
	
	.map_box{
		width: 100%;
		flex: 1;
		position: absolute;
		top: 0;
		bottom: 300rpx;
	}
	
	.info_box{
		position: absolute;
		bottom: 0;
		font-size: 24rpx;
		background: #FFFFFF;
		height: 300rpx;
		width: 100%;
		
		.content{
			padding: $uni-spacing-col-base;
			border-bottom: 1rpx solid #c3c3c3;
		}
		
		.shopname{
			color: #000;
			font-size: 30rpx;
			font-weight: bold;
		}
		
		.distance{
			color: #ff5339;
			padding-right: 10rpx;
			border-right: 1px solid #c3c3c3;
		}
		
		.shopadress{
			font-size: 24rpx;
			color: #333333;
		}
		
		.footer{
			padding: $uni-spacing-col-base;
		}
		
	}
	
}
</style>
