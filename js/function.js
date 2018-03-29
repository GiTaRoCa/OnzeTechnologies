
var titles=["Transformación Digital","Cloud Computing (IaaS – SaaS)","Business Intelligence - Analítica","Movilidad","Oficinas y Casas Inteligentes","Seguridad Informática","Soluciones de Gestión Empresarial","Soluciones Retail – Hardware y Software","Hardware – Software - Licenciamiento","Redes Eléctricas y Comunicaciones","Gestión del Cambio"];
var icons=["img/news/img01sm.png","img/news/img02sm.png","img/news/img03sm.png","img/news/img04sm.png","img/news/img05sm.png","img/news/img06sm.png","img/news/img07sm.png","img/news/img08sm.png","img/news/img09sm.png","img/news/img10sm.png","img/news/img11sm.png"];


$('#ModalInformation').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('id'); // Extract info from data-* attributes
  var modal = $(this);
  var icon=0;
  var title=0;
  recipient=parseInt(recipient);
  icon=recipient;
  title=recipient;
  if(recipient>=1 && recipient<=7)
    {
      icon=1;
      title=1;
    }
    else if(recipient>7){
      icon=recipient-6;
      title=icon;
    } 
    
  modal.find('.modal-icon').attr("src",icons[icon]);
  modal.find('.modal-title').text(titles[title]);

  /*modal.find('.modal-body input').val(recipient)*/  
  //alert(titles[recipient-1]);
	
 // $('#text-modal-container').html(textContainer[recipient]);	

 

  $('.modal-body').html(LoadData(recipient));	
 

});


function LoadData(section){

  var linkVideo="";// is link video youtube 
  var linkImg="";// is link video youtube
  var linkLocation="";// is link video youtube
  var containerModal='<div class="row mx-auto" >';//structor general
  var containerModalVideo="";
  var containerModalText='<div id="text-modal-container" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">';
  var containerModalImgLink="";
  var textContainer="";
  var dataContainer=[];


  var myObj={"blocks":[
    {"title":"Transformación Digital","container":[
      {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/6ZeMEae6pGs"},
      {"type":"text","title":"","cont":"<p class='text-justify'>El impacto de las tecnologías emergentes en la transformación digital de las empresas no ha hecho más que comenzar y dará lugar a un antes y un después. La transformación digital en todas las empresas se dará en todos los sectores y supondrá una aportación importante al crecimiento del PIB y al empleo a nivel general. La movilidad, la computación en la nube y Big Data ya comienzan a ser una fuente importante de negocio, ante la que se están ya tomado posiciones. Internet de todas las cosas (IoE) es probablemente la tecnología que aportará la mayor parte de la transformación digital, convirtiéndose en la tecnología de uso general donde se conectará cualquier cosa y personas y además hará posible el desarrollo de las Smart Cities y Factory 4.0. <br>Obviamente las empresas que ya nacen “nativas digitales” no se tienen que transformar. Las que necesitan transformarse son las empresas tradicionales de servicios e industriales, de todos los sectores, porque es un requisito fundamental para sobrevivir. La pregunta es:<br></p><p class='text-center'><b>¿Por dónde empezar?</b></p>"}
        ]},
    {"title":"Transformación Digital","container":[
      {"type":"text","title":"","cont":"<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.</p>"},
      {"type":"text","title":"","cont":"<h5>Infraestructura como Servicio (IaaS)</h5><p class='text-justify'>Somos un cloud Broker y aprovisionamos infraestructura como servicio donde se ofrece un conjunto de recursos que permite diseñar una solución a la medida de las necesidades de su negocio, de forma sencilla y pagando solo por lo que contrata. Nuestra plataforma Cloud cuenta con lo siguiente:</p><div class='container'><div class='row mx-auto'><div class='col-xs-12 col-ms-12 col-md-12 col-lg-6 col-xl-6'><ul><li>Pool de recursos a la medida</li><li>Control Total</li><li>Aprovisionamiento en tiempo real</li><li>Panel de control web</li><li>Firewall y backup</li><li>Autoservicio</li><li>Acceso vía app</li><li>Creación de plantillas para replica de servidores virtuales</li></ul></div><div class='col-xs-12 col-ms-12 col-md-12 col-lg-6 col-xl-6'><ul><li>Mínima latencia</li><li>Pago por uso</li><li>Asesoramiento y Consultoría</li><li>Soporte 24x7</li><li>Datacenter TIER IV</li><li>Firewall y backup avanzado</li><li>Balanceador de carga</li><li>Disaster and Recovery</li></ul></div></div><p class='text-justify'>Ofrecemos servicios gestionados sobre la infraestructura como servicio como parte fundamental de nuestra propuesta de valor. Nuestros servicios incluyen:</p><div class='row mx-auto '><div class='col-xs-12 col-ms-12 col-md-12 col-lg-6 col-xl-6'><ul><li>Consultoría y Diseño de la solución de infraestructura</li><li>Aprovisionamiento de servidores virtuales</li><li>Aseguramiento de los servidores</li></ul></div><div class='col-xs-12 col-ms-12 col-md-12 col-lg-6 col-xl-6'><ul><li>Administración de la infraestructura</li><li>Administración de los Sistemas Operativos</li><li>Gestión de los Servicios</li><li>Servicios de Monitorización</li></ul></div></div></div>"},
      {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/xMPWnAj6fx8"},
      {"type":"linkImg","title":"","cont":"<div style='text-align:center;margin:5px'><a href='https://cloud.google.com/compute/?hl=es'><img class='img-responsive' src='img/news/imgLinks/link_xertica.png'></a></div>"},
        ]},
      {"title":"Transformación Digital","container":[
        {"type":"text","title":"","cont":"<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.</p>"},
        {"type":"text","title":"","cont":"<h5>Software como Servicio (SaaS)</h5><p class='text-justify'>Contamos con varias las aplicaciones de uso específico donde el consumidor no administra ni controla la infraestructura que soporta estos servicios, pero si algunos parámetros de configuración de las aplicaciones para su uso y por el cual paga. Tenemos las siguientes aplicaciones:</p>"},
        {"type":"text","title":"","cont":"<p class='text-justify'><strong>ANTI ROBO – NODOS</strong>:  Solución como servicio que permite proteger dispositivos e información mediante sistemas de geo-referenciación y control de los dispositivos desde áreas remotas.</p>"},
        {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/UaoQ7mq7QTM"}
          ]},
      {"title":"Transformación Digital","container":[
        {"type":"text","title":"","cont":"<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.</p>"},
        {"type":"text","title":"","cont":"<h5>Software como Servicio (SaaS)</h5><p class='text-justify'>Contamos con varias las aplicaciones de uso específico donde el consumidor no administra ni controla la infraestructura que soporta estos servicios, pero si algunos parámetros de configuración de las aplicaciones para su uso y por el cual paga. Tenemos las siguientes aplicaciones:</p>"},
        {"type":"text","title":"","cont":"<p class='text-justify'><strong>FORMULARIOS DIGITALES – LUPPAP</strong>: Es una herramienta personalizable que se consume como servicio y sirve para la captura de información online y offline, controlando al personal en campo para la toma de decisiones en tiempo real.</p>"},
        {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/Z6eB3eUEieU"}
          ]},
        {"title":"Transformación Digital","container":[
          {"type":"text","title":"","cont":"<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.</p>"},
          {"type":"text","title":"","cont":"<h5>Software como Servicio (SaaS)</h5><p class='text-justify'>Contamos con varias las aplicaciones de uso específico donde el consumidor no administra ni controla la infraestructura que soporta estos servicios, pero si algunos parámetros de configuración de las aplicaciones para su uso y por el cual paga. Tenemos las siguientes aplicaciones:</p>"},
          {"type":"text","title":"","cont":"<p class='text-justify'><strong>CONTROL DE TIEMPO Y ASISTENCIA COMO SERVICIO – QP TIME Y QP MOBILE</strong>: Poderosa solución biométrica para autenticar la identidad de las personas. Herramienta confiable y precisa para la identificación de personas remotas o presenciales en cualquier momento que se requiera para hacer alguna transacción donde sea necesario un reconocimiento fehaciente. Permite reconocer a presentes o remotas de manera on-line rápidamente. Incluimos en el servicio los dispositivos biométricos y app.</p>"},
          {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/Z6eB3eUEieU"}
            ]},
        {"title":"Transformación Digital","container":[
          {"type":"text","title":"","cont":"<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.</p>"},
          {"type":"text","title":"","cont":"<h5>Software como Servicio (SaaS)</h5><p class='text-justify'>Contamos con varias las aplicaciones de uso específico donde el consumidor no administra ni controla la infraestructura que soporta estos servicios, pero si algunos parámetros de configuración de las aplicaciones para su uso y por el cual paga. Tenemos las siguientes aplicaciones:</p>"},
          {"type":"text","title":"","cont":"<p class='text-justify'><strong>BACKUP COMO SERVICIO – TORII BACKUP by SYNOLOGY</strong>: Los datos no son sólo el núcleo de cualquier negocio sino también el activo significativo para los usuarios en general. Los archivos importantes, como sus documentos de trabajo críticos o fotos personales, merecen una gran estrategia de copia de seguridad para protegerse contra fallas de hardware inesperadas, desastres naturales o eliminación accidental simple. Permita que nuestra solución le ayude con espacio de almacenamiento personalizable y ampliable, tiene una opción perfecta para realizar copias de seguridad de cualquier dispositivo, ya sea un equipo con Windows, Mac u otros dispositivos.</p>"},
          {"type":"text","title":"","cont":"<div class='row mx-auto '><div class='col-xs-12 col-ms-12 col-md-12 col-lg-6 col-xl-6'><ul><li>100% backup en la nube</li><li>Copias Online</li><li>Five Versioning</li><li>Transferencia cifrada SSL</li></ul></div><div class='col-xs-12 col-ms-12 col-md-12 col-lg-6 col-xl-6'><ul><li>Cliente compatible con Windows, MAC y Linux</li><li>Para estaciones de trabajo y Servidores</li><li>Portal de carga y descarga de archivos</li><li>Compartir archivos con clave y vencimiento</li></ul></div></div>"},
          {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/Z6eB3eUEieU"}
            ]},
        {"title":"Transformación Digital","container":[
          {"type":"text","title":"","cont":"<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.</p>"},
          {"type":"text","title":"","cont":"<h5>Software como Servicio (SaaS)</h5><p class='text-justify'>Contamos con varias las aplicaciones de uso específico donde el consumidor no administra ni controla la infraestructura que soporta estos servicios, pero si algunos parámetros de configuración de las aplicaciones para su uso y por el cual paga. Tenemos las siguientes aplicaciones:</p>"},
          {"type":"text","title":"","cont":"<p class='text-justify'><strong>GESTION DE CONTRASEÑAS COMO SERVICIO – BSR AS A SERVICE </strong>: Nuestra aplicación permite la autogestión de contraseñas, en donde el usuario final tiene la capacidad de cambiar su contraseña incluso cuando la haya olvidado. Dentro de los principales beneficios están:</p>"},
          {"type":"text","title":"","cont":"<div class='row mx-auto'><ul><li>Ahorro de costos recurrentes al evitar llamadas a la mesa de ayuda</li><li>Aumentar la productividad de los usuarios</li><li>Implementación rápida a nivel de TI</li><li>Informes para los administradores</li><li>Integración con diferentes tipos de Directorio Activo</li></ul></div>"},
          {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/hHuO8MEqKDY"}
            ]},
        {"title":"Transformación Digital","container":[
          {"type":"text","title":"","cont":"<p class='text-justify'>Es un modelo de entrega y consumo de servicios expresados en capacidades y recursos de cómputo y red que ofrece un prestador a un usuario/consumidor bajo unas condiciones específicas que ofrece el prestador para garantizar un acceso inmediato y directo a los recursos, crecer y decrecer según las necesidades y pagar por uso considerando aspectos de disponibilidad y seguridad.</p>"},
          {"type":"text","title":"","cont":"<h5>Software como Servicio (SaaS)</h5><p class='text-justify'>Contamos con varias las aplicaciones de uso específico donde el consumidor no administra ni controla la infraestructura que soporta estos servicios, pero si algunos parámetros de configuración de las aplicaciones para su uso y por el cual paga. Tenemos las siguientes aplicaciones:</p>"},
          {"type":"text","title":"","cont":"<p class='text-justify'><strong>ESCRITORIO REMOTO COMO SERVICIO – VIWO by COREPLUS</strong> Nuestra solución permite a cualquier empresa entregar a sus usuarios a través de un navegador (en cualquier dispositivo, lugar y momento) un escritorio Windows con la integración de aplicaciones propias o de terceros. Dentro de los principales beneficios están:</p>"},
          {"type":"text","title":"","cont":"<div class='row mx-auto'><ul><li>Utilizar los programas y la información en su computadora de trabajo desde un ordenador portátil de casa o incluso un teléfono móvil</li><li>Aumentar la productividad de la fuerza de trabajo</li><li>Reducción de los costos de computación con entrega, administración y seguridad en la nube.</li><li>Mejora la seguridad de acceso remoto porque no necesita preocuparse si los datos caen en manos equivocadas</li><li>Mejora y facilita la experiencia de escritorio</li><li>Las licencias de software están incluidas en su cuota mensual sin cargos adicionales</li></ul></div>"},
          {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/LoVt5lsmC6M"}
            ]},
        {"title":"Transformación Digital","container":[
          {"type":"text","title":"","cont":"<p class='text-justify'>Actualmente en el entorno de los negocios y la tecnología se escuchan conceptos como Business Intelligence, Analytics y Big Data. Todos ellos relacionados con los datos, su estructura, la forma como se consumen y el conocimiento que podemos generar con ellos. Escuchamos adicionalmente expertos que hablan del valor de los datos, de la importancia de la información, incluso se ha llegado a decir que, para el mundo de los negocios hoy en día, los datos tienen tanto valor como el capital y el trabajo</p>"},
          {"type":"text","title":"","cont":"<h5>QLIK</h5><p class='text-justify'>Con nuestra solución busque y explore enormes cantidades de datos... todos sus datos. Con Qlik, no está limitado por nociones preconcebidas de cómo deben estar relacionados los datos, sino que le permite por fin entender cómo están relacionados de verdad. Analice, revele, colabore y actúe. Qlik le permite convertir datos en conocimiento en todos los ámbitos de su negocio. Soluciones de Qlik</p>"},
          {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/m4fQzRJ2WLk"},
          {"type":"text","title":"","cont":"<h5>QLIK SENSE - SELF-SERVICE VISUALIZATION:</h5><p class='text-justify'>Analítica guiada y de autoservicio, cuente su historia, explore sus datos intuitivamente, todo en un único lugar. Cree visualizaciones inteligentes con solo arrastrar y soltar.</p>"},
          {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/85QHuNNeaCg"},
          {"type":"text","title":"","cont":"<h5>QLIKVIEW - GUIDED ANALYTICS:</h5><p class='text-justify'>Guíe las exploraciones controladas de conjuntos de datos dinámicos hacia un descubrimiento más profundo. Permite crear una app personalizada en un entorno de creación de scripts de QlikView. Disponible en versión de escritorio o servidor</p>"},
          {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/sqILcEwlHSI"},
          {"type":"text","title":"","cont":"<h5>QLIK – NPRINTING:</h5><p class='text-justify'>Divulgue conocimientos y perspectivas con informes que se pueden personalizar rápidamente. Cree informes realmente atractivos con datos y analítica de Qlik Sense y QlikView. Distribúyalos en un instante.</p>"},
          {"type":"video","title":"Transformación Digital","cont":"https://www.youtube.com/embed/LTLU_bmLVak"}
            ]},
    ]
  };

  var objectCont=myObj.blocks[section].container;
  dataContainer.push(containerModal);
  
  for(i in objectCont){
    
      if(objectCont[i].type=="video"){
        linkVideo=myObj.blocks[section].container[i].cont;
          containerModalVideo='<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><iframe style="width:100%; height:300px" src="'+linkVideo+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
          dataContainer.push(containerModalVideo);
      }else if(objectCont[i].type=="text"){
        containerModalText="";
        containerModalText+=objectCont[i].cont+"</div>";

          dataContainer.push(containerModalText);
      }
      else if(objectCont[i].type=="linkImg"){
        containerModalImgLink+=objectCont[i].cont;
          dataContainer.push(containerModalImgLink);
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


