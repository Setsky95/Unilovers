import React from 'react';

const Campains = () => {
    const [promotions, setPromotions] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch('/data/promotions.json')
            .then(response => response.json())
            .then(data => {
                setPromotions(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading promotions.</div>;

    return (
        <div className='CampainsList' >
            <h2>Active campains</h2>
            <ol>
                {promotions.map((promo, idx) => (
                    <li key={promo.id || idx}>
                        {promo.name ? promo.name : JSON.stringify(promo)}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Campains;