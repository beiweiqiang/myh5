import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { connect } from 'react-redux';

import { increase, decrease } from '../actions';

const HomePage = ({ number, increase, decrease }) => (
  <Card className="container">
    <CardTitle title="请登录" />
    <div>
      Some state changes:
      {number}
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  </Card>
);

// export default HomePage;

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(HomePage);
