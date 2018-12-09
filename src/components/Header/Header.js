import React, {Component} from 'react';
// Styling imports
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  render() {
    return (
        <header className="App-header" color="primary">
          <Typography variant="h2" gutterBottom>Feedback</Typography>
          <Typography variant="h6" gutterBottom>Don't forget it!</Typography>
        </header>
    )
  }
}

export default Header;