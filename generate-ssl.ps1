Write-Host "Gerando certificados SSL..." -ForegroundColor Cyan
if (-not (Test-Path ".cert")) { New-Item -ItemType Directory -Path ".cert" | Out-Null }
$cert = New-SelfSignedCertificate -DnsName "localhost", "127.0.0.1" -CertStoreLocation "Cert:\CurrentUser\My" -NotAfter (Get-Date).AddYears(1) -KeyLength 4096 -KeyExportPolicy Exportable -FriendlyName "xCor.Eng HTTPS Certificate"
$password = ConvertTo-SecureString -String "dev-cert-password" -Force -AsPlainText
Export-PfxCertificate -Cert $cert -FilePath ".cert\server.pfx" -Password $password | Out-Null
Write-Host "Certificados gerados com sucesso em .cert/" -ForegroundColor Green
Write-Host "Arquivos: .cert/server.pfx" -ForegroundColor White
