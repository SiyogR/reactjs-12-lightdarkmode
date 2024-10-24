// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-container' : 'light-container'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={`light-container ${modeClassName}`}>
        <h1>Click To The Change Mode</h1>

        <button type="button" className="button" onClick={this.onMode}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
