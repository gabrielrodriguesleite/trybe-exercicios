const myRemove = require("./myRemove");

describe("Testes da função myRemove()", _ => {
  // o it não pode usar o _ =>, só aceita () =>
  it("Verifica se existe a função myRemove()", () => {
    expect(typeof(myRemove) == 'function').toBeTruthy();
  });

  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]);
  });

  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
  });
  
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1,2,3,4]);
  });

});
