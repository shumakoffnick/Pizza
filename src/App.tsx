import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import {Routes, Route} from 'react-router-dom'
import './scss/app.scss'
import { useState } from 'react';
import React from 'react';

export const SearchContext = React.createContext({})

console.log(SearchContext)
const App = ()=>{
  const [searchValue, setSearchValue] = useState('')
  
  return(
    <div className='App'>
     <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <Header />
      <div className="content">
        <div className="container">
  
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
            
          </Routes>
        </div>
      </div>
      </SearchContext.Provider>
    </div>
    </div>
  )
}

export default App;
