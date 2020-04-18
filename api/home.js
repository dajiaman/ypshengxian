import {request} from '../utils/request.js';

import { host } from '../config/index.js';

export function getIndexConfig(){
	return request({
		url: `${host}/request`,
		method: 'post',
		data: {
			"api": "store.index.queryIndexConfig",
			"version": "1.0",
			"token": "d9a95c8824644dc5aece47317f319e53",
			"params": {
				"shopId": "200000265",
				"cityCode": "C340100"
			},
			"nonce": "00668ebe84764fda8a46841f709e0e0e"
		}
	});
}


export function getHotSale() {
	return request({
		url: `${host}/request`,
		method: 'post',
		data: {
			"api": "store.index.queryLimitedTimeHotSale",
			"version": "1.0",
			"token": "d9a95c8824644dc5aece47317f319e53",
			"params": {
				"page": 1,
				"pageSize": 10,
				"shopId": "200000265",
				"cityCode": "C340100"
			},
			"nonce": "8768d3d324e74909abbe9f8305de545a"
		}
	})
}