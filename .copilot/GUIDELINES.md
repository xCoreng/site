# xCor.Eng - Guidelines de Desenvolvimento

## 🎯 Objetivo do Projeto
Site oficial da xCor.Eng com design minimalista e profissional, focado em simplicidade e performance.

## 📐 Princípios de Design

### Visual
- **Minimalismo**: Menos é mais
- **Contraste**: Fundo preto com texto branco
- **Centralização**: Conteúdo centralizado na tela
- **Responsividade**: Adaptável a diferentes tamanhos de tela

### Técnico
- **Performance First**: Código otimizado e leve
- **Zero Dependencies**: Apenas Node.js nativo
- **Clean Code**: Código limpo e legível
- **Standards**: Seguir padrões web modernos

## 🏗️ Arquitetura

### Frontend
```
HTML5 (Semântico)
    ↓
CSS3 (Puro, sem frameworks)
    ↓
Flexbox (Layout)
```

### Backend
```
Node.js HTTP Module
    ↓
File System (Servir arquivos estáticos)
    ↓
Porta 3000
```

## 📋 Workflow de Desenvolvimento

### 1. Ambiente de Desenvolvimento
```bash
# Clone o repositório
git clone https://github.com/xCoreng/site.git
cd site

# Inicie o servidor
npm start

# Acesse http://localhost:3000
```

### 2. Fazer Alterações
- Edite `index.html` para mudanças estruturais
- Edite `style.css` para mudanças visuais
- Teste no navegador com Ctrl+F5 (hard refresh)

### 3. Build para Produção
```bash
# Gerar build otimizado
npm run build

# Testar build
cd dist && node server.js

# Verificar em http://localhost:3000
```

### 4. Deploy
- Fazer upload da pasta `dist/` para o servidor
- Executar `node server.js` no servidor
- Configurar proxy reverso (nginx/apache) se necessário

## 🎨 Guia de Estilo

### Cores
| Elemento | Cor | Código |
|----------|-----|--------|
| Fundo | Preto | #000000 |
| Texto | Branco | #FFFFFF |

### Tipografia
| Elemento | Tamanho | Fonte |
|----------|---------|-------|
| Título (xCor.Eng) | 50px | Arial, sans-serif |
| Slogan | 24px | Arial, sans-serif |
| E-mail | 14px | Arial, sans-serif |

### Espaçamentos
- Gap entre logo e texto: 30px
- Margem superior do slogan: 10px
- Margem superior do e-mail: 20px

## 🔧 Configurações do Servidor

### Portas
- **Desenvolvimento**: 3000
- **Produção**: 3000 (ou configurar via ambiente)

### MIME Types Suportados
- `.html` → text/html
- `.css` → text/css
- `.js` → text/javascript
- `.png` → image/png
- `.jpg` → image/jpeg
- `.svg` → image/svg+xml

## 📁 Gestão de Arquivos

### Pasta img/
- **Logo.png**: Logo da empresa (usado no layout)
- **fundo.png**: Imagem de fundo opcional
- Apenas imagens otimizadas
- Formatos: PNG, JPG, SVG

### Arquivos Principais
- `index.html`: Estrutura da página
- `style.css`: Estilos visuais
- `server.js`: Servidor Node.js
- `build.js`: Script de build
- `package.json`: Configurações npm

### Arquivos Gerados
- `dist/`: Pasta de distribuição (não versionar)
- `dist/build-info.json`: Metadados do build

## 🧪 Testes

### Checklist Pré-Deploy
- [ ] Página carrega sem erros
- [ ] Logo aparece corretamente
- [ ] Textos estão com cores e tamanhos corretos
- [ ] Layout está centralizado
- [ ] Responsivo em mobile/tablet/desktop
- [ ] CSS minificado
- [ ] HTML otimizado
- [ ] Build gerado com sucesso

### Navegadores Suportados
- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## 🚀 Performance

### Objetivos
- Tempo de carregamento < 1 segundo
- Tamanho total < 500KB
- Sem dependências externas
- CSS minificado
- HTML otimizado

### Métricas
Verificar com `build-info.json` após build:
```json
{
  "buildDate": "...",
  "version": "1.0.0",
  "files": {
    "html": "tamanho em bytes",
    "css": "tamanho em bytes",
    "js": "tamanho em bytes"
  }
}
```

## 🔐 Segurança

### Boas Práticas
- Não expor informações sensíveis
- Validar entradas (futuras funcionalidades)
- Usar HTTPS em produção
- Manter Node.js atualizado

## 📝 Versionamento

### Git Workflow
```bash
# Feature branch
git checkout -b feature/nova-funcionalidade

# Commits semânticos
git commit -m "feat: adiciona nova seção"
git commit -m "fix: corrige bug no layout"
git commit -m "style: atualiza cores"

# Push e Pull Request
git push origin feature/nova-funcionalidade
```

### Branches
- `main`: Produção estável
- `develop`: Desenvolvimento ativo
- `feature/*`: Novas funcionalidades

## 📞 Suporte
**E-mail**: abrandaol@xcoreng.com  
**GitHub**: https://github.com/xCoreng/site

---
**Slogan**: Be Better Than Yesterday
