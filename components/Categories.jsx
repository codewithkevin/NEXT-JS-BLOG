import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white text-black shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.title} href={`/category/${category.slug}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;