export default class Cpf {
  constructor(private value: string) {
    if(!this.validate(value)) throw new Error('Invalid CPF');
    this.value = value;
  }

  private validate(value: string) {
    if (!value) return false;
    const cpf = this.clean(this.value);
    if (!this.isValidLength(cpf)) return false;
    if (this.isBlocked(cpf)) return false;
    const firstDigit = this.calculateDigit(cpf, 10);
    const secondDigit = this.calculateDigit(cpf, 11);
    const actualDigit = this.extractActualDigit(cpf);
    const calculatedDigit = `${firstDigit}${secondDigit}`;
    return actualDigit === calculatedDigit;
  }

  private clean(cpf: string) {
    return cpf.replace(/\D/g, '');
  }

  private isValidLength(cpf: string) {
    return cpf.length === 11;
  }

  private extractActualDigit(cpf: string) {
    return cpf.slice(9);
  }

  private isBlocked(cpf: string) {
    const [firstDigit] = cpf;
    return [...cpf].every((digit) => digit === firstDigit);
  }

  private calculateDigit(cpf: string, factor: number) {
    const result = Array.from(cpf)
      .map(Number)
      .reduce((sum, digit) => {
        if (factor > 1) sum += digit * factor--;
        return sum % 11;
      }, 0);

    return result < 2 ? 0 : 11 - result;
  }
}