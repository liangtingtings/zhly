import request from '@/utils/request'

export function addBtn(data) {
  return request({
    url: '/main/addBtn',
    method: 'post',
    data
  })
}

