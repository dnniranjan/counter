import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state: {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The button has been clicked <span className="count">{count}</span>
          times
        </h1>
        <p className="para">click the button to increase the count</p>
        <div>
          <button className="btn" onClick={this.onIncrement} type="button">
            click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
