import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
  // 상태변수를 포함하는 state 객체 선언
  state = {
    value: 0,
  }

  // Event Handler 함수
  handleDecrement = () => (
    this.setState({value : this.state.value - 1})
  );

  render() {
    // destructuring assignment
    const {name, age}  = this.props;
    const {value} = this.state;

    return (
      <div>
        <h2>클래스형 컴포넌트</h2>
        <h3>Hello {name} / {age}</h3>
        <p>상태변수 = {value}</p>
        <button onClick={() => (
          this.setState({value : value + 1})  // 함수 안에서 const {value} 해줬기 때문에 value만 써도 됨
        )}>증가</button>
        <button>감소</button>
      </div>
    )
  }
}

// class
MyComponent.defaultProps = {
    name : '리엑트JS'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    age: PropTypes.number.isRequired
};

