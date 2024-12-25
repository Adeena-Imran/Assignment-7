'use client'; 
import Image from "next/image";
import { useState, useEffect } from "react";


interface Products {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

function Client() {
  const [data, setData] = useState<Products[]>([]);  
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    async function InnerFetching() {
      try {
        
        const clientdata = await fetch("https://fakestoreapi.com/products");

        
        if (!clientdata.ok) {
          throw new Error('Failed to fetch data');
        }

        // Convert the fetched data to JSON
        const jsonData: Products[] = await clientdata.json(); 
        
        
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    }

    InnerFetching();
  }, []); 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-yellow-950 text-center mb-8">Products List</h1>

    
      {loading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : (
      
        Array.isArray(data) && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((product) => (
              <div
                key={product.id} 
                className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="text-lg font-semibold text-yellow-950 mt-4">{product.title}</h2>
                <p className="text-sm text-gray-500 text-yellow-950">{product.description.slice(0, 100)}...</p>
                <p className="text-xl text-yellow-950 font-bold mt-2">${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-xl">No products available</div>
        )
      )}
    </div>
  );
}


export default Client