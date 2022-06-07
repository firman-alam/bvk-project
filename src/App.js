import "./App.scss";
import Post from "./components/Post";
import axios from "./utils/axios";
import { useEffect, useState } from "react";

function App() {
  let limit = 0;
  const [name, setName] = useState("");
  const [dataCats, setDataCats] = useState([]);

  // fetch data api
  const loadCats = () => {
    axios.get(`/breeds?limit=${limit}`).then((response) => {
      const newCats = [];
      response.data.forEach((cat) => newCats.push(cat));
      setDataCats((oldCats) => [...oldCats, ...newCats]);
    });
    limit += 10;
  };

  // handle scroll
  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadCats();
    }
  };

  useEffect(() => {
    loadCats();
    window.addEventListener("scroll", handleScroll);
    axios
      .get(`/breeds/search?q=${name}`)
      .then((response) => setDataCats(response.data));
  }, [name]);

  return (
    <div className="app">
      <h1 onClick={() => loadCats()}>The Cat Breed - API</h1>

      <div className="app__search">
        <input
          type="text"
          placeholder="What cat is you looking for?"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <p>Click title to get all list cat breeds</p>

      <div className="app__post">
        {dataCats.map((cat, index) => (
          <Post key={index} cat={cat} />
        ))}
      </div>
    </div>
  );
}

export default App;
