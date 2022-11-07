/**
 * The render props pattern is when you are passing props that
 * are in fact react components
 */
const RenderProps = ({ renderHeadline, renderParagraph }) => {
  return (
    <div>
      {renderHeadline("My headline")}
      {renderParagraph("My paragraph")}
    </div>
  );
};

const ShowRenderProps = () => {
  return (
    <RenderProps
      renderHeadline={(value) => <h1>{value}</h1>}
      renderParagraph={(value) => <p>{value}</p>}
    />
  );
};

export default ShowRenderProps;
