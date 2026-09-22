import { compare } from "bcryptjs";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db } from "@/db";
import { loginAccountsTable } from "@/db/scheme";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    const account = await db
      .select({ id: loginAccountsTable.id, email: loginAccountsTable.email, passwordHash: loginAccountsTable.passwordHash })
      .from(loginAccountsTable)
      .where(eq(loginAccountsTable.email, email))
      .limit(1);

    const isValid = account.length > 0 && await compare(password, account[0].passwordHash);

    if (!isValid) {
      return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
    }

    return NextResponse.json({ user: { id: account[0].id, email: account[0].email } });
  } catch {
    return NextResponse.json({ message: "Unable to sign in right now." }, { status: 500 });
  }
}