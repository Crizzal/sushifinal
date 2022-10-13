import Layout from "../Components/Layout";

function withLayout(WrappedComponent) {
  return function (props) {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
}
export default withLayout;
