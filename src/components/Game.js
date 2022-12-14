import React, { Component } from 'react'
import Board from './Board'

export default class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      history: [{
        squares:Array(9).fill(null),
      }],
      xIsNext:true,
    }
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];//It can be squares[b or c] because they are same
      }
    }
    return null;
  }

    handleClick(i){
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice() //Copy of an array
      
      if(this.calculateWinner(squares) || squares[i]){
        return;}
        //If any of these different from null
        // it works after this code
        squares[i] = this.state.xIsNext ? `X` : `O`;
        this.setState({
          history:history.concat([{squares: squares,}]),
          xIsNext: !this.state.xIsNext,
        
        });

        

    }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = this.calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Current player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
            <Board
            squares={current.squares}
            onClick = {(i) => this.handleClick(i)} />
        </div>
        
        <div className="game-info">
            <div><h1>{status}</h1></div>
            <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}
