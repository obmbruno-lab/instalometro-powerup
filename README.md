# Instalômetro - Power-Up para Trello

![Versão](https://img.shields.io/badge/versão-1.1.0-blue)
![Licença](https://img.shields.io/badge/licença-Proprietária-red)

Power-Up customizado para Trello desenvolvido para monitorar e medir a produtividade das equipes de instalação da **Indústria Visual**.

## 🎯 Funcionalidades

### Gestão de Identificação
- **OS (Ordem de Serviço)**: Número único da ordem
- **Item_OS**: Sub-item ou tarefa específica
- **Cliente**: Nome do cliente atendido
- Dados exibidos como **badges coloridos** diretamente no card

### Medições e Cálculos
- **Altura** e **Largura** (em metros)
- **Quantidade** de unidades
- **Cálculo automático** de:
  - m² unitário (altura × largura)
  - m² total (m² unitário × quantidade)

### Check-In e Check-Out com Fotos
- Upload de fotos com **extração automática de metadados EXIF**:
  - Data/hora da captura
  - Coordenadas GPS (latitude/longitude)
- Anexo automático das fotos ao card do Trello
- Registro de timestamps para cálculo de tempo de trabalho

### Cálculo de Produtividade
- **Fórmula**: m² total ÷ horas trabalhadas = m²/h
- **Badge colorido** baseado em meta:
  - 🟢 Verde: ≥ 10 m²/h (excelente)
  - 🟡 Amarelo: 8-10 m²/h (atenção)
  - 🔴 Vermelho: < 8 m²/h (abaixo da meta)

### Sistema de Alertas
- **Badge de alerta** quando passa mais de 12h após check-in sem check-out
- Cor vermelha para destacar situações anormais

### Dashboard e Exportação
- Visualização consolidada de todos os dados do card
- **Exportação em CSV** com todos os campos
- Download direto do arquivo

## 📋 Pré-requisitos

- Conta no [Trello](https://trello.com)
- Conta no [Trello Developer Portal](https://trello.com/power-ups)
- Board do Trello para instalação do Power-Up

## 🚀 Instalação

### 1. Registrar o Power-Up no Trello

1. Acesse o [Trello Developer Portal](https://trello.com/power-ups)
2. Clique em **"Create New Power-Up"**
3. Preencha os dados:
   - **Name**: Instalômetro - Indústria Visual
   - **Workspace**: Selecione seu workspace
   - **Iframe connector URL**: `https://[SEU-USUARIO].github.io/instalometro-powerup/`
   - **Author**: Indústria Visual
   - **Support contact**: seu-email@industriavisual.com.br

### 2. Configurar Capabilities

No painel do Power-Up, habilite as seguintes capabilities:
- ✅ Attachments
- ✅ Card Buttons
- ✅ Card Badges
- ✅ Board Buttons
- ✅ Show Settings

### 3. Ativar no Board

1. Abra o board do Trello onde deseja usar o Instalômetro
2. Clique em **"Power-Ups"** no menu
3. Procure por **"Instalômetro"**
4. Clique em **"Add"**

## 📖 Como Usar

### Passo 1: Identificação
1. Abra um card no Trello
2. Clique em **"📋 Identificação"**
3. Preencha:
   - Número da OS
   - Item da OS
   - Nome do Cliente
4. Clique em **"Salvar"**

### Passo 2: Medidas
1. Clique em **"📏 Medidas"**
2. Informe:
   - Altura (metros)
   - Largura (metros)
   - Quantidade
3. O sistema calcula automaticamente m² unitário e total
4. Clique em **"Salvar"**

### Passo 3: Check-In
1. Ao iniciar a instalação, clique em **"✅ Check-In"**
2. Tire uma foto do local
3. O sistema captura automaticamente:
   - Data e hora (do EXIF ou hora atual)
   - Localização GPS (se disponível)
4. Clique em **"Registrar Check-In"**

### Passo 4: Check-Out
1. Ao finalizar a instalação, clique em **"🏁 Check-Out"**
2. Tire uma foto do trabalho concluído
3. O sistema calcula automaticamente:
   - Tempo de trabalho
   - Produtividade (m²/h)
4. Clique em **"Registrar Check-Out"**

### Visualizar Dashboard
1. Clique em **"📊 Dashboard"**
2. Veja todos os dados consolidados
3. Exporte para CSV se necessário

## 🎨 Badges no Card

O Instalômetro exibe automaticamente badges no card com:
- **OS**: Número da ordem de serviço (azul)
- **Item**: Item da OS (cinza)
- **Cliente**: Nome do cliente (verde)
- **m²**: Total de metros quadrados (roxo)
- **m²/h**: Produtividade com cor baseada na meta
- **⚠️ Alerta**: Se passou >12h sem check-out (vermelho)

## 🛠️ Tecnologias Utilizadas

- **Trello Power-Up API** (v1)
- **EXIF.js** para extração de metadados de imagens
- **JavaScript vanilla** (sem frameworks)
- **HTML5 + CSS3**

## 📊 Estrutura de Dados

Os dados são armazenados no card usando a API do Trello (`card.shared.instalometroData`):

```javascript
{
  os: "2024-1234",
  item_os: "Item 01 - Fachada",
  cliente: "Empresa XYZ",
  altura: 2.5,
  largura: 3.0,
  quantidade: 5,
  m2Unit: 7.5,
  m2Total: 37.5,
  checkinTime: "2024-10-25T08:00:00.000Z",
  checkoutTime: "2024-10-25T12:00:00.000Z",
  horasTrabalhadas: 4.0,
  produtividade: 9.375,
  gpsLat: -30.0346,
  gpsLon: -51.2177,
  gpsLatOut: -30.0346,
  gpsLonOut: -51.2177
}
```

## 🔒 Privacidade e Segurança

- Todos os dados são armazenados no Trello (não há servidor externo)
- Fotos são anexadas diretamente aos cards
- Dados GPS são opcionais e só são capturados se disponíveis
- Nenhum dado é compartilhado com terceiros

## 🐛 Solução de Problemas

### Foto não tem data/hora
- O sistema usa automaticamente a hora atual do dispositivo como fallback

### GPS não está sendo capturado
- Verifique se o dispositivo tem GPS habilitado
- Verifique se o navegador tem permissão para acessar localização
- Algumas fotos editadas perdem metadados GPS

### Check-out não funciona
- Certifique-se de ter feito check-in primeiro
- O sistema valida a existência de check-in antes de permitir check-out

### Dados não aparecem nos badges
- Aguarde alguns segundos após salvar
- Atualize a página do Trello (F5)
- Verifique se todos os campos obrigatórios foram preenchidos

## 📝 Changelog

### v1.1.0 (2024-10-25)
- ✅ Validações robustas em todos os formulários
- ✅ Fallback para hora atual quando EXIF não disponível
- ✅ Mensagens de confirmação visual
- ✅ Preview de fotos antes do upload
- ✅ Cálculo de produtividade com cores
- ✅ Dashboard completo com estatísticas
- ✅ Exportação de CSV melhorada

### v1.0.0 (2024-10-24)
- 🎉 Lançamento inicial

## 👥 Suporte

Para dúvidas, sugestões ou problemas:
- **Site**: [www.industriavisual.com.br](https://www.industriavisual.com.br)
- **Instagram**: [@industria.visual](https://www.instagram.com/industria.visual)
- **LinkedIn**: [Indústria Visual](https://www.linkedin.com/company/industria-visual)

## 📄 Licença

© 2024 Indústria Visual. Todos os direitos reservados.

Este Power-Up é proprietário e desenvolvido exclusivamente para uso interno da Indústria Visual.

---

**Desenvolvido com ❤️ para a Indústria Visual**

