export class UserResponse {

    constructor(
        public id:string,
        public username:string,
        public email:string,
        public firstName:string,
        public lastName:string,
        public isActive:boolean,
        public roleName:string
    ) { }
    
}
