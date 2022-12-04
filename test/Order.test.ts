import Item from '../src/Item';
import Order from '../src/Order';

describe('Orders', () => {
  it('Deve criar um pedido com cpf válido', () => {
    const cpf = '839.435.452-10';
    const order = new Order(cpf);
    const total = order.getTotal();
    expect(total).toBe(0);
  });

  it('Deve tentar criar pedido com cpf invalido', () => {
    const cpf = '111.111.111-11';
    expect(() => new Order(cpf)).toThrow(new Error('Invalid CPF'));
  });

  it('Deve criar um pedido com 3 itens', () => {
    const cpf = '839.435.452-10';
    const order = new Order(cpf);
    order.addItem(new Item(1, 'Música', 'CD', 30), 3);
    order.addItem(new Item(2, 'Vídeo', 'DVD', 60), 2);
    order.addItem(new Item(3, 'Música', 'DISCO', 90), 3);
    const total = order.getTotal();
    expect(total).toBe(480);
  });
});
