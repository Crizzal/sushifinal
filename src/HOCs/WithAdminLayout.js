import AdminLayout from "../Components/AdminLayout";

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
