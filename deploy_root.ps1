# Deploy Root Portal Script
$repoUrl = "https://github.com/ELO2026X/elo2026x.github.io.git"

# 3. Add Remote (If needed)
# git remote add origin https://github.com/ELO2026X/elo2026x.github.io.git"
$tempDir = "temp_deploy_root"

Write-Host "Starting deployment to $repoUrl..."

# 1. Clean up if exists
if (Test-Path $tempDir) { 
    Write-Host "Cleaning up previous temp dir..."
    Remove-Item -Recurse -Force $tempDir 
}

# 2. Clone
Write-Host "Cloning repository..."
git clone $repoUrl $tempDir
if (-not $?) { Write-Error "Clone failed"; exit 1 }

# 3. Enter dir
Push-Location $tempDir

# 4. Create index.html (Portal)
Write-Host "Creating index.html..."
$htmlContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE VOID ARCHIVE // ROOT ACCESS</title>
    <!-- Google AdSense Verification -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6275575304084608" crossorigin="anonymous"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;700&display=swap');
        body { background-color: #050505; color: #b0b0b0; font-family: 'Roboto Mono', monospace; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0; overflow: hidden; }
        .container { text-align: center; border: 1px solid #333; padding: 40px; max-width: 600px; position: relative; background: rgba(10, 10, 10, 0.8); }
        .container::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: rgba(220, 38, 38, 0.5); animation: scan 3s infinite linear; }
        h1 { color: #dc2626; font-size: 2rem; margin-bottom: 1rem; letter-spacing: 0.2rem; }
        .btn { display: inline-block; border: 1px solid #dc2626; color: #dc2626; padding: 12px 24px; text-decoration: none; font-weight: bold; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.1rem; }
        .btn:hover { background: #dc2626; color: #000; box-shadow: 0 0 15px #dc2626; }
        @keyframes scan { 0% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
    </style>
</head>
<body>
    <div class="container">
        <h1>RESTRICTED ACCESS</h1>
        <p>You have reached the root directory of <strong>The Void Archive</strong>. Proceed only if you have sufficient mental clearance.</p>
        <a href="/Creepy_Horror_Stories/" class="btn">Access Terminal</a>
    </div>
</body>
</html>
"@
$htmlContent | Out-File -Encoding utf8 index.html

# 5. Create ads.txt
Write-Host "Creating ads.txt..."
$adsContent = "google.com, pub-6275575304084608, DIRECT, f08c47fec0942fa0"
$adsContent | Out-File -Encoding utf8 ads.txt

# 6. Commit and Push
Write-Host "Pushing to GitHub..."
git add .
git commit -m "Deploy Portal and Ads.txt via automation"
git push

# 7. Cleanup
Pop-Location
Write-Host "Cleaning up..."
Remove-Item -Recurse -Force $tempDir

Write-Host "Deployment Complete!"
