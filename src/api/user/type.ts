//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface loginReqType {
    username: string,
    password: string
}

//定义全部接口返回数据都拥有ts类型
export interface loginRespType {
    code:number,
    data:{
        token:number
    }
}

interface userinfoType {
    token:{
        userId: number,
        avatar:string
        username: string,
        password: string,
        desc: string,
        roles: string[],
        buttons: string[],
        routes: string[],
        token: string[]
    }
}

