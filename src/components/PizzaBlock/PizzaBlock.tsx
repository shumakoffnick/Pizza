import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {addItem} from "../../redux/slices/cartSlice"
import {FC} from 'react'

 type PizzaProps = {
  title: string
  price: number
  imageUrl: string
  sizes: number[]
  types: number[]
  id: number
}

const PizzaBlock: FC<PizzaProps> = ({ title, price, imageUrl, sizes, types, id}) =>{
    const dispatch = useDispatch()
    const cartItem = useSelector((state : any)=> state.cart.items.find((obj: any) => obj.id === id))


    const addedCount = cartItem ? cartItem.count : 0;


    
    const typeNames = ['тонкое', 'традиционное']
    const [pizzaTypes, setPizzaTypes] = useState(0)
    const newTypes = (numb: number)=>{
        setPizzaTypes(numb)
    }
    const [pizzaSize, setPizzaSize] = useState(0)
    const newSize = (numb: number)=>{
        setPizzaSize(numb)
    }
    
    const onClickAdd = ()=>{
      const item  = {
        id,
        title,
        price,
        imageUrl,
        type: typeNames[pizzaTypes],
        size: sizes[pizzaSize],
        count: 0
      }
      dispatch(addItem(item))
    }
    

    

    return(
      <>
      <div className="pizza-block-wrapper">
        <div className="pizza-block">
  <img
    className="pizza-block__image"
    src={imageUrl}
    alt="Pizza"
  />
  <h4 className="pizza-block__title">{title}</h4>
  <div className="pizza-block__selector">
    <ul>
        {types.map((item, index)=>(<>
            <li className={pizzaTypes === index ? "active" : ""}  onClick={()=>newTypes(index)}>{typeNames[item]}</li>
        </>))}
    </ul>
    <ul>
        {sizes.map((item, index)=>(<>
            <li  className={pizzaSize === index ? "active" : ""} onClick={()=>newSize(index)}>{item} см.</li>
        </>))}
    </ul>
  </div>
  <div className="pizza-block__bottom">
    <div className="pizza-block__price">от {price} ₽</div>
    <button className="button button--outline button--add" onClick={onClickAdd}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      { addedCount > 0 && <i>{addedCount}</i>}
    </button>
  </div>
</div> 
</div>
</>
    )
}

export default PizzaBlock