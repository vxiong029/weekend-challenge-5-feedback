import React, {Component} from 'react';

class Feeling extends Component {
  setFeeling = () => {
    this.props.dispatch({
      type: 'SET_FEELING',
      payload: this.state
    });
  }
  render() {
    return (
      <div>
        <label>
            How are you feeling today?
            <input type="text" onChange={this.handleChange} name="feeling" />
            <button onClick={this.setFeeling}>Next</button>
          </label>
      </div>
    )
  }
}

export default Feeling;