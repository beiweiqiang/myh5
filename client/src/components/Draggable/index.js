import React from 'react';
import Draggable from 'react-draggable';

export default class App extends React.Component {

  render() {
    return (
      <Draggable>
        <div>This readme is really dragging on...</div>
      </Draggable>
    );
  }
}

// ReactDOM.render(<App/>, document.body);
