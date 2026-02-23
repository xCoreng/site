# 🔒 Configuração HTTPS - xCor.Eng

## ⚠️ IMPORTANTE: APENAS HTTPS É PERMITIDO

Por questões de segurança, este servidor **REQUER HTTPS**. HTTP puro não é mais suportado.

---

## 🚀 Quick Start

### Windows (Recomendado)
```powershell
# Gerar certificados SSL automaticamente
.\generate-ssl.ps1

# Iniciar servidor
npm start
```

### Linux/Mac
```bash
npm run generate-ssl
npm start
```

---

## 📋 Como Funciona

### Servidor HTTPS Obrigatório
- ✅ **HTTPS Principal**: Porta 3443 (obrigatório)
- ✅ **HTTP Redirecionador**: Porta 3000 (redireciona → HTTPS)
- ❌ **HTTP Puro**: NÃO é permitido

```
❌ http://localhost:3000   → Redireciona para HTTPS
✅ https://localhost:3443  → Servidor principal (ÚNICO permitido)
```

### Sem Certificados?
Se os certificados não existirem, o servidor **NÃO INICIA** e exibe erro.

---

## 🔧 Estrutura de Arquivos

```
site/
├── .cert/                  # Certificados SSL (não versionados)
│   ├── server.key         # Chave privada
│   ├── server.cert        # Certificado público
│   └── server.pfx         # Certificado Windows (PFX)
├── server.js              # Servidor com suporte HTTPS
├── generate-ssl.js        # Script de geração de certificados
└── generate-ssl.ps1       # Script PowerShell (Windows)
```

---

## 🌐 URLs de Acesso

### Desenvolvimento Local
| Protocolo | URL | Porta | Status |
|-----------|-----|-------|--------|
| HTTP | http://localhost:3000 | 3000 | Redireciona → HTTPS |
| HTTPS | https://localhost:3443 | 3443 | ✅ Principal |

### Produção
Configure seu servidor web (Nginx/Apache) para:
- Porta 80 (HTTP) → Redirecionar para 443
- Porta 443 (HTTPS) → Servidor principal

---

## ⚠️ Certificados Auto-Assinados

### Durante o Desenvolvimento
Os certificados gerados são **auto-assinados** e causarão avisos no navegador:
- Chrome: "Sua conexão não é particular"
- Firefox: "Aviso: risco potencial de segurança"

**Isso é normal em desenvolvimento!** Clique em "Avançado" → "Prosseguir para localhost"

### Em Produção
Use certificados válidos de uma Autoridade Certificadora:
- **Let's Encrypt** (gratuito): https://letsencrypt.org/
- **Cloudflare SSL** (gratuito)
- Certificados pagos (DigiCert, etc.)

---

## 🔐 Gerando Certificados de Produção

### Com Let's Encrypt (Certbot)
```bash
# Instalar Certbot
sudo apt-get install certbot

# Gerar certificado
sudo certbot certonly --standalone -d xcoreng.com -d www.xcoreng.com

# Certificados estarão em:
# /etc/letsencrypt/live/xcoreng.com/fullchain.pem
# /etc/letsencrypt/live/xcoreng.com/privkey.pem
```

### Configurar no servidor
```javascript
// server.js (produção)
const sslOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/xcoreng.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/xcoreng.com/fullchain.pem')
};
```

---

## 🛠️ Comandos Úteis

### Gerar Certificados
```bash
npm run generate-ssl
```

### Verificar Certificado
```bash
openssl x509 -in ssl/server.cert -text -noout
```

### Testar HTTPS
```bash
curl -k https://localhost:3443
```

### Renovar Certificados (Let's Encrypt)
```bash
sudo certbot renew
```

---

## 🚨 Troubleshooting

### Erro: "Certificados não encontrados"
**Solução**: Execute `npm run generate-ssl`

### Erro: "EADDRINUSE" (porta em uso)
**Solução**: 
```bash
# Windows
netstat -ano | findstr :3443
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3443 | xargs kill -9
```

### Aviso de Segurança no Navegador
**Solução**: Em desenvolvimento, clique em "Avançado" → "Prosseguir"

### OpenSSL não encontrado
**Soluções**:
- **Windows**: Instale de https://slproweb.com/products/Win32OpenSSL.html
- **Mac**: `brew install openssl`
- **Linux**: `sudo apt-get install openssl`

---

## 📊 Comparação HTTP vs HTTPS

| Aspecto | HTTP | HTTPS |
|---------|------|-------|
| Porta padrão | 80 / 3000 | 443 / 3443 |
| Criptografia | ❌ Não | ✅ Sim (TLS/SSL) |
| Segurança | ⚠️ Baixa | ✅ Alta |
| SEO (Google) | ⚠️ Penalizado | ✅ Favorecido |
| Navegadores | ⚠️ "Não seguro" | ✅ Cadeado verde |
| Conformidade | ❌ Não recomendado | ✅ Obrigatório |

---

## 🎯 Recomendações

### Desenvolvimento
- ✅ Use certificados auto-assinados
- ✅ Execute `npm run generate-ssl` uma vez
- ✅ Aceite o aviso do navegador

### Produção
- ✅ Use Let's Encrypt (gratuito)
- ✅ Configure renovação automática
- ✅ Redirecione todo HTTP → HTTPS
- ✅ Use HSTS headers
- ✅ Teste em https://www.ssllabs.com/

---

## 📞 Suporte

**E-mail**: abrandaol@xcoreng.com

Para mais informações sobre SSL/TLS:
- https://letsencrypt.org/
- https://www.ssllabs.com/
- https://certbot.eff.org/

---

**🔒 Segurança em primeiro lugar!**  
*Be Better Than Yesterday*
