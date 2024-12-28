
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
  

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".select-form button");
    const forms = document.querySelectorAll(".form-container form");

    function toggleActiveButton(button) {
        buttons.forEach(btn => {
            if (btn === button) {
                btn.style.color = "#0B2340";
                btn.style.borderBottom = "2px solid #0B2340";
            } else {
                btn.style.color = "#7f7f7faa";
                btn.style.borderBottom = "none"; 
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            forms.forEach(form => {
                form.style.display = "none";
            });


            const targetFormId = button.getAttribute("data-target");
            const targetForm = document.querySelector(`#form${targetFormId}`);
            if (targetForm) {
                targetForm.style.display = "block";
            }


            toggleActiveButton(button);
        });
    });

    document.querySelector("#form1").style.display = "block";
    toggleActiveButton(buttons[0]); 
});



//Estado de Voo 
//Esconde quando nao e "By airport"
const radioButtons = document.querySelectorAll('input[name="select"]');
const hiddenElement = document.getElementById('hidden');


radioButtons.forEach(radio => { 
  radio.addEventListener('change', () => { 
    if (radio.checked) {
     const selectedValue = radio.value; 
     if (selectedValue !== 'airport') { 
      hiddenElement.style.visibility= 'hidden'; 
    } else { 
      hiddenElement.style.visibility= 'visible'; 
    } 
  }}); 
});

//Quando clicas "Proceed"
document.getElementById('form4').addEventListener('submit', function(event) {
  event.preventDefault(); //Evita que faca reset quando clica no botao

  const departure = document.getElementById('departure').value;     
  const flightDateValue = document.getElementById('data').value;
  const flightDate = new Date(flightDateValue); // Para ter a certeza que esta certo
  const TipoDeVoo = document.querySelector('select').value; 
  console.log({departure, flightDateValue, TipoDeVoo }); 

  if (departure && flightDateValue && TipoDeVoo) { 
      document.getElementById('hidden').style.display = 'none'; 
      const flightInfo = document.getElementById('flightInfo'); 
      flightInfo.style.display = 'block'; 

      const flight1Time = departure.toLowerCase() === 'lisboa' ? '10:05' : '12:10'; 
      const flight2Time = departure.toLowerCase() === 'lisboa' ? '18:05' : '20:10'; 
      const flight1Status = (flightDate.getDate() % 2 === 0) ? 'No horário' : 'Atrasado'; 
      const flight2Status = (flightDate.getMonth() % 2 === 0) ? 'No horário' : 'Chegou'; 

      document.getElementById('flight1').innerHTML = 
                                        ` <p id="titulo">TP1:</p> <br> 
                                          <strong>Dia do Voo:</strong> ${flightDate.toLocaleDateString()} <br> 
                                          <strong>Hora do Voo:</strong> ${flight1Time} <br> 
                                          <strong>Estado:</strong> ${flight1Status} <br><br>`; 


      document.getElementById('flight2').innerHTML = 
                                       ` <p id="titulo">TP2:</p> <br>
                                         <strong>Dia do Voo:</strong>${flightDate.toLocaleDateString()} <br> 
                                         <strong>Hora do Voo:</strong> ${flight2Time} <br> 
                                         <strong>Estado:</strong> ${flight2Status}<br> `; 
  }
});

