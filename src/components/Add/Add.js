import React from "react";
import './Add.css';
const Add = () => {
    return (
        <nav className="new">
            <div className="container">
                <form >
                    <div>
                        <div className="form-group">
                            <span>
                                Portfolio Name
                            </span>
                            <input type='text' placeholder="enter portfolio name" />
                        </div>
                        <div className="form-group">
                            <span>
                                Base Currency
                            </span>
                            <input type='text' placeholder="INR" />
                        </div>
                        <div className="form-group">
                            <span>
                                Exchange
                            </span>
                            <input type='text' placeholder="NSE" />
                        </div>
                        <div className="form-group">
                            <span>
                                Defaul Benchmark
                            </span>
                            <input type='text' placeholder="Nifty" />
                        </div>
                        <div className="form-group">
                            <span>
                                Fund Manager Name
                            </span>
                            <input type='text' placeholder="enter Fund Manager name" />
                        </div>
                    </div>

                    <div>
                        <div className="form-group">
                            <span>
                                Initial Investment
                            </span>
                            <input type='text' placeholder="500crores" />
                        </div>
                        <div className="form-group">
                            <span>
                                Rebalancing Frequency
                            </span>
                            <input type='text' placeholder="daily/monthly/quarterly" />
                        </div>
                        <div className="form-group">
                            <span>
                                Initial Investment
                            </span>
                            <input type='text' placeholder="500crores" />
                        </div>
                        <div className="form-group">
                            <span>
                                Themes
                            </span>
                            <div className="themes">
                                <select name="themes">
                                    <option value="conservative">Conservative</option>
                                    <option value="moderatelyconservative">Moderately Conservative</option>
                                    <option value="aggressive">Aggressive</option>
                                    <option value="moderatelyaggressive">Moderately Aggressive</option>
                                    <option value="veryaggressive">Very Aggressive</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <input type='button' value="submit" />
                    </div>
                </form>

            </div>
        </nav>
    )
}
export default Add;