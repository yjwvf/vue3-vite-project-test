import request from '@/utils/request.ts'
import type {loginReqType, loginRespType} from './type.ts'
enum API {
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info",
}

export const loginReq = (data:loginReqType)=>{
    request.post(API.LOGIN_URL, data).then((resp:loginRespType)=> {
        console.log(resp);
    });
}

export const userInfoReq = (data:any)=>{
    request.get(API.USERINFO_URL, data);
}

//export {loginReq, userInfoReq};