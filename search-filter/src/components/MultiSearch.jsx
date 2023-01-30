import React, { useState } from "react";
import { Users } from "../data";

const MultiSearch = () => {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
          {Users.filter((item) =>
            keys.some((key) => item[key].toLocaleLowerCase().includes(query))
          ).map((usr) => (
            <tr key={usr.id}>
              <td>{usr.first_name}</td>
              <td>{usr.last_name}</td>
              <td>{usr.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MultiSearch;
