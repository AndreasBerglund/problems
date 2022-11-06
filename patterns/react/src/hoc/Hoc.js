/**
 * The HOC ( higher order component ) will take another component
 * as a prop and add some functionality or additional props to it
 */
const withLargeButton = (Component) => {
  return (props) => {
    const style = {
      borderColor: "red",
      borderWidth: 3,
      width: 100,
      height: 50,
    };
    return <Component {...props} style={style} />;
  };
};

const Button = ({ style }) => {
  return (
    <button style={{ borderWidth: 3, width: 99, height: 19, ...style }}>
      En knap
    </button>
  );
};

export default withLargeButton(Button);
