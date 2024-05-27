import { View, Text } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsLoading(true);
    
    try {
      const response = await axios.get("http://10.5.232.74:3005/api/products");
      setData(response.data);
      setIsLoading(false);

    } catch (error: any) {
        console.log(error)
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const refetch=()=>{
    setIsLoading(true)
    fetchData();
    setIsLoading(false)
  }
  return {
    data,
    isLoading,
    error,
    refetch
  }
};

export default useFetch;
