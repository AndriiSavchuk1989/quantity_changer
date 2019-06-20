import React from "react";
import QuantityChanger from "./QuantityChanger";

class QuantityChangerComponent extends React.Component {
  constructor() {
    super();
    this.state = { quantity: 0 };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    this.setState({ quantity: this.state.quantity - 1 });
  }

  increase() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  render() {
    return (
      <QuantityChanger.Wrapper>
        <QuantityChanger.DecreaseButton onClick={this.decrease}>
          -
        </QuantityChanger.DecreaseButton>
        <QuantityChanger.QuantityView>
          {this.state.quantity}
        </QuantityChanger.QuantityView>
        <QuantityChanger.IncreaseButton onClick={this.increase}>
          +
        </QuantityChanger.IncreaseButton>
      </QuantityChanger.Wrapper>
    );
  }
}

export default QuantityChangerComponent;
