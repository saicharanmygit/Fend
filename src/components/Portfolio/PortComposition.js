import React from "react";
import "./PortComposition.css";
import Navbar from "../Navbar/Navbar";
const PortComposition = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="c1">
        <h1>Portfolio Composition</h1>
        <div className="c2">
          <label className="l1">Test</label>
        </div>
        <table>
          <tr bgcolor="#FFC300">
            <th>S.no</th>
            <th>Security Name</th>
            <th>Asset class</th>
            <th>SubAsset class</th>
            <th>Equity</th>
            <th>Security Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div className="sub">
          <button className="submit" type="submit">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortComposition;
