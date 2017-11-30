import axios from 'axios';

function getdetail () {
	// return axios.get('https://developers.douban.com/wiki/?title=book_v2#get_book');
	return axios.get('../../data.json');
}

export {getdetail};