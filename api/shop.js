import {
	request
} from '../utils/request.js';

import {
	host
} from '../config/index.js';

export function getShopList() {
	return request({
		url: `${host}/request`,
		method: 'post',
		data: {
			"api": "store.shop.getShopList",
			"version": "1.0",
			"token": "d9a95c8824644dc5aece47317f319e53",
			"params": {
				"cityCode": "C340100",
				"lat": 31.83661460876465,
				"lng": 117.21815490722656,
				"merchantScope": 5
			},
			"nonce": "862acb036b32431195035f80fdab0ac8"
		}
	});
}
