import { Fragment, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  orderID: yup.string().required(),
  status: yup.string().oneOf(["Ready", "Not Ready"]).default("Ready"),
  technician: yup.string().required(),
  platform: yup.string().oneOf(["Alpha", "Beta", "Gamma", "Tetha"]),
  drone: yup.string().oneOf(["DJI-004Q"]),
  technicalCheck: yup.boolean().default(true),
});

const NewDeliveryModal = (props) => {
  const {
    isOpen,
    closeModal,
    createDeliveryEntry,
    editDeliveryEntry,
    isEditMode,
    values = {},
  } = props;
  let createButtonRef = useRef(null);
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    if (isEditMode) {
      editDeliveryEntry(data);
    } else {
      createDeliveryEntry(data);
    }
  };

  const { errors } = formState;

  // Reset form onOpen
  useEffect(() => {
    if (isOpen) {
      if (isEditMode) {
        reset(values);
      } else {
        reset({});
      }
    }
  }, [isOpen, isEditMode, values, reset]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={createButtonRef}
        onClose={closeModal}
      >
        <form
          className="min-h-screen px-4 text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              <div className="px-6 py-6 mt-2 mb-0">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {isEditMode ? "Update delivery" : "New delivery"}
                </Dialog.Title>
                <div className="absolute top-4 right-4">
                  <button
                    type="button"
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
                        htmlFor="orderID"
                        className="font-normal text-gray-500 "
                      >
                        Order ID *
                      </label>
                      <input
                        name="orderID"
                        type="text"
                        className="rounded border-gray-300 shadow disabled:bg-gray-300"
                        disabled={isEditMode}
                        {...register("orderID")}
                      />
                      {isEditMode && (
                        // disabled fields dont get submitted
                        <input
                          name="orderID"
                          type="text"
                          className="hidden"
                          {...register("orderID")}
                        />
                      )}
                      {errors?.orderID && (
                        <label className="text-red-400 text-sm">
                          {errors?.orderID.message}
                        </label>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="technician"
                        className="font-normal text-gray-500 "
                      >
                        Technician
                      </label>
                      <input
                        name="technician"
                        type="text"
                        className="rounded border-gray-300 shadow"
                        {...register("technician")}
                      />
                      {errors?.technician && (
                        <label className="text-red-400 text-sm">
                          {errors?.technician.message}
                        </label>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="platform"
                        className="font-normal text-gray-500 "
                      >
                        Platform
                      </label>
                      <select
                        name="platform"
                        className="rounded border-gray-300 shadow"
                        {...register("platform")}
                      >
                        <option value=""></option>
                        <option value="Alpha">Alpha</option>
                        <option value="Beta">Beta</option>
                        <option value="Gamma">Gamma</option>
                        <option value="Tetha">Tetha</option>
                      </select>
                      {errors?.platform && (
                        <label className="text-red-400 text-sm">
                          {errors?.platform.message}
                        </label>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="drone"
                        className="font-normal text-gray-500 "
                      >
                        Drone
                      </label>
                      <select
                        name="drone"
                        className="rounded border-gray-300 shadow"
                        {...register("drone")}
                      >
                        <option value=""></option>
                        <option value="DJI-004Q">DJI-004Q</option>
                      </select>
                      {errors?.drone && (
                        <label className="text-red-400 text-sm">
                          {errors?.drone.message}
                        </label>
                      )}
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
                  ref={createButtonRef}
                  type="submit"
                  className="bg-nuvoGreen-base rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-nuvoGreen-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nuvoGreen-base"
                >
                  {isEditMode ? "Update delivery" : "Create new delivery"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </form>
      </Dialog>
    </Transition>
  );
};

export default NewDeliveryModal;
