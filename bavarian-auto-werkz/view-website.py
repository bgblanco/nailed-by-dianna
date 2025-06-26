#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os

PORT = 8888
Handler = http.server.SimpleHTTPRequestHandler

print("🚀 Starting Bavarian Auto Werkz website...")
print(f"📍 Opening browser at http://localhost:{PORT}")
print("✋ Press Ctrl+C to stop the server\n")

# Change to the built directory
os.chdir('out')

# Open browser automatically
webbrowser.open(f'http://localhost:{PORT}')

# Start server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped. Thanks for viewing Bavarian Auto Werkz!")