import { NextResponse } from "next/server";

export default function middleware(req) {
  const res = NextResponse.next();
  return res;
}

export const config = {};
