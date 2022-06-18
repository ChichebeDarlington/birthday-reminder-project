import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setData] = useState(data);
  const handleDelete = () => {
    return setData([]);
  };
  return (
    <main>
      <section className="container">
        <h4>{data.length} celebrating birthdays today</h4>
        <List people={people} />
        <button onClick={handleDelete}>delete all</button>
      </section>
    </main>
  );
}

export default App;
