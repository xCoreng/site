const fs = require('fs');
const path = require('path');

// Cores para console
const colors = {
    green: '\x1b[32m',
    blue: '\x1b[34m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m'
};

console.log(`${colors.blue}🔨 Iniciando build do projeto xCor.Eng...${colors.reset}\n`);

// IMPORTANTE: Pasta .copilot (documentação da IA) NÃO é copiada para dist/
// Apenas arquivos essenciais para produção são incluídos no build

// Criar pasta dist
const distDir = './dist';
if (fs.existsSync(distDir)) {
    try {
        fs.rmSync(distDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
    } catch (error) {
        console.log(`${colors.yellow}⚠${colors.reset} Aviso: Não foi possível remover dist/ completamente`);
        console.log(`${colors.yellow}  Tentando criar arquivos mesmo assim...${colors.reset}`);
    }
}
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}
if (!fs.existsSync(path.join(distDir, 'img'))) {
    fs.mkdirSync(path.join(distDir, 'img'));
}

console.log(`${colors.green}✓${colors.reset} Pasta dist/ criada`);

// Minificar CSS (remover comentários, espaços extras e quebras de linha)
const cssContent = fs.readFileSync('./style.css', 'utf8');
const minifiedCSS = cssContent
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários
    .replace(/\s+/g, ' ') // Remove espaços múltiplos
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ':')
    .trim();

fs.writeFileSync(path.join(distDir, 'style.css'), minifiedCSS);
console.log(`${colors.green}✓${colors.reset} style.css minificado`);

// Copiar e otimizar HTML
let htmlContent = fs.readFileSync('./index.html', 'utf8');
// Remove espaços extras entre tags
htmlContent = htmlContent.replace(/>\s+</g, '><').trim();
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
console.log(`${colors.green}✓${colors.reset} index.html otimizado`);

// Copiar imagens
if (fs.existsSync('./img')) {
    const images = fs.readdirSync('./img');
    images.forEach(img => {
        fs.copyFileSync(
            path.join('./img', img),
            path.join(distDir, 'img', img)
        );
    });
    console.log(`${colors.green}✓${colors.reset} Imagens copiadas (${images.length} arquivo(s))`);
}

// Copiar server.js para produção
fs.copyFileSync('./server.js', path.join(distDir, 'server.js'));
console.log(`${colors.green}✓${colors.reset} server.js copiado`);

// Criar package.json simplificado para produção
const prodPackage = {
    name: "xcoreng-site",
    version: "1.0.0",
    description: "xcoreng Official Site - Production Build",
    main: "server.js",
    scripts: {
        start: "node server.js"
    },
    author: "xCor.Eng",
    license: "MIT"
};

fs.writeFileSync(
    path.join(distDir, 'package.json'),
    JSON.stringify(prodPackage, null, 2)
);
console.log(`${colors.green}✓${colors.reset} package.json criado`);

// Gerar relatório de build
const buildInfo = {
    buildDate: new Date().toISOString(),
    version: "1.0.0",
    files: {
        html: fs.statSync(path.join(distDir, 'index.html')).size,
        css: fs.statSync(path.join(distDir, 'style.css')).size,
        js: fs.statSync(path.join(distDir, 'server.js')).size
    }
};

fs.writeFileSync(
    path.join(distDir, 'build-info.json'),
    JSON.stringify(buildInfo, null, 2)
);

console.log(`\n${colors.blue}📦 Build concluído com sucesso!${colors.reset}`);
console.log(`${colors.yellow}📁 Arquivos de produção em: ./dist/${colors.reset}`);
console.log(`\n${colors.green}Para executar a versão de produção:${colors.reset}`);
console.log(`   cd dist && node server.js\n`);
