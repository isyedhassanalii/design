import "./App.css";
import MultiSearch from "./components/MultiSearch";
import Search from "./components/Search";
import SearchUsingApi from "./components/SearchUsingApi";

function App() {
  // console.log(
  //   Users.filter((user) => user.first_name.toLocaleLowerCase().includes("fe"))
  // );
  return (
    <div className="app">
      {/* <Search /> */}
      {/* <MultiSearch /> */}
      <SearchUsingApi />
    </div>
  );
}

export default App;
