import { simpletext } from "@/lib/simpletext";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { to, message } = await req.json();

  const response = await simpletext.sendSMS({
    to,
    message,
  });

  console.log(response);

  return NextResponse.json(response);
}
