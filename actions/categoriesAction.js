"use server";
import dbConnect from "@/lib/dbConnect";
import Category from "@/models/Category";
export const getCategories = async () => {
  try {
    await dbConnect();

    const categories = await Category.find({ isActive: true }).lean();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(categories)),
    };
  } catch (error) {
    console.log("Error:", error);

    return {
      success: false,
      message: "Failed to fetch categories",
    };
  }
};
