import React from "react";
import "./style.scss";

export default class Answer extends React.Component {
    render() {
        return (
            <div className="answer">
                <div className="answer__user">{this.props.user}</div>
                <div className="answer__text">{this.props.text}</div>
            </div>
        );
    }
};
