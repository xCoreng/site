# 📚 Documentação do Copilot - Índice

Esta pasta contém toda a documentação e instruções para a IA (GitHub Copilot) trabalhar no projeto xCor.Eng.

---

## 📋 Ordem de Leitura Recomendada

### 1️⃣ **AI-STARTUP.md** ⭐ (LEIA PRIMEIRO)
**Propósito**: Inicialização rápida da IA
- Contexto do projeto
- Regras essenciais
- Comandos principais
- Workflow básico

🔗 [Abrir AI-STARTUP.md](./AI-STARTUP.md)

---

### 2️⃣ **.copilot-instructions.md**
**Propósito**: Instruções específicas e padrões
- Estrutura de arquivos
- Tecnologias usadas
- Melhores práticas
- Comandos disponíveis

🔗 [Abrir .copilot-instructions.md](./.copilot-instructions.md)

---

### 3️⃣ **GUIDELINES.md**
**Propósito**: Guidelines detalhados de desenvolvimento
- Princípios de design
- Arquitetura do projeto
- Workflow completo
- Deploy e produção

🔗 [Abrir GUIDELINES.md](./GUIDELINES.md)

---

### 4️⃣ **BUILD-SUMMARY.md**
**Propósito**: Resumo do sistema de build
- O que foi criado
- Como funciona o build
- Resultados e métricas
- Checklist de qualidade

🔗 [Abrir BUILD-SUMMARY.md](./BUILD-SUMMARY.md)

---

## 🎯 Quando Consultar Cada Arquivo

| Situação | Arquivo Recomendado |
|----------|---------------------|
| 🚀 Primeira vez abrindo o projeto | `AI-STARTUP.md` |
| 📝 Fazer alterações no código | `.copilot-instructions.md` |
| 🏗️ Entender arquitetura | `GUIDELINES.md` |
| 📦 Informações sobre build | `BUILD-SUMMARY.md` |
| 🐛 Resolver problemas | Todos (na ordem) |

---

## 📁 Estrutura da Pasta

```
.copilot/
├── INDEX.md                     # Este arquivo
├── AI-STARTUP.md                # ⭐ Inicialização da IA
├── .copilot-instructions.md     # Instruções principais
├── GUIDELINES.md                # Guidelines detalhados
└── BUILD-SUMMARY.md             # Resumo do build
```

---

## 🔑 Informações Rápidas

### Projeto
**Nome**: xCor.Eng Official Site  
**Slogan**: Be Better Than Yesterday  
**E-mail**: abrandaol@xcoreng.com

### Tecnologia
- **Frontend**: HTML5, CSS3 puro
- **Backend**: Node.js nativo (sem frameworks)
- **Porta**: 3000
- **Build**: Script customizado

### Design
- **Cores**: Preto (#000000) + Branco (#FFFFFF)
- **Layout**: Centralizado, minimalista
- **Logo**: `img/Logo.png`

### Comandos Principais
```bash
npm start       # Desenvolvimento
npm run build   # Gerar dist/
npm run rebuild # Limpar e reconstruir
```

---

## ⚡ Regras de Ouro

1. ✅ **SEMPRE** editar arquivos na raiz (não em dist/)
2. ✅ **SEMPRE** executar `npm run build` após mudanças
3. ✅ **MANTER** design minimalista
4. ✅ **USAR** apenas Node.js nativo
5. ❌ **NUNCA** adicionar dependências sem necessidade

---

## 📞 Suporte

Se tiver dúvidas ou precisar de mais contexto, consulte os arquivos na ordem recomendada acima.

**E-mail de contato**: abrandaol@xcoreng.com

---

**🤖 Documentação organizada para IA**  
*Última atualização: 2026-02-23*
