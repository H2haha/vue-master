import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};



util.formatDate =function (date, fmt) {
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
    return fmt;
}
util.format = function(time,format)

{
var t = new Date(time);
var tf = function(i){return (i < 10 ? '0': '') + i};
return format.replace(/yyyy|MM|dd|HH|mm|ss/g,function(a){
switch(a){
case 'yyyy':
return tf(t.getFullYear());
break;
case 'MM':
return tf(t.getMonth() + 1);
break;
case 'mm':
return tf(t.getMinutes());
break;
case 'dd':
return tf(t.getDate());
break;
case 'HH':
return tf(t.getHours());
break;
case 'ss':
return tf(t.getSeconds());
break;
}
})
}









const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;