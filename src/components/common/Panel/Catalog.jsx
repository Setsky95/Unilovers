import React from "react";
import "./Panel.css";

const Catalog = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("/data/products-placeholder.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
<div className="ProductList">
    <div className="ProductList-title">

  <h2>Active Products</h2>
  </div>
  <div className="dataSpanContainer">
    <span className="dataHeaderSpan">SKU</span>
    <span className="dataHeaderSpan">Nombre</span>
    <span className="dataHeaderSpan">Foto</span>
</div>
    <div className="ProductList-content">

  {products.map((product, idx) => (
    <div className="dataPanel" key={product.id || idx}>
      <div className="dataPanelChildren">
        <p className="DataitSelf">{product.sku || "Sin SKU"}</p>
      </div>

      <div className="dataPanelChildren">
        <p className="DataitSelf"> {product.nombre || "Sin Nombre"}</p>
      </div>
      
   


      <div className="dataPanelChildren">
        <img className="DataitSelfImg" src={product.img} />
      </div>
    </div>
  ))}
</div>

    </div>

  );
};

export default Catalog;
