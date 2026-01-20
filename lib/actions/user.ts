"use server"
import { User } from "@/models/User"
import { UserRegister } from "@/lib/validation"
import { connectToDatabase } from "@/lib/mongodb"
export async function createUser(data: Omit<UserRegister, "confirmPassword">) {
  try {
    await connectToDatabase();
    const createdUser = await User.create(data)
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error("Creating user failed");
  }
}