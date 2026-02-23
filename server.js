const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const HTTP_PORT = 3000;
const HTTPS_PORT = 3443;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Handler para servir arquivos
const requestHandler = (req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Arquivo não encontrado</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Erro no servidor: ' + error.code, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
};

// ⚠️ IMPORTANTE: APENAS HTTPS É PERMITIDO
// HTTP puro não é mais suportado por questões de segurança

// Verificar se existem certificados SSL
let sslOptions;
try {
    // Tentar carregar certificado PFX (Windows) primeiro
    const pfxPath = path.join(__dirname, '.cert', 'server.pfx');
    if (fs.existsSync(pfxPath)) {
        sslOptions = {
            pfx: fs.readFileSync(pfxPath),
            passphrase: 'dev-cert-password'
        };
        console.log('🔐 Certificado PFX carregado');
    } else {
        // Fallback para KEY + CERT (OpenSSL)
        sslOptions = {
            key: fs.readFileSync(path.join(__dirname, '.cert', 'server.key')),
            cert: fs.readFileSync(path.join(__dirname, '.cert', 'server.cert'))
        };
        console.log('🔐 Certificados KEY+CERT carregados');
    }
} catch (error) {
    console.error('❌ ERRO: Certificados SSL não encontrados!');
    console.error('🔒 Este servidor REQUER HTTPS. HTTP puro não é permitido.\n');
    console.error('Para gerar certificados SSL:');
    console.error('   Windows: .\\generate-ssl.ps1');
    console.error('   Ou: npm run generate-ssl\n');
    process.exit(1);
}

// Servidor HTTPS (ÚNICO servidor permitido)
const httpsServer = https.createServer(sslOptions, requestHandler);

httpsServer.listen(HTTPS_PORT, () => {
    console.log('════════════════════════════════════════════════════');
    console.log('🔒 Servidor HTTPS SEGURO rodando');
    console.log('════════════════════════════════════════════════════');
    console.log(`🌐 URL: https://localhost:${HTTPS_PORT}`);
    console.log(`📁 Servindo arquivos do diretório atual`);
    console.log(`🛡️  HTTP puro não é permitido (HTTPS apenas)`);
    console.log('✨ Pressione Ctrl+C para parar o servidor');
    console.log('════════════════════════════════════════════════════');
});

// Servidor HTTP apenas para redirecionar para HTTPS (opcional)
const httpServer = http.createServer((req, res) => {
    res.writeHead(301, { 
        Location: `https://localhost:${HTTPS_PORT}${req.url}`,
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
    });
    res.end('Redirecionando para HTTPS...');
});

httpServer.listen(HTTP_PORT, () => {
    console.log(`\n🔀 Redirecionador HTTP → HTTPS ativo na porta ${HTTP_PORT}`);
});