import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

const NewDeliveryModal = (props) => {
  const { isOpen, closeModal } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-gray-300 border">
              <div className="px-6 py-4 mt-2 mb-0">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  New delivery
                </Dialog.Title>
                <div className="absolute top-4 right-4">
                  <button
                    className="text-gray-500 rounded-2xl p-1  hover:bg-nuvoGreen-light bg-opacity-20 hover:text-white"
                    onClick={closeModal}
                  >
                    <XIcon width={20} height={20} />
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Please select the order ID and a technician to deploy the
                    cargo. All elements are mandatory.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-4 ">
                    <div className="flex flex-col gap-1">
                      <label
                        for="orderID"
                        className="font-normal text-gray-500 "
                      >
                        Order ID
                      </label>
                      <input
                        name="orderID"
                        type="text"
                        className="rounded border-gray-300 shadow"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        for="technician"
                        className="font-normal text-gray-500 "
                      >
                        Technician
                      </label>
                      <input
                        name="technician"
                        type="text"
                        className="rounded border-gray-300 shadow"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        for="platform"
                        className="font-normal text-gray-500 "
                      >
                        Platform
                      </label>
                      <input
                        name="platform"
                        type="text"
                        className="rounded border-gray-300 shadow"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        for="droneID"
                        className="font-normal text-gray-500 "
                      >
                        Drone
                      </label>
                      <input
                        name="droneID"
                        type="text"
                        className="rounded border-gray-300 shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t p-4 flex justify-end gap-2">
                <button
                  type="button"
                  className="inline-flex justify-between items-center px-4 py-2 text-sm font-medium bg-white text-black border-grey border border-opacity-10 border-black rounded-md bg-opacity-20 hover:bg-opacity-20 hover:bg-green-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus:ring-2 focus:ring-nuvoGreen-base"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-nuvoGreen-base rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-nuvoGreen-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nuvoGreen-base"
                >
                  Create new delivery
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NewDeliveryModal;
