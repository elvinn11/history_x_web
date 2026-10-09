@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Starting Azerbaijan History Platform dev server on http://localhost:5173/ ...
npm run dev -- --host --port 5173
pause
