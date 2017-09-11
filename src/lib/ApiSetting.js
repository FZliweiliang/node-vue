const user = {
	'getAccount': {
		url: '/api/login/getAccount',
		method: 'get'
	},
	'createAccount':{
		url:'/api/login/createAccount',
		method:'post'
	}
}

const apiSetting = {...user}
export default apiSetting