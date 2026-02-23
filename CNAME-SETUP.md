# 🌐 Configuração de Domínio Customizado - CNAME

## Visão Geral

O arquivo `CNAME` é usado para configurar o **domínio customizado** do site xCor.Eng.

**Domínio configurado:** `xcoreng.com`

---

## 📋 O que é o CNAME?

O arquivo CNAME é um arquivo simples contendo apenas o nome do domínio customizado. Ele é usado por serviços de hospedagem (como GitHub Pages, Netlify, Vercel) para configurar automaticamente o domínio.

---

## 🔧 Configuração Atual

**Arquivo:** `CNAME`  
**Conteúdo:** `xcoreng.com`  
**Localização:** Raiz do projeto

---

## 🚀 Build e Deploy

### Comportamento do Build

O arquivo CNAME é **automaticamente copiado** para a pasta `dist/` durante o build:

```bash
npm run build
# ✓ CNAME copiado
```

### Estrutura Após Build

```
dist/
├── index.html
├── style.css
├── server.js
├── CNAME           ← Copiado automaticamente
├── package.json
└── build-info.json
```

---

## 🌐 GitHub Pages

### Configuração Manual (se necessário)

1. Vá para: `Settings` → `Pages`
2. Em **Custom domain**, digite: `xcoreng.com`
3. Salve

**Nota:** O arquivo CNAME já está presente na pasta `dist/`, então o GitHub Pages deve detectá-lo automaticamente.

### DNS Configuration

Configure os registros DNS do seu provedor:

#### Para Apex Domain (xcoreng.com)

```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

#### Para WWW (www.xcoreng.com)

```
Type: CNAME
Name: www
Value: xcoreng.github.io
```

---

## 🔄 Outros Serviços de Hospedagem

### Netlify

1. Site Settings → Domain Management
2. Add custom domain: `xcoreng.com`
3. O arquivo CNAME será detectado automaticamente

### Vercel

1. Project Settings → Domains
2. Add domain: `xcoreng.com`
3. Configure DNS conforme instruções

### Cloudflare Pages

1. Custom Domains → Add a domain
2. Digite: `xcoreng.com`
3. Configure registros DNS

---

## 🛠️ Modificando o Domínio

Para alterar o domínio customizado:

1. Edite o arquivo `CNAME` na raiz
```bash
echo "novodominio.com" > CNAME
```

2. Rebuild
```bash
npm run build
```

3. Deploy a pasta `dist/`

---

## ✅ Verificação

### Local

```bash
# Verificar conteúdo
cat CNAME
# Deve exibir: xcoreng.com

# Verificar após build
cat dist/CNAME
# Deve exibir: xcoreng.com
```

### Online

```bash
# Verificar DNS
nslookup xcoreng.com

# Verificar HTTPS
curl -I https://xcoreng.com
```

---

## 🚨 Troubleshooting

### Problema: Domain not working

**Solução:**
1. Verifique se o arquivo CNAME existe em `dist/`
2. Confirme que o DNS está configurado corretamente
3. Aguarde propagação DNS (até 48h)

### Problema: CNAME não copiado para dist/

**Solução:**
```bash
# Verificar se arquivo existe
ls CNAME

# Rebuild
npm run rebuild

# Verificar dist/
ls dist/CNAME
```

### Problema: Certificate errors

**Solução:**
- GitHub Pages: Marque "Enforce HTTPS" nas configurações
- Outros: Configure SSL/TLS no painel do provedor

---

## 📚 Recursos

- [GitHub Pages - Custom Domain](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Netlify - Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Vercel - Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)

---

## 📞 Contato

**E-mail:** abrandaol@xcoreng.com  
**Domínio:** xcoreng.com

---

**🌐 Domínio customizado configurado e pronto!**  
*Be Better Than Yesterday*
