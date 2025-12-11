@echo off
echo Starting Yirmisaniye Project in Development Mode...
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
pause
