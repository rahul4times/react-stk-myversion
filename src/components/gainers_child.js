import React, { Component } from 'react';

class GainersTable extends Component{
  render(){

    const red = { color: '#e62e00' };
    const green = { color: '#34ad16' };

    const gainer = this.props.gainer;

    const colorStyle = gainer.change < 0 ? red : green;

    return(

        <tr>
          <td>
            {gainer.symbol} <br/>
            {gainer.companyName}
          </td>
          <td style={colorStyle}>
            {gainer.change.toFixed(2)} ({(gainer.changePercent * 100).toFixed(2)}%)
          </td>
          <td>{gainer.latestPrice}</td>
        </tr>

    );
  }
}
export default GainersTable;
