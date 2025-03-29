import { NextResponse } from "next/server";

import { PackageItems } from "@/constants";

export async function GET() {
  return NextResponse.json(PackageItems);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newItem = {
      id: dummyData.length + 1,
      ...body,
    };
    dummyData.push(newItem);
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id } = body;

    const index = dummyData.findIndex((item) => item.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    dummyData[index] = { ...dummyData[index], ...body };
    return NextResponse.json(dummyData[index]);
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id"));

    const index = dummyData.findIndex((item) => item.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    dummyData = dummyData.filter((item) => item.id !== id);
    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
