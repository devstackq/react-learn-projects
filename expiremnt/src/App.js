import React from 'react';
import Test from './Test'

class App extends React.Component {
  state = {
    name: '',
    age: 0,
    open: false
  }

  // coursehunter, practice props, stae, func, change state, logics and etc
  // state, data, send child, and show him ,
  // child comp, method, which change state, and state,
  // if state change, change ourselves UI component
  // 2 case if state change, 1 component -> change UI, other comp

  // if styleToggle true -> change child components, style
  // send func change style value, default - card, when user click  btn,
  //classname- changed - then change style


  render() {
    return (
      <div>
        < Test 
          name = {this.state.name}
        />
</div>
    );
  }
}

export default App;
