'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { spawn } = require('child_process');
const bundle = path.join(__dirname, 'nixxel-source.json.gz');
const target = path.join(__dirname, '.nixxel-runtime');
const payload = JSON.parse(zlib.gunzipSync(fs.readFileSync(bundle)).toString('utf8'));
fs.mkdirSync(target, { recursive: true });
for (const [name, content] of Object.entries(payload)) {
  const destination = path.resolve(target, name);
  if (!destination.startsWith(target + path.sep)) throw new Error('Invalid bundled path');
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, content, 'utf8');
}
const child = spawn(process.execPath, [path.join(target, 'server.js')], { stdio: 'inherit', env: process.env });
child.on('exit', code => process.exit(code ?? 1));
