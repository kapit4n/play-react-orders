import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Client from "./Client";

import reactLogo from './images/react.svg';
import playLogo from './images/play.svg';
import scalaLogo from './images/scala.png';

import './App.css';

const Tech = ({ match }) => {
  return <div>Current Route: {match.params.val}</div>
};

const Girl = () => {
  return <div>
    <img  height={350} src={'https://i.ytimg.com/vi/ktlQrO2Sifg/maxresdefault.jpg'}/>
  </div>
}

const Car = () => {
  return <div>
    <img  height={350} src={'https://cdn.gearpatrol.com/wp-content/uploads/2019/01/Jeep-Gladiator-Opinion-Gear-Patrol-lead-full-970x650.jpg'}/>
  </div>
}

const Building = () => {
  return <div>
    <img  height={350} src={'https://www.ebrd.com/image/1395263821068.jpg'}/>
  </div>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  async componentDidMount() {
    Client.getSummary(summary => {
      this.setState({
        title: summary.content
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Welcome to {this.state.title}!</h1>
          <nav>
            <Link to="/building" >
              <img  width="50" height="50"  src={scalaLogo} alt="Scala Logo" />
            </Link>
            <Link to="/car" >
              <img width="50" height="50" src={playLogo} alt="Car" />
            </Link>
            <Link to="/girl" >
              <img width="50" height="50" src={reactLogo} className="App-logo" alt="React Logo"/>
            </Link>
          </nav>

          <Route path="/building" component={Building} />
          <Route path="/car" component={Car} />
          <Route path="/girl" component={Girl} />

          <div>
            <h2>Check out the project on GitHub for more information</h2>
            <h3>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/yohangz/scala-play-react-seed">
                scala-play-react-seed
              </a>
            </h3>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
