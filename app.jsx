import * as React from 'react';
import * as ReactDom from 'react-dom';

console.log(
  '__REACT_DEVTOOLS_GLOBAL_HOOK__:',
  typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__
);

console.log(React);
console.log(ReactDom);

class Hello extends React.Component {
  render() {
    return <p>Hello {this.props.name}</p>;
  }
}

ReactDom.render(<Hello name="World" />, document.getElementById('root'));
