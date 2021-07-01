import { Component } from "react";
import "./App.css";
import CardList from "./CardList/CardList";
import Search from "./Search/Search";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monstorsRobot: [],
      searchField: ``,
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  // class METHOD.
  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  // life cylcel method.
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => this.setState({ monstorsRobot: users }));
  }

  render() {
    const { monstorsRobot, searchField } = this.state;
    const filteredMonsters = monstorsRobot.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Robot Monsters</h1>
        <Search placeholder="search" handleChange={this.handleChange} />
        <CardList monstorsRobot={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
