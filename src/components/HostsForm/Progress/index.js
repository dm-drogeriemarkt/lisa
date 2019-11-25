import React, { Component } from 'react';
import { ProgressBar } from 'patternfly-react';
import './index.css';

class Progress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      progress: 0
    }
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount(){
    this.stop();
  }

  start() {
    const start = new Date();
    this.setState({ start });
    this.timer = setInterval(this.tick, 50);
  }

  stop() {
    clearInterval(this.timer);
  }

  tick = () => {
    const { start } = this.state;
    const { duration } = this.props;

    const diff = new Date() - start;
    const progress = parseInt((diff / duration) * 100, 10);

    if(progress < 100) {
      this.setState({ progress });
    } else {
      this.stop();
    }
  }

  render() {
    return (
      <ProgressBar now={this.state.progress} />
    )
  }
}

export default Progress;
