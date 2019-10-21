import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => {
    return (
    <button onClick={handleClick}>{text}</button>
)}

const Statistic = ({text, value}) => {
    return(
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
        
    )
}

const Statistics = ({good, neutral, bad}) => {
    const total = good+bad+neutral;

    const average = ((good+(-1*bad)) / total).toFixed(1);
    
    const positive = ((good/total) * 100).toFixed(1);

    return (
        <div>
            <table>
                <tbody>
                    <Statistic text="good" value={good}/>
                    <Statistic text="neutral" value={neutral}/>
                    <Statistic text="bad" value={bad}/>
                    <tr>
                        <td>all</td>
                        <td>{total}</td>
                    </tr>
                    <tr>
                        <td>average</td>
                        <td>{average}</td>
                    </tr>
                    <tr>
                        <td>positive</td>
                        <td>{positive}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  const test = good + neutral + bad;
 
  if (test === 0){
      return(
          <div>
            <h1>give feedback</h1>
            <Button text="good" handleClick={() => handleGood()}/>
            <Button text="neutral" handleClick={() => handleNeutral()}/>
            <Button text="bad" handleClick={() => handleBad()}/>
            <h1>statistics</h1>       
            <p>No feedback given.</p>
          </div>
      )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => handleGood()}/>
      <Button text="neutral" handleClick={() => handleNeutral()}/>
      <Button text="bad" handleClick={() => handleBad()}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)