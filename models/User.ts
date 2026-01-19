import { Document, Schema, model, models } from "mongoose";
import { User } from "@/types"
type UserDocument = Document & Omit<User, "_id">

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true, minlength:4, maxlength: 20 },
  email: { type: String, required: true, unique: true, trim: true, lowecase: true },
  password: { type: String, minlength: 6, maxlength: 20 },
  image: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user"},
})

export const User = models.User || model<UserDocument>("User", UserSchema);