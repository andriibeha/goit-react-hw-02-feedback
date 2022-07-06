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
    };

    handleClick = (e) => { 
        const { name } = e.target
        
        this.setState((prevState) => {
            return {
                [name]: prevState[name] + 1
            }
        })
    }

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
                        onClick={this.handleClick}
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
