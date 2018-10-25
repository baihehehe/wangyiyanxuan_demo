/*包含n个请求函数的模块*/

import ajax from './ajax'

//获取data数据
export const reqData = () => ajax('/data')

//获取banner数据
export const reqBanner = () => ajax('/banner')

//获取home数据
export const reqHome = () => ajax('/home')

//获取detail数据
export const reqDetail = () => ajax('/detail')

//获取nav数据
export const reqNav = () => ajax('/nav')
