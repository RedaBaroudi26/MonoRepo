
export interface User {

    _id?: string
    name : string
    email : string
    adress : string 
    city : string 
    country : string 
    phone : string 
    isAdmin : boolean 
    
}


export interface ResUser {
    success ?: boolean ;
    users : User[]
}

export interface ResOneUser {
    success ?: boolean ;
    user : User
}

export interface ResLogin {
    success?: boolean
    message: string
    accessToken: string
    role:string
    email : string
    name : string
}
