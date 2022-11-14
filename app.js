var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Form() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      firstName = _React$useState2[0],
      setFirstName = _React$useState2[1];

  var _React$useState3 = React.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      lastName = _React$useState4[0],
      setLastName = _React$useState4[1];

  function handleFirstNameOnchange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameOnchange(e) {
    setLastName(e.target.value);
  }

  function handleResetFieldsClick() {
    setFirstName("");
    setLastName("");
  }

  return React.createElement(
    "form",
    { className: "myForm", onSubmit: function onSubmit(e) {
        return e.preventDefault();
      } },
    React.createElement(
      "p",
      { className: "displayUser" },
      "Hi, ",
      firstName + " " + lastName
    ),
    React.createElement("input", {
      type: "text",
      placeholder: "First name",
      onChange: handleFirstNameOnchange
    }),
    React.createElement("input", {
      type: "text",
      placeholder: "Last name",
      onChange: handleLastNameOnchange
    }),
    React.createElement(
      "button",
      { onClick: handleResetFieldsClick },
      "Reset Fields"
    )
  );
}

export default function App() {
  return React.createElement(Form, null);
}

// react connection
var rootNode = document.getElementById("reactRoot");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));