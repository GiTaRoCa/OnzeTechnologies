var titles=["Transformación Digital","Cloud Computing (IaaS – SaaS)","Business Intelligence - Analítica","Movilidad","Oficinas y Casas Inteligentes","Seguridad Informática","Soluciones de Gestión Empresarial","Soluciones Retail – Hardware y Software","Hardware – Software - Licenciamiento","Redes Eléctricas y Comunicaciones","Gestión del Cambio"];
var textContainer=new Array(11);
textContainer[0]="<p class='text-justify'>El impacto de las tecnologías emergentes en la transformación digital de las empresas no ha hecho más que comenzar y dará lugar a un antes y un después. La transformación digital en todas las empresas se dará en todos los sectores y supondrá una aportación importante al crecimiento del PIB y al empleo a nivel general. La movilidad, la computación en la nube y Big Data ya comienzan a ser una fuente importante de negocio, ante la que se están ya tomado posiciones. Internet de todas las cosas (IoE) es probablemente la tecnología que aportará la mayor parte de la transformación digital, convirtiéndose en la tecnología de uso general donde se conectará cualquier cosa y personas y además hará posible el desarrollo de las Smart Cities y Factory 4.0. <br>Obviamente las empresas que ya nacen “nativas digitales” no se tienen que transformar. Las que necesitan transformarse son las empresas tradicionales de servicios e industriales, de todos los sectores, porque es un requisito fundamental para sobrevivir. La pregunta es:<br></p><p class='text-center'><b>¿Por dónde empezar?</b></p>";
textContainer[1]="<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.<br></p><p class='text-center'><b>¿Por dónde empezar?</b></p>";
$('#ModalInformation').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('id'); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  recipient=parseInt(recipient)-1;
  var modal = $(this);
  modal.find('.modal-title').text(titles[recipient]);
  /*modal.find('.modal-body input').val(recipient)*/
  //alert(titles[recipient-1]);
	
 // $('#text-modal-container').html(textContainer[recipient]);	

 

  //$('.modal-body').html(LoadData(recipient));	
 

});


function LoadData(section){

  var linkVideo="";// is link video youtube 
  var linkImg="";// is link video youtube
  var linkLocation="";// is link video youtube
  var containerModal='<div class="row mx-auto" >';//structor general
  var containerModalVideo="";
  var containerModalText='<div id="text-modal-container" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">';
  var containerModalImgLink='<div><a href="'+linkLocation+'"><img class="img-responsive" src="'+ linkImg+'"></a></div>';
  var textContainer="";
  var dataContainer=[];


  var myObj={"blocks":[
    {"title":"Transformación Digital","container":[
      {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/6ZeMEae6pGs"},
      {"type":"text","title":"","cont":"<p class='text-justify'>El impacto de las tecnologías emergentes en la transformación digital de las empresas no ha hecho más que comenzar y dará lugar a un antes y un después. La transformación digital en todas las empresas se dará en todos los sectores y supondrá una aportación importante al crecimiento del PIB y al empleo a nivel general. La movilidad, la computación en la nube y Big Data ya comienzan a ser una fuente importante de negocio, ante la que se están ya tomado posiciones. Internet de todas las cosas (IoE) es probablemente la tecnología que aportará la mayor parte de la transformación digital, convirtiéndose en la tecnología de uso general donde se conectará cualquier cosa y personas y además hará posible el desarrollo de las Smart Cities y Factory 4.0. <br>Obviamente las empresas que ya nacen “nativas digitales” no se tienen que transformar. Las que necesitan transformarse son las empresas tradicionales de servicios e industriales, de todos los sectores, porque es un requisito fundamental para sobrevivir. La pregunta es:<br></p><p class='text-center'><b>¿Por dónde empezar?</b></p>"}
        ]},
    {"title":"Transformación Digital","container":[
      {"type":"text","title":"","cont":"<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.</p>"},
      {"type":"text","title":"","cont":"<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.</p>"}
        ]}
    ]
  };

  var objectCont=myObj.blocks[section].container;
  dataContainer.push(containerModal);

  for(i in objectCont){
    
      if(objectCont[i].type=="video"){
        linkVideo=myObj.blocks[0].container[i].cont;
          containerModalVideo='<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><iframe style="width:100%; height:300px" src="'+linkVideo+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
          dataContainer.push(containerModalVideo);
      }else if(objectCont[i].type=="text"){
        containerModalText+=objectCont[i].cont+"</div>";
          dataContainer.push(containerModalText);
      }
      
  }
  
 

  dataContainer.push("</div>");
 
  for(var j=0;j<dataContainer.length;j++){

    textContainer+=dataContainer[j];
  }

  return textContainer;

};
function Data(section){

  var linksVideo={"video":[
    {"section":0,"link":"https://www.youtube.com/embed/6ZeMEae6pGs"},
    {"section":1,"link":"https://www.youtube.com/embed/xMPWnAj6fx8"},
    {"section":1,"link":"https://www.youtube.com/embed/UaoQ7mq7QTM"},
    {"section":1,"link":"https://www.youtube.com/watch?v=Z6eB3eUEieU"},
    {"section":1,"link":"https://drive.google.com/file/d/0B6m88QgUmsMOSmtzM3N0cXA2MHM/view"},
    {"section":1,"link":"https://www.youtube.com/embed/hHuO8MEqKDY"},
    {"section":1,"link":"https://www.youtube.com/embed/LoVt5lsmC6M"}
]};


}


