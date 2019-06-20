import React from "react";
import QuantityChanger from "./QuantityChanger";

class QuantityChangerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.product.quantity,
      id: props.product.id,
      disabled: false
    };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    if (this.state.quantity === 1) {
      this.setState({ disabled: !this.state.disabled });
    }
    if (this.state.quantity >= 1) {
      this.setState({
        quantity: this.state.quantity - 1,
        disabled: false
      });
      console.log(
        `you have decreased quantity for product with ${this.state.id}`
      );
    }
  }

  increase() {
    this.setState({ quantity: this.state.quantity + 1 });
    console.log(
      `you have increased quantity for product with ${this.state.id}`
    );
  }

  render() {
    return (
      <QuantityChanger.Wrapper>
        <QuantityChanger.DecreaseButton
          onClick={this.decrease}
          disabled={this.state.disabled ? "disabled" : ""}
        >
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
