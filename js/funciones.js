function seleccionFechas() {
    var valorSeleccionado = document.getElementById("mesSeleccionado").value;
    
    if (valorSeleccionado === "0") {
        document.getElementById('mainContent').classList.remove('fechas-calendario-ocultar');
        document.getElementById('mainContent').classList.add('fechas-calendario-mostrar');
        
    }else {
        document.getElementById('mainContent').classList.remove('fechas-calendario-mostrar');
        document.getElementById('mainContent').classList.add('fechas-calendario-ocultar');
    } 
    if (valorSeleccionado === "1") {
        document.getElementById('mainContent-1').classList.remove('fechas-calendario-ocultar-1');
        document.getElementById('mainContent-1').classList.add('fechas-calendario-mostrar-1');
        
    }else {
        document.getElementById('mainContent-1').classList.remove('fechas-calendario-mostrar-1');
        document.getElementById('mainContent-1').classList.add('fechas-calendario-ocultar-1');
    }
    if (valorSeleccionado === "2") {
        document.getElementById('mainContent-2').classList.remove('fechas-calendario-ocultar-2');
        document.getElementById('mainContent-2').classList.add('fechas-calendario-mostrar-2');
        
    }else {
        document.getElementById('mainContent-2').classList.remove('fechas-calendario-mostrar-2');
        document.getElementById('mainContent-2').classList.add('fechas-calendario-ocultar-2');
    }
    if (valorSeleccionado === "3") {
        document.getElementById('mainContent-3').classList.remove('fechas-calendario-ocultar-3');
        document.getElementById('mainContent-3').classList.add('fechas-calendario-mostrar-3');
        
    }else {
        document.getElementById('mainContent-3').classList.remove('fechas-calendario-mostrar-3');
        document.getElementById('mainContent-3').classList.add('fechas-calendario-ocultar-3');
    }
    if (valorSeleccionado === "4") {
        document.getElementById('mainContent-4').classList.remove('fechas-calendario-ocultar-4');
        document.getElementById('mainContent-4').classList.add('fechas-calendario-mostrar-4');
        
    }else {
        document.getElementById('mainContent-4').classList.remove('fechas-calendario-mostrar-4');
        document.getElementById('mainContent-4').classList.add('fechas-calendario-ocultar-4');
    }
    if (valorSeleccionado === "5") {
        document.getElementById('mainContent-5').classList.remove('fechas-calendario-ocultar-5');
        document.getElementById('mainContent-5').classList.add('fechas-calendario-mostrar-5');
        
    }else {
        document.getElementById('mainContent-5').classList.remove('fechas-calendario-mostrar-5');
        document.getElementById('mainContent-5').classList.add('fechas-calendario-ocultar-5');
    }
    if (valorSeleccionado === "6") {
        document.getElementById('mainContent-6').classList.remove('fechas-calendario-ocultar-6');
        document.getElementById('mainContent-6').classList.add('fechas-calendario-mostrar-6');
        
    }else {
        document.getElementById('mainContent-6').classList.remove('fechas-calendario-mostrar-6');
        document.getElementById('mainContent-6').classList.add('fechas-calendario-ocultar-6');
    }
    if (valorSeleccionado === "7") {
        document.getElementById('mainContent-7').classList.remove('fechas-calendario-ocultar-7');
        document.getElementById('mainContent-7').classList.add('fechas-calendario-mostrar-7');
        
    }else {
        document.getElementById('mainContent-7').classList.remove('fechas-calendario-mostrar-7');
        document.getElementById('mainContent-7').classList.add('fechas-calendario-ocultar-7');
    }
    
    
   
  
    
}

function abrirFormulario() {
    
    const popup = window.open("", "popup", "width=400,height=300");

const html = `
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;

popup.document.write(html);
popup.document.close();


}
