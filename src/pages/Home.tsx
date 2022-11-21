import React,{FC} from 'react'
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import Pagination from '../Pagination/Pagination';
import { SearchContext } from '../App';
import { setCategoryId, setPageCount } from '../redux/slices/filterSlice';



const Home: FC = () => {
  
  const categoryId = useSelector((state: any)=> state.filter.categoryId)
  const sortType = useSelector((state: any)=> state.filter.sort.sortProperty)
  const pageCount = useSelector((state: any) =>state.filter.pageCount)
  const dispatch = useDispatch()
  


    const {searchValue} = useContext<any>(SearchContext)
    const [items, setItems] = useState<[]>([])  
    
  useEffect(()=>{
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
  axios.get(`https://6362156e7521369cd0642cd5.mockapi.io/pizzas-items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
  ).then(res=> {
    setItems(res.data)
  })
    window.scrollTo(0, 0)
  }, [categoryId, sortType, searchValue, pageCount]);


  


  const onClickCategory = (id: number) =>{
    dispatch(setCategoryId(id))
  }
  

  const onChangePage = (number: number)=>{
    dispatch(setPageCount(number))
  }
  
    return (
    <>
    <div className="content__top">
            <Categories value={categoryId} onClickCategory={onClickCategory}/>
            <Sort/>
            
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {items.map((obj: any)=> (
            <> 
            <PizzaBlock  {...obj}/>
            </>
          )  ) }
          </div>
          <Pagination value={pageCount} onChangePage={onChangePage}/>
    </>
  )
}
export default Home
