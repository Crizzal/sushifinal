import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ModalProduct from "../ModalProduct";
function AdminLayout({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.admin);

  return (
    <>
      <div id="sidebar">
        <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
          <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
              <li>
                <Link to="/admin">
                  <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Product</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden absolute bottom-0 left-0 justify-center items-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
            <p>{user?.username || ""}</p>
            <button
              type="button"
              data-dropdown-toggle="language-dropdown"
              onClick={() => {
                window.localStorage.removeItem("token");
                window.location.reload();
              }}
              className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Logout
            </button>
          </div>
        </aside>
      </div>
      <div className="ml-64">{children}</div>
    </>
  );
}

export default AdminLayout;
