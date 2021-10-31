export const discountFilter = (rows, id, filterValue) => {
  console.log(rows);
  console.log(id);
  console.log(filterValue);

  if (filterValue) {
    return rows.filter((row) => {
      return row.original.discount > 0;
    });
  }
  else {
    return rows;
  }
};
