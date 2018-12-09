import React, {Component} from 'react';
// import ProgressBar from 'react-bootstrap/lib/ProgressBar';

class Progress extends Component{
  render() {
    let pages = 4;
    let {step} = this.props;
    console.log('progress bar:', this.props);
    
    return (
      <div className="progressHdr">
                <h3>Page {step} of {pages}</h3>
                {/* <ProgressBar
                    style={ { width: '80%', margin: 'auto' }}
                    now={step * 100 / pages}
                    /> */}
                <p> </p>
      </div>
    )
  }
}

export default Progress;