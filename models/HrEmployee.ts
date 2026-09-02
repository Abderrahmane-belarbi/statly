import { Document, Schema, model, models } from "mongoose";

export type HrEmployee = Record<string, unknown> & { [key: string]: unknown };

type HrEmployeeDocument = Document & {
  employeeNo: number;
  data: HrEmployee;
  createdAt: Date;
  updatedAt: Date;
};

const HrEmployeeSchema = new Schema<HrEmployeeDocument>(
  {
    employeeNo: { type: Number, required: true, unique: true, index: true },
    data: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true, collection: "hr_employees" }
);

export const HrEmployeeModel = models.HrEmployee || model<HrEmployeeDocument>("HrEmployee", HrEmployeeSchema);
