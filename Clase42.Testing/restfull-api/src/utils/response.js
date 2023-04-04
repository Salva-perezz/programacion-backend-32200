export default class Response {
  constructor(data, message, error, errorCode) {
    this.data = data || null;
    this.message = message || "";
    this.error = error || false;
    this.errorCode = errorCode || 0;
  }
}
