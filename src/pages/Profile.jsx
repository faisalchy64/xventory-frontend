import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Modal from "../components/Modal";
import ProfileUpdateForm from "../components/ProfileUpdateForm";
import profile from "../assets/profile.png";

export default function Profile() {
  const [edit, setEdit] = useState({ isOpen: false, data: null });
  const {
    auth: { _id, name, email, isAdmin, address },
  } = useAuth();

  return (
    <section className="w-4/5 flex flex-col gap-10 py-10 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Profile</h2>

      <article className="card card-compact bg-base-100 w-full mx-auto shadow">
        <div className="card-body flex-row justify-between md:items-center">
          <div className="flex flex-col md:flex-row items-center gap-2.5">
            <div className="size-20 p-0.5 border-2 border-primary rounded-[100%] overflow-hidden">
              <img
                src={profile}
                alt="Profile Image"
                className="size-full object-cover"
              />
            </div>

            <div className="font-semibold">
              <h2 className="text-xl capitalize text-gray-700">{name}</h2>
              <h3 className="text-gray-500">{isAdmin ? "Admin" : "User"}</h3>
              <h3 className="text-gray-500">{_id}</h3>
            </div>
          </div>

          <button
            className="btn btn-sm btn-primary"
            onClick={() =>
              setEdit({ isOpen: true, data: { _id, name, address } })
            }
          >
            Update
          </button>
        </div>
      </article>

      <article className="card card-compact bg-base-100 w-full mx-auto shadow">
        <div className="card-body">
          <h2 className="text-xl font-semibold text-gray-700">
            Personal Information
          </h2>

          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div className="font-semibold">
              <h3 className="text-base text-gray-700">Name</h3>
              <p className="capitalize text-gray-500">{name}</p>
            </div>

            <div className="font-semibold">
              <h3 className="text-base text-gray-700">Email</h3>
              <p className="text-gray-500">{email}</p>
            </div>

            <div className="font-semibold">
              <h3 className="text-base text-gray-700">Address</h3>
              <p className="capitalize text-gray-500">
                {address ? address : "Not Available"}
              </p>
            </div>

            <div className="flex justify-end pt-2.5 md:pt-0">
              <button
                className="btn btn-sm btn-primary"
                onClick={() =>
                  setEdit({ isOpen: true, data: { _id, name, address } })
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </article>

      {edit.isOpen && (
        <Modal>
          <ProfileUpdateForm edit={edit} setEdit={setEdit} />
        </Modal>
      )}
    </section>
  );
}
