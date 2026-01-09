import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    // Aponta para o arquivo correto: public/cv/curriculo.pdf
    const filePath = path.join(process.cwd(), 'public', 'cv', 'curriculo.pdf');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'CV file not found' }, { status: 404 });
    }

    const file = fs.readFileSync(filePath);

    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        // 'inline' diz ao navegador para tentar abrir o arquivo em vez de baixar
        'Content-Disposition': 'inline; filename="Alexandre-CV.pdf"',
      },
    });
  } catch (error) {
    console.error('Error serving CV:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}