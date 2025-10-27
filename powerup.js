
// Instalômetro Power-Up v1.9 - Com Dashboard Consolidado do Board
// Combina: seção visual + botões funcionais + campo instalador + dashboard do board

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
        return t.get('card', 'shared')
          .then(function(sharedData) {
            var data = sharedData.instalometroData || sharedData;
            if (!data.checkinTime) {
              return t.alert({
                message: '⚠️ Você precisa fazer Check-In antes do Check-Out!',
                duration: 5
              });
            }
            return t.popup({
              title: 'Check-Out - Finalização da Instalação',
              url: './checkout_modal.html',
              height: 450
            });
          });
      }
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
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

  // Board Buttons (topo do board - dashboard consolidado)
  'board-buttons': function(t, options) {
    return [{
      icon: {
        dark: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
        light: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png'
      },
      text: '📊 Dashboard Consolidado',
      callback: function(t) {
        return t.modal({
          title: 'Dashboard Consolidado - Instalômetro',
          url: './board_dashboard.html',
          fullscreen: true
        });
      }
    }];
  },

  // Card Badges (badges coloridos no card)
  'card-badges': function(t, options) {
    return t.get('card', 'shared')
      .then(function(sharedData) {
        var data = sharedData.instalometroData || sharedData;
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
        if (data.m2Total) {
          badges.push({
            text: parseFloat(data.m2Total).toFixed(2) + ' m²',
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

        // Badge Produtividade (com cores baseadas em metas)
        if (data.produtividade) {
          var prod = parseFloat(data.produtividade);
          var color = 'red'; // < 7 m²/h
          if (prod >= 10) color = 'green'; // >= 10 m²/h
          else if (prod >= 7) color = 'yellow'; // 7-10 m²/h

          badges.push({
            text: prod.toFixed(2) + ' m²/h',
            color: color
          });
        }

        // Badge Alerta (instalação sem check-out há mais de 12h)
        if (data.checkinTime && !data.checkoutTime) {
          var checkinDate = new Date(data.checkinTime);
          var now = new Date();
          var horasDecorridas = (now - checkinDate) / (1000 * 60 * 60);
          
          if (horasDecorridas > 12) {
            badges.push({
              text: '⚠️ +12h sem check-out',
              color: 'red'
            });
          }
        }

        return badges;
      });
  },

  // Card Back Section (seção visual no card)
  'card-back-section': function(t, options) {
    return {
      title: '📊 Instalômetro',
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
      content: {
        type: 'iframe',
        url: t.signUrl('./card_section_status_only.html'),
        height: 280
      }
    };
  },

  // Show Settings (página de configurações)
  'show-settings': function(t, options) {
    return t.popup({
      title: 'Configurações do Instalômetro',
      url: './settings.html',
      height: 300
    });
  }
});

