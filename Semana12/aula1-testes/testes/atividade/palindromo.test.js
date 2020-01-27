import { palindromo } from "./palindromo";

describe("Checa Palíndromo", () => {
  it("Checa se parâmetro é uma string", () => {
    let frase = "asasa";
    let result = palindromo(frase);
    expect(result).toEqual("É uma string");
  });
});
