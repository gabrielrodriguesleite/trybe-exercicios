const myFizzBuzz = require('./myFizzBuzz')

describe("Testes para a função myFizzBuzz", () => {
  it("Teste se a função myFizzBuzz existe", () => {
    expect(typeof(myFizzBuzz)).toBe('function')
  });

  it("Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado",
  () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
    
  it("Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado",
  () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it("Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado", 
  () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it("Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno \
é o esperado", 
  () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it("Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado",
  () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
});