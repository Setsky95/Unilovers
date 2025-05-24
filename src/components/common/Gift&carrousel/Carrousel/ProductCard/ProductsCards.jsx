import { useEffect, useState} from 'react';
import Card from './Card';
import './card.css';


const ProductsCards = () => {

      const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
  

    fetch("/data/products-placeholder.json")
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar productos");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, []);
    return (
<div className="product-card">
  {products
    .slice() 
    .sort((a, b) => a.precio - b.precio) 
    .slice(0, 2) 
    .map((item) => (
      <Card
        key={item.id}
        nombre={item.nombre}
        edad={item.edad}
        img={item.img}
        precio={item.precio}
          id={item.id}

      />
    ))}
</div>
    );
};

export default ProductsCards