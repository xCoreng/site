# xCor.Eng Official Site

![xCor.Eng](img/Logo.png)

## 🌐 Site Oficial da xCor.Eng
**Slogan**: Be Better Than Yesterday

Site institucional minimalista e profissional desenvolvido com Node.js puro.

---

## 🚀 Quick Start

### Desenvolvimento
```bash
# Instalar (não há dependências, mas recomendado para npm scripts)
npm install

# Gerar certificados SSL (OBRIGATÓRIO - primeira vez)
.\generate-ssl.ps1  # Windows
# ou
npm run generate-ssl

# Iniciar servidor de desenvolvimento
npm start

# Acessar
https://localhost:3443  # HTTPS (ÚNICO permitido)
http://localhost:3000   # HTTP (redireciona para HTTPS)
```

### Build e Produção
```bash
# Gerar build otimizado
npm run build

# Executar versão de produção
cd dist && node server.js
```

### ⚠️ HTTPS Obrigatório
**HTTP puro não é mais permitido.** O servidor requer certificados SSL para iniciar.
- Ver [HTTPS-SETUP.md](HTTPS-SETUP.md) para detalhes completos

---

## 📁 Estrutura do Projeto

```
site/
├── .copilot/                    # Documentação para IA
│   ├── .copilot-instructions.md # Instruções principais
│   ├── AI-STARTUP.md           # Startup da IA
│   ├── GUIDELINES.md           # Guidelines detalhados
│   └── BUILD-SUMMARY.md        # Resumo do build
├── img/                         # Imagens do site
│   └── Logo.png                # Logo da empresa
├── index.html                  # Página principal
├── style.css                   # Estilos CSS
├── server.js                   # Servidor Node.js
├── build.js                    # Script de build
├── package.json                # Configurações npm
├── README.md                   # Este arquivo
└── dist/                       # Build de produção (gerado)
    ├── img/
    ├── index.html             # HTML otimizado
    ├── style.css              # CSS minificado
    ├── server.js              # Servidor
    ├── package.json           # Config simplificado
    └── build-info.json        # Metadados do build
```

---

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3
- **Backend**: Node.js (HTTP nativo)
- **Build**: Script Node.js customizado
- **Deploy**: Arquivos estáticos + Node server

### Zero Dependencies ✨
Este projeto não usa frameworks ou bibliotecas externas, apenas Node.js nativo.

---

## 📋 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia servidor de desenvolvimento |
| `npm run dev` | Alias para npm start |
| `npm run build` | Gera pasta dist/ otimizada |
| `npm run clean` | Remove pasta dist/ |
| `npm run rebuild` | Limpa e reconstrói |

---

## 🎨 Design

### Paleta de Cores
- **Fundo**: Preto (#000000)
- **Texto**: Branco (#FFFFFF)

### Tipografia
- **Fonte**: Arial, sans-serif
- **Título**: 50px
- **Slogan**: 24px
- **E-mail**: 14px

### Layout
- Centralizado (vertical e horizontal)
- Logo à esquerda do texto
- Design minimalista e clean
- Responsivo

---

## 📦 Processo de Build

O comando `npm run build` executa:

1. ✅ Cria pasta `dist/`
2. ✅ Minifica CSS (remove espaços e comentários)
3. ✅ Otimiza HTML (remove espaços extras)
4. ✅ Copia imagens
5. ✅ Copia servidor Node.js
6. ✅ Gera `package.json` simplificado
7. ✅ Cria `build-info.json` com metadados

### Arquivos Otimizados
- **CSS**: Minificado (~70% menor)
- **HTML**: Comprimido
- **Imagens**: Copiadas sem alteração
- **Produção**: Pronto para deploy

---

## 🚀 Deploy

### Opção 1: Node.js Direto
```bash
# No servidor
cd dist
node server.js
```

### Opção 2: Com PM2
```bash
npm install -g pm2
cd dist
pm2 start server.js --name "xcoreng-site"
pm2 save
```

### Opção 3: Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY dist/ .
EXPOSE 3000
CMD ["node", "server.js"]
```

### Opção 4: Com Nginx (Proxy Reverso)
```nginx
server {
    listen 80;
    server_name xcoreng.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📚 Documentação

### Para Desenvolvedores
- **[README.md](README.md)**: Documentação principal do projeto

### Para IA (GitHub Copilot)
- **[.copilot/AI-STARTUP.md](.copilot/AI-STARTUP.md)**: Arquivo de inicialização da IA (ler primeiro)
- **[.copilot/.copilot-instructions.md](.copilot/.copilot-instructions.md)**: Instruções e padrões
- **[.copilot/GUIDELINES.md](.copilot/GUIDELINES.md)**: Guidelines completos
- **[.copilot/BUILD-SUMMARY.md](.copilot/BUILD-SUMMARY.md)**: Resumo do sistema de build

---

## 🔧 Configuração

### Porta do Servidor
Por padrão usa porta 3000. Para alterar, edite `server.js`:
```javascript
const PORT = 3000; // Altere aqui
```

### Variáveis de Ambiente (Opcional)
```bash
PORT=8080 node server.js
```

---

## 🧪 Testes

### Checklist Manual
- [ ] Página carrega sem erros
- [ ] Logo aparece
- [ ] Textos com cores corretas
- [ ] Layout centralizado
- [ ] Responsivo em diferentes dispositivos
- [ ] Build gerado com sucesso

### Performance
```bash
# Verificar tamanhos após build
cat dist/build-info.json
```

---

## 📞 Contato

**E-mail**: abrandaol@xcoreng.com  
**GitHub**: https://github.com/xCoreng/site

---

## 📄 Licença

MIT License - veja LICENSE para mais detalhes.

---

## 🎯 Roadmap

- [x] Design minimalista
- [x] Servidor Node.js
- [x] Sistema de build
- [x] Documentação completa
- [ ] Formulário de contato
- [ ] SEO otimizado
- [ ] Google Analytics
- [ ] Sitemap XML

---

**Made with ❤️ by xCor.Eng**  
*Be Better Than Yesterday*

