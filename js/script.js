
$(document).ready(function(){

    trocaSkin()
     
    
});


function trocaSkin(){

    var i 
    var skin = {
        imagem: ['LOLMANAGER.jpg', 'ahri.jpg', 'LOLMANAGER.jpg', 'LOLMANAGER.jpg', 'LOLMANAGER.jpg'],
        fundo: ['fundo2.jpg', 'fundo.jpg', 'fundo.jpg', 'fundo2.jpg', 'fundo.jpg' ],
        texto: ['fundo.jpg', 'fundo1.jpg', 'fundo2.jpg', 'fundo3.jpg', 'fundo4.jpg' ],
    };

    
    
    for(i = 0; i < skin.imagem.length; i++){
        var zindex = 5 - i
    
    $(".skins").append(`<div id="${i}" class='skin skin-esquerda' style="z-index: ${zindex}"><img src='../img/${skin.imagem[i]}'></div>`);
    $("#0").addClass('skin-principal');
    
    
    
    
    $(".skin").click(function (){ 
        $('.skin').removeClass('skin-principal')
        $(this).addClass('skin-principal')  
        
        $(this).prepend(function(){
            $(this).css('z-index', '5')
        });

   
        

    });
    
    } 
    
    
    $('.skin').click(function (){ 

        var id = $(this).attr("id");
        $('#fundo').css('background-image', `url('../img/${skin.fundo[id]}')`)
        $('.some-texto').remove()
        $(".skin-principal").prepend(`<h1 class="texto-skin some-texto">${skin.texto[id]}</h1>`);   
  
    });
    

 
    
    $(".skin-principal").prepend(`<h1 class="texto-skin some-texto">${skin.texto[0]}</h1>`)

    
    $('#descricao-1').hide()
    $('#descricao-2').hide()
    $('#descricao-3').hide()
    $('#descricao-4').hide()
    $('#descricao-5').hide()

    $('#habilidade-1').mouseenter(function(){          
        $('#descricao-1').show()
    })
    $('#habilidade-1').mouseleave(function(){   
        $('#descricao-1').hide()
    })

    $('#habilidade-2').mouseenter(function(){          
        $('#descricao-2').show()
    })
    $('#habilidade-2').mouseleave(function(){   
        $('#descricao-2').hide()
    })

    $('#habilidade-3').mouseenter(function(){          
        $('#descricao-3').show()
    })
    $('#habilidade-3').mouseleave(function(){   
        $('#descricao-3').hide()
    })

    $('#habilidade-4').mouseenter(function(){          
        $('#descricao-4').show()
    })
    $('#habilidade-4').mouseleave(function(){   
        $('#descricao-4').hide()
    })

    $('#habilidade-5').mouseenter(function(){          
        $('#descricao-5').show()
    })
    $('#habilidade-5').mouseleave(function(){   
        $('#descricao-5').hide()
    })

}