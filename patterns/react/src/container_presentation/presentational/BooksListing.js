/**
 * This component is rendering the data to the screen and nothing else
 */
export default BooksListing = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
  );
};
