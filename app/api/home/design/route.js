import cloudinary from "@/lib/cloudinary.js";
import { connectDB } from "@/lib/db.js";
import { DesignData } from "@/models/HomeModule/Homesec.js";
import { NextResponse } from "next/server";


export  async function POST(req) {
  await connectDB();

  try {
  const Designdata = await req.formData();

  const datas = {
   heading : Designdata.get("heading"),
   subheading : Designdata.get("subheading")
}

for (let i = 1; i<= 3; i++) {
  const file = Designdata.get(`designimg${i}`);
  if (file && file.name) {         
    const buffer = Buffer.from(await file.arrayBuffer());  


    const upload = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({folder: "designimg"}, (err, res) => 
      err ? reject(err) : resolve(res)
   )  
   .end(buffer)  
    });

    datas[`designimg${i}`] = upload.secure_url;
  }
}

await DesignData.create(datas);
return NextResponse.json({success: true, message:"Data Added Successfully", data: datas})
} catch (error) {
  console.error(error);
  return NextResponse.json({success: false, message: "Server Error"})
  
}
}

export async function GET() {
  try {
    await connectDB();
    const alldata = await DesignData.find();
    if (!alldata) {
      return NextResponse.json({message:"Data Not Found"})
    }
    return NextResponse.json({ success: true, message:"Get All Data", data: alldata,})
  } catch (error) {
     console.error(error);
    return NextResponse.json({ message: "Server Error" });
  }
}

