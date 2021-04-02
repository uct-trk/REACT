ActionLink = () => {
  const handleClick = e => {
    e.preventDefault();
    console.log('Link tıklandı.');
    console.log(e.type);
  };

  return /*#__PURE__*/(
    React.createElement("a", { href: "#", onClick: handleClick }, "T\u0131kla"));



};


ReactDOM.render( /*#__PURE__*/React.createElement(ActionLink, null), document.getElementById('root'));