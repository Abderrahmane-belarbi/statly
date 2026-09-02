import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { HrEmployeeModel } from "@/models/HrEmployee";

export const dynamic = "force-dynamic";
const REQUIRED = ["N°", "Nom", "Prénom", "الرتبة_الحالية", "تاريخ_الإزدياد", "تاريخ_الدخول"];
const validDate = (v: unknown) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v));
function validate(data: Record<string, unknown>) {
  for (const key of REQUIRED) if (data[key] == null || String(data[key]).trim() === "") return `${key} is required`;
  const no = Number(data["N°"]);
  if (!Number.isInteger(no) || no <= 0) return "N° must be a positive integer";
  if (!validDate(data["تاريخ_الإزدياد"]) || !validDate(data["تاريخ_الدخول"])) return "Birth and entry dates must be YYYY-MM-DD";
  if (new Date(String(data["تاريخ_الدخول"])) < new Date(String(data["تاريخ_الإزدياد"]))) return "Entry date cannot precede birth date";
  if (data["تعيين_في_الرتبة_الحالية"] && !validDate(data["تعيين_في_الرتبة_الحالية"])) return "Current-grade appointment date is invalid";
  if (data["الدرجة"] !== null && data["الدرجة"] !== undefined && data["الدرجة"] !== "") {
    const grade = Number(data["الدرجة"]);
    if (!Number.isInteger(grade) || grade < 0 || grade > 12) return "الدرجة must be an integer between 0 and 12";
  }
  return null;
}
export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  const docs = await HrEmployeeModel.find({}).sort({ employeeNo: 1 }).lean();
  return NextResponse.json({ records: docs.map((d) => d.data), count: docs.length, updatedAt: new Date().toISOString() });
}
export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const data = (await request.json()) as Record<string, unknown>;
  const error = validate(data);
  if (error) return NextResponse.json({ error }, { status: 400 });
  await connectToDatabase();
  const no = Number(data["N°"]);
  const saved = await HrEmployeeModel.findOneAndUpdate({ employeeNo: no }, { employeeNo: no, data }, { upsert: true, new: true, setDefaultsOnInsert: true }).lean();
  return NextResponse.json({ record: saved?.data }, { status: 201 });
}
