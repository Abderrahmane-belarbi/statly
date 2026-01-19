"use server"
import { User } from "@/models/User"
import UserRegister from "@/lib/validation"
import { connectToDatabase } from "@/lib/mongodb"
export async function createUser(data: Omit<UserRegister, "confirmPassword">) {
  try {
    await connectToDatabase();
    const createdUser = await User.create(data)
  } catch (err) {
    throw new Error(err)
  }
}