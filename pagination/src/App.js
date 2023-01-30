import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  console.log(products)
  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedPageHandler=(selectedPage)=>{
    if(
      selectedPage>=1 &&
      selectedPage<=products.length/10 &&
      selectedPage !==page 

    )
    setPage(selectedPage);
  }
  return (
    <div>
      {
        products.length>0 && <div className="products">
          {
            products.slice(page*10-10,page*10).map((prod)=>{
              return <span className="products__single" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} /> 
              <span>
                {prod.title}
              </span>
            </span>

            })
          }
       
          </div>     
      }
         {
            products.length>0 && <div className="pagination">
            <span
            className={page>1? "":"pagination__disable"}
            onClick={()=>selectedPageHandler(page-1)}>◀</span>
            {
              [...Array(products.length/10)].map((_,i)=>{
                return <span
                className={page=== i+1 ?"pagination__selected":""}
                 onClick={()=>selectedPageHandler(i+1)}
                  key={i}
                  >
                    {i+1}
                    </span>
              })
            }
           
            <span
            className={page<products.length/10? "":"pagination__disable"}
             onClick={()=>selectedPageHandler(page+1)}
             >
              ▶
              </span>
            </div>
          }
    </div>
  );
}

export default App;
