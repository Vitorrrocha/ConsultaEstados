document.addEventListener('keydown', function (event) { // permite consultar clicando na tecla enter
     if (event.keyCode == 13){
      consultar();
     }
 });

function consultar(){
     var estadoNome = window.document.querySelector("input.form-control").value      //recebe os valores do formulario
     var estadoFormatado = estadoNome.toLowerCase()                   
     estadoFormatado = estadoFormatado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")   // tira os caracteres especiais        
     alteraTable(estadoFormatado)  
}

function alteraTable(estadoFormatado,) {
     var sigla = window.document.querySelector("td.sigla")
     var nomeEx = window.document.querySelector("td.ext")
     var cap = window.document.querySelector("td.cap")
     var reg = window.document.querySelector("td.reg")

     
     switch (estadoFormatado) {
          
          case "sao paulo" ://1
               sigla.innerHTML = "SP"
               nomeEx.innerHTML = "São Paulo"
               cap.innerHTML = "São Paulo"
               reg.innerHTML = "Sudeste"
               document.getElementById('alerta').style.display = 'none' // desabilita a imagem de erro
               break   
          
          case "santa catarina"://2
               sigla.innerHTML = "SC"
               nomeEx.innerHTML = "Santa Catarina"
               cap.innerHTML = "Florianópolis"
               reg.innerHTML = "Sul"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "rio de janeiro"://3
               sigla.innerHTML = "RJ"
               nomeEx.innerHTML = "Rio de Janeiro"
               cap.innerHTML = "Rio de Janeiro"
               reg.innerHTML = "Sudeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "acre" ://4
               
               sigla.innerHTML = "AC"
               nomeEx.innerHTML = "Acre"
               cap.innerHTML = "Rio Branco"
               reg.innerHTML = "Norte"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "rio grande do norte": //5
               sigla.innerHTML = "RN"
               nomeEx.innerHTML = "Rio Grande do Norte"
               cap.innerHTML = "Natal"
               reg.innerHTML = "Nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "rio grande do sul": //6
               sigla.innerHTML = "RS"
               nomeEx.innerHTML = "Rio Grande do Sul"
               cap.innerHTML = "Porto Alegre"
               reg.innerHTML = "Sul"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "pernambuco": //7
               sigla.innerHTML = "PE"
               nomeEx.innerHTML = "Pernambuco"
               cap.innerHTML = "Recife"
               reg.innerHTML = "Nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "piaui": //8
               sigla.innerHTML = "PI"         
               nomeEx.innerHTML = "Piauí"         
               cap.innerHTML = "Teresina"         
               reg.innerHTML = "Nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "rondonia": //9
               sigla.innerHTML = "RO"         
               nomeEx.innerHTML = "Rondônia"         
               cap.innerHTML = "Porto Velho"         
               reg.innerHTML = "Norte"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "roraima": //10
               sigla.innerHTML = "RR"         
               nomeEx.innerHTML = "Roraima"         
               cap.innerHTML = "Boa Vista"         
               reg.innerHTML = "Norte"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "sergipe": //11
               sigla.innerHTML = "SE"         
               nomeEx.innerHTML = "Sergipe"         
               cap.innerHTML = "Aracaju"         
               reg.innerHTML = "Nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "tocantins": //12
               sigla.innerHTML = "TO"         
               nomeEx.innerHTML = "Tocantins"         
               cap.innerHTML = "palmas"         
               reg.innerHTML = "Norte"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "parana": //13
               sigla.innerHTML = "PR"         
               nomeEx.innerHTML = "Paraná"         
               cap.innerHTML = "Curitiba"         
               reg.innerHTML = "Sul"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "paraiba": //14
               sigla.innerHTML = "PB"         
               nomeEx.innerHTML = "Paraíba"         
               cap.innerHTML = "João Pessoa"         
               reg.innerHTML = "Nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "para": //15
               sigla.innerHTML = "PA"         
               nomeEx.innerHTML = "Pará"         
               cap.innerHTML = "Belém"         
               reg.innerHTML = "Nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "minas gerais": //16
               sigla.innerHTML = "MG"         
               nomeEx.innerHTML = "Minas Gerais"         
               cap.innerHTML = "Belo Horizonte"         
               reg.innerHTML = "Sudeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "mato groso do sul": //17
               sigla.innerHTML = "MS"         
               nomeEx.innerHTML = "Mato Grosso do Sul"         
               cap.innerHTML = "Campo Grande"         
               reg.innerHTML = "Centro-Oeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "mato grosso": //18
               sigla.innerHTML = "MT"         
               nomeEx.innerHTML = "Mato Grosso"         
               cap.innerHTML = "Cuiabá"         
               reg.innerHTML = "Centro-Oeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "maranhao": //19
               sigla.innerHTML = "MA"         
               nomeEx.innerHTML = "Maranhão"         
               cap.innerHTML = "São Luís"         
               reg.innerHTML = "nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "goias": //20
               sigla.innerHTML = "GO"         
               nomeEx.innerHTML = "Goiás"         
               cap.innerHTML = "Goiânia"         
               reg.innerHTML = "Centro-Oeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "espirito santo": //21
               sigla.innerHTML = "ES"         
               nomeEx.innerHTML = "Espírito Santo"         
               cap.innerHTML = "Vitória"         
               reg.innerHTML = "Sudeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "ceara": //22
               sigla.innerHTML = "CE"         
               nomeEx.innerHTML = "Ceará"         
               cap.innerHTML = "Fortaleza"         
               reg.innerHTML = "Nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "bahia": //23
               sigla.innerHTML = "BA"         
               nomeEx.innerHTML = "Bahia"         
               cap.innerHTML = "Salvador"         
               reg.innerHTML = "Nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "amazonas": //24
               sigla.innerHTML = "AM"         
               nomeEx.innerHTML = "Amazonas"         
               cap.innerHTML = "Manaus"         
               reg.innerHTML = "Norte"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "amapa": //25
               sigla.innerHTML = "AP"         
               nomeEx.innerHTML = "Amapá"         
               cap.innerHTML = "Macapá"         
               reg.innerHTML = "Norte"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "alagoas": //26
               sigla.innerHTML = "AL"         
               nomeEx.innerHTML = "Alagoas"         
               cap.innerHTML = "Maceió"         
               reg.innerHTML = "Nordeste"
               document.getElementById('alerta').style.display = 'none' 
               break
          
          case "distrito federal": //27
               sigla.innerHTML = "DF"
               nomeEx.innerHTML = "Distrito Federal"
               cap.innerHTML = "Brasilia"
               reg.innerHTML = "Centro-Oeste"
               document.getElementById('alerta').style.display = 'none' 
               break

          default: 
               document.getElementById('alerta').style.display = 'block';
               break
     }
}

