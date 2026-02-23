const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔐 Gerando certificados SSL auto-assinados...\n');

const certDir = path.join(__dirname, '.cert');

// Criar pasta .cert se não existir
if (!fs.existsSync(certDir)) {
    fs.mkdirSync(certDir);
    console.log('✓ Pasta .cert/ criada');
}

try {
    // Tentar usar OpenSSL
    console.log('Tentando gerar certificados com OpenSSL...');

    execSync(`openssl req -x509 -newkey rsa:4096 -keyout .cert/server.key -out .cert/server.cert -days 365 -nodes -subj "/C=BR/ST=State/L=City/O=xCor.Eng/CN=localhost"`, {
        stdio: 'inherit'
    });

    console.log('\n✅ Certificados SSL gerados com sucesso!');
    console.log('\n📁 Arquivos criados:');
    console.log('  - .cert/server.key  (chave privada)');
    console.log('  - .cert/server.cert (certificado)');
    console.log('\n🚀 Execute "npm start" para iniciar o servidor HTTPS');
    
} catch (error) {
    } catch (error) {
    console.log('\n⚠️  OpenSSL não encontrado. Tentando PowerShell (Windows)...\n');

    try {
        // Para Windows, criar certificado usando PowerShell
        const psScript = `
            $cert = New-SelfSignedCertificate -DnsName "localhost" -CertStoreLocation "Cert:\\CurrentUser\\My" -NotAfter (Get-Date).AddYears(1)
            $pwd = ConvertTo-SecureString -String "password" -Force -AsPlainText
            $path = ".cert/server.pfx"
            Export-PfxCertificate -Cert $cert -FilePath $path -Password $pwd

            # Converter PFX para PEM
            Write-Host "Certificado gerado em: $path"
        `;

        fs.writeFileSync('temp-cert-gen.ps1', psScript);
        execSync('powershell -ExecutionPolicy Bypass -File temp-cert-gen.ps1', { stdio: 'inherit' });
        fs.unlinkSync('temp-cert-gen.ps1');

        console.log('\n✅ Certificado gerado via PowerShell!');
        console.log('\n⚠️  Nota: Você precisará extrair a chave e certificado do arquivo PFX.');
        console.log('Execute os seguintes comandos:');
        console.log('  openssl pkcs12 -in .cert/server.pfx -nocerts -out .cert/server.key -nodes -password pass:password');
        console.log('  openssl pkcs12 -in .cert/server.pfx -clcerts -nokeys -out .cert/server.cert -password pass:password');

    } catch (psError) {
        console.error('\n❌ Erro ao gerar certificados.');
        console.log('\n📝 Instruções manuais:');
        console.log('\n1. Instale o OpenSSL:');
        console.log('   - Windows: https://slproweb.com/products/Win32OpenSSL.html');
        console.log('   - Mac: brew install openssl');
        console.log('   - Linux: sudo apt-get install openssl\n');
        console.log('2. Execute este comando:');
        console.log('   openssl req -x509 -newkey rsa:4096 -keyout .cert/server.key -out .cert/server.cert -days 365 -nodes\n');
        console.log('3. Execute "npm start" novamente');
    }
}
