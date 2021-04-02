function FancyBorder(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: 'FancyBorder FancyBorder-' + props.color },
    props.children));


}

function Dialog(props) {
  return /*#__PURE__*/(
    React.createElement(FancyBorder, { color: "blue" }, /*#__PURE__*/
    React.createElement("h1", { className: "Dialog-title" },
    props.title), /*#__PURE__*/

    React.createElement("p", { className: "Dialog-message" },
    props.message),

    props.children));


}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(Dialog, { title: "Mars Exploration Program",
        message: "How should we refer to you?" }, /*#__PURE__*/
      React.createElement("input", { value: this.state.login,
        onChange: this.handleChange }), /*#__PURE__*/
      React.createElement("button", { onClick: this.handleSignUp }, "Sign Me Up!")));




  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(SignUpDialog, null),
document.getElementById('root'));