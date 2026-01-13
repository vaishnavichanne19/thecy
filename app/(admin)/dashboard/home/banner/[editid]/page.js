"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import CKEditorClient from "@/app/(admin)/component/CKEditorClient.js";
import Link from "next/link";
import { X } from "lucide-react";

const UpdateBanner = () => {
  const { editid } = useParams();
  const router = useRouter();

  const [bannerData, setBannerData] = useState({
    heading: "",
    description: "",
    bannerimg1: "",
    bannerimg2: "",
    bannerimg3: "",
    bannerimg4: "",
    bannerimg5: "",
  });

  const [selectedImages, setSelectedImages] = useState({});

  // 🔹 Fetch banner
  useEffect(() => {
    const fetchBanner = async () => {
      const res = await axios.get(`/api/home/bannersec/${editid}`);
      if (res.data.success) {
        setBannerData(res.data.data);
      }
    };
    fetchBanner();
  }, [editid]);

  // 🔹 Image change
  const handleImageChange = (e, field) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/webp") {
      toast.error("Only WEBP images allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be under 2MB");
      return;
    }

    setSelectedImages((prev) => ({ ...prev, [field]: file }));

    setBannerData((prev) => ({
      ...prev,
      [field]: URL.createObjectURL(file),
    }));
  };

  // 🔹 Submit update
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heading", bannerData.heading);
    formData.append("description", bannerData.description);

    Object.keys(selectedImages).forEach((key) => {
      formData.append(key, selectedImages[key]);
    });

    try {
      await axios.put(`/api/home/bannersec/${editid}`, formData);
      toast.success("Banner Updated Successfully");
      router.push("/dashboard/home/banner");
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <main className="admin-panel-section p-6">
      <div className="admin-panel-edit-page p-5">
        <div className="flex justify-between items-center">
          <h4 className="mb-4">Update Banner</h4>
          <Link
            href="/dashboard/home/banner"
            className="bg-[#576167] text-white"
          >
            <X />
          </Link>
        </div>
        <hr />
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="admin-panel-p my-3  leading-normal text-gray-500 ">
              Heading
            </label>
            <input
              type="text"
              id="heading"
              value={bannerData.heading}
              onChange={(e) =>
                setBannerData({ ...bannerData, heading: e.target.value })
              }
              className="w-full border p-3 rounded"
            />
          </div>

          {/* Description */}
          <div>
            <label className="admin-panel-p my-3  leading-normal text-gray-500 ">
              Description
            </label>
            <CKEditorClient
              value={bannerData.description}
              onChange={(data) =>
                setBannerData((prev) => ({
                  ...prev,
                  description: data,
                }))
              }
            />
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 mt-5">
            {[
              "bannerimg1",
              "bannerimg2",
              "bannerimg3",
              "bannerimg4",
              "bannerimg5",
            ].map((img) => (
              <div key={img}>
                <label className="admin-panel-p mt-2  leading-normal text-gray-500 ">
                  {img}
                </label>
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, img)}
                  className="border p-2 my-3"
                />
                {bannerData[img] && (
                  <Image
                    src={bannerData[img]}
                    alt={img}
                    width={200}
                    height={120}
                    className="mt-2 rounded"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-5 text-2xl font-semibold">
            <button
              type="submit"
              className="bg-[#576167] text-white py-3 px-5 rounded"
            >
              Update Banner
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
};

export default UpdateBanner;
