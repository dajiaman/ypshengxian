<template>
	<view class="userinfo_block">
		<image src="/static/images/mine_header_bg.webp" mode="aspectFill" class="bg"></image>
		<view class="userinfo_box">
			<view class="userinfo_left"><image class="avatar" src="/static/images/logo_yaun.png"></image></view>
			<view class="userinfo_ct">
				<view class="username">昵称</view>
				<view>好生活不贵</view>
			</view>

			<view class="userinfo_right"><image class="qrcode" src="/static/images/home_icon_code.png"></image></view>
		</view>

		<view class="wallet_card">
			<view class="walletinfo_box">
				<image class="bg" src="/static/images/mine_s_bg.webp" mode="widthFix"></image>
				<image class="tag" src="/static/images/mine_bz_icon.webp" mode="widthFix"></image>
				<view class="walletinfo_content">
					<view class="wallet_item">
						<view>账户余额</view>
						<view>0.00</view>
					</view>
					<view class="wallet_item">
						<view>优惠券</view>
						<view>0</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script></script>

<style lang="scss">
.userinfo_block {
	width: 750rpx;
	height: 350rpx;
	overflow: hidden;
	position: relative;

	.bg {
		width: 750rpx;
	}

	.userinfo_box {
		display: flex;
		position: absolute;
		width: 690rpx;
		top: 20rpx;
		color: #ffffff;
		padding: $uni-spacing-row-lg;
		font-size: 26rpx;

		.avatar {
			width: 120rpx;
			height: 120rpx;
		}

		.userinfo_left {
			display: flex;
			margin-right: 20rpx;
		}

		.userinfo_ct {
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 20rpx;
			flex: 1;

			.username {
				font-size: 30rpx;
				color: #ffffff;
			}
		}

		.userinfo_right {
			display: flex;
			align-items: center;
			justify-content: center;

			.qrcode {
				display: flex;
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
}

.wallet_card {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 130rpx;

	.walletinfo_box {
		margin: 0 $uni-spacing-row-lg;
		height: 100%;
		position: relative;
		
		.walletinfo_content{
			z-index: 2;
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			
			.wallet_item{
				width: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				font-size: 28rpx;
			}
			
		}
		
		
		.bg {
			width: 100%;
		}

		.tag {
			width: 88rpx;
			z-index: 2;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
}
</style>
