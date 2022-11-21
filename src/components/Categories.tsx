import { FC } from "react" 
type CategoriesType = {
  value: number;
  onClickCategory: (index: number)=>void;
}
const Categories: FC<CategoriesType> = ({value, onClickCategory})=>{

  const categories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  

    return(
      <div className="categories">
                <ul>
                  {
                    categories.map((categoryName, index)=> (
                      <li key={index} onClick={()=>onClickCategory(index)} className={value === index ? "active" : ""}>
                        {categoryName}
                      </li>
                    ))
                  }
                </ul>
              </div>
    )
  }
  export default Categories