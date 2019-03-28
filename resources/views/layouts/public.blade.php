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
        .empresa{
            font-weight: 800;
        }
       
        .product{
            font-weight: 800;
            color:#ffffff;
        }
        .text-product{
            font-weight: bold;
            color:#ffffff;

        }
        .body1{
            background: linear-gradient(#2a7021,#ffffff,#ffffff);
            color: #2a7021;
        }
        .Catalegeichon{
            background: linear-gradient(#2a7021,#ffffff,#2a7021);
            color: #2a7021;
        }
        .body1 h2{
            color:white;
        }
        .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
            }
        .body2{
            background-image: url(/img/Producto.jpg);
                background-attachment: relative;
                background-size: cover;
                height:100%;
                width:100%;
                background-repeat: no-repeat; 
        }
        .body2 h2{  
            color: white;
        }
        .body2 h5{  
            color: white;
        }
        .comple{
            background-color:#dbdfdc;
        }
            .btn-pilguen{
                background-color:#ffffff;                
                color:#2a7021;
            }
            .btn-pilguen:hover{
                background-color:#2a7021;                
                color:#ffffff;
               
            }
        .body3{
            background-image: url(/img/Servicios.png);
                background-attachment: relative;
                background-size: cover;
                
                width:100%;
                color:#ffffff;
                background-repeat: no-repeat; 
        }
      
        .rya{
            background: linear-gradient(black,#404041,#84848a);
            height: 450px;
            color: transparent;
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
            .anis{
                color: #ffffff;
                
                background-color: #2985058f;
                padding: 0 25px;
                font-size: 35px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
            }
            .a{
                text-decoration: none;
            }
            .a:hover{
                text-decoration: none;
            }
            .anis:hover{
                color: #ffffff;
                
                background: linear-gradient(transparent,#2985058f,transparent);
                padding: 0 25px;
                font-size: 35px;
                font-weight: 600;
                
                letter-spacing: .1rem;
                text-decoration: none;
            }
            .anus{
                color: #ffffff;
                
                background-color: #2985058f;
                padding: 0 25px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
            }
            .anas{
                color: #ffffff;
                padding: 0 25px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                background-color: #2a7021;
            }
           
            .producto{
                padding: 10px 25px;
                color:black;
                text-decoration: none;
            }
            .producto:hover{
                color:#ffffff;
                font-style: bold;
                text-decoration: none;
            }
            .categoria{ 
                padding: 0 25px;
                font-size: 15px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
            }
            .categoria a{ 
               color:black;
            }
            .categoria a:hover{
                color:green;
            }
            .fonde{
                background-color: #f5f8fa00;
                
            }
            .textdeta{
                color: #ffffff;
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
            .card-pilguen {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.25rem;
            }
            .card-header-pilguen {
                padding: 0.75rem 1.25rem;
                margin-bottom: 0;
                background-color: #d6d5d5;
                border-bottom: 1px solid rgba(0, 0, 0, 0.125);
                }
            .card-pilguen .card-header-pilguen:hover,
            .card-pilguen .card-header-pilguen:focus{
                background-color: #2a7021;
                color:#ffffff;
                }
               
            .nav-tabs-pilguen {
            border-bottom: 1px solid #2a7021;
            }
            .fondin{
                background-color: #d6d5d5;
                color: #2a7021;
            }

.nav-tabs-pilguen .nav-item {
  margin-bottom: -1px;
}

.nav-tabs-pilguen .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.nav-tabs-pilguen .nav-link:hover,
.nav-tabs-pilguen .nav-link:focus {
  background-color: #2a7021;
  color: #ffffff;
}

.nav-tabs-pilguen .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs-pilguen .nav-link.active,
.nav-tabs-pilguen .nav-item.show .nav-link {
  color: #ffffff;
  background-color: #2a7021;
  border-color: #dee2e6 #dee2e6 #f5f8fa;
}

    </style>
      
    </head>
    <body>
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
        $("#animarscroll1").on("click", function(){
            var posicion = $("#hastaaqui1").offset().top;
            $("html, body").animate({
                scrollTop: posicion
            }, 2000); 
        });
        $("#animarscroll2").on("click", function(){
            var posicion = $("#hastaaqui2").offset().top;
            $("html, body").animate({
                scrollTop: posicion
            }, 2000); 
        });
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