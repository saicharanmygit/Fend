import React from "react";
import PortHeader from "./PortHeader";


const NewData=(props)=>{
    const savePortfolioDataHandler=(enteredPortfolioData)=>{
        const portfolioData={
            ...enteredPortfolioData,
            id:Math.random().toString(),

        };
        props.onAddData(portfolioData);
    };
    return(
        <div>
            <PortHeader onSavePortfolioData={savePortfolioDataHandler}/>
        </div>
    )
}
export default NewData;