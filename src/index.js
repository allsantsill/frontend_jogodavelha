// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Board() {
      return (
        <div>
        <div className='board-row'>
        <button className='square'>X</button>
        <button className='square'></button>
        <button className='square'></button>
        </div>  
        <button className='square'></button>
        <button className='square'></button>
        <button className='square'></button>
        <div>
        <button className='square'></button>
        <button className='square'></button>
        <button className='square'></button>
        </div>

        </div>

      )
}


function Game(){
      return (
        <div className='game'>
          <div className='game-board'>
          <Board/>
          </div>
  
          <div className='game-info'>
            Jogo da Velha
          </div>
        </div>

  ) 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Game/>
  
);


