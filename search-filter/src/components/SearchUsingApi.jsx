import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchUsingApi = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  console.log(data);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchUsingApi;
