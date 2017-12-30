import React, { Component } from 'react';
import { connect } from 'react-redux';
import GainersTable from './gainers_child';


class Gainers extends Component{
  render(){
    const topGainersList = this.props.gainers ? this.props.gainers.map((gainer, i) => {
      return(
        <GainersTable key={i} gainer={gainer}/>
      )
    }) : "Loading...";
    return(
      <div>
        <h3>TOP GAINERS</h3>
        <table>
          <thead>
            <tr>
              <th>SYMBOL</th>
              <th>CHANGE</th>
              <th>LATEST PRICE</th>
            </tr>
          </thead>
          <tbody>
            {topGainersList}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state, props){
  return{
    gainers: state.gainers
  }
}
export default connect(mapStateToProps, null)(Gainers);
