# 🚀 Guia Completo de Deploy - Instalômetro Power-Up

Este guia contém instruções detalhadas para fazer o deploy do Instalômetro no GitHub Pages e configurá-lo no Trello.

---

## 📦 Parte 1: Preparação dos Arquivos

### ✅ Você já tem:
- Arquivo `instalometro_powerup.zip` com todos os arquivos necessários
- Este guia de deploy

---

## 🌐 Parte 2: Criar Repositório no GitHub

### Passo 1: Acessar o GitHub
1. Acesse [github.com](https://github.com)
2. Faça login na sua conta
   - Se não tiver conta, crie uma em [github.com/signup](https://github.com/signup)

### Passo 2: Criar Novo Repositório
1. Clique no botão **"+"** no canto superior direito
2. Selecione **"New repository"**
3. Preencha os dados:
   - **Repository name**: `instalometro-powerup` (exatamente assim, sem espaços)
   - **Description**: `Power-Up para Trello - Monitoramento de produtividade de instalações`
   - **Visibility**: Selecione **"Public"** (necessário para GitHub Pages gratuito)
   - **NÃO** marque "Add a README file"
   - **NÃO** marque "Add .gitignore"
   - **NÃO** marque "Choose a license"
4. Clique em **"Create repository"**

### Passo 3: Fazer Upload dos Arquivos

#### Opção A: Via Interface Web (Mais Fácil)
1. Na página do repositório recém-criado, clique em **"uploading an existing file"**
2. Extraia o arquivo `instalometro_powerup.zip` no seu computador
3. Arraste TODOS os arquivos da pasta extraída para a área de upload
   - ✅ manifest.json
   - ✅ index.html
   - ✅ powerup.js
   - ✅ id_modal.html
   - ✅ measures_modal.html
   - ✅ checkin_modal.html
   - ✅ checkout_modal.html
   - ✅ dashboard.html
   - ✅ settings.html
   - ✅ README.md
4. No campo de commit, escreva: `feat: Instalômetro v1.1.0`
5. Clique em **"Commit changes"**

#### Opção B: Via Git Command Line (Avançado)
```bash
# Extrair o ZIP
unzip instalometro_powerup.zip
cd instalometro_powerup

# Inicializar Git
git init
git add .
git commit -m "feat: Instalômetro v1.1.0"

# Conectar ao repositório remoto (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/instalometro-powerup.git
git branch -M main
git push -u origin main
```

---

## 🌍 Parte 3: Ativar GitHub Pages

### Passo 1: Acessar Configurações
1. No repositório, clique na aba **"Settings"** (⚙️)
2. No menu lateral esquerdo, clique em **"Pages"**

### Passo 2: Configurar Source
1. Em **"Source"**, selecione **"Deploy from a branch"**
2. Em **"Branch"**:
   - Selecione **"main"** (ou "master" se for o caso)
   - Selecione **"/ (root)"**
3. Clique em **"Save"**

### Passo 3: Aguardar Deploy
1. Aguarde 1-2 minutos para o GitHub processar
2. Atualize a página
3. Você verá uma mensagem: **"Your site is live at https://SEU-USUARIO.github.io/instalometro-powerup/"**
4. **COPIE ESTA URL** - você precisará dela no próximo passo

### Passo 4: Testar o Deploy
1. Abra a URL em uma nova aba: `https://SEU-USUARIO.github.io/instalometro-powerup/`
2. Você deve ver a página do Instalômetro com o logo e texto
3. Se aparecer erro 404, aguarde mais alguns minutos e tente novamente

---

## 🔧 Parte 4: Registrar Power-Up no Trello

### Passo 1: Acessar Trello Developer Portal
1. Acesse [trello.com/power-ups/admin](https://trello.com/power-ups/admin)
2. Faça login com sua conta do Trello
3. Se for a primeira vez, aceite os termos de desenvolvedor

### Passo 2: Criar Novo Power-Up
1. Clique em **"New"** ou **"Create New Power-Up"**
2. Preencha o formulário:

   **Informações Básicas:**
   - **Power-Up name**: `Instalômetro - Indústria Visual`
   - **Workspace**: Selecione o workspace da Indústria Visual
   - **Description**: `Monitora produtividade de instalação com fotos de check-in/out, cálculo de m² e m²/h`
   - **Author**: `Indústria Visual`
   - **Author email**: `contato@industriavisual.com.br`
   - **Support contact**: `contato@industriavisual.com.br`

   **URLs:**
   - **Iframe connector URL**: `https://SEU-USUARIO.github.io/instalometro-powerup/` 
     ⚠️ **IMPORTANTE**: Substitua `SEU-USUARIO` pelo seu usuário do GitHub!
   - **Privacy policy URL**: `https://www.industriavisual.com.br` (opcional)
   - **Terms of use URL**: `https://www.industriavisual.com.br` (opcional)

3. Clique em **"Create"**

### Passo 3: Configurar Capabilities
1. Na página do Power-Up, role até **"Capabilities"**
2. Habilite as seguintes capabilities (clique em cada uma):
   - ✅ **attachment-sections** → Clique em "Enable"
   - ✅ **card-buttons** → Clique em "Enable"
   - ✅ **card-badges** → Clique em "Enable"
   - ✅ **board-buttons** → Clique em "Enable"
   - ✅ **show-settings** → Clique em "Enable"

3. Para cada capability habilitada, o Trello irá buscar as configurações do seu `manifest.json` automaticamente

### Passo 4: Salvar e Publicar
1. Role até o final da página
2. Clique em **"Save"**
3. Se tudo estiver correto, você verá uma mensagem de sucesso

---

## 🎯 Parte 5: Ativar o Power-Up em um Board

### Passo 1: Abrir Board de Teste
1. Acesse o Trello
2. Abra um board onde deseja testar o Instalômetro
   - **Recomendação**: Crie um board de teste primeiro antes de usar em produção

### Passo 2: Adicionar Power-Up
1. No board, clique no menu **"Power-Ups"** (no topo direito)
2. Na busca, digite **"Instalômetro"**
3. Você deve ver o Power-Up que acabou de criar
4. Clique em **"Add"**

### Passo 3: Verificar Instalação
1. Abra qualquer card no board
2. Você deve ver novos botões:
   - 📋 Identificação
   - 📏 Medidas
   - ✅ Check-In
   - 🏁 Check-Out
   - 📊 Dashboard

3. Se os botões aparecerem, **parabéns! O Power-Up está funcionando!** 🎉

---

## ✅ Parte 6: Testar Funcionalidades

### Teste 1: Identificação
1. Abra um card
2. Clique em **"📋 Identificação"**
3. Preencha:
   - OS: `2024-TEST-001`
   - Item: `Item 01 - Teste`
   - Cliente: `Cliente Teste`
4. Clique em **"Salvar"**
5. Verifique se aparecem badges no card com OS, Item e Cliente

### Teste 2: Medidas
1. Clique em **"📏 Medidas"**
2. Preencha:
   - Altura: `2.5`
   - Largura: `3.0`
   - Quantidade: `5`
3. Veja o preview calculando m² automaticamente
4. Clique em **"Salvar"**
5. Verifique se aparece badge com m² total

### Teste 3: Check-In
1. Clique em **"✅ Check-In"**
2. Selecione uma foto qualquer
3. Veja o preview da foto
4. Clique em **"Registrar Check-In"**
5. Aguarde a confirmação
6. Verifique se a foto foi anexada ao card

### Teste 4: Check-Out
1. Aguarde alguns minutos (ou altere a hora do sistema)
2. Clique em **"🏁 Check-Out"**
3. Selecione outra foto
4. Clique em **"Registrar Check-Out"**
5. Veja o resumo com tempo, m² e produtividade
6. Verifique se aparece badge de produtividade (colorido)

### Teste 5: Dashboard
1. Clique em **"📊 Dashboard"**
2. Veja todos os dados consolidados
3. Clique em **"Exportar CSV"**
4. Verifique se o arquivo foi baixado

---

## 🐛 Solução de Problemas

### Problema: Power-Up não aparece na busca do Trello
**Solução:**
1. Verifique se o Power-Up foi criado no workspace correto
2. Tente acessar diretamente: `https://trello.com/power-ups/[ID-DO-POWERUP]/edit`
3. Certifique-se de que o Power-Up está "Enabled"

### Problema: Botões não aparecem nos cards
**Solução:**
1. Verifique se a URL do GitHub Pages está correta e acessível
2. Abra o console do navegador (F12) e procure por erros
3. Verifique se todas as capabilities foram habilitadas
4. Tente remover e adicionar o Power-Up novamente no board

### Problema: Erro 404 ao acessar GitHub Pages
**Solução:**
1. Aguarde 5-10 minutos após ativar GitHub Pages
2. Verifique se os arquivos estão na raiz do repositório (não em subpasta)
3. Verifique se o repositório é público
4. Acesse Settings → Pages e confirme que está ativo

### Problema: Fotos não são anexadas
**Solução:**
1. Este é um comportamento conhecido do Trello com URLs temporários
2. Os dados (hora, GPS, etc.) são salvos corretamente
3. Você pode anexar as fotos manualmente após o check-in/out
4. Em versões futuras, implementaremos upload via API

### Problema: GPS não é capturado
**Solução:**
1. Certifique-se de que o navegador tem permissão para acessar localização
2. Tire fotos com um smartphone que tenha GPS habilitado
3. Algumas fotos editadas perdem metadados EXIF
4. O sistema funciona mesmo sem GPS (apenas não registra localização)

---

## 📊 Parte 7: Rollout para Produção

### Fase 1: Teste Piloto (Semana 1)
1. Selecione 2-3 instaladores para testar
2. Crie um board específico para testes
3. Acompanhe diariamente o uso
4. Colete feedback

### Fase 2: Treinamento (Semana 2)
1. Prepare sessão de treinamento de 30 minutos
2. Mostre cada funcionalidade
3. Faça demonstração ao vivo
4. Tire dúvidas

### Fase 3: Expansão Gradual (Semana 3-4)
1. Adicione mais 5-10 instaladores
2. Ative em boards reais de projetos
3. Monitore adoção e uso
4. Ajuste processos conforme necessário

### Fase 4: Rollout Completo (Semana 5-6)
1. Ative para todas as equipes
2. Torne obrigatório o uso
3. Estabeleça KPIs de acompanhamento
4. Revise semanalmente

---

## 📈 Parte 8: Próximos Passos

### Melhorias Futuras Planejadas
1. **Dashboard consolidado do board** com ranking de produtividade
2. **Campos adicionais**: número de instaladores, tipo de material, complexidade
3. **Notificações automáticas** para gestores
4. **Integração com API** para backup de dados
5. **App mobile nativo** para instaladores

### Como Solicitar Melhorias
1. Documente a necessidade
2. Descreva o problema que resolve
3. Sugira a solução desejada
4. Entre em contato para implementação

---

## 📞 Suporte

### Para Dúvidas Técnicas
- Consulte o README.md no repositório
- Verifique a seção de Solução de Problemas acima
- Acesse o console do navegador (F12) para ver erros

### Para Sugestões e Melhorias
- Documente a sugestão detalhadamente
- Inclua exemplos de uso
- Explique o benefício esperado

---

## ✅ Checklist Final

Antes de considerar o deploy completo, verifique:

- [ ] Repositório criado no GitHub
- [ ] Arquivos enviados para o repositório
- [ ] GitHub Pages ativado e funcionando
- [ ] URL do GitHub Pages acessível
- [ ] Power-Up registrado no Trello Developer Portal
- [ ] Todas as capabilities habilitadas
- [ ] Power-Up adicionado a um board de teste
- [ ] Botões aparecem nos cards
- [ ] Teste de Identificação realizado com sucesso
- [ ] Teste de Medidas realizado com sucesso
- [ ] Teste de Check-In realizado com sucesso
- [ ] Teste de Check-Out realizado com sucesso
- [ ] Dashboard acessível e funcionando
- [ ] Exportação de CSV funcionando
- [ ] Badges aparecem corretamente nos cards
- [ ] Equipe piloto definida para testes
- [ ] Treinamento agendado

---

## 🎉 Conclusão

Parabéns! Se você seguiu todos os passos, o Instalômetro está pronto para uso.

**Lembre-se:**
- Comece com testes em ambiente controlado
- Treine bem a equipe antes do rollout completo
- Monitore o uso nas primeiras semanas
- Colete feedback e ajuste conforme necessário

**O Instalômetro vai ajudar a Indústria Visual a:**
- ✅ Monitorar produtividade em tempo real
- ✅ Identificar gargalos e oportunidades de melhoria
- ✅ Criar cultura de accountability
- ✅ Tomar decisões baseadas em dados
- ✅ Desenvolver as pessoas com feedback objetivo

Boa sorte! 🚀

---

**Desenvolvido com ❤️ para a Indústria Visual**

