<template>
	<view class="category_list">
		<view class="item" :class="{'item-select': activeIndex == index}" v-for="(item, index) in list" :key="index" 
		@click="handleClick(index)">{{ item.name }}</view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Array
		}
	},
	data (){
		return {
			activeIndex: 0
		}
	},
	methods: {
		handleClick(index){
			this.activeIndex = index;
			this.$emit('change', index);
		}
	}
};
</script>

<style lang="scss">
.category_list {
	display: flex;
	flex-direction: column;

	.item {
		display: block;
		box-sizing: border-box;
		padding: 20px 12px 20px 8px;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 20px;
		word-wrap: break-word;
		background-color: #f7f8fa;
		border-left: 3px solid transparent;

		&.item-select {
			color: #323233;
			font-weight: 500;
			border-color: #9151FF;
			background-color: #FFFFFF;
		}
	}
}
</style>
