import styles from './CellRenderer.module.scss';

export const DiscountCellRenderer = ({ value }) => {
  return (
    <span className={value > 0 ? styles.discount : ''}>
      {value > 0 ? parseFloat((value * 100).toFixed(2)) + '%' : null}
    </span>
  );
};

export default DiscountCellRenderer;
