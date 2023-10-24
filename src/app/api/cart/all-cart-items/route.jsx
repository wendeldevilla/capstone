import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "Please log in !",
        });

      const extractAllCartItems = await Cart.Find({ userID: id })
        .populate("userID")
        .populate("productID");

      if (extractAllCartItems) {
        NextResponse.json({ success: true, extractAllCartItems });
      } else {
        return NextResponse.json({
          success: false,
          message: "No cart items are found.",
          status: 204,
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated !",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again.",
    });
  }
}
