import { use } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product data');
  }
  return response.json();
}

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const products = use(getProduct(params.id));

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-screen-lg mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          {/*Image*/}
          <div className="flex-1">
            <Image
              width={100}
              height={100}
              src={products.image}
              alt={products.title}
              className="object-cover w-full h-auto rounded-t-lg"
            />
          </div>

          {/*Details*/}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-yellow-950">{products.title}</h1>
            <p className="text-lg mt-4 text-yellow-950">{products.description} </p>
            <p className="mt-6 text-xl font-bold text-green-600">${products.price}</p>
            
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



 