import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Todos } from "../Components/ToDoLIst";

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

  return { toDoos, setToDoos, error };
};

export default useTodoos;
