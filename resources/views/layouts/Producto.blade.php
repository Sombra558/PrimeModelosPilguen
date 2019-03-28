<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Pilguen Maderas</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
        <!-- Styles -->
        <style>
        .ryu{
            background: linear-gradient(#2a7021,#2a7021,#2a7021);
            color: white;
        }
        .negrear{
            font-weight: bold;
                font-size:20px;
                color: #ffffff;
            }
            .navbar-pilguen{
                color:#ffffff;
            }
            .navbar-dark .navbar-nav .nav-link {
                color: #ffffff;
            }
            .navbar-pilguen .navbar-nav .nav-link:hover,
            .navbar-pilguen .navbar-nav .nav-link:focus {
            color: #f5a208;
            border-bottom: 2px solid #f5a208;
            }
            .navbar-pilguen .navbar-nav .nav-link.disabled {
            color: rgba(255, 255, 255, 0.25);
            }

            .navbar-pilguen .navbar-nav .show > .nav-link,
            .navbar-pilguen .navbar-nav .active > .nav-link,
            .navbar-pilguen .navbar-nav .nav-link.show,
            .navbar-pilguen .navbar-nav .nav-link.active {
            color: #f5a208;
            border-bottom: 2px solid #f5a208;
            }
        .producto{
            font-weight: 800;
            color:#2a7021;
            margin-left:10px;
            padding: 10px 25px;
        }
        .Caracteisticasusos{
            color:#f5a208;
            font-weight:bold;
        }
     

        .list-group-item-action-pilguen {
            width: 100%;
            color: black;
            text-align: inherit;
        }

        .list-group-item-action-pilguen:hover,
        .list-group-item-action-pilguen:focus {
        color: #ffffff;
        text-decoration: none;
        background-color: #2a7021;
        }

.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item-pilguen{
  position: relative;
  display: block;
  color:black;
  font-weight:bold;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #cccccc;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item-pilguen:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.list-group-item-pilguen:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.list-group-item-pilguen:hover,
.list-group-item-pilguen:focus {
  z-index: 1;
  background-color:#2a7021;
  font-weight:bold;
  color:#ffffff;
  text-decoration: none;
}

.list-group-item-pilguen.disabled,
.list-group-item-pilguen:disabled {
  color: #6c757d;
  background-color: #fff;
}

.list-group-item-pilguen.active {
  z-index: 2;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
        .footerar{
            background: linear-gradient(#2a7021,#2a7021,black);
            color: white;
        }
        .pie{
				font-size: 11px;
                color: white;
                background-color: black;
            }
         
       
        </style>
      
    </head>
    <header>
    <nav class="navbar navbar-expand-lg navbar-pilguen fixed-top ryu" id="myTab" role="tablist">
    <a class="navbar-brand" href="#">
    <img src="/img/Logo.png" width="250px" height="80" alt=""/>
    </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  
                </ul>
                <ul class="navbar-nav text-center justify-content-between">
                <li class="nav-item">
                            <a class="nav-link negrear" href="/">INICIO <span class="sr-only">(current)</span></a>
                        </li>
                        <li id="animarscroll1" class="nav-item">
                            <a class="nav-link negrear" href="/">LA EMPRESA</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrear active" href="/Productos">PRODUCTOS</a>
                        </li>
                        <li id="animarscroll2" class="nav-item">
                            <a class="nav-link negrear" href="/Servicios">SERVICIOS</a>
                        </li>
                        <li id="animarscroll3" class="nav-item">
                            <a class="nav-link negrear" href="#">CONTACTOS</a>
                        </li>
                        </ul>
        </div>
    </nav>
    </header>
    <body>
    <br>
    <br>
    <br>
    @yield('content')
    <footer id="hastaaqui3" class="footerar">
      <br/>
    <div class="container">
   <div class="row">
   
        <div class="col-md-5">
        <h4 class="text-center">CONTACTO</h4>
        <div id="contactame">
        </div>
        </div>
        <div class="col-md-7">
        <h4 class="text-center">INFORMACIÓN</h4>
        <div class="row">
        <div class="col-md-12">
        <div class="row">
        <div class="col-xs-2">
        <span style="font-size: 18px; color: #ffffff;"><i class="fas fa-phone col"></i></span>
        </div>
        <div class="col-xs-10">
        
        +56 43 236 3240
        </div>
        </div>
        </div>
        <div class="col-md-12">
        <div class="row">
        <div class="col-xs-2">
        <span style="font-size: 18px; color: #ffffff;"><i class="fas fa-envelope col"></i></span>
        </div>
        <div class="col-xs-10">
        
        contacto@maderaspilguen.cl
        </div>
        </div>
        </div>
        <div class="col-md-12">
        <div class="row">
        <div class="col-xs-2">
        <span style="font-size: 18px; color: #ffffff;"><i class="fas fa-map-marker-alt col"></i></span>
        </div>
        <div class="col-xs-10">
        
         Av. Las Industrias 1665, Los Ángeles, Chile
        </div>
        </div></div>
        <section class="col-md-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.969479996803!2d-72.32817458469067!3d-37.485046579813165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966be8034dedbe87%3A0xb6f9f36e33beb1bd!2sMaderas+Pilguen+S+A!5e0!3m2!1ses-419!2sve!4v1550854670918" width="100%" height="200px" frameborder="0" style="border:0" allowfullscreen></iframe>
        </section>
        </div>
        </div></div>
        </div>
        </footer>
        <footer class="pie">
				<br>
				<p class="text-center">
    			Pilguen Maderas.  Copyright 2019 Todos los derechos reservados | Powered by Saraid Mata Guaimare
				</p><br>
</footer>   
       <script src="{{ asset('js/app.js') }}"></script>
       <script>
       $(function(){
        $("#animarscroll3").on("click", function(){
            var posicion = $("#hastaaqui3").offset().top;
            $("html, body").animate({
                scrollTop: posicion
            }, 2000); 
        });
        $(document).on("scroll", function(){
            var desplazamientoActual = $(document).scrollTop();
            var controlArriba = $("#irarriba");
            console.log("Estoy en " , desplazamientoActual); 
            if(desplazamientoActual > 100 && controlArriba.css("display") == "none"){
                controlArriba.fadeIn(500);
            }
            if(desplazamientoActual < 100 && controlArriba.css("display") == "block"){
                controlArriba.fadeOut(500);
            }
        });
        $("#irarriba a").on("click", function(e){
            e.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 1000); 
        });
    });
    </script>
    
    </body>
   
</html>