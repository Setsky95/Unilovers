import React from 'react';

const Campains = () =>  {
  const [campains, setCampains] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("/data/promotions.json")
      .then((response) => response.json())
      .then((data) => {
        setCampains(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading promotions.</div>;

  return (
<div className="ProductList">
    <div className="ProductList-title">

  <h2>Active campains</h2>
  </div>
  <div className="dataSpanContainer">
    <span className="dataHeaderSpan">title</span>
    <span className="dataHeaderSpan">Benefit</span>
        <span className="dataHeaderSpan">Code</span>
</div>
    <div className="ProductList-content">

  {campains.map((campain, idx) => (
    <div className="dataPanel" key={campain.id || idx}>
      <div className="dataPanelChildren">
        <p className="DataitSelf">{campain.title || "Sin title"}</p>
      </div>

      <div className="dataPanelChildren">
        <p className="DataitSelf"> {campain.benefit || "Sin benefit"}</p>
      </div>
      
      <div className="dataPanelChildren">
        <p className="DataitSelf"> {campain.code || "Sin code"}</p> 
      </div>
      

    </div>
  ))}
</div>

    </div>

  );
};
export default Campains;