import React from 'react';
import styles from '../style/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        <h2>{this.state.test}</h2>
      </div>
    );
  }
}
