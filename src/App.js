import './App.css';
import React from 'react';
import Tooltip from './Tooltip';
import SelectPosition from './SelectPosition';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayTooltip: false,
      positionToShowTooltip: 'top'
    }
  }
  // handle on hover
  handleOnMouseEnter = () => {
    console.log('Hovering');
    this.setState({
      displayTooltip: true
    })
  }
  // handle on remove
  handleOnMouseLeave = () => {
    console.log('Leave');
    this.setState({
      displayTooltip: false
    })
  }
  // handle when tooltip's position get changed
  handleOnChangePosition = () => {
    const newPosition = document.getElementById('position').value;
    console.log(newPosition);
    this.setState({
      positionToShowTooltip: newPosition
    })
  }

  render() {
    const { handleOnMouseLeave, handleOnMouseEnter, handleOnChangePosition } = this;
    const { displayTooltip, positionToShowTooltip } = this.state;

    return (
      <div className="App">
        <SelectPosition
          onChangePosition={handleOnChangePosition}
        ></SelectPosition>
        <div class='tooltip-container'>
          <button className="button"
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          ><strong>Hover over me!</strong></button>
          <Tooltip
            position={positionToShowTooltip}
            displayTooltip={displayTooltip}
          />
        </div>
      </div>
    );
  }
}
export default App;

