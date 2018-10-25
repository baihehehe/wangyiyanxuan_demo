/*
* ajax请求函数模块
* */

import axios from 'axios'

export default function ajax(url, data={}, type='GET') {

  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      //url query参数
      let dataStr = ''
      Object.keys(data).forEach(key => {

        dataStr += key + '=' + data[key] + '&'
      })

      if (dataStr !== '') {
        dataStr = dataStr.substring(0,dataStr.length-1)
        url += '?' + dataStr
      }

      //发送get请求
      promise = axios.get(url)

    } else {
      promise = axios.post(url,data)
    }

    promise.then(
      response => {
        resolve(response.data)
      },
      error => {
        reject(error)
      }
    )
  })
}
