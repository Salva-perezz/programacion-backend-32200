export default class Superficie {
  static cuadrado(value: number) {
    return value * value;
  }

  static circulo(value: number) {
    return value * value * 3.14;
  }

  static rectangulo(largo: number, ancho: number) {
    return ancho * largo;
  }
}
