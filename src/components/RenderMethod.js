import { useEffect, useState } from 'react';

const DataFetcher = ({ render, url }) => {
  const[data, setData] = useState([])

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "icecream", "pie", "brownie"]);
    } else {
      setData(["water", "soda","juice"]);
    }
  }, []);
  return render(data);
};

const DessertsCounts = () => {
  return (
    <DataFetcher
    url="http://littlelemon/desserts"
    render={(data) => <h3>{data.length} desserts</h3>}
    /> 
  );
};

const DrinksCounts = () => {
  return (
    <DataFetcher 
    url="http://littlelemon/drinks"
    render={(data) => <h3>{data.length} drinks</h3>}
    />
  )
};

function App() {
  return (
    <div className="App">
      <header>Little Lemon Menu</header>
      <DessertsCounts />
      <DrinksCounts />
    </div>
  );
};

export default App;