document.addEventListener('keydown', function (event) { // permite consultar clicando na tecla enter
     if (event.keyCode == 13){
      consultar();
     }
 });
 
 function consultar(){
     var estadoNome = window.document.querySelector("input.form-control").value      //recebe os valores do formulario
     var estadoFormatado = estadoNome.toLowerCase()                   
     estadoFormatado = estadoFormatado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")   // tira os caracteres especiais        
     estadoNome = estadoFormatado
 
     var alerta = document.getElementById('alerta').style
     var sigla = window.document.querySelector("td.sigla")
     var nomeEx = window.document.querySelector("td.ext")
     var cap = window.document.querySelector("td.cap")
     var reg = window.document.querySelector("td.reg")
 
 
     function estado(estados,estadoNome) {
         let i = 0
         while(i < estados.length){ 
             console.log(`${estadoNome}, ${estados[i].id}`)
             if (estadoNome == estados[i].id) {
                 sigla.innerHTML = `${estados[i].sigla}`
                 nomeEx.innerHTML = `${estados[i].nomeEx}`
                 cap.innerHTML =  `${estados[i].capital}`
                 reg.innerHTML =  `${estados[i].reg}`
                 alerta.display  = 'none';
                 console.log(true)
                 break
 
             }else{
                 console.log(false)
                 alerta.display = 'block';
             }
             i++;
         }
         
     }   
    
     var estados = [
         {
             id: "sao paulo",
             nomeEx: "São Paulo",
             sigla: "SP",
             capital: "São Paulo",
             reg: "Sudeste"
     
         },
         {   
             id: "santa catarina",
             nomeEx: "Santa Catarina",
             sigla: "SC",
             capital: "Florianópolis",
             reg: "Sul"
     
         },
         {    id :"rio de janeiro",//3
             sigla: "RJ",
             nomeEx:"Rio de Janeiro",
             capital: "Rio de Janeiro",
             reg: "Sudeste"
                 
                
             },
         {
             id: "acre",//4
             sigla: "AC",
             nomeEx:"Acre",
             capital: "Rio Branco",
             reg: "Norte"
                 
             },    
           
           {
             id: "rio grande do norte", //5
             sigla: "RN",
             nomeEx:"Rio Grande do Norte",
             capital: "Natal",
             reg: "Nordeste"
                 
             },   
           
           {
             id: "rio grande do sul", //6
             sigla: "RS",
             nomeEx:"Rio Grande do Sul",
             capital: "Porto Alegre",
             reg: "Sul"
                 
             },    
           
           {
             id: "pernambuco",           //7
             sigla: "PE",
             nomeEx:"Pernambuco",
             capital: "Recife",
             reg: "Nordeste"
                 
             },   
           
           {
             id: "piaui",         //8
             sigla: "PI",
             nomeEx:"Piauí",     
             capital: "Teresina",     
              reg: "Nordeste"
             },    
                
           
           {
             id: "rondonia", //9
             sigla: "RO",         
             nomeEx:"Rondônia",         
             capital: "Porto Velho",         
             reg: "Norte"
                 
             },  
           
           {
             id: "roraima", //10
             sigla: "RR",         
             nomeEx:"Roraima",         
             capital: "Boa Vista",         
             reg: "Norte"
                 
             },  
           
           {
             id: "sergipe", //11
             sigla: "SE",         
             nomeEx:"Sergipe",         
             capital: "Aracaju",         
             reg: "Nordeste"
                 
                
             },
           {
             id: "tocantins", //12
             sigla: "TO",         
             nomeEx:"Tocantins",         
             capital: "palmas",         
             reg: "Norte"
                 
             },  
           
           {
             id: "parana", //13
             sigla: "PR",         
             nomeEx:"Paraná",         
             capital: "Curitiba",         
             reg: "Sul"
                 
             },  
           
           {
             id: "paraiba", //14
             sigla: "PB",         
             nomeEx:"Paraíba",         
             capital: "João Pessoa",         
             reg: "Nordeste"
             },  
                
           
           {
             id: "para", //15
             sigla: "PA",         
             nomeEx:"Pará",         
             capital: "Belém",         
             reg: "Nordeste"
             },  
                
           
           {
             id: "minas gerais", //16
             sigla: "MG",        
             nomeEx:"Minas Gerais",         
             capital: "Belo Horizonte",         
             reg: "Sudeste"
                 
             }, 
           
           {
             id: "mato groso do sul", //17
             sigla: "MS",         
             nomeEx:"Mato Grosso do Sul",         
             capital: "Campo Grande",         
             reg: "Centro-Oeste"
             }, 
                
           
           {
             id: "mato grosso", //18
             sigla: "MT",         
             nomeEx:"Mato Grosso",         
             capital: "Cuiabá",         
             reg: "Centro-Oeste"
                 
             }, 
           
           {
             id: "maranhao", //19
             sigla: "MA",        
             nomeEx:"Maranhão",         
             capital: "São Luís",         
             reg: "nordeste"
             }, 
                
           
           {
             id: "goias", //20
             sigla: "GO",         
             nomeEx:"Goiás",         
             capital: "Goiânia",         
             reg: "Centro-Oeste"
             }, 
                
           
           {
             id: "espirito santo", //21
             sigla: "ES",         
             nomeEx:"Espírito Santo",         
             capital: "Vitória",         
             reg: "Sudeste"
             }, 
                
           
           {
             id: "ceara", //22
             sigla: "CE",         
             nomeEx:"Ceará",         
             capital: "Fortaleza",         
             reg: "Nordeste"
             }, 
                
           
           {
             id: "bahia", //23
             sigla: "BA",         
             nomeEx:"Bahia",        
             capital: "Salvador",         
             reg: "Nordeste"
             }, 
                
           
           {
             id: "amazonas", //24
             sigla: "AM",         
             nomeEx:"Amazonas",         
             capital: "Manaus",         
             reg: "Norte"
             }, 
                
           
           {
             id: "amapa", //25
             sigla: "AP",         
             nomeEx:"Amapá",         
             capital: "Macapitalá",         
             reg: "Norte"
             }, 
                
           
           {
             id: "alagoas", //26
             sigla: "AL",         
             nomeEx:"Alagoas",         
             capital: "Maceió",         
             reg: "Nordeste"
                 
             },
           
           {
             id: "distrito federal", //27
             sigla: "DF",
             nomeEx:"Distrito Federal",
             capital: "Brasilia",
             reg: "Centro-Oeste"
         }
     ]
     estado(estados,estadoNome)
 }
 
