import cloudinary from "@/lib/cloudinary.js";
import { connectDB } from "@/lib/db.js";
import { DesignData } from "@/models/HomeModule/Homesec.js";
import { NextResponse } from "next/server";

export async function GET({ params }) {
  try {
    await connectDB();
    const { designid } = params;
    // console.log(designid)

    const Designdata = await DesignData.findById(designid);

    if (!Designdata) {
      return NextResponse.json({ message: "User Data Not Found" });
    }
    return NextResponse.json({ success: true, data: Designdata });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { designid } = params;

    const formData = await req.formData();
    const updatedPayload = {};

  
    if (formData.get("heading"))
      updatedPayload.heading = formData.get("heading");

    if (formData.get("subheading"))
      updatedPayload.subheading = formData.get("subheading");

   
    const imageFields = [
      "designimg1",
      "designimg2",
      "designimg3"
    ];

    for (const field of imageFields) {
      const file = formData.get(field);

      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadResult = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            { folder: "Designs" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          ).end(buffer);
        });

        updatedPayload[field] = uploadResult.secure_url;
      }
    }

    const updatedData = await DesignData.findByIdAndUpdate(
      designid,
      { $set: updatedPayload },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Design Updated Successfully",
      data: updatedData,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

