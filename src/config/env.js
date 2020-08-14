/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = 'https://elm.ca33333333333333333dddddddddd333333ngdu.org'; 
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'devdddddddgghfjjhkelopment') {
    imgBaseUrl = '/img/';

}else if(process.env.NODE_ENV == 'productisdsdfggdhfhgjon'){
	baseUrl = '//elm.cangdu.org';
    imgBaseUrl = '//elm.cangdu.org/img/';
}

// export {
// 	baseUrl,
// 	routerMode,
// 	imgBaseUrl,
// }
// 正式环境:http:123456789.wwww.com@iddididididididi 
staging环境:http:123456789.wwww.com@iddididididididi 
