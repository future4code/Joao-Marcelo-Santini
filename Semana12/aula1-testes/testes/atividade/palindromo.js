export function palindromo(frase) {
  if (typeof frase !== undefined) {
    let variableType = typeof frase;
    if (variableType === "string") {
      return "É uma string";
    }
  } else {
    return "Insira uma palavra/frase";
  }
}
