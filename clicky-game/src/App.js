import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Card from "./components/Card";
import Footer from "./components/Footer"
import cards from "./cards.json";


class App extends Component {
  state = {
    count: 0,
    topScore: 0,
    instruction: "Click on a couch to start!",
    background: "white",
    cards
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };


  topScore = () => {
    if (this.state.count > this.state.topScore) {
      this.setState({ topScore: this.state.count });
    };
  };


  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };


  cardClick = id => {
    this.setState({
      instruction: "Great pick!"
    });

    cards.forEach(card => {
      if (card.id === id) {
        if (card.clicked === false) {
          card.clicked = true;
          this.handleIncrement();
        }
        else {
          this.topScore();
          this.setState({
            instruction: "Oops! Start over.",
            count: 0,
            background: "red"
          });

          cards.forEach(card => {
            card.clicked = false;
          });
          setTimeout(() => {
            this.setState({
              background: "white"
            })
          }, 2000);
        };
      };
    });

    this.shuffleArray(cards);

  };


  render() {
    return (
      <div>
        <Nav
          count={this.state.count}
          topScore={this.state.topScore}
          instruction={this.state.instruction}
        />
        <Jumbotron />
        <Container
          /* background={this.state.background} */
        >
          {this.state.cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              image={card.image}
              clicked={card.clicked}
              cardClick={this.cardClick}
              background={this.state.background}
            />
          ))}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default App;
