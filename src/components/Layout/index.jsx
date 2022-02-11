import PropTypes from "prop-types";
function Layout({ children }) {
  return <div className="container mx-auto px-4">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
