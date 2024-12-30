//Menu de janela reduzida

document.addEventListener("DOMContentLoaded", function() { 
  // Função para ocultar ou mostrar menu compacto com base em consultas de mídia 
  function handleMediaChange(mediaQuery) { 
    var menucompacto = document.getElementById("menucompacto"); 
    var menubutao1 = document.getElementById("menubutao1"); 
    var menubutao2 = document.getElementById("menubutao2"); 
    if (mediaQuery.matches) { 
      //Mostra dos submenus 
      document.getElementById("menu").addEventListener("click", function() {
         if (menubutao1.style.display === "none") { 
          menubutao1.style.display = "block"; 
          menubutao2.style.display = "none"; 
          menucompacto.style.display = "none"; 
        } else { 
          menubutao1.style.display = "none"; 
          menubutao2.style.display = "block"; 
          menucompacto.style.display = "block"; 
        } 
      }); 
      const buttons = document.querySelectorAll("#menucompacto > button");
      const submenus = document.querySelectorAll("#menucompacto > ul"); 
      buttons.forEach(button => { 
        button.addEventListener("click", function() { 
          const submenuId = "submenu" + this.id.slice(-1);
          submenus.forEach(submenu => { 
            if (submenu.id === submenuId) { 
              submenu.style.display = (submenu.style.display === "none" || submenu.style.display === "") ? "block" : "none"; 
            } else { 
              submenu.style.display = "none"; 
            } 
          }); 
        }); 
      });
    } else { 
      menucompacto.style.display = "none"; 
    } 
  } 
  // Definir a consulta de mídia
  var mediaQuery = window.matchMedia("(max-width: 1240px)"); 
  handleMediaChange(mediaQuery); 
  mediaQuery.addEventListener('change', (e) => handleMediaChange(e.target)); 
});



//Capa
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

//Passageiros

document.getElementById("passangers").addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.getElementById("passangers-form");
    form.style.display = "block"; 
  });
  document.getElementById("x").addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.getElementById("passangers-form");
    form.style.display = "none"; 
  }); 


  document.addEventListener("DOMContentLoaded", () => {
    // Atualiza o contador e o estado do botão de menos
    function updateCount(button, action) {
        const container = button.closest(".contagem");
        const countSpan = container.querySelector("span");
        const decrementButton = container.querySelector(".minus");
        let count = parseInt(countSpan.textContent.trim());

        count = action === "increment" ? count + 1 : Math.max(0, count - 1);

        countSpan.textContent = count;
        decrementButton.disabled = count === 0;
    }

    // Adiciona eventos aos botões
    document.querySelectorAll(".plus, .minus").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const action = button.classList.contains("plus") ? "increment" : "decrement";
            updateCount(button, action);
        });
    });

    // Inicializa os botões 
    document.querySelectorAll(".minus").forEach(button => {
        const countSpan = button.closest(".contagem").querySelector("span");
        button.disabled = parseInt(countSpan.textContent.trim()) === 0;
    });
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
document.addEventListener("DOMContentLoaded", function() { 
  document.getElementById('form4').addEventListener('submit', function(event) { 
    event.preventDefault(); // Evita que faça reset quando clica no botão 
    const departure = document.getElementById('departure').value; 
    const flightDateValue = document.getElementById('data').value; 
    const flightDate = new Date(flightDateValue); // Para ter a certeza que está certo 
    const TipoDeVoo = document.getElementById('TipoDeVoo').value;
    let flight1Status, flight2Status; 
    
    console.log({ departure, flightDateValue, TipoDeVoo }); 
    
    if (departure && flightDateValue && TipoDeVoo) { 
      document.getElementById('hidden').style.display = 'none'; 
      const flightInfo = document.getElementById('flightInfo'); 
      flightInfo.style.display = 'block';
      const flight1Time = departure.toLowerCase() === 'lisboa' ? '10:05' : '12:10'; 
      const flight2Time = departure.toLowerCase() === 'lisboa' ? '18:05' : '20:10'; 
      
      if (TipoDeVoo === 'Ida') { 
        flight1Status = (flightDate.getDate() % 2 === 0) ? 'No horário' : 'Atrasado'; 
        flight2Status = flight1Status;
      } else if (TipoDeVoo === 'Regresso') { 
        console.log(flightDate.getMonth());
        flight1Status = ((flightDate.getMonth() + 1) % 2 === 0) ? 'No horário' : 'Chegou'; //Pus +1 porque esta a contar do a partir do 0
        flight2Status = flight1Status;
      }

      console.log(flight1Status, flight2Status);

      document.getElementById('flight1').innerHTML = 
      ` <p id="titulo">TP1:</p> <br> 
      <strong>${TipoDeVoo} para ${departure}</strong><br>
      <strong>Dia do Voo:</strong> ${flightDate.toLocaleDateString()}<br> 
      <strong>Hora do Voo:</strong> ${flight1Time}<br> 
      <strong>Estado:</strong> ${flight1Status}<br><br> `; 
      
      document.getElementById('flight2').innerHTML = 
      ` <p id="titulo">TP2:</p> <br> 
      <strong>${TipoDeVoo} para ${departure}</strong><br>
      <strong>Dia do Voo:</strong> ${flightDate.toLocaleDateString()}<br> 
      <strong>Hora do Voo:</strong> ${flight2Time}<br> 
      <strong>Estado:</strong> ${flight2Status}<br> `; 
    } 
  }); 
});
