import React, { Component } from 'react';
import styles from './PageHeader.module.css';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.pageHeader}>
        <h1>Final Space</h1>
      </div>
    );
  }
}

export default PageHeader;
