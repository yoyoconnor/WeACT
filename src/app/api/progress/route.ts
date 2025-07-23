import { NextRequest, NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/authOptions';

// Open or create the SQLite database
async function openDb() {
  return open({
    filename: './progress.sqlite',
    driver: sqlite3.Database,
  });
}

// POST: Update module progress for a user
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { module, progress } = await req.json();
  if (typeof module !== 'number' || typeof progress !== 'number') {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }
  const db = await openDb();
  await db.run(
    `CREATE TABLE IF NOT EXISTS module_progress (
      email TEXT,
      module INTEGER,
      progress REAL,
      PRIMARY KEY (email, module)
    )`
  );
  await db.run(
    `INSERT INTO module_progress (email, module, progress) VALUES (?, ?, ?)
      ON CONFLICT(email, module) DO UPDATE SET progress=excluded.progress`,
    [session.user.email, module, progress]
  );
  return NextResponse.json({ success: true });
}

// GET: Get all module progress for the current user
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const db = await openDb();
  await db.run(
    `CREATE TABLE IF NOT EXISTS module_progress (
      email TEXT,
      module INTEGER,
      progress REAL,
      PRIMARY KEY (email, module)
    )`
  );
  const rows = await db.all(
    `SELECT module, progress FROM module_progress WHERE email = ?`,
    [session.user.email]
  );
  return NextResponse.json({ progress: rows });
}
