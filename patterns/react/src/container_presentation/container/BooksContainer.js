import { useState, useEffect } from "react";
import BooksListing from "../presentational/BooksListing";

/**
 * This component is fetching data, handling any logic/data modification
 * and nothing else.
 */
export default BooksContainer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchBooks() {
      const res = await fetch("https://the-one-api.dev/v2/book", {
        signal: abortController.signal,
      });
      const json = await res.json();
      setList(json.docs);
    }
    fetchBooks();
    return () => {
      //Abort anything being fetched
      abortController.abort();
    };
  }, []);

  return <BooksListing list={list} />;
};
