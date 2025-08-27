"use client";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fetchAUser, updateAUser } from "@/api/Api";
import { Camera, Edit2, Save, X } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);

  const userId = JSON.parse(localStorage.getItem("user") || "null");

  // ✅ Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetchAUser(userId?._id);
        setUser(res);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  // ✅ Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "At least 3 chars").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Required"),
  });


  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);

      if (values.image) formData.append("image", values.image); // File
      if (values.proofFront) formData.append("proof.front", values.proofFront);
      if (values.proofBack) formData.append("proof.baack", values.proofBack);

      const res = await updateAUser(userId?._id, formData);

      setUser(res.data.user); // updated user
      setEditMode(false);
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl  mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Profile</h2>
        {editMode ? (
          <button
            onClick={() => setEditMode(false)}
            className="flex items-center gap-2 text-red-500 hover:text-red-700"
          >
            <X size={18} /> Cancel
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="flex items-center gap-2 text-primary hover:text-darkprimary cursor-pointer"
          >
            <Edit2 size={18} />
          </button>
        )}
      </div>

      <Formik
        initialValues={{
          image: user?.image || "",
          name: user?.name || "",
          email: user?.email || "",
          phone: user?.phone || "",
          proofFront: user?.proof?.front || "",
          proofBack: user?.proof?.back || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Image */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={
                      values.image instanceof File
                        ? URL.createObjectURL(values.image)
                        : values.image || "/default-avatar.png"
                    }
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-full object-cover border w-28 h-28"
                  />
                  {editMode && (
                    <label className="absolute bottom-0 right-0 bg-primary p-2 rounded-full cursor-pointer">
                      <Camera className="text-white" size={16} />
                  
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const file = e.target.files[0];
                            setFieldValue("image", file); // ✅ keep file
                          }
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* User Info */}
              <div className="space-y-4">
                {/* Name */}
                {editMode ? (
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full rounded-md border px-4 py-2 dark:bg-gray-800"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ) : (
                  <p>
                    <span className="font-semibold">Name:</span> {values.name}
                  </p>
                )}

                {/* Email */}
                {editMode ? (
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full rounded-md border px-4 py-2 dark:bg-gray-800"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ) : (
                  <p>
                    <span className="font-semibold">Email:</span> {values.email}
                  </p>
                )}

                {/* Phone */}
                {editMode ? (
                  <div>
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="w-full rounded-md border px-4 py-2 dark:bg-gray-800"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ) : (
                  <p>
                    <span className="font-semibold">Phone:</span> {values.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Proof Docs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Front */}
              <div className="border rounded-md p-3 text-center">
                <p className="mb-2 font-semibold">Proof Front</p>
                {values.proofFront ? (
                  <img
                    src={
                      values.proofFront instanceof File
                        ? URL.createObjectURL(values.proofFront)
                        : values.proofFront
                    }
                    alt="Proof Front"
                    width={200}
                    height={120}
                    className="mx-auto rounded"
                  />
                ) : (
                  <div className="w-full h-28 flex items-center justify-center border bg-gray-100 dark:bg-gray-700 rounded">
                    <span>No Image</span>
                  </div>
                )}
                {editMode && (
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-2 text-sm"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFieldValue("proofFront", e.target.files[0]);
                      }
                    }}
                  />
                )}
              </div>

              {/* Back */}
              <div className="border rounded-md p-3 text-center">
                <p className="mb-2 font-semibold">Proof Back</p>
                {values.proofBack ? (
                  <img
                    src={
                      values.proofBack instanceof File
                        ? URL.createObjectURL(values.proofBack)
                        : values.proofBack
                    }
                    alt="Proof Back"
                    width={200}
                    height={120}
                    className="mx-auto rounded"
                  />
                ) : (
                  <div className="w-full h-28 flex items-center justify-center border bg-gray-100 dark:bg-gray-700 rounded">
                    <span>No Image</span>
                  </div>
                )}
                {editMode && (
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-2 text-sm"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFieldValue("proofBack", e.target.files[0]);
                      }
                    }}
                  />
                )}
              </div>
            </div>

            {/* Save Button */}
            {editMode && (
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-darkprimary transition disabled:opacity-50"
                >
                  <Save size={18} />
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
