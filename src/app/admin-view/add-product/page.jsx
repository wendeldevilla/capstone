"use client";

import InputComponent from "@/app/components/FormELements/InputElement";
import SelectComponent from "@/app/components/FormELements/SelectElement";
import { adminAddProductformControls } from "@/app/utils";

export default function AdminAddNewProduct() {
  function handleImage() {}

  return (
    <div className="w-full mt-0 mr-0 mb-0 ml-0 relative">
      <div className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-l relative">
        <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
          <input
            accept="image/*"
            max="1000000"
            type="file"
            onChange={handleImage}
          />
          {adminAddProductformControls.map((controlItem) =>
            controlItem.componentType === "input" ? (
              <InputComponent
                type={controlItem.type}
                placeholder={controlItem.placeholder}
                label={controlItem.label}
              />
            ) : controlItem.componentType === "select" ? (
              <SelectComponent
                label={controlItem.label}
                options={controlItem.options}
              />
            ) : null
          )}

          <button className="inline-flex w-full item-center justify-center bg-black px-6 py-4 text-white font-medium uppercase tracking-wide">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
