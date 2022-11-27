

async function verificaUsuario(){
  const res = await fetch("json/usuarios.json");
  const contato = await res.json();
  var usuarioSistema = input.usuario.value;
  var senhaSistema = input.senha.value;
  var encontrado = 0;

      for (let i = 0; i < contato.length; i++) 
      {
          if(usuarioSistema == contato[i].senha && senhaSistema == contato[i].usuario){
            href = "dados.html";
            encontrado +=1;
            elseif(usuarioSistema != contato[i].senha && senhaSistema == contato[i].usuario)
              window.location.href = "index.html"; 
              write("senha incorreta");
            }
      }
      if (encontrado == 0){
        window.location.href = "index.html"  
        write("Usuário não cadastrado")
      }            
}
