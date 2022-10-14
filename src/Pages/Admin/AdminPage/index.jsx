import AdminTableProduct from "../../../Components/AdminTableProduct";
import withAdminLayout from "../../../HOCs/WithAdminLayout";

function AdminPage() {
  return (
    <div className="p-4 pt-16">
      <h1 className="text-2xl">Product Management</h1>
      <div className="table mt-10 w-full">
        <AdminTableProduct />
      </div>
    </div>
  );
}

export default withAdminLayout(AdminPage);
