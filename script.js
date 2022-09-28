$(function(){
  //Botões 01
  const btn = 
    [
      {btn:'CADASTROS', link:'cad.html'},
      {btn:'MANUTENÇÕES', link:'#'},
      {btn:'RELATORIOS', link:'#'},
      {btn:'DIVERSOS', link:'#'},
    ]

     btn.map((i)=>{
       $('.acesso').append(`
       <a href="${i.link} ">
          <button>
              ${i.btn}
          </button>
        </a>
       `)
     })


  // Botões 02
  const btnCad = 
    [
      {btn:'DEPARTAMENTOS', link:'dep.html'},
      {btn:'SINDICATOS', link:''},
      {btn:'HORÁRIOS', link:''},
      {btn:'FERIADOS', link:''},
      {btn:'SAÍDAS', link:''},
      {btn:'JUST.DE FALTA', link:''},
      {btn:'DADOS GERAIS', link:''},
      {btn:'FUNCIONÁRIOS', link:''},
      {btn:'USUÁDIOS', link:''},
      {btn:'RELÓGIOS', link:''},
      {btn:'EMPRESA', link:''},
      {btn:'JUSTIFICATIVA GERAL', link:''},
    ]
  btnCad.map((i)=>{
    $('.items').append(`
        <a href="${i.link} ">
          <button>
              ${i.btn}
          </button>
        </a>
    `)
  })

  // Botões 03
  btnDep = 
    [
      {btn:'CONSULTAR',},
      {btn:'INCLUIR',},
      {btn:'ALTERAR',},
      {btn:'EXCLUIR',},
    ]

  btnDep.map((i, index)=>{
    $('.depItems').append(`
       
          <button class="btnDados" key="${index} ">
              ${i.btn}
          </button>
        
        
    `)
    
  })

  $('.btnDados').click((e)=>{
    let key = e.target.closest('button').getAttribute('key')
    if(key == 0){
      $('.dados').show()
      $('.incluir').hide()
    }else if(key == 1){
      $('.dados').hide()
      $('.incluir').show()
    }else if(key == 2){
      $('.dados').show()
      $('.incluir').hide()
    }else if(key == 3){
      $('.dados').show()
      $('.incluir').hide()
    }
      
  })

  
  
})