/* 
 * Instalômetro Trello Power-Up - Versão 1.1
 * Indústria Visual
 * Calcula m² e produtividade de instalação com validações e fallbacks
 */

var Promise = TrelloPowerUp.Promise;


// Inicialização do Power-Up
TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
      text: '📋 Identificação',
      callback: showIdModal
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
      text: '📏 Medidas',
      callback: showMeasuresModal
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
      text: '✅ Check-In',
      callback: checkIn
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
      text: '🏁 Check-Out',
      callback: checkOut
    }, {
      icon: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
      text: '📊 Dashboard',
      callback: showDashboard
    }];
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
      callback: showDashboard
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

// Funções de callback para modais
function showIdModal(t, opts) {
  return t.popup({ 
    title: 'Identificação da Instalação', 
    url: './id_modal.html', 
    height: 350 
  });
}

function showMeasuresModal(t, opts) {
  return t.popup({ 
    title: 'Medidas da Instalação', 
    url: './measures_modal.html', 
    height: 400 
  });
}

function checkIn(t, opts) {
  return t.popup({ 
    title: 'Check-In - Início da Instalação', 
    url: './checkin_modal.html', 
    height: 350 
  });
}

function checkOut(t, opts) {
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
        height: 350 
      });
    });
}

function showDashboard(t, opts) {
  return t.modal({ 
    title: 'Dashboard Instalômetro', 
    url: './dashboard.html',
    height: 600
  });
}

// Exportar funções para uso global
window.showIdModal = showIdModal;
window.showMeasuresModal = showMeasuresModal;
window.checkIn = checkIn;
window.checkOut = checkOut;
window.showDashboard = showDashboard;

