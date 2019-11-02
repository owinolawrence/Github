export class User {
    constructor(
        public avatar_url:string,
        public name: string,
        public email: string,
        public location: string,
        public repo: string,
        public created:number,
        public followers:number,
        public followings:number,

     
    ){}
}
