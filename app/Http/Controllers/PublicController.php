<?php

namespace App\Http\Controllers;
use App\Producto;
use App\Medida;
use App\Contacto;
use App\Pedido;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function index(){
        return view('/pages/Producto');
    }
    public function indexServicios(){
        return view('/pages/Servicio');
    }
    public function Redirect(){
       
        return redirect('/Servicios');
    }
    public function ProductoListado(){
        $productos=Producto::get();
        return $productos;
    }
    public function Redirecciones(){
       
        return redirect('/Productos');
    }
    public function MaderasVerdeListado(){
        $productos=Producto::where('tipo', 'Verde')->get();
        return $productos;
    }
    public function MaderasSecaListado(){
        $productos=Producto::where('tipo', "Seca")->get();
        return $productos;
    }
    public function MaderasImpregnadaListado(){
        $productos=Producto::where('tipo', "Impregnada")->get();
        return $productos;
    }
    public function PolinesListado(){
        $productos=Producto::where('tipo', "Polines")->get();
        return $productos;
    }
    public function SubProductosListado(){
        $productos=Producto::where('tipo', "Sub-Producto")->get();
        return $productos;
    }
    public function ProductoDetalle($id){
        $producto = Producto::find($id);
        $medid = Medida::where('tipo', $producto->tipo)->get();
      
    	return view('/pages/Detalle',compact('producto','medid'));
    }
}
