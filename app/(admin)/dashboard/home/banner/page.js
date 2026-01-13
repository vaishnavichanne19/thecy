"use client";

import axios from "axios";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [fetchBannerData, setFetchBannerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/home/bannersec");
      setFetchBannerData(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <main className="admin-panel-section">
      <div className="my-5 p-5 shadow-2xl">
        {fetchBannerData.map((bannerdata, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between">
                <h3>Banner Data</h3>
                <Link
                  href={`banner/` + bannerdata._id}
                  style={{ textDecoration: 'none' }}
                >
                  <button className="flex gap-2 justify-between items-center border bg-[#576167] text-white p-2">
                    <Pencil size={20} /> <span className="text-3xl">Edit</span>
                  </button>
                </Link>
              </div>
              <hr />
              <p className="admin-panel-p mt-2  leading-normal text-gray-500 ">
                Heading
              </p>
              <p className="text-sm font-medium text-gray-800">
                {bannerdata.heading}
              </p>
              <p className="admin-panel-p mt-2  leading-normal text-gray-500 ">
                Description
              </p>

              <p
                className="text-sm font-medium text-gray-800"
                dangerouslySetInnerHTML={{ __html: bannerdata.description }}
              ></p>

              <p className="admin-panel-p mt-2  leading-normal text-gray-500">
                Images
              </p>
              <div className="row mt-4">
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <Image
                    src={bannerdata.bannerimg1}
                    alt="Banner Image 1"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <Image
                    src={bannerdata.bannerimg2}
                    alt="Banner Image 2"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <Image
                    src={bannerdata.bannerimg3}
                    alt="Banner Image 3"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <Image
                    src={bannerdata.bannerimg4}
                    alt="Banner Image 4"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <Image
                    src={bannerdata.bannerimg5}
                    alt="Banner Image 5"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
