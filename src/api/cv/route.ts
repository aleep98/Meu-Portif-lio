import { NextResponse } from "next/server";
import path from "path";
import fs form 'fs'

export async function GET() {
    const filePath = path.join(process.cwd(), 'public/cv/curriculo.pdf')
    const file = fs.readFileSync(filePath)

    return new NextResponse (file, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="Alexandre-CV.pdf"',
        }
    })
}