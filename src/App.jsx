// import { useCallback, useEffect } from "react";
import { useState } from "react";

import { useFetch } from "./hooks/useFetch";

// const fetchData = async (setUsers) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   setUsers(data);
// };

const App = () => {
  const [counter, setCounter] = useState(0);

  // const [users, setUsers] = useState(null);

  console.log("app");

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/userss"
  );

  console.log(data);
  // const fetchData = useCallback(async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     if (!response.ok) {
  //       throw "Error al conectar la API";
  //     }

  //     const data = await response.json();
  //     setusers(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // useEffect(() => {
  //   // fetchData(setUsers);
  // }, []);
  // }, [fetchData]);

  //  SIN ASYNC AWAIT
  // useEffect(() => {
  //   console.log("use effect");

  //   // forma nativa para hacer peticiones http
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setusers(data);
  //     });
  // }, []); // <- si [] se pasa vacio este se ejecuta una sola vez
  // // }, [counter]); // <- [] : array de dependencias, lo que haya ahí adentro es lo que ejecutará dicho useEffect

  if (loading) return <div>Cargando...</div>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>
        useEffect{" "}
        <button onClick={() => setCounter(counter + 1)}>
          Counter: {counter}
        </button>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </h1>
    </>
  );
};

export default App;
