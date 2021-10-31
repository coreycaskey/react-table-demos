import styles from './CellRenderer.module.scss';

const StatusCellRenderer = ({ value }) => {
  // add low stock option -- orange
  let statusClass;

  if (value === 'Low Stock') {
    statusClass = styles.low;
  }
  else if (value === 'Out of Stock') {
    statusClass = styles.unavailable;
  }
  else {
    statusClass = '';
  }

  return (
    <span className={'statusCell ' + statusClass}>
      {value}
    </span>
  );
};

export default StatusCellRenderer;
export { StatusCellRenderer };
