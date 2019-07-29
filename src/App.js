import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import flowers from "./flowers.json"
import FlowerCard from "./components/FlowerCard/FlowerCard";
import Container from "./components/Container/Container";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    message: "Click one of the cards to begin!",
    cards: flowers,
    chosen: [],
    sessionOver: false,
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleCards = () => {
    let shuffled = this.shuffleArray(flowers);
    this.setState({ cards: shuffled });
  }

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      message: 'You guessed correctly!'
    });
    if (newScore > this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    else if (this.state.score === 12) {
      this.setState({
        msg: 'You win!',
        chosen: [],
      });
    }
    this.shuffleCards();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      message: "Click one of the cards to begin!",
      chosen: []
    });
    this.shuffleCards();
  }

  handleCardClick = (id) => {
    if (!this.state.sessionOver){
      if (this.state.chosen.indexOf(id) === -1) {
        this.handleIncrement();
        this.setState({ chosen: [...this.state.chosen, id] });
      } else {
        this.setState({ msg: 'GAME OVER', sessionOver: true })
        this.handleReset();
      }
    }
  }

  render() {
    return (
        <>
        <Nav score={this.state.score} highScore={this.state.highScore} message={this.state.message} />
        <Jumbotron />
        <div className="container">
        <Container>
        {this.state.cards.map(card => (
          <FlowerCard
            handleCardClick={this.handleCardClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
        </Container>
        </div>
        </>
        )
  }
}

export default App;
