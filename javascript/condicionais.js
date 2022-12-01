var permissao = 'admin';

switch (permissao) {
      case 'usuario' : 
          console.log('Acesso Usuário');
                     break;
          case 'super-usuario' : 
          console.log('Acesso Super-Usuário');
                     break;
      case 'admin' : 
          console.log('Acesso Administrador');
                     break; 
      default : 
          console.log('Permissão não reconhecida');
     }


var autenticado = false;

if(autenticado){
    console.log("bem vindo");
} else{
    console.log("não identificado! desculpa");
}

var permissao = 'admin';

switch (permissao){
    
    case 'gerente':
        console.log("acesso como gerente");
    break;
    case 'admin':
        console.log("acesso como admin");
    break;  
    case 'funcionario':
        console.log("acesso como funcionario");
    break;
    default:
        console.log("acesso como convidado");     
}