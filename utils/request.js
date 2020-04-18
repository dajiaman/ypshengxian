
export function request(obj){
	return new Promise((resolve, reject) => {
			uni.showLoading({
				title: '加载中...'
			});
			let header = obj.header || {};
			if(!obj.header){
				header = {"Content-Type": "application/json"};
			}
			uni.request({
				url: obj.url,
				data: obj.data || {},
				method: obj.method || 'GET',
				success: function(res){
					uni.hideLoading();
					if(res.statusCode === 200){
						resolve(res.data)
					}else{
						reject();
					}
				}
			})
	});
}


// function get(url, data, header){
//     return request(url, 'GET', data, header);
// }

// function post(url, data, header){
//     return request(url, 'POST', data, header);
// }