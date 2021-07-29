import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

/* This example requires Tailwind CSS v2.0+ */
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
  // More people...
];

const Table = () => {
  return (
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className=" divide-y divide-gray-200">
          {deliveries.map((delivery) => (
            <tr
              key={delivery.orderID}
              className="divide-x-reverse border-gray-900  border-solid"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Status</div>
                <div className="text-sm text-gray-500">{delivery.status}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Order ID</div>
                <div className="text-sm text-gray-500">{delivery.orderID}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Technician</div>
                <div className="text-sm text-gray-500">
                  {delivery.technician}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Platform</div>
                <div className="text-sm text-gray-500">{delivery.platform}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Drone</div>
                <div className="text-sm text-gray-500">{delivery.drone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Technical check</div>
                <div className="text-sm text-gray-500">
                  {delivery.technicalCheck}
                </div>
              </td>
              <td className="px-6 py-4 flex gap-4">
                <div className="w-28">
                  <button className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium bg-white text-black border-grey border border-opacity-10 border-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span className="">Details</span>
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
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center items-center gap-2 w-full px-4 py-2 text-sm font-medium bg-white text-black border-grey border-2 border-opacity-10 border-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Actions
                        <ChevronDownIcon className="h-5 w-5 text-black text-opacity-25" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <EditActiveIcon
                                    className="w-5 h-5 mr-2"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <EditInactiveIcon
                                    className="w-5 h-5 mr-2"
                                    aria-hidden="true"
                                  />
                                )}
                                Edit
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                {active ? (
                                  <DeleteActiveIcon
                                    className="w-5 h-5 mr-2 text-violet-400"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <DeleteInactiveIcon
                                    className="w-5 h-5 mr-2 text-violet-400"
                                    aria-hidden="true"
                                  />
                                )}
                                Delete
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {delivery.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

export default Table;
