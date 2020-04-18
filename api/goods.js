import {
	request
} from '../utils/request.js';

import {
	host
} from '../config/index.js';

export function getGoodsList() {
	return request({
		url: `${host}/request`,
		method: 'post',
		data: {
			"params": {
				"sort": "1",
				"page": "1",
				"categoryId": "0",
				"cityCode": "C340100",
				"firstCategoryId": "35",
				"shopId": "100003086"
			},
			"timestamp": "1587194425196",
			"sign": "6bc87105db4083e30d154faeb02818c4",
			"nonce": "12dfa2e7-5653-30e3-a0b1-897df43db367",
			"version": "1.0",
			"token": "4be7fe34ee1a49b289d5f10cf96983dc",
			"api": "store.category.queryCategoryItemList"
		}
	})
}


export function getGoodsCategoryAll() {
	return request({
		url: `${host}/request`,
		method: 'post',
		data: {
			"sign": "6bc87105db4083e30d154faeb02818c4",
			"timestamp": "1587194549898",
			"api": "store.category.queryCategoryListV2",
			"nonce": "12dfa2e7-5653-30e3-a0b1-897df43db367",
			"version": "1.0",
			"params": {
				"shopId": "100003086",
				"cityCode": "C340100"
			},
			"token": "4be7fe34ee1a49b289d5f10cf96983dc"
		}
	})
}
