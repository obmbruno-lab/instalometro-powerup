/* global TrelloPowerUp */

// Instalômetro Power-Up v1.7 - Versão Otimizada
// Combina: seção visual + botões funcionais + campo instalador

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  // Card Buttons (lateral direita - funcionais)
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1087/1087815.png',
      text: '📋 Identificação',
      callback: function(t) {
        return t.popup({
          title: 'Identificação da Instalação',
          url: './id_modal.html',
          height: 350
        });
      }
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
      text: '📏 Medidas',
      callback: function(t) {
        return t.popup({
          title: 'Medidas da Instalação',
          url: './measures_modal.html',
          height: 400
        });
      }
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/5610/5610944.png',
      text: '✅ Check-In',
      callback: function(t) {
        return t.popup({
          title: 'Check-In - Início da Instalação',
          url: './checkin_modal.html',
          height: 450
        });
      }
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/5610/5610945.png',
      text: '🏁 Check-Out',
      callback: function(t) {
        return t.get('card', 'shared', 'instalometroData', {})
          .then(function(data) {
            if (!data.checkinTime) {
              return t.alert({
                message: '⚠️ Você precisa fazer Check-In antes do Check-Out!',
                duration: 5
              });
            }
            return t.popup({
              title: 'Check-Out - Fim da Instalação',
              url: './checkout_modal.html',
              height: 400
            });
          });
      }
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png',
      text: '📊 Dashboard',
      callback: function(t) {
        return t.modal({
          title: 'Dashboard Instalômetro',
          url: './dashboard.html',
          height: 600
        });
      }
    }];
  },

  // Card Back Section (seção visual com status)
  'card-back-section': function(t, options) {
    return [{
      title: '📊 Instalômetro',
      icon: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png',
      content: {
        type: 'iframe',
        url: t.signUrl('./card_section_status_only.html'),
        height: 200
      }
    }];
  },

  // Card Badges (topo do card)
  'card-badges': function(t, options) {
    return t.get('card', 'shared', 'instalometroData', {})
      .then(function(data) {
        var badges = [];

        // Badge OS
        if (data.os) {
          badges.push({
            text: 'OS: ' + data.os,
            color: 'blue'
          });
        }

        // Badge Item
        if (data.item_os) {
          badges.push({
            text: 'Item: ' + data.item_os,
            color: 'purple'
          });
        }

        // Badge Cliente
        if (data.cliente) {
          badges.push({
            text: 'Cliente: ' + data.cliente,
            color: 'green'
          });
        }

        // Badge m²
        if (data.m2Total > 0) {
          badges.push({
            text: data.m2Total.toFixed(2) + ' m²',
            color: 'orange'
          });
        }

        // Badge Instalador
        if (data.instalador) {
          badges.push({
            text: '👤 ' + data.instalador,
            color: 'sky'
          });
        }

        // Badge Produtividade (se tiver check-out)
        if (data.produtividade) {
          var color = 'red';
          if (data.produtividade >= 10) color = 'green';
          else if (data.produtividade >= 7) color = 'yellow';
          
          badges.push({
            text: data.produtividade.toFixed(2) + ' m²/h',
            color: color
          });
        }

        // Badge Alerta (se check-in > 12h sem check-out)
        if (data.checkinTime && !data.checkoutTime) {
          var elapsed = (new Date() - new Date(data.checkinTime)) / 1000 / 60 / 60;
          if (elapsed > 12) {
            badges.push({
              text: '⚠️ Sem check-out há ' + Math.floor(elapsed) + 'h',
              color: 'red'
            });
          }
        }

        return badges;
      });
  },

  // Board Buttons (botão no board)
  'board-buttons': function(t, options) {
    return [{
      icon: {
        dark: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png',
        light: 'https://cdn-icons-png.flaticon.com/512/3281/3281289.png'
      },
      text: '📊 Dashboard Instalômetro',
      callback: function(t) {
        return t.modal({
          title: 'Dashboard Geral - Instalômetro',
          url: './dashboard.html',
          height: 700
        });
      }
    }];
  },

  // Show Settings
  'show-settings': function(t, options) {
    return t.popup({
      title: 'Configurações do Instalômetro',
      url: './settings.html',
      height: 300
    });
  }
});

