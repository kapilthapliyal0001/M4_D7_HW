import logo from "./logo.svg";
import "./App.css";
import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import BookList from "./Components/BookList";
import horror from "./resources/horror.json";

function App() {
  return (
    <div>
      <WarningSign text="this is a alert from props" color="danger" />
      <MyBadge text="My badge text" color="primary" />
      {/* <SingleBook book={horror[0]} /> */}
      <BookList style={{backgroundColor: "#FF0000"}} books={horror} />
    </div>
  );
}

export default App;
