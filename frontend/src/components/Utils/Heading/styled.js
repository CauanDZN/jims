const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
};

const Heading = ({
  type,
  children,
  ...props
}) => {
  const Component = as ? elements[type] : elements.h1;
  return /*#__PURE__*/React.createElement(Component, props, children);
}

export default Heading;
