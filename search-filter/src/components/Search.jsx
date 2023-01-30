import { useState } from "react";
import { Users } from "../data";

const Search = () => {
  const [query, setQuery] = useState("");
 
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {Users.filter((usr) =>
          usr.first_name.toLocaleLowerCase().includes(query)
        ).map((usr) => (
          <li key={usr.id} className="listItem">
            {usr.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
