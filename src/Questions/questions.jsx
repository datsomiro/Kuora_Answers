import React from "react";
import Answer from "../Answers/answers.jsx";
import "./style.scss";

export default class Question extends React.Component {
    state = {
        answers: [
            { user: 'baked_turtle', text: 'Your question is stupid.' },
            { user: 'naked_eye', text: 'Chill out, man!' },
            { user: 'faked_icecream', text: 'Holy Moly!' },
        ],
    }

    render() {
        return (
            <div className="question">
                <div className="question__title">{this.props.title}</div>
                <div className="question__text">{this.props.text}</div>

                <div className="answers-list">
                    {
                        this.state.answers.map((answer) => (
                            <Answer user={answer.user} text={answer.text} />
                        ))
                    }
                </div>
            </div>
        );
    }
};
