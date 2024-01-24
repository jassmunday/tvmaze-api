import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Summary  ()  {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTicket = () => {
    
    alert(`Booking ticket for ${show.name} with details: ${JSON.stringify(formData)}`);
   
    localStorage.setItem('userData', JSON.stringify(formData));
  };

  return (
    <div className="container mx-auto mt-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        {show && (
          <div className="border p-4 rounded-md">
            <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
            {show.image && <img src={show.image.original} alt={show.name} className="w-full h-64 mb-4" />}
            <p className="text-gray-700 mb-4">{show.summary.replace(/<[^>]*>/g, '')}</p>

            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>

              <button
                type="button"
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={handleTicket}
              >
                Book Ticket
              </button>
            </form>

            <Link to="/" className="block mt-4 text-blue-500 hover:underline">
              Back to Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
