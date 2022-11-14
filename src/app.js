function Form() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

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

  return (
    <form className="myForm" onSubmit={(e) => e.preventDefault()}>
      <p className="displayUser">Hi, {firstName + " " + lastName}</p>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameOnchange}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameOnchange}
      />
      <button onClick={handleResetFieldsClick}>Reset Fields</button>
    </form>
  );
}

export default function App() {
  return <Form />;
}

// react connection
const rootNode = document.getElementById("reactRoot");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
