export interface User {
  uid: any;
  displayName?: string;
  email: string;
  password: string;
  //role:string;
  //bussinessId:number;
}

export interface UserLoad {
  uid: any;
  displayName: string | null;
  email: string;
}

export interface UserDTO extends Omit<User, 'id'> {}

export interface UserLogin {
  email: string;
  password: string;
}
