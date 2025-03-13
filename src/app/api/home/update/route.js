import connectToDB from "@/database";
import About from "@/models/About";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, myName, oneLineSummary } = extractData;

    const updateData = await Home.findOneAndUpdate(
      {
        _id: _id,
      },
      { myName, oneLineSummary },
      { new: true }
    );

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong !Please try again",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong !Please try again",
    });
  }
}
