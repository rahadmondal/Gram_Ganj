"use server";
import { auth } from "@/lib/auth";
export async function registerUser(formData) {
  try {
    // Extract form data safely
    const name = formData.get("name") ?? "";
    const phone = formData.get("phone") ?? "";
    const password = formData.get("password") ?? "";
    const email = formData.get("email") ?? "";
    // Validate required fields
    if (!name || !email || !password || !phone) {
      return { success: false };
    }
    // Call the auth API
    const data = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        phone,
        callbackURL: "/profile",
      },
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
