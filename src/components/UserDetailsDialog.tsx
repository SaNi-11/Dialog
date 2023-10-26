import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useUserStore from '../store/useUserStore';

function UserDetailsDialog() {
  const { selectedUser, closeModal } = useUserStore();
  return (
    <div>
      {selectedUser && (
        <Transition show={Boolean(selectedUser)} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center ">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              </Transition.Child>

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              ></span>

              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-md bg-green-50">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 underline"
                  >
                    Detalji o korisniku
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Ime: {selectedUser?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Prezime: {selectedUser?.username}
                    </p>
                    <p className="text-sm text-gray-500">
                      Email: {selectedUser?.email}
                    </p>
                    <p className="text-sm text-gray-500">
                      Adresa: {selectedUser?.address.street},{' '}
                      {selectedUser?.address.suite},{' '}
                      {selectedUser?.address.city},{' '}
                      {selectedUser?.address.zipcode}
                    </p>
                    <p className="text-sm text-gray-500">
                      Telefon: {selectedUser?.phone}
                    </p>
                    <p className="text-sm text-gray-500">
                      Veb sajt: {selectedUser?.website}
                    </p>
                    <p className="text-sm text-gray-500">
                      Kompanija: {selectedUser?.company.name}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-sky-400 border border-transparent rounded-sm hover-bg-sky-500 focus-outline-none focus-visible-ring-2 focus-visible-ring-offset-2 focus-visible-ring-blue-500"
                      onClick={closeModal}
                    >
                      Zatvori
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
}

export default UserDetailsDialog;
