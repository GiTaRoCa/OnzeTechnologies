
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
        {"title":"Movilidad","container":[
          {"type":"text","title":"","cont":"<p class='text-justify'>Nuestra propuesta es Cambium Networks, con un amplio portafolio de Wi-Fi, de banda ancha fija de punto a punto (PTP) y de punto a multipunto (PMP), todas administradas por software basado en la nube. </p>"},
          {"type":"text","title":"","cont":"<h5>cnMaestro - Administrador de red inalámbrica</h5><p class='text-justify'>cnMaestro ™ es una plataforma de software local o basada en la nube para un control de red seguro y de extremo a extremo. El administrador de redes inalámbricas cnMaestro simplifica la administración de dispositivos al ofrecer una visibilidad completa de la red y un aprovisionamiento sin contacto. Vea y realice un conjunto completo de funciones de administración de redes inalámbricas en tiempo real. Optimice la disponibilidad del sistema, maximice el rendimiento y satisfaga las necesidades emergentes de clientes empresariales y residenciales. </p>"},
          {"type":"text","title":"","cont":"<h5>WiFi</h5><p class='text-justify'>cnPilot 802.11ac Wave 2 Los productos Wi-Fi con capacidades de administración avanzadas ofrecen alta capacidad y una instalación rápida en un paquete asequible: para conectar personas, lugares y cosas. Cambium Networks ofrece soluciones seguras, escalables y administradas en la nube para el hogar, las pequeñas empresas y las aplicaciones de redes Wi-Fi locales de empresas tanto interiores como exteriores. <br> <br> Cada punto de acceso Wi-Fi 802.11ac y 802.11n edge y enterprise se puede instalar en redes de área local inalámbricas nuevas o existentes, incluso las de otros fabricantes de equipos de red, y junto con diagnósticos remotos inteligentes e integrados que garantizan una implementación rápida y sencilla operación, nunca ha sido más fácil conectar lo desconectado.</p>"},
          {"type":"text","title":"","cont":"<h5>Redes punto a punto</h5><p class='text-justify'>Nuestras soluciones probadas de la serie punto a punto (PTP) se implementan en todo el mundo y prestan servicios a aplicaciones altamente críticas en entornos formidables para los usuarios más exigentes del mundo. <br> <br> Con el mejor desempeño en su clase en el mundo real y la seguridad aprobada por FIPS 140-2 disponible para aplicaciones gubernamentales y militares, la serie PTP es su conexión a lo que importa, no importa qué.</p>"},
          {"type":"text","title":"","cont":"<h5>Soluciones banda ancha punto a multipunto</h5><p class='text-justify'>Con un registro mundial de implementación de una década de solidez, nuestras soluciones de Internet inalámbrico fijo punto a multipunto (PMP) y ePMP ™ conectan a millones de personas en todo el mundo. Con la reutilización de frecuencia habilitada por la Sincronización GPS y respaldada por el software PMP, su red de banda ancha inalámbrica puede evitar la crisis del espectro y crecer con su base de clientes. <br> <br> Las soluciones de acceso y distribución punto a multipunto permiten a los operadores de red brindar servicios de Internet inalámbrico de alta velocidad a clientes comerciales y residenciales. Las aplicaciones admitidas incluyen transferencia de datos y archivos, voz, transmisión de video y videovigilancia. Estas redes inalámbricas de banda ancha de PMP escalan desde pequeñas implementaciones para conectar áreas remotas a implementaciones en toda la comunidad con miles de suscriptores.</p>"},
          {"type":"text","title":"","cont":"<h5>IIOT – Dispositivos IOT y Soluciones</h5><p class='text-justify'>Los dispositivos IOT de Cambium Networks ofrecen una infraestructura de comunicaciones potente y resistente que interconecta sensores y controles a través de redes de área de campo a gran escala, aprovechando el potencial del IIoT para transformar datos acumulados y en tiempo real en conocimiento profundo y acciones críticas. <br> <br> Cambium atiende verticales industriales como petróleo / gas, servicios eléctricos, gestión de agua / aguas residuales / aguas pluviales, operaciones ferroviarias y transporte inteligente. <br> <br> Con las soluciones Cambium, las organizaciones industriales pueden mejorar la eficiencia operativa, reducir el tiempo de inactividad, aumentar la seguridad y alinearse con las iniciativas corporativas de IoT.</p>"},
          {"type":"video","title":"Movilidad","cont":"https://www.youtube.com/embed/5pcgC1UM650"}
            ]},
        {"title":"Oficinas y casas inteligentes","container":[
          {"type":"text","title":"","cont":"<p class='text-justify'><p class='text-justify'>Se refiere a la interconexión digital de objetos cotidianos con Internet. Los elementos que dan forma al IoT son los pequeños dispositivos electrónicos (SmartWatches, sensores, etc.) junto a los protocolos de red y de comunicación (WiFi, Bluetooth, ANT, Ethernet, ZigBee, etc).</p>"},
          {"type":"text","title":"","cont":"<h5>Casas y oficinas inteligentes</h5><p class='text-justify'>Nuestra solución provee la tecnología para que usted pueda controlar su hogar u oficina directamente desde su smartphone, tablet o computadora ofreciendo seguridad, confort, ahorro de energía y control total de las funciones de su casa o negocio. Estas son algunas de las cosas que puedes hacer con nuestra tecnología:</p><div class='container'><div class='row mx-auto'><div class='col-xs-12 col-ms-12 col-md-12 col-lg-6 col-xl-6'><ul><li>Apagar y encender tus luces.</li><li>Abrir y cerrar tu cerradura</li><li>Programar la temperatura de tu aire acondicionado</li><li>Saber en tiempo real quién entra o sale de tu casa</li><li>Recibir notificaciones de la alarma</li></ul></div></div></div>"},  
          {"type":"video","title":"Movilidad","cont":"https://www.youtube.com/embed/PzzStxtAdMs"},
          {"type":"text","title":"","cont":"<p class='text-justify'>Nuestra tecnología Z-wave ha sido probada y ampliamente utilizada (12 millones de productos vendidos en el mundo). Z-wave es el líder del mercado mundial en el control domótico inalámbrico. Tenemos la mayor oferta de productos “inteligentes” de fácil instalación, sencilla operación desde aplicaciones en español, sin contratos ni mensualidades y no necesitas modificar tu red eléctrica.</p>"},
            ]},
       {"title":"Seguridad informática","container":[
          {"type":"text","title":"","cont":"<p class='text-justify'><p class='text-justify'>Ofrecemos una gama completa de productos de seguridad sencillos, escalables y fáciles de administrar para medianas empresas. Protección de redes y estaciones de trabajo, con administración centralizada y comunicación entre las partes. Nuestras soluciones son líderes en el cuadrante de Gartner.</p>"},
          {"type":"text","title":"","cont":"<h5>SOPHOS</h5><p class='text-justify'>"},
          {"type":"video","title":"SOPHOS","cont":"https://player.vimeo.com/video/67737500?portrait=0"},
          {"type":"text","title":"","cont":"<h5>SOPHOS ENDPOINT</h5><p class='text-justify'>Antivirus Sofisticado y sencillo, protección contra amenazas avanzadas, filtrado web y cumplimiento de políticas.</p>"},
          {"type":"video","title":"SOPHOS","cont":"https://player.vimeo.com/video/68961352?portrait=0"},
          {"type":"text","title":"","cont":"<h5>SOPHOS UTM</h5><p class='text-justify'>La gestión unificada de las amenazas simplifica la seguridad Sophos UTM proporciona seguridad completa, desde cortafuegos de red a antivirus para estaciones de trabajo, en un solo dispositivo por módulos. Simplifica la seguridad informática y elimina las complicaciones de utilizar soluciones diferentes en varios puntos. La interfaz intuitiva ayuda a crear políticas rápidamente para controlar los riesgos para la seguridad, mientras que los informes claros y detallados le ofrecerán toda la información que necesita para mejorar la protección y el rendimiento de la red.</p>"},
          {"type":"video","title":"SOPHOS","cont":"https://player.vimeo.com/video/69276551?portrait=0"},
          {"type":"text","title":"","cont":"<h5>SOPHOS SAFEGUARD</h5><p class='text-justify'>Protección de los datos en cualquier lugar. Protección completa de los datos en múltiples plataformas y dispositivos, sin afectar al rendimiento.</p>"},
          {"type":"video","title":"SOPHOS","cont":"https://player.vimeo.com/video/78018141?portrait=0"},
          {"type":"text","title":"","cont":"<h5>SOPHOS Mobile Control</h5><p class='text-justify'>Innumerables dispositivos, una única solución. Gestión y seguridad completa de dispositivos móviles, contenidos y aplicaciones. Administre sus dispositivos móviles, contenidos, aplicaciones y su correo electrónico, además de los antivirus, antimalware y filtrado web. Para los profesionales de IT que desean poder disfrutar de movilidad, Sophos Mobile Control (SMC) administra y protege dispositivos móviles, contenido y aplicaciones.</p>"},
          {"type":"video","title":"SOPHOS","cont":"https://player.vimeo.com/video/68636604?portrait=0"},
          {"type":"text","title":"","cont":"<h5>SOPHOS Cloud</h5><p class='text-justify'>Seguridad integrada para Windows, Mac y móviles Seguridad rápida y sencilla para todos sus dispositivos Windows, Mac y móviles a través de la nube Sophos Cloud es la única solución de seguridad integrada para dispositivos Windows, Mac y móviles. Con una experiencia de usuario sencilla e intuitiva, Sophos Cloud es fácil de implementar, administrar y mantener. </p>"},
          {"type":"video","title":"SOPHOS","cont":"https://player.vimeo.com/video/86313331?portrait=0"},
        ]},
       {"title":"Soluciones de gestión empresarial","container":[
          {"type":"text","title":"","cont":"<p class='text-justify'><p class='text-justify'>Ofrecemos soluciones de Software y Hardware para la Cadena de Abastecimiento con el fin de lograr incrementar su eficiencia operacional, resultando en una mayor rentabilidad y clientes más satisfechos.</p>"},
          {"type":"text","title":"","cont":"<h5>Soluciones de hardware</h5><div class='container'><div class='row mx-auto'><div class='col-xs-12 col-ms-12 col-md-12 col-lg-6 col-xl-6'><ul><li>RFID</li><li>Tecnología de Voz</li><li>Impresoras</li><li>Terminales</li><li>Etiquetado</li></ul></div></div></div>"},  
          {"type":"text","title":"","cont":"<h5>SCP (SUPPLY CHAIN PLANNING)</h5><div class='container'><div class='row mx-auto'><div class='col-xs-12 col-ms-12 col-md-12 col-lg-6 col-xl-6'><ul><li>Planeación de la Demanda</li><li>Planeación de la Cadena de Abastecimiento</li><li>Plan de Ventas y Operaciones</li></ul></div></div></div>"},  

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


