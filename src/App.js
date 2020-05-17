import React, { Component } from 'react';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList';
import { connect } from "react-redux";
import { newGame, setList } from "./actions";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {started: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const cardKeys = [
        [1,'A'],[2,'A'],[3,'A'],[4,'A'],[5,'A'],[6,'A'],[7,'A'],[8,'A']
      ];

    let cardStates = cardKeys.map( key => {
      return {
        id  : key[0],
        open : false
      };
    })

    cardStates = [...cardStates, ...cardStates];
    this.props.newGame();

    this.props.setList(cardStates);


    this.setState({
      started: true
    });
  }
  renderCardList = () => {
    if (this.state.started)
      return <CardList list={this.props.state.list} />
  }

  componentDidUpdate() {
    if (this.state.started && this.props.state.finish) {
      this.setState({
        started: false
      })
    }
  }

  render() {
    return (
      <div>
        <Button class={(this.state.started) ? "is-hidden" : ""} handleClick={this.handleClick} />
        {!this.props.state.finish && this.renderCardList()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  state: state.cards,
});
const mapDispatchToProps = dispatch => ({
  newGame: () => dispatch(newGame()),
  setList: (list) => dispatch(setList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
