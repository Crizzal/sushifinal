import AdminLayout from "../Components/AdminLayout";
import useToken from "../hooks/useToken";

function withAdminLayout(WrappedComponent) {
  return function (props) {
    return (
      <AdminLayout>
        <WrappedComponent {...props} />
      </AdminLayout>
    );
  };
}
export default withAdminLayout;
