Write-Host "Starting Yirmisaniye Project in Development Mode..."
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
Read-Host -Prompt "Press Enter to exit"
