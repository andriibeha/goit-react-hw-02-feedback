import s from "./App.module.css"
import React, { Component } from "react";

class App extends Component { 
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    clickGood = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1
            }
        } )
    };

    clickNeutral = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1
            }
        } )
    };

     clickBad = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1
            }
        } )
    };

    countTotalFeedback = () => { 
        return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage = () => { 
        let total = this.state.good + this.state.neutral + this.state.bad
        if (total === 0) { 
            return 0 
        } else { 
            return  Math.trunc((this.state.good / total) * 100 )
        }
    }  

    render() { 
        return  <div>
            <h1>Please leave feedback</h1>
            <ul className="list">
                <li className="item">
                    <button type="button" className="button" onClick={this.clickGood}>
                        Good
                    </button>
                </li>
                <li className="item">
                    <button type="button" className="button" onClick={this.clickNeutral}>Neutral</button>
                </li>
                <li className="item">
                    <button type="button" className="button" onClick={this.clickBad}>Bad</button>
                </li>
            </ul>

            <h2>Statistics</h2>
            <ul className="list">
                <li className="item">Good: {this.state.good}</li>
                <li className="item">Neutral: {this.state.neutral}</li>
                <li className="item">Bad: {this.state.bad}</li>
                <li className="item">Total: {this.countTotalFeedback()}</li>
                <li className="item">Positive Feedback: {this.countPositiveFeedbackPercentage()} %</li>
            </ul>
        </div>
       
    }
};

export default App;
