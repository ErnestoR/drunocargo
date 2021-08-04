import { Link } from "react-router-dom";
import { TruckIcon } from "@heroicons/react/outline";

import DropdownMenu from "./DropdownMenu";

const Table = (props) => {
  const { data = [], isSearching, deleteDelivery, editDelivery } = props;

  if (data.length === 0) {
    return (
      <div className="mt-32 mb-auto flex flex-col justify-center items-center text-gray-500 gap-4 ">
        <div className="flex items-center gap-4">
          <TruckIcon className="text-xl w-20 h-20" />
          <h1 className="text-3xl">No data</h1>
        </div>
        {!isSearching && (
          <h1 className="text-xl">Please add some deliveries.</h1>
        )}
      </div>
    );
  }

  return (
    <div className="py-2 align-middle min-w-full sm:px-6 lg:px-8 w-64 h-full overflow-y-auto relative flex-auto">
      <table className="min-w-full divide-y divide-gray-200 overflow-hidden overflow-y-auto">
        <tbody className="divide-y divide-gray-200">
          {data.map((delivery) => (
            <tr
              key={delivery.orderID}
              className="divide-x-reverse border-gray-900  border-solid hover:bg-green-100 hover:bg-opacity-90 flex"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Status</div>
                <div className="text-sm text-gray-500">{delivery.status}</div>
              </td>
              <td className="flex-1 px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Order ID</div>
                <div className="text-sm text-gray-500">{delivery.orderID}</div>
              </td>
              <td className="flex-1 px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Technician</div>
                <div className="text-sm text-gray-500">
                  {delivery.technician}
                </div>
              </td>
              <td className="flex-1 px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Platform</div>
                <div className="text-sm text-gray-500">{delivery.platform}</div>
              </td>
              <td className="flex-1 px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Drone</div>
                <div className="text-sm text-gray-500">{delivery.drone}</div>
              </td>
              <td className="flex-1 px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Technical check</div>
                <div className="text-sm text-gray-500">
                  {delivery.technicalCheck ? "Passed" : "Failed"}
                </div>
              </td>
              <td className="flex-1 px-6 py-4 flex gap-4">
                <div className="xl:w-28">
                  <Link
                    to={`/shipment/${delivery.orderID}`}
                    className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium bg-white text-black border-grey border border-opacity-10 border-black rounded-md bg-opacity-20 hover:bg-opacity-20 hover:bg-green-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus:ring-2 focus:ring-nuvoGreen-base"
                  >
                    <span className="hidden xl:block">Details</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 4V20H22V4H2ZM20 8.67H17.5V6H20V8.67ZM17.5 10.67H20V13.34H17.5V10.67ZM4 6H15.5V18H4V6ZM17.5 18V15.33H20V18H17.5Z"
                        fill="#000000"
                        opacity="0.25"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="w-28">
                  <DropdownMenu
                    delivery={delivery}
                    deleteDelivery={deleteDelivery}
                    editDelivery={editDelivery}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
