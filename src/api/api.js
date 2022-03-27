import request from './request'
// post请求
export async function registAPI(params){
  let data =  await  request.post('/register', {...params})
      return data
}
