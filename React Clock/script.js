function tick() {
  const element = /*#__PURE__*/
  React.createElement("div", null, /*#__PURE__*/
  React.createElement("h1", null, "U\u011Furcan T\xDCRK"), /*#__PURE__*/
  React.createElement("h2", null, "Saat \u015Fu anda:  ", new Date().toLocaleTimeString(), "."));


  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);