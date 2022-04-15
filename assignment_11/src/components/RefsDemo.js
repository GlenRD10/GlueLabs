import React, { Component } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.commentRef = React.createRef();
    this.language = React.createRef();
    this.state = {
      langselect: 'React',
    };
  }

  componentDidMount() {
    this.emailRef.current.focus();
  }

  changelanghandler = () => {
    this.setState({ langselect: this.language.current.value });
  };

  clickHandler = () => {
    console.log(this.emailRef.current.value);
    console.log(this.commentRef.current.value);
    console.log(this.language.current.value);
  };

  render() {
    return (
      <>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" ref={this.emailRef} />
        </div>
        <br />
        <div>
          <label htmlFor="comment">Comment: </label>
          <textarea id="comment" ref={this.commentRef}></textarea>
        </div>
        <br />

        <div>
          <label htmlFor="language">Language: </label>
          <select ref={this.language} onChange={this.changelanghandler}>
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
                ref={this.maleRadioRef}
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
                ref={this.femaleRadioRef}
                onChange={this.radioHandler}
              />
              Female
            </label>
          </div>
        </div>
        <br />

        <div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="bike" />
              Bike
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="car" />
              Car
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="bus" />
              Bus
            </label>
          </div>
        </div>
        <br />

        <button onClick={this.clickHandler}>Submit</button>
      </>
    );
  }
}

export default RefsDemo;
