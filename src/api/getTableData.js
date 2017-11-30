import axios from 'axios';

function getData() {
	return axios.get('../../data.json');
	// return axios.post('url', data);
	// return axios.get('./data1.json');
}

export {getData};