import Order from '../src/Order';

describe('Orders', () => {
  it('Deve criar um pedido com cpf válido', () => {
    const cpf = '839.435.452-10';
    const order = new Order(cpf);
    const total = order.getTotal();
    expect(total).toBe(0);
   
  });
});