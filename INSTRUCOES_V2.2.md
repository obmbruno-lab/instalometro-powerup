# 📦 Instalômetro v2.2 - Campo Materiais

## 🎯 O que mudou?

Adicionado campo **"Materiais Utilizados"** em todos os lugares:

### ✅ Onde o campo aparece:

1. **Modal de Check-In** (`checkin_modal.html`)
   - Campo textarea para listar materiais no início da instalação
   - Exemplo: "Lona, Adesivo, Parafusos, Cola"

2. **Modal de Check-Out** (`checkout_modal.html`)
   - Campo textarea pré-preenchido com materiais do check-in
   - Pode ser editado/complementado no final

3. **Seção Visual do Card** (`card_section_status_only.html`)
   - Mostra materiais utilizados abaixo das estatísticas
   - Aparece quando há dados de materiais

4. **Dashboard Consolidado** (`board_dashboard.html`)
   - Nova coluna "🧰 Materiais" na tabela
   - Incluído na exportação CSV

## 📤 Como fazer upload:

1. Acesse: https://github.com/obmbruno-lab/instalometro-powerup
2. Clique em "Add file" → "Upload files"
3. Arraste os 4 arquivos:
   - `checkin_modal.html`
   - `checkout_modal.html`
   - `card_section_status_only.html`
   - `board_dashboard.html`
4. Marque "Replace existing files"
5. Commit: "v2.2: Adicionar campo Materiais"
6. Aguarde 2-3 minutos para GitHub Pages atualizar
7. Teste no Trello!

## 🧪 Como testar:

1. Abra um card no Trello
2. Clique em "✅ Check-In"
3. Preencha o campo "🧰 Materiais Utilizados"
4. Faça check-in
5. Verifique se aparece na seção do card
6. Faça check-out (materiais serão pré-preenchidos)
7. Abra o Dashboard Consolidado
8. Verifique a coluna "Materiais" na tabela

## 📊 Estrutura de dados:

O campo `materiais` é salvo em `card.shared.instalometroData.materiais`

```javascript
{
  "instalador": "João Silva",
  "materiais": "Lona, Adesivo, Parafusos, Cola",
  "checkinTime": "2025-10-27T...",
  "checkoutTime": "2025-10-27T...",
  ...
}
```

## 🎉 Pronto!

Após o upload, o campo Materiais estará disponível em todos os cards!
