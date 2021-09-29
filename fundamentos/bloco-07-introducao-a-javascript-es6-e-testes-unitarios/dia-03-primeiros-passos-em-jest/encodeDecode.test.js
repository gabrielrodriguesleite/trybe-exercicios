const {decode, encode} = require("./encodeDecode");

describe("Testa as funções encode e decode", () => {
  
  // Teste se encode e decode são funções;
  it("Testa se existe a função encode",() => {
    expect(typeof(encode)).toBe('function');
  });

  it("Testa se existe a função decode",() => {
    expect(typeof(decode)).toBe('function');
  });

  // Para a função encode teste se as vogais a, e, i, o, u são convertidas em 
  // 1, 2, 3, 4 e 5, respectivamente;
  it("Para a função encode teste se as vogais a, e, i, o, u são convertidas em \
1, 2, 3, 4 e 5, respectivamente.",() => {
    expect(encode('aeiou')).toBe('12345');
  });

  // Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas 
  // vogais a, e, i, o, u , respectivamente;
  it("Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos \
nas vogais a, e, i, o, u , respectivamente.",() => {
    expect(decode('12345')).toBe('aeiou');
  });

  // Teste se as demais letras/números não são convertidos para cada caso;
  it("Teste se as demais letras/números não são convertidos para cada caso.",() => {
    expect(encode('aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVxXzZkKwWyY')).toBe(
      '11bbccdd22ffgghh33jjkkllmmnn44ppqqrrsstt55vvxxzzkkwwyy');
  });

  // Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a
  // string passada como parâmetro.
  it("Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que \
a string passada como parâmetro.",() => {
    expect(decode('11bbccdd22ffgghh33jjkkllmmnn44ppqqrrsstt55vvxxzzkkwwyy')).toBe(
      'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVxXzZkKwWyY'.toLocaleLowerCase());
  });
});
