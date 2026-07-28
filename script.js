// ======================================================
  // CONFIGURAÇÃO — edite só aqui e o site inteiro atualiza
  // ======================================================
  var CONFIG = {
    whatsapp: "5531995312787",     // número com DDI+DDD, só dígitos (ex: 55 + DDD + número)
    address: "Studio Movere, Itaguara - MG" // endereço real pro mapa
  };

  (function(){
    // Links de WhatsApp com mensagem pronta em cada botão marcado com data-wa
    document.querySelectorAll('[data-wa]').forEach(function(el){
      var msg = el.getAttribute('data-wa-msg') || 'Olá! Vim pelo site do Studio Movere.';
      el.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
      el.target = '_blank';
      el.rel = 'noopener';
    });

    // Mapa real a partir do endereço configurado
    var mapFrame = document.getElementById('map-embed');
    if (mapFrame) {
      mapFrame.src = 'https://www.google.com/maps?q=' + encodeURIComponent(CONFIG.address) + '&output=embed';
    }
  })();

(function(){
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var groups = document.querySelectorAll('[data-reveal-group] > *');
    groups.forEach(function(el, i){
      el.setAttribute('data-reveal','');
      el.style.transitionDelay = reduce ? '0s' : (Math.min(i,4) * 70) + 'ms';
    });
    if(reduce){
      document.querySelectorAll('[data-reveal]').forEach(function(el){ el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function(el){ io.observe(el); });
  })();