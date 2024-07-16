"use client"

import createNewCategory from '@/lib/firebase/category/write';
import React, { createContext, useContext, useState } from 'react';


const CategoryFormContext = createContext();

export const useCategoryForm = () => useContext(CategoryFormContext);

const CategoryFormContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);
  const [image, setImage] = useState(null);

  const handleData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleCreate = async () => {
    setError(null);
    setLoading(true);
    try {
      await createNewCategory({data:data,image:image});

      setDone(true);
    } catch (error) {
      setError(error?.message);
    }
    setLoading(false);
  };

  const handleReset = () => {
    handleData('categoryName', '');
    handleData('categorySlug', '');
    handleData('description', '');
    setImage(null);
  };


  return (
    <CategoryFormContext.Provider
      value={{
        data,
        loading,
        error,
        done,
        handleData,
        handleCreate,
        image,
        setImage,
        handleReset
      }}
    >
      {children}
    </CategoryFormContext.Provider>
  );
};

export default CategoryFormContextProvider;
