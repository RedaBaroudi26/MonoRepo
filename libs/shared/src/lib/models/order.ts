import { OrderItem } from "./orderItems"
import { Product } from "./product"

export interface Order {

    _id?: string
    shippingAdress : string
    invoiceAdress : string , 
    city :  string , 
    country : string ,
    phone : string
    status ?: string
    total : number ,
    created_at ? : Date
    user : string
    orderItems : OrderItem[]
    
}


export interface OrderTable{

    checked : boolean 
    product : Product
    quantity : number 

}

export interface SelectedProduct{
    product : Product  
    quantity : number 
}
