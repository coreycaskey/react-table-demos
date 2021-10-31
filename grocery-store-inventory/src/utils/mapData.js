import inventory from '../data/inventory.json';

export const mapData = () => {
  return inventory.map((item) => {
    return {
      item: [item.name, item.size],
      discount: item.discount,
      price: [item.price, item.discount],
      brand: item.brand,
      category: item.category,
      status: item.status,
    };
  });
};
