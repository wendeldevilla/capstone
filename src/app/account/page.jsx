"use client";

import { useContext, useState } from "react";
import { GlobalContext } from "../context";
import { addNewAddressFormControls } from "../utils";
import InputComponent from "../components/FormELements/InputElement";

export default function Account() {
  const { user, addresses, setAddresses, addressFormData, setAddressFormData } =
    useContext(GlobalContext);

  const [showAddressForm, setShowAddressForm] = useState(false);

  return (
    <section>
      <div className="mx-auto bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow">
          <div className="p-6 sm:p-12">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row"></div>
            <div className="flex flex-col flex-1">
              <h4 className="text-lg font-semibold text-center md:text-left">
                {user?.name}
              </h4>
              <p>{user?.email}</p>
              <p>{user?.role}</p>
            </div>
            <button className="mt-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide">
              View Your Orders
            </button>
            <div className="mt-6">
              <h1 className="font-bold text-lg">Your Addresses :</h1>
              <div className="mt-4">
                {addresses && addresses.length ? (
                  addresses.map((item) => (
                    <div className="border p-6" key={item._id}>
                      <p>Name : {item.fullName}</p>
                      <p>Address : {item.address}</p>
                      <p>Province : {item.province}</p>
                      <p>Zip Code : {item.zipCode}</p>
                      <button className="mt-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide">
                        Update
                      </button>
                      <button className="mt-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide">
                        Delete
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No Addresses found. Please add a new address !</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setShowAddressForm(!showAddressForm)}
                className="mt-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
              >
                {showAddressForm ? "Hide Address Form" : "Add New Address"}
              </button>
            </div>
            {showAddressForm ? (
              <div className="flex flex-col mt-5 justify-center pt-4 items-center">
                <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
                  {addNewAddressFormControls.map((controlItem) => (
                    <InputComponent
                      type={controlItem.type}
                      placeholder={controlItem.placeholder}
                      label={controlItem.label}
                      value={addressFormData[controlItem.id]}
                      onChange={(event) =>
                        setAddressFormData({
                          ...addressFormData,
                          [controlItem.id]: event.target.value,
                        })
                      }
                    />
                  ))}
                </div>
                <button className="mt-5 inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide">
                  Save
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
