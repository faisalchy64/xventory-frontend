import { useState } from "react";
import Modal from "../components/Modal";
import ProfileUpdateForm from "../components/ProfileUpdateForm";
import profile from "../assets/profile.png";

export default function Profile() {
  const [edit, setEdit] = useState({ isOpen: false, data: null });

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

            <div>
              <h2 className="text-xl font-semibold text-gray-700">John Doe</h2>
              <h3 className="text-base text-gray-500">User | Admin</h3>
              <h3 className="text-base text-gray-500">Id: 12345</h3>
            </div>
          </div>

          <button
            className="btn btn-sm btn-primary"
            onClick={() => setEdit({ isOpen: true, data: { id: 12345 } })}
          >
            Edit Profile
          </button>
        </div>
      </article>

      <article className="card card-compact bg-base-100 w-full mx-auto shadow">
        <div className="card-body">
          <h2 className="text-xl font-semibold text-gray-700">
            Personal Information
          </h2>

          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <h3 className="text-base font-semibold text-gray-700">
                Full Name
              </h3>
              <p className="text-base text-gray-500">John Doe</p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-700">Email</h3>
              <p className="text-base text-gray-500">john@doe.com</p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-700">Address</h3>
              <p className="text-base text-gray-500">
                Gec, Chittagong, Bangladesh
              </p>
            </div>

            <div className="flex justify-end pt-2.5 md:pt-0">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => setEdit({ isOpen: true, data: { id: 12345 } })}
              >
                Edit Profile
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
