import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({ 0: 1, 1: 3, 2: 4, 3: 2, 4: 0, 5: 3 })
  
  const newAnecdote = () => {
    let randomInt = Math.floor(Math.random() * 6);
    setSelected(randomInt);
  }

  const vote = () => {
    setPoints({...points, [selected]: points[selected]+1})
  }

  let max = points[0];
  let pos = 0;
  for (let i =1; i < 6; i++){
    if (points[i] > max){
      max = points[i];
      pos = i;
    }
  }  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} 
      <br/>
      <p>has {points[selected]} vote(s)</p>
      <button onClick={vote}>vote</button>
      <button onClick={newAnecdote}>Show me another anecdote!</button>
      <br />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[pos]}
      <br/>
      <p>has {points[pos]} vote(s)</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)