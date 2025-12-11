import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const projectTypeLabels: Record<string, string> = {
      reparacion: "Reparación de techo",
      mantencion: "Mantención de techo",
      construccion: "Construcción de techo nuevo",
      pintura: "Pintura de fachada",
      otro: "Otro",
    };

    // Guardar en Supabase
    const { error: dbError } = await supabase.from("contacts").insert({
      name,
      email,
      phone,
      project_type: projectType,
      message: message || null,
    });

    if (dbError) {
      console.error("Error saving contact:", dbError);
    }

    // Enviar email con Resend
    const { error: emailError } = await resend.emails.send({
      from: "EUSBRO <andres.eusquiza@eusbro.cl>",
      to: ["a.eusquiza@gmail.com"],
      subject: `Nueva solicitud - ${projectTypeLabels[projectType] || projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #53565A; padding: 20px; text-align: center;">
            <h1 style="color: #FCC30E; margin: 0;">EUSBRO</h1>
            <p style="color: white; margin: 5px 0 0 0;">Nueva solicitud de contacto</p>
          </div>

          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #53565A; border-bottom: 2px solid #FCC30E; padding-bottom: 10px;">
              Datos del cliente
            </h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #53565A; width: 140px;">Nombre:</td>
                <td style="padding: 10px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #53565A;">Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #53565A;">Teléfono:</td>
                <td style="padding: 10px 0;"><a href="https://wa.me/${phone.replace(/\s/g, "").replace("+", "")}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #53565A;">Tipo de proyecto:</td>
                <td style="padding: 10px 0;">${projectTypeLabels[projectType] || projectType}</td>
              </tr>
            </table>

            ${
              message
                ? `
            <h3 style="color: #53565A; margin-top: 20px;">Mensaje:</h3>
            <div style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #FCC30E;">
              ${message}
            </div>
            `
                : ""
            }
          </div>

          <div style="background-color: #53565A; padding: 15px; text-align: center;">
            <p style="color: #999; margin: 0; font-size: 12px;">
              Este mensaje fue enviado desde el formulario de contacto de eusbro.cl
            </p>
          </div>
        </div>
      `,
    });

    if (emailError) {
      console.error("Error sending email:", emailError);
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
