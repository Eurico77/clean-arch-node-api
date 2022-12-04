import Cpf from './Cpf';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
  cpf: Cpf;
  ordersItems: OrderItem[];

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.ordersItems = [];
  }

  addItem(item: Item, quantity: number) {
    this.ordersItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  getTotal() {
    return this.ordersItems.reduce((acc, order) => {
      return (acc += order.getTotal());
    }, 0);
  }
}
