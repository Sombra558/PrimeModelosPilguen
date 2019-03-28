@extends('layouts.Producto')

@section('content')
<div class="Catalegeichon">
<div class="container">
<div class="row">
                    <div class="col-md-6">
                    <div className="card">
                    <img height="350px" src="{{$producto->url}}" class="card-img-top" />       
                    </div>          
                    </div>
                    <div id="pedido" class="col-md-6">
                    
                    </div>
                    <div class="col-md-6">
                    <br>
                     <hr>
                     <div className="card ">
                       <div class="card-header"><h1 class="card-title textdeta">{{ $producto->producto }} </h1></div>
                       <div class="card-body">
                    <p class="card-text text-justify textdeta">{{ $producto->descripcion }}</p></div>
                    <div class="card-footer textdeta"><p>Categoria: {{$producto->categoria}}</p></div>
                    </div> 
                     
                    </div>
</div></div></div>

@endsection






	