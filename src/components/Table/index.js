import DropdownMenu from "./DropdownMenu";

const deliveries = [
  {
    orderID: "009-300FCT",
    status: "Ready",
    technician: "Ben Santana",
    platform: "Gamma",
    drone: "DJI-004Q",
    technicalCheck: "Passed",
  },
  {
    orderID: "009-300FCT1",
    status: "Ready",
    technician: "Ben Santana",
    platform: "Gamma",
    drone: "DJI-004Q",
    technicalCheck: "Passed",
  },
];

const Table = () => {
  return (
    <div className="py-2 align-middle min-w-full sm:px-6 lg:px-8 w-64 h-96">
      <table className="min-w-full divide-y divide-gray-200 overflow-hidden max-h-64">
        <tbody className="divide-y divide-gray-200">
          {deliveries.map((delivery) => (
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
                  {delivery.technicalCheck}
                </div>
              </td>
              <td className="flex-1 px-6 py-4 flex gap-4">
                <div className="xl:w-28">
                  <button
                    className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium bg-white text-black border-grey border border-opacity-10 border-black rounded-md bg-opacity-20 hover:bg-opacity-20 hover:bg-green-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus:ring-2 focus:ring-nuvoGreen-base "
                    aria-label="Details"
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
                  </button>
                </div>
                <div className="w-28">
                  <DropdownMenu />
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
