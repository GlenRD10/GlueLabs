import React from 'react';

import PageHeader from './components/PageHeader';
import PageBody from './components/PageBody';
import PageFooter from './components/PageFooter';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.mainPage}>
      <PageHeader />
      <PageBody />
      <PageFooter />
    </div>
  );
}

export default App;
