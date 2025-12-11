import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Validación básica
    if (!name || !email || !phone || !projectType) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Guardar en Supabase
    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      phone,
      project_type: projectType,
      message: message || null,
    });

    if (error) {
      console.error("Error saving contact:", error);
      return NextResponse.json(
        { error: "Error al guardar el contacto" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
