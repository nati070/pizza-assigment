enum Toppings {
  CHESS,
  MEET,
  TOMATOS,
}

class Pizza {
  private toppings: Toppings[];
  private maxToping: number = 0;
  public index: number;
  constructor(toppings: Toppings[], index: number) {
    this.toppings = toppings;
    this.index = index;
  }

  setTooping() {
    this.maxToping++;
    console.log("start topping :" + this.index );
    setTimeout(() => {
      console.log("Topping done!" + this.index);
      this.maxToping--;
      this.toppings.pop();
      this.HandleTopings();
    }, 4000);
    this.HandleTopings();
  }
  HandleTopings() {
    if (this.maxToping < 2 && this.toppings.length > 0) {
      this.setTooping();
    }
  }
}

export default Pizza;
