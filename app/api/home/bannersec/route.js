import cloudinary from "@/lib/cloudinary.js";
import { connectDB } from "@/lib/db.js";
import { BannerData } from "@/models/HomeModule/Homesec.js";
import { NextResponse } from "next/server";


export  async function POST(req) {
  await connectDB();

  try {
  const Bannerdata = await req.formData();

  const datas = {
   heading : Bannerdata.get("heading"),
   description : Bannerdata.get("description")
}

for (let i = 1; i<= 5; i++) {
  const file = Bannerdata.get(`bannerimg${i}`);
  if (file && file.name) {           //file will be exit && user select the image
    const buffer = Buffer.from(await file.arrayBuffer());  //file convert in buffer


    const upload = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({folder: "bannerimg"}, (err, res) =>  //straem meaning data flow in chunk by chunk (thoda thoda)
      err ? reject(err) : resolve(res)
   )  
   .end(buffer)  //data send in cloudinary
    });

    datas[`bannerimg${i}`] = upload.secure_url;
  }
}

await BannerData.create(datas);
return NextResponse.json({success: true, message:"Data Added Successfully", data: datas})
} catch (error) {
  console.error(error);
  return NextResponse.json({success: false, message: "Server Error"})
  
}
}

export async function GET() {
  try {
    await connectDB();
    const alldata = await BannerData.find();
    if (!alldata) {
      return NextResponse.json({message:"Data Not Found"})
    }
    return NextResponse.json({data: alldata, success: true, message:"Get All Data"})
  } catch (error) {
     console.error(error);
    return NextResponse.json({ message: "Server Error" });
  }
}

