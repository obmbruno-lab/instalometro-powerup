# 🔧 Instalômetro v2.1 - Correção do Dashboard Consolidado

## 📋 O que foi corrigido?

O **Dashboard Consolidado** não estava exibindo os dados dos cards porque estava buscando os dados no local errado.

**Problema identificado:**
- O código estava buscando em `card.shared` 
- Mas os dados estão salvos em `card.shared.instalometroData`

**Correção aplicada:**
- Linha 314 do arquivo `board_dashboard.html`
- Mudou de: `t.get(card.id, 'shared')`
- Para: `t.get(card.id, 'shared', 'instalometroData')`

---

## 📤 Como fazer o upload no GitHub

### Opção 1: Upload via interface web (MAIS FÁCIL)

1. Acesse: https://github.com/obmbruno-lab/instalometro-powerup
2. Clique em **"Add file"** → **"Upload files"**
3. Arraste o arquivo **board_dashboard.html** desta pasta
4. O GitHub vai detectar que já existe um arquivo com esse nome
5. Escreva uma mensagem: "Fix: corrigir leitura de dados no dashboard consolidado"
6. Clique em **"Commit changes"**
7. Aguarde 2-3 minutos para o GitHub Pages atualizar

### Opção 2: Editar direto no GitHub

1. Acesse: https://github.com/obmbruno-lab/instalometro-powerup/blob/main/board_dashboard.html
2. Clique no ícone de **lápis (✏️)** no canto superior direito
3. Apague todo o conteúdo
4. Abra o arquivo **board_dashboard.html** desta pasta no Bloco de Notas
5. Copie todo o conteúdo (Ctrl+A, Ctrl+C)
6. Cole no editor do GitHub (Ctrl+V)
7. Role até o final e clique em **"Commit changes"**
8. Aguarde 2-3 minutos para o GitHub Pages atualizar

---

## ✅ Como testar após o upload

1. Aguarde 2-3 minutos após o commit
2. Abra seu board do Trello
3. Pressione **Ctrl+Shift+R** (ou Cmd+Shift+R no Mac) para limpar o cache
4. Procure o botão **"📊 Dashboard Consolidado"** no topo do board
5. Clique nele
6. Agora você deve ver:
   - ✅ Estatísticas gerais com números
   - ✅ Ranking de instaladores
   - ✅ Tabela com todos os cards e seus dados

---

## 🆘 Se ainda não funcionar

1. Verifique se o arquivo foi realmente atualizado no GitHub:
   - Acesse: https://github.com/obmbruno-lab/instalometro-powerup/blob/main/board_dashboard.html
   - Procure pela linha 314
   - Deve estar: `return t.get(card.id, 'shared', 'instalometroData').then(function(data) {`

2. Limpe o cache do navegador:
   - Chrome/Edge: Ctrl+Shift+Delete → Limpar cache
   - Safari: Cmd+Option+E

3. Verifique o console do navegador:
   - Pressione F12
   - Vá na aba "Console"
   - Procure por erros em vermelho
   - Me envie um print se houver erros

---

## 📞 Suporte

Se precisar de ajuda, me envie:
- Print do dashboard (mostrando o problema)
- Print do console do navegador (F12 → Console)
- Link do seu board do Trello

**Desenvolvido com ❤️ para Indústria Visual**

