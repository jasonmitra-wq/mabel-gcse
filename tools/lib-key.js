/* The API key for the dev tools: env var SPEC_CHECK_API_KEY, or, on Windows
 * when the shell has not got it, the same variable saved for this Windows user.
 * Never printed, logged or written anywhere. Never ANTHROPIC_API_KEY.
 */
const { execFileSync } = require('child_process');

let cached = null;
function apiKey() {
  if (cached !== null) return cached;
  cached = process.env.SPEC_CHECK_API_KEY || '';
  if (!cached && process.platform === 'win32') {
    try {
      cached = execFileSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command',
        "[Environment]::GetEnvironmentVariable('SPEC_CHECK_API_KEY','User')"], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    } catch { cached = ''; }
  }
  return cached;
}

module.exports = { apiKey };
