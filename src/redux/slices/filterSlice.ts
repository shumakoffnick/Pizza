import {createSlice} from '@reduxjs/toolkit'


interface FilterSliceState {
  pageCount: number;
  categoryId: number;
  sort: {
    name: string;
    sortProperty: string
  }
}

const initialState: FilterSliceState = {
  pageCount: 1,
  categoryId: 0,
  sort: {
    name: 'попопулярности',
    sortProperty: 'raiting'
  } 
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action){
      state.categoryId = action.payload
    },
    setSort(state, action){
      state.sort = action.payload
    },
    setPageCount(state, action){
      state.pageCount = action.payload
    },
    
  }
})

export const {setCategoryId, setSort, setPageCount} = filterSlice.actions 
export default filterSlice.reducer