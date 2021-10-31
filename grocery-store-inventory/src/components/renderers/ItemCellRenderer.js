import styles from './CellRenderer.module.scss';

const ItemCellRenderer = ({ value }) => {
  const [name, size] = value;

  return (
    <div className={`${styles['item-cell']}`}>
      {name}&nbsp;({size})
    </div>
  );
};

export default ItemCellRenderer;
