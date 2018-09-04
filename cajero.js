class billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

function entregarDinero(){
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja){
    //console.log(bi+ "pintar");
    if(dinero>0){

      div= Math.floor(dinero/bi.valor);

      papeles = div>bi.cantidad ? bi.cantidad : div;
      entregado.push(new billete(bi.valor, papeles));
      dinero -= (bi.valor*papeles);
    }
  }

  if(dinero>0){
     resultado.innerHTML = "soy un cajero pobre y no tengo dinero";
  }
  else{
    for(var e of entregado){
      if(e.cantidad > 0){
        resultado.innerHTML += e.cantidad+ " billetes de "+ e.valor + "</br>";
      }
    }
  }
}


var caja =[];
var entregado = [];
caja.push(new billete(100,30));
caja.push(new billete(50,30));
caja.push(new billete(20,5));
caja.push(new billete(10,20));
caja.push(new billete(5,5));
var dinero = 0;
var div=0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
//b.addEventListener("click", entregarDinero);
b.onclick = entregarDinero;
entregado.length = 0;
console.log(entregado);

//document.getElementById("resultado").innerHTML="mille mila ";
//console.log(document.getElementById("resultado").value);
/*




for(var b of caja){
  if(dinero>0){
    div = floor(dinero/b.valor)
    if(div>b.cantidad){
      papeles=b.cantidad
    }
    else{
      papeles=div
    }
    entraga.push(new billete(b.cantidad,papeles));
    dinero = dinero -(b.valor*papeles);
  }
}

*/
