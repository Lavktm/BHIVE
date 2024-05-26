import { NextResponse } from "next/server";

import { getLocalData } from "@/utils/local-data-loader";

export async function GET() {
  const spaceOverViewData = await getLocalData("public/workspace-data.json");
  return NextResponse.json(spaceOverViewData);
}
