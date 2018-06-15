import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Card from "./components/Card";
import cards from "./cards.json";


class App extends Component {
  state = {
    cards
  };

  clicky = id => {
    const cards = this.state.cards.filter(card => card.id === id);

  };


  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Container>
      </div>
    )
  }
}

export default App;
