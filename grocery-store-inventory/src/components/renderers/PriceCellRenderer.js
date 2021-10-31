import styles from './CellRenderer.module.scss';

const PriceCellRenderer = ({ value }) => {
  const [price, discount] = value;
  const hasDiscount = discount > 0 ? true : false;

  return (
    <p>
      <span className={hasDiscount ? styles.strikethrough : ''}>${price.toFixed(2)}</span>
      &nbsp;
      {hasDiscount && `$${(price - (price * discount)).toFixed(2)}`}
    </p>
  );
};

export default PriceCellRenderer;
export { PriceCellRenderer };
