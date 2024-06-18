import Member from "@/app/(models)/Member";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("IT DID WHAT IT DID");
  try {
    const body = await req.json();
    const memberData = body.formData;
    await Member.create(memberData);
    return NextResponse.json({ message: "Member Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const members = await Member.find();
    return NextResponse.json({ members }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
