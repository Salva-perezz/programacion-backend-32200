export default class Perimetro {
  static cuadrado(value: number) {
    return value * 4;
  }

  static circulo(value: number) {
    return value * 2 * 3.14;
  }

  static rectangulo(largo: number, ancho: number) {
    return (largo + ancho) * 2;
  }
}
