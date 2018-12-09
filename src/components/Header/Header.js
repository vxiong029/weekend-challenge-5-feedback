import React, {Component} from 'react';
// Styling imports
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Typography variant="h2" gutterBottom>Feedback</Typography>
      </header>
    )
  }
}

export default Header;