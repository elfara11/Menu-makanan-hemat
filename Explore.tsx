import React from 'react';
import { useEffect, useState } from 'react';
import { openDeliveryApp } from '../services/deliveryAPI';
import { getNearbyRestaurants } from '../services/mapsAPI';

const Explore = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getNearbyRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Explore Nearby Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Price Range: {restaurant.priceRange}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded"
                onClick={() => openDeliveryApp('shopeefood', restaurant.name)}
              >
                Order Now
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={() => console.log('View on Map')}
              >
                View on Map
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;