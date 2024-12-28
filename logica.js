
const capas = [
    { imagem: './img/rome-tripoli.jpg', id: 'capa1' },
    { imagem: './img/dubai-rome.jpg', id: 'capa2' },
    { imagem: './img/venice-carnival.jpg', id: 'capa3' },
    { imagem: './img/business-class.jpg', id: 'capa4' }
  ];
  
  const botoesCapa = document.querySelectorAll('.select-capa button');

  function trocarCapa(index) {
    const capa = capas[index];

    const elementoCapa = document.querySelector('.capa');
    elementoCapa.style.backgroundImage = `url('${capa.imagem}')`;
  

    capas.forEach((c, i) => {
      const elementoInfo = document.getElementById(c.id);
      elementoInfo.style.display = i === index ? 'block' : 'none';
    });
  

    botoesCapa.forEach((botao, i) => {
      if (i === index) {
        botao.style.color = '#0B2340';
        botao.style.borderBottom = '2px solid #0B2340';
      } else {
        botao.style.color = '#7f7f7faa';
        botao.style.borderBottom = 'none';
      }
    });
  }
  

  botoesCapa.forEach((botao, index) => {
    botao.addEventListener('click', () => trocarCapa(index));
  });
  

  trocarCapa(0);
  


  const buttons = document.querySelectorAll('.select-form button');

  const forms = document.querySelectorAll('.form-container form');


  buttons.forEach(button => {
      button.addEventListener('click', () => {

          forms.forEach(form => {
              form.style.display = 'none';
          });
          const targetForm = document.getElementById(button.getAttribute('data-target'));
          if (targetForm) {
              targetForm.style.display = 'block';
          }
      });
  });


  document.getElementById('book').style.display = 'block';
