import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://character-database.becode.xyz/characters")
      .then((element) => setData(element.data));
  }, []);

  return (
    <div className="home">
      <input className="home__searchBar" type="text" placeholder="Search.." />
      <ul className="home__receipt">
        {data &&
          data.map((element) => <Card key={element.id} element={element} />)}
      </ul>
    </div>
  );
};

export default Home;
