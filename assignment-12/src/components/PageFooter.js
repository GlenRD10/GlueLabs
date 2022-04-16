import React, { Component } from 'react';
import styles from './PageFooter.module.css';

class PageFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.pageFooter}>
        <div className={styles.footerContent}>
          <p>Final Space | GlueLabs | Glen Dsouza</p>
        </div>
      </div>
    );
  }
}

export default PageFooter;
