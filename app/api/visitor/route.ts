import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'visitor.json');

export async function GET() {
  const file = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(file);

  return NextResponse.json({ count: data.count });
}

export async function POST() {
  const file = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(file);

  const newCount = data.count + 1;
  fs.writeFileSync(filePath, JSON.stringify({ count: newCount }));

  return NextResponse.json({ count: newCount });
}