import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  heading: String,
  description:  String, 
  bannerimg1: String,
  bannerimg2: String,
  bannerimg3: String,
  bannerimg4: String,
  bannerimg5: String,
});

const DesignSchema = new mongoose.Schema({
  heading: String,
  subheading:String,
  designimg1: String,
  designimg2: String,
  desognimg3: String
})

export const BannerData = mongoose.models.Banner || mongoose.model("Banner", BannerSchema);
export const DesignData = mongoose.models.Design || mongoose.model("Design", DesignSchema);