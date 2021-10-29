var mobile = document.getElementById('mobile-nav');
var btn = document.getElementById('btn-responsive')
var voltar = document.getElementById('sair')


btn.addEventListener("click", function(){
  if(mobile.style.display === "block"){
    mobile.style.display = "none"
  } else{
    mobile.style.display = "block"
  }
})

sair.addEventListener("click", function(){
  if(mobile.style.display === "block"){
    mobile.style.display = "none"
  } else{
    mobile.style.display = "block"
  }
})

  function saibamais(){
    window.location.href = 'https://cdpn.io/thicode/debug/abpVEeB/jVMpoEDNzPxk'
}