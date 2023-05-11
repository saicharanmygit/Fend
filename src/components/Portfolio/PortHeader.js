import React from "react";
import "./PortHeader.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PortHeader = (props) => {
  const [portfolioName, setPortfolioName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("");
  const [initialInvestment, setInitialInvestment] = useState("");
  const [currInvestment, setCurrInvestment] = useState("");
  const [exchange, setExchange] = useState("");
  const [rebalancingFrequency, setRebalancingFrequency] = useState("");
  const [benchmark, setBenchmark] = useState("");
  const [status, setStatus] = useState("");
  const [themes, setThemes] = useState("");

  const portfolioNameChangeHandler = (event) => {
    setPortfolioName(event.target.value);
  };

  const managerNameChangeHandler = (event) => {
    setManagerName(event.target.value);
  };

  const baseCurrencyChangeHandler = (event) => {
    setBaseCurrency(event.target.value);
  };

  const initialInvestmentChangeHandler = (event) => {
    setInitialInvestment(event.target.value);
  };

  const currInvestmentChangeHandler = (event) => {
    setCurrInvestment(event.target.value);
  };

  const exchangeChangeHandler = (event) => {
    setExchange(event.target.value);
  };

  const rebalancingFrequencyChangeHandler = (event) => {
    setRebalancingFrequency(event.target.value);
  };

  const benchmarkChangeHandler = (event) => {
    setBenchmark(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setStatus(event.target.value);
  };

  const themesChangeHandler = (event) => {
    setThemes(event.target.value);
    // props.onChangeFitler(event.target.value);
  };
  const navigate=useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();

    const portfolioData = {
      name: portfolioName,
      mName: managerName,
      currency: baseCurrency,
      inInv: initialInvestment,
      currInv: currInvestment,
      exchange: exchange,
      reFreq: rebalancingFrequency,
      bench: benchmark,
      status: status,
      theme: themes,
    };
    props.onSavePortfolioData(portfolioData);
    setPortfolioName("");
    setManagerName("");
    setBaseCurrency("");
    setInitialInvestment("");
    setCurrInvestment("");
    setExchange("");
    setRebalancingFrequency("");
    setBenchmark("");
    setStatus("");
    setThemes("");
  };
  // function kjr(){
  //   let ob = {
  //     portfolioName: portfolioName,

  //   }
  // }

  return (
    <div>
      <div>
        <Navbar/>
    </div>
    <nav className="tab" onSubmit={submitHandler}>
      <div className="container">
        <div className="wrapper">
          <nav
            class="navbar navbar-expand-sm bg-light justify-content-center"
            className="inter">
            <ul class="navbar-nav">
              <li class="nav-item " className="left">
                <a class="nav-link " href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="35"
                    fill="currentColor"
                    class="bi bi-arrow-left-circle"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                    />
                  </svg>
                </a>
              </li>
              <li class="nav-item">
                <h2>Portfolio Header</h2>
              </li>
              <li class="nav-item" className="right">
                <a class="nav-link " href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="35"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <div className="contact">
            <form>
              <p>
                <p className="p1">Portfolio Name</p>
                <input
                  onChange={portfolioNameChangeHandler}
                  value={portfolioName}
                  type="text"
                  placeholder="Enter portfolio name"
                  name="Portfolio name"
                />
              </p>
              <p>
                <p className="p2"> Fund Manager</p>
                <input
                  onChange={managerNameChangeHandler}
                  value={managerName}
                  type="text"
                  placeholder="Enter Fund manager name"
                  name="Fundmanager name"
                />
              </p>
              <p>
                <p className="p3"> Base Currency</p>
                <input
                  onChange={baseCurrencyChangeHandler}
                  value={baseCurrency}
                  type="text"
                  placeholder="INR"
                  name="Base Currency"
                />
              </p>
              <p>
                <p className="p4">Initial Investment</p>
                <input
                  onChange={initialInvestmentChangeHandler}
                  value={initialInvestment}
                  type="text"
                  placeholder="500 CRORES"
                  name="Initial Investment"
                />
              </p>
              <p>
                <p className="p5">Current value of Investment</p>
                <input
                  onChange={currInvestmentChangeHandler}
                  value={currInvestment}
                  type="text"
                  placeholder="500 CRORES"
                  name="Current Investment"
                />
              </p>
              <p>
                <p className="p6">Exchange</p>
                <input
                  onChange={exchangeChangeHandler}
                  value={exchange}
                  type="text"
                  placeholder="NSE"
                  name="Exchange"
                />
              </p>
              <p>
                <p className="p7">Rebalancing Frequency</p>
                <select
                className="Refreq"
                  onChange={rebalancingFrequencyChangeHandler}
                  value={props.selected}
                  name="Rebalancing Frequency">
                  <option value="daily">DAILY</option>
                  <option value="monthly">MONTHLY</option>
                  <option value="yearly">YEARLY</option>
                </select>
              </p>
              <p>
                <p className="p8">Default Benchmark</p>
                <input
                  onChange={benchmarkChangeHandler}
                  value={benchmark}
                  type="text"
                  placeholder="NIFTY 50"
                  name="Benchmark"
                />
              </p>
              <p>
                <p className="p9">Status</p>
                <input
                  onChange={statusChangeHandler}
                  value={status}
                  type="text"
                  placeholder="Display"
                  name="Status"
                />
              </p>
              <p>
                <p className="Themes">Themes</p>
                <div className="drop">
                  <select
                    name="Themes"
                    onChange={themesChangeHandler}
                    value={props.selected}>
                    <option value="Conservative">Conservative</option>
                    <option value="ModeratelyConservative">
                      ModeratelyConservative
                    </option>
                    <option value="Aggressive">Aggressive</option>
                    <option value="ModeratelyAggressive">
                      ModeratelyAggressive
                    </option>
                    <option value="VeryAggressive">VeryAggressive</option>
                  </select>
                </div>
              </p>
              <p className="Full">
                <button className="submit" type="submit" onClick={()=>navigate('/portcomposition')}>
                  SUBMIT
                </button>
                &nbsp;&nbsp;
                <button className="reset" type="reset">
                  RESET
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </nav>
    </div>

  );
};

export default PortHeader;

// constructor(props)
// {
//     super(props);
//     this.state={
//         portfolioName:"",
//         baseCurrency:"",
//         exchange:"",
//         benchmark:"",
//         investmentTheme:"",
//         fundManagerName:"",
//         initialInvestment:"",
//         currentValue:"",
//         rebalancingFrequency:"",
//         status:""

//     }
// }
// changePortfolioNameHandler=(event)=>{
//     this.setState({portfolioName:event.target.value});
// }
// changeBaseCurrencyHandler=(event)=>{
//     this.setState({baseCurrency:event.target.value});
// }
// changeExchangeHandler=(event)=>{
//     this.setState({exchange:event.target.value});
// }
// changeBenchmarkHandler=(event)=>{
//     this.setState({benchmark:event.target.value});
// }
// changeFundmangerNameHandler=(event)=>{
//     this.setStaste({fundManagerName:event.target.value})
// }
// changeInitialInvestment=(event)=>{
//     this.setState({initialInvestment:event.target.value})
// }
// changeInvestmentThemeHandler=(event)=>{
//     this.setState({investmentTheme:event.target.value});
// }
// changeCurrentValueHandler=(event)=>{
//     this.setState({currentValue:event.target.value});
// }
// changeRebalancingFrequencyHandler=(event)=>{
//     this.setState({rebalancingFrequency:event.target.value});
// }
// changeStatusHandler=(event)=>{
//     this.setState({status:event.target.value});
// }
// savePortfolio=(event)=>{
//     event.preventDefault();
//     let portfolio={
//         portfolioName:this.state.portfolioName,
//         baseCurrency:this.state.baseCurrency,
//         exchange:this.state.exchange,
//         benchmark:this.state.benchmark,
//         fundManagerName:this.state.fundManagerName,
//         initialInvestment:this.state.initialInvestment,
//         investmentTheme:this.state.investmentTheme,
//         currentValue:this.state.currentValue,
//         rebalancingFrequency:this.state.rebalancingFrequency,
//         status:this.state.status

//     }
//     HeaderService.addPortfolio(portfolio).then((Response)=>{
//         this.setState({status:"Portfolio added successfullly"})
//     })

// }
