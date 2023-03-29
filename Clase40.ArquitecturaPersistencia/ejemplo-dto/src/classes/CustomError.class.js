export default class CustomError {
  constructor(statuCode, message) {
    (this.statusCode = statuCode), (this.message = message);
  }
}
