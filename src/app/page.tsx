'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="body">
      <div className="left-half">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Wish
        </h1>
        <p className="text-lg mb-8">
          Discover a curated selection of stylish clothing, accessories, and lingerie. Shop now and enjoy our exclusive promo prices!
        </p>
        <Link href="/shop" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </Link>
      </div>
      <div className="right-half">
        <h2 className="text-3xl font-bold mb-4">
          New Collection
        </h2>
      </div>
      <div className="container mx-auto mt-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">
          Our Features
        </h2>
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <Image
              src="/freeshipping.jpg"
              alt="Feature 1"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-2">
              Free Shipping
            </h3>
            <p className="text-gray-500">
              Enjoy free shipping on all orders over $50.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/easyreturns.jpg"
              alt="Feature 2"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-2">
              Easy Returns
            </h3>
            <p className="text-gray-500">
              Return eligible items within 30 days.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/securepayments.png"
              alt="Feature 3"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-bold mt-2">
              Secure Payment
            </h3>
            <p className="text-gray-500">
              Shop with confidence using our secure payment gateway.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 text-center">
        <p className="text-lg mb-8">
          Join our community and stay updated with the latest trends and exclusive deals. Follow us on social media!
        </p>
        <div className="flex space-x-4">
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Facebook
          </a>
          <a href="#" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Instagram
          </a>
          <a href="#" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Twitter
          </a>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Wish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home