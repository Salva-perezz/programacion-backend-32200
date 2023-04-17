export default class Response {
  constructor(data, message, error) {
    this.data = data;
    this.message = message || "";
    this.error = error || false;
  }
}
