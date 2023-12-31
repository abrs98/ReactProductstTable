import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductTable from './components/ProductTable.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productsList, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000`)
      .then(response => response.json())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setData(usefulData);
        //setProducts(usefulData);
        //console.log(data);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);


  return (
    <>
      <div className="App">
        {loading && <p>Loading...</p>}
        {!loading && <p>Fetched data</p>} 
        {data && <ProductTable products={data}/>}
        

      </div>
      <div>
        <span>{}</span>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
