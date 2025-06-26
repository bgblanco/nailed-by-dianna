const { execSync } = require('child_process');

console.log('Testing server connection...\n');

// Check if the server is running
try {
  const result = execSync('curl -s http://localhost:3000', { encoding: 'utf8' });
  if (result.includes('Bavarian')) {
    console.log('✅ Server is working! Website is accessible.');
    console.log('\nYou can view the website at:');
    console.log('👉 http://localhost:3000');
  } else {
    console.log('⚠️  Server responded but content seems incorrect.');
  }
} catch (error) {
  console.log('❌ Cannot connect to server.');
  console.log('\nTroubleshooting steps:');
  console.log('1. Make sure no firewall is blocking port 3000');
  console.log('2. Try opening http://127.0.0.1:3000 instead');
  console.log('3. Check if Little Snitch or other security software is blocking connections');
}

console.log('\n📁 Project files are located at:');
console.log('/Users/bg/bavarian-auto-werkz/');
console.log('\nMain pages:');
console.log('- Homepage: src/app/page.tsx');
console.log('- BMW Code Checker: src/app/code-checker/page.tsx');