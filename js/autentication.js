const email = "admin.uol@compasso.com.br"; 
const password = "Ipsz*K5620+/z"; 
const message = document.getElementById('sending-msg'); 

  try {
    function save(event) {
      event.preventDefault();
      let emailF = document.querySelector("#email").value;
      let passwordF = document.querySelector("#password").value;

      if (emailF === email && passwordF === password) {
          message.innerText = `Dados Ok`;
          message.style.color = "#00E749";
          setTimeout(() => {
            window.location.href = "./html/home.html";
          }, 2000);
          return;
      } else if (emailF === "" || passwordF === "") {
          message.innerText = `Todos os compos são obrigatórios`;
          return;
      } else if (passwordF.length < 8) {
          message.innerText = `Sua senha deve ter no minimo 8 caracteres`;
          return;
      } else if (emailF != email || passwordF != password) {
          message.innerText = `Email ou senha inválidos`;
          return;
      }
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Execution completed.");
  }

