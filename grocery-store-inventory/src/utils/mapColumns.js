import DiscountCellRenderer from '../components/renderers/DiscountCellRenderer';
import GenericCellRenderer from '../components/renderers/GenericCellRenderer';
import ItemCellRenderer from '../components/renderers/ItemCellRenderer';
import PriceCellRenderer from '../components/renderers/PriceCellRenderer';
import StatusCellRenderer from '../components/renderers/StatusCellRenderer';

const headers = ['Item', 'Price', 'Discount', 'Brand', 'Category', 'Status'];

const getCellRenderer = (name) => {
  switch (name) {
    case 'Item':
      return ItemCellRenderer;
    case 'Price':
      return PriceCellRenderer;
    case 'Status':
      return StatusCellRenderer;
    case 'Discount':
      return DiscountCellRenderer;
    case 'Brand':
    case 'Category':
    default:
      return GenericCellRenderer;
  }
};

/*
  The `accessor` property in each Column object can either be a string or a function.

  A string accessor corresponds to a key in the Row objects (where a Row refers to a data object you've passed in).

  column {
    ...
    accessor: 'someAccessor',
    ...
  }

  data {
    ...
    someAccessor: 'someValue',
    ...
  }

  A function accessor takes the current Row object as an argument and returns the property (or properties, if you
  need to use multiple) you want to access on that Row.

  column {
    ...
    accessor: (row) => [row.keyOne, row.keyTwo],
    ...
  }

  data {
    ...
    keyOne: 'someValue',
    keyTwo: 'someValue',
    ...
  }
*/

export const mapColumns = () => {
  return headers.map((header) => {
    return {
      Header: header,
      accessor: header.toLowerCase(),
      Cell: getCellRenderer(header),
    };
  });
};
