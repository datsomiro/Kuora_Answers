import React from 'react';

import ReactDOM from 'react-dom';
 
import Question from './Questions/questions.jsx';

import './style.scss';

import './index.html';



class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Kuora</h1>
        <div className="question-list">
          <Question
            title="The question about cleanliness"
            text="I heard that in the Middle Ages, nobles used to wipe their butts with ducklings. Is that right?"
          />
          <Question
            title="The curiosity about atheists"
            text="During airplane turbulence, how do atheists keep calm?"
          />
          <Question
            title="The smart question"
            text="If Einstein was so smart, why did he die?"
          />
        </div>
      </div>
    );
  }
}
const appElm = document.querySelector("#app");
ReactDOM.render(<App />, appElm);
