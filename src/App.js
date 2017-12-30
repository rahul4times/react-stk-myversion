import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTopGainers } from './actions/topgainers';

import Gainers from './components/gainers';

class App extends Component {

  componentDidMount(){
    this.props.getTopGainers();
  }

  render() {

    return (
      <div className="App">
        <Gainers />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    getTopGainers: bindActionCreators(getTopGainers, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
