import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import CartItem from '../../components/CartItem';
import {RootState} from '../store'
import {GetCartFromLs} from '../../utils/GetCartFromLs'

export type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number  ;
}
interface CartSliceState {
  totalPrice: number;
  items: CartItem[]
}

const cartData = GetCartFromLs()
const initialState: CartSliceState = {
  totalPrice: cartData.totalPrice,
  items: cartData.items,
  
  
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addItem(state, action){
      const findItem = state.items.find((obj)=> obj.id === action.payload.id)
      if(findItem){
        findItem.count++
      }else{
        state.items.push({
          ...action.payload,
          count: 1
        })
      }

      state.totalPrice = state.items.reduce((sum, obj) =>{
            return (obj.price * obj.count) + sum
          }, 0)
    },
    minusItem(state, action){
      const findItem = state.items.find((obj)=> obj.id === action.payload)
      if(findItem){
        findItem.count--
      }if(findItem?.count === 0){
        state.items = state.items.filter(obj=> obj.id !== action.payload)
        state.totalPrice = 0
      }
    },
    
    removeItem(state, action){
        state.items = state.items.filter(obj=> obj.id !== action.payload)
        state.totalPrice = 0
    },
    clearItems(state){
        state.items = [];
        state.totalPrice = 0
    }
  }
})

export const {addItem, removeItem, clearItems, minusItem} = cartSlice.actions 
export default cartSlice.reducer