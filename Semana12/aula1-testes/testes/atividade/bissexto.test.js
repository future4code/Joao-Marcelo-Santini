import { anoBissexto } from "./bissexto";

describe("Testar a função de ano bissexto", () => {
  it("Teste se a função pode ser chamada", () => {
    anoBissexto();
  });

  it("Deve idenficiar que 2015 não é um ano bissexto", () => {
    const result = anoBissexto(2015);
    expect(result).toEqual(false);
  });
});
