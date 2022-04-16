import React, { Component } from 'react';
import HeroCard from './HeroCard';
import styles from './PageBody.module.css';

class PageBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
    };
  }

  async componentDidMount() {
    const url = 'https://finalspaceapi.com/api/v0/character/';
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ heroes: data });
  }

  render() {
    const { heroes } = this.state;
    return (
      <div className={styles.pageBody}>
        <div className={styles.heroCard}>
          {heroes.map((hero) => (
            <HeroCard hero={hero} />
          ))}
        </div>
      </div>
    );
  }
}

export default PageBody;
