import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Store DB file in the data directory (writable in Docker)
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const dbPath = path.join(dataDir, 'sbti.db');
const db = new Database(dbPath);

// Initialize table
db.exec(`
  CREATE TABLE IF NOT EXISTS stats (
    personality_code TEXT PRIMARY KEY,
    count INTEGER DEFAULT 0
  )
`);

export function getStats(code: string) {
  const row = db.prepare('SELECT count FROM stats WHERE personality_code = ?').get(code) as { count: number } | undefined;
  return row ? row.count : 0;
}

export function incrementStats(code: string) {
  db.prepare(`
    INSERT INTO stats (personality_code, count)
    VALUES (?, 1)
    ON CONFLICT(personality_code) DO UPDATE SET count = count + 1
  `).run(code);
  const row = db.prepare('SELECT count FROM stats WHERE personality_code = ?').get(code) as { count: number };
  return row.count;
}

export function getTotalCount() {
  const row = db.prepare('SELECT SUM(count) as total FROM stats').get() as { total: number } | undefined;
  return row?.total || 0;
}