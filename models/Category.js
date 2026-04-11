import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      en: {
        type: String,
        required: [true, "English name is required"],
        trim: true,
      },
      bn: {
        type: String,
        required: [true, "Bengali name is required"],
        trim: true,
      },
    },
    description: {
      en: {
        type: String,
        default: "",
      },
      bn: {
        type: String,
        default: "",
      },
    },
    imageUrl: {
      type: String,
      default: "https://placehold.co/600x400/png?text=Category",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
