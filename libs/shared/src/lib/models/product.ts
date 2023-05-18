import { Category } from "./category"

export interface Product {
    _id?: string
    title: string,
    description: string,
    content: string,
    rating: number ,
    brand: string,
    thumbnail: string,
    countStock: number,
    images: [] ,
    isFeatured: boolean,
    price: number,
    category?: Category
}

export interface ResProduct{
    success?: boolean,
    products: Product[]
}

export interface ResOneProduct{
    success?: boolean,
    product: Product
}