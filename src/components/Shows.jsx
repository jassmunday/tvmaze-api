import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 

function Shows  ()  {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <h1 className="text-3xl font-bold mb-4 container mx-auto mt-8 flex items-center justify-center ">Movie Names</h1>
    <div className="container mx-auto mt-8 flex items-center justify-center">

    
            

    
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {shows.map((show) => (
          <li key={show.show.id} className="border p-4 rounded-md">
            <Link to={`/details/${show.show.id}`}>
              <h2 className="text-xl font-semibold mb-2">{show.show.name}</h2>
              {show.show.image && (
                <img
                  src={show.show.image.medium}
                  alt={show.show.name}
                  className="w-full h-48 object-cover mb-2"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>

    
      
    </div>

    </>
    
    
    
  );
};

export default Shows;
