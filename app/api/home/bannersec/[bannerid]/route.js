import { connectDB } from "@/lib/db.js";
import { BannerData } from "@/models/HomeModule/Homesec.js";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { bannerid } = params;
    // console.log(bannerid)

    const bannerdata = await BannerData.findById(bannerid);

    if (!bannerdata) {
      return NextResponse.json({ message: "User Data Not Found" });
    }
    return NextResponse.json({ success: true, data: bannerdata });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { bannerid } = params;
    console.log("user id", bannerid);
    const bannerdata = await req.formData();
    console.log("user data", bannerdata);

    const payload = {
      heading: bannerdata.get("heading"),
      description: bannerdata.get("description"),
    };
    console.log(payload);

    const updatedData = await BannerData.findByIdAndUpdate(bannerid, payload, {new: true});
    return NextResponse.json({
      success: true,
      message: "Data Updated Successfully",
      data: updatedData,
     
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" });
  }
}
