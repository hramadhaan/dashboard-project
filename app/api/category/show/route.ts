import { authConfig } from "@/lib/auth";
import { axiosClient } from "@/lib/network/axios";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await getServerSession(authConfig);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await axiosClient.get("/category/show", {
      headers: {
        Authorization: session.user.token,
      },
    });

    return NextResponse.json({ data: response.data.data }, { status: 200 });
  } catch (err) {
    console.error("Error GET Category: ", err);
    return NextResponse.json(
      { error: "Opps, something went wrong." },
      { status: 500 }
    );
  }
}
