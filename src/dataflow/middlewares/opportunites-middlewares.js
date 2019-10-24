import axios from 'axios';

const API_URL = 'http://petronect-app-core-api-homolog-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api';

export const getAllOpportunitesMiddleware = (info) => axios({
	url: `${API_URL}/opportunities/search`,
	method: 'post',
	headers: {
		Authorization: info.accessToken,
	},
	data: info.keywords,
});

export const getOpportunityById = (info) => axios({
	url: `${API_URL}/opportunities/${info.opportunityId}/`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${info.token}`,
	},
});
