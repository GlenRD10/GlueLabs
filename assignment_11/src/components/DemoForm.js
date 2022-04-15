import React, { Component } from 'react';

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      comment: '',
      language: 'vue',
      gender: 'male',
      vehicle: [],
    };
  }

  changeEmailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  changeCommentHandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  changeLangHandler = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  radioHandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  checkBoxHandler = (event) => {
    let selectedOption = event.target.value;
    let temp = this.state.vehicle;
    if (temp.includes(selectedOption)) {
      let index = temp.indexOf(selectedOption);
      temp.splice(index, 1);
    } else {
      temp.push(selectedOption);
    }
    this.setState({
      vehicle: temp,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.changeEmailHandler}
          />
        </div>
        <br />

        <div>
          <label htmlFor="comment">Comment: </label>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.changeCommentHandler}
          ></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="language">Language: </label>
          <select
            value={this.state.language}
            id="language"
            onChange={this.changeLangHandler}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <br />

        <div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.radioHandler}
              />
              Male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.radioHandler}
              />
              Female
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="other"
                checked={this.state.gender === 'other'}
                onChange={this.radioHandler}
              />
              Other
            </label>
          </div>
        </div>
        <br />

        <div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="bike"
                checked={this.state.vehicle.includes('bike')}
                onChange={this.checkBoxHandler}
              />
              Bike
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="car"
                checked={this.state.vehicle.includes('car')}
                onChange={this.checkBoxHandler}
              />
              Car
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value="bus"
                checked={this.state.vehicle.includes('bus')}
                onChange={this.checkBoxHandler}
              />
              Bus
            </label>
          </div>
        </div>
        <br />

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default DemoForm;
