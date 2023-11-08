var root = ReactDOM.createRoot(document.getElementById("root"));

// function Header(props) {
//   return <h1>Todo App</h1>;
// }

// var template = <Header />;

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Todo />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h1>Todo App</h1>;
  }
}

function Todo(props) {
  return (
    <ul>
      <li>Görev 1</li>
      <li>Görev 2</li>
      <li>Görev 3</li>
    </ul>
  );
}

root.render(TodoApp);
