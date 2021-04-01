function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      count: 0 });_defineProperty(this, "artir",

    () => {
      this.setState({ count: this.state.count + 1 });
    });_defineProperty(this, "azalt",
    () => {
      this.setState({ count: this.state.count - 1 });
    });}


  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", null,
      this.state.count), /*#__PURE__*/

      React.createElement("button", { onClick: this.artir }, "Art\u0131r"), /*#__PURE__*/
      React.createElement("button", { onClick: this.azalt }, "Azalt")));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('root'));