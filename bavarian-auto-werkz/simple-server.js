const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Bavarian Auto Werkz - Test Server</title></head>
      <body style="font-family: Arial, sans-serif; padding: 20px; background: #f0f8ff;">
        <h1 style="color: #0066CC;">🚗 Bavarian Auto Werkz</h1>
        <h2>Server Working!</h2>
        <p>The basic server is running. This confirms the network setup is working.</p>
        <p><strong>Next steps:</strong> Debug the Next.js application.</p>
        <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3>Quick Test Features:</h3>
          <ul>
            <li>✅ Server connectivity working</li>
            <li>✅ Port 3000 accessible</li>
            <li>✅ Network configuration OK</li>
          </ul>
        </div>
        <p style="color: #666; font-style: italic;">
          Close this test server and run the main application.
        </p>
      </body>
    </html>
  `);
});

const PORT = 3000;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
  console.log('✅ Test server running at:');
  console.log('📍 Local:   http://localhost:3000');
  console.log('📍 Network: http://192.168.1.121:3000');
  console.log('');
  console.log('🔧 If you can see this page, the network is working fine.');
  console.log('💡 Press Ctrl+C to stop this test server and debug Next.js');
});

server.on('error', (err) => {
  console.error('❌ Server error:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.log('💡 Port 3000 is already in use. Try a different port.');
  }
});