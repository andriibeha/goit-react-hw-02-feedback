import React, { Component } from "react";

import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions ";
import Section from "./Section ";
import Notification  from "./Notification "


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
        return <div>
            <Section title={"Please leave feedback"}>
                <FeedbackOptions
                        clickGood={this.clickGood}
                        clickNeutral={this.clickNeutral}
                        clickBad={this.clickBad}
                    />
            </Section>

            <Section title={"Statistics"}>
                {this.countTotalFeedback() === 0 ?
                    (
                        <Notification
                            message={"There is no feedback"}
                        />
                     ):
                    ( 
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                         />
                     )
                }
            </Section>
        </div>
       
    }
};

export default App;
