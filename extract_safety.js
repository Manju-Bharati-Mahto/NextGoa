const fs = require('fs');
const lines = fs.readFileSync('/Users/apple/.gemini/antigravity/brain/dca459b3-85f5-44f0-9ebb-93cd0dd88bad/.system_generated/logs/transcript.jsonl', 'utf8').split('\n').filter(Boolean);
for (let i = lines.length - 1; i >= 0; i--) {
  const line = JSON.parse(lines[i]);
  if (line.type === 'PLANNER_RESPONSE' && line.tool_calls) {
    for (const call of line.tool_calls) {
      if ((call.name === 'replace_file_content' || call.name === 'write_to_file') && call.args) {
        if (call.args.TargetFile && call.args.TargetFile.includes('CampusSafety.tsx')) {
          console.log(line.created_at);
          console.log(call.args.ReplacementContent || call.args.CodeContent);
        }
      }
    }
  }
}
