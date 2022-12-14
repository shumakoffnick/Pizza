import { CalcTotalPrice } from "./CalcTotalPrice";

export const GetCartFromLs = ()=>{
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = CalcTotalPrice(items)
    return {
        items,
        totalPrice
    }
}