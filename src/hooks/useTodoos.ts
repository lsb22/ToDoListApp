import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

export interface Todos {
  name: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: number;
  isDeleted: boolean;
}

const useTodoos = () => {
  const [toDoos, setToDoos] = useState<Todos[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/toDoos")
      .then((res) => setToDoos(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return { toDoos, setToDoos, error, setError };
};

export default useTodoos;
