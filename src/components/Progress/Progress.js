import React, {Component} from 'react';
// Route imports
import {withRouter} from 'react-router-dom';
// Styling import
import Typography from '@material-ui/core/Typography';

class Progress extends Component{
  render() {
    let pages;
    switch (this.props.history.location.pathname) {
      case '/':
        pages = 1;
        break;
      case '/2':
        pages = 2;
        break;
      case '/3':
        pages = 3;
        break;
      case '/4':
        pages = 4;
        break;
      case '/5':
        pages = 5;
        break;
      default:
        return pages;
    }
    return (
      <div>
        <Typography variant="h5">{pages} of 5 Pages</Typography>
      </div>
    )
  }
}

export default withRouter(Progress);