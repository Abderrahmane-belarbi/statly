import { Document, Schema, model, models } from "mongoose";
import { User as UserType} from "@/types"
type UserDocument = Document & Omit<UserType, "_id"> & { password?: string}

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true, minlength:4, maxlength: 20 },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, minlength: 6, maxlength: 20, required: false },
  image: { type: String, required: false},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const User = models.User || model<UserDocument>("User", UserSchema);