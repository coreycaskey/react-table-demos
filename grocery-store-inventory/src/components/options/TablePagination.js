// import styles from './Table.module.scss';

export const TablePagination = () => {
  return (
    <div>
      <p>Page 1 of 4</p>
      <button type="button" onClick={(e) => { e.preventDefault() }}>{'<'}</button>
      <button type="button" onClick={(e) => { e.preventDefault() }}>{'>'}</button>
    </div>
  );
};

export default TablePagination;
