import wepy from 'wepy';



export const getRecommend = data => {
    return wepy.request({
      url: '/applot/recommendInfo/?timestamp='+data.timestamp+'&sign='+data.sign,
      method: 'POST',
    //   params:data
    })
}