import React, {FC} from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

type PaginationType = {
  value: number;
  onChangePage: any;
}
const Pagination: FC<PaginationType> = ({ value ,onChangePage}) => {
  return (
    <>
    <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        forcePage={value - 1}
        
      />
    </>
  )
}

export default Pagination