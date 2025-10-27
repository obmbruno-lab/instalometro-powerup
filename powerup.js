/* 
 * Instalômetro Trello Power-Up - Versão 1.5 (Mobile-First)
 * Indústria Visual
 * Otimizado para uso em celular
 */

// Inicialização do Power-Up
TrelloPowerUp.initialize({
  'card-back-section': function(t, options) {
    return {
      title: '📊 Instalômetro',
      icon: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
      content: {
        type: 'iframe',
        url: t.signUrl('./card_section_mobile.html'),
        height: 400
      }
    };
  },
  'card-badges': function(t, options) {
    return t.get('card', 'shared', 'instalometroData', {})
      .then(function(data) {
        var badges = [];

        if (data.os) badges.push({ 
          text: 'OS: ' + data.os, 
          color: 'blue',
          icon: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png'
        });
        
        if (data.item_os) badges.push({ 
          text: 'Item: ' + data.item_os, 
          color: 'lightgrey' 
        });
        
        if (data.cliente) badges.push({ 
          text: 'Cliente: ' + data.cliente, 
          color: 'green' 
        });
        
        if (data.m2Total) badges.push({ 
          text: data.m2Total.toFixed(2) + ' m²', 
          color: 'purple' 
        });

        // Badge de produtividade com cores conforme meta
        if (data.produtividade) {
          var color = data.produtividade >= 10 ? 'green' : (data.produtividade < 8 ? 'red' : 'yellow');
          badges.push({ 
            text: data.produtividade.toFixed(2) + ' m²/h', 
            color: color 
          });
        }

        // Badge de alerta se passou 12h após check-in sem check-out
        if (data.checkinTime && !data.checkoutTime) {
          var checkin = new Date(data.checkinTime);
          var now = new Date();
          var diffHrs = (now - checkin) / (1000 * 60 * 60);
          if (diffHrs >= 12) {
            badges.push({ 
              text: '⚠️ Sem check-out >12h', 
              color: 'red' 
            });
          }
        }
        
        return badges;
      });
  },
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
      text: '📊 Dashboard Instalômetro',
      callback: function(t) {
        return t.modal({ 
          title: 'Dashboard Instalômetro', 
          url: './dashboard.html',
          height: 600
        });
      }
    }];
  },
  'show-settings': function(t, options) {
    return t.popup({
      title: 'Configurações Instalômetro',
      url: './settings.html',
      height: 200
    });
  }
});

