export default class NewHealth {
  val = "A";
  constructor() {
    this.user = "";
    this.userEmail = "";
  }

  FineUser(userId) {
    this.user = userId == 1 ? "jean" : "not fined";
  }
}
