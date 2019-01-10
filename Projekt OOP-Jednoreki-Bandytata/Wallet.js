class Wallet {
  constructor(money) {
    let _money = money;

    //pobieranie aktualnej zawartości portfela:
    this.getWalletValue = () => _money;

    //sprawdzenie czy użytkownik ma wymaganą ilość środków *by grać o zadaną stawkę - value)

    this.checkCanPlay = value => _money >= value;

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("nieprawidłowy typ działania");
        }
      } else {
        console.log(typeof value);
        throw new Error("nieprawidłowa liczba");
      }
    };
  }
}

// const wallet = new Wallet(100);
