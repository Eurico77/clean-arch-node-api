import Cpf from '../src/Cpf';

describe('CPF', () => {
  it('Deve validar um cpf', () => {
    const isValid = new Cpf('935.411.347-80');
    expect(isValid).toBeTruthy();
  });
  
  it('Deve tentar validar um cpf inválido', () => {
    expect(() => new Cpf('123.456.789-99')).toThrow(new Error('Invalid CPF'));
  });
  
  it('Não deve validar o cpf todos os números iguais', () => {
    expect(() => new Cpf('111.111.111-11')).toThrow(new Error('Invalid CPF'));
  });
  
  it('Não deve validar o cpf com um número aleatório)', () => {
    expect(() => new Cpf('123.456.789-00')).toThrow(new Error('Invalid CPF'));
  });
  
  it('Não deve validar o cpf além do limite', () => {
    expect(() => new Cpf('123.456.789-00000000')).toThrow(
      new Error('Invalid CPF')
    );
  });
  
  it('Não deve validar o cpf abaixo do limite', () => {
    expect(() => new Cpf('123.456')).toThrow(new Error('Invalid CPF'));
  });
  
  it('Não deve validar o cpf com letras', function () {
    expect(() => new Cpf('987a654b321c00'));
  });
  
});
