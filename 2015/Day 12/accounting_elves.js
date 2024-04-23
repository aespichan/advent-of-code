class AccountingElves {
  constructor(input) {
    this.data = JSON.parse(input);
  }

  deepBalance(data, ignore) {
    if (typeof data === "string") return 0;
    if (typeof data === "number") return data;

    if (!Array.isArray(data)) {
      data = Object.values(data);
      if (ignore && data.some((item) => item === ignore)) return 0;
    }

    return data.reduce(
      (balance, item) => balance + this.deepBalance(item, ignore),
      0
    );
  }

  getBalance({ ignore } = {}) {
    return this.deepBalance(this.data, ignore);
  }
}

export default AccountingElves;
