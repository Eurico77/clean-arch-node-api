import { Coupon } from './Coupon';
import Cpf from './Cpf';
import Item from './Item';
import OrderItem from './OrderItem';

export default class Order {
  cpf: Cpf;
  ordersItems: OrderItem[];
  coupon: Coupon | undefined;

  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.ordersItems = [];
  }

  addItem(item: Item, quantity: number) {
    this.ordersItems.push(new OrderItem(item.idItem, item.price, quantity));
  }

  addCoupon(coupon: Coupon) {
    this.coupon = coupon;
  }

  getTotal() {
    let total = this.ordersItems.reduce((acc, order) => {
      return (acc += order.getTotal());
    }, 0);
  
    if(this.coupon) {
      total -= (total * this.coupon.percentage) / 100;
    }
    return total;
  }
}
