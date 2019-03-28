<?php

namespace App\Http\Controllers;
use App\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    public function store(Request $request){
        request()->all();
        Pedido::create([
			'cliente' => request('cliente'),
			'mensaje' => request('mensaje'),
            'contacto' => request('contacto'),
            'cantidad' => request('cantidad'),
            'medida' => request('medida'),
			]);	
        return;
        }
        public function update(Request $request, $id){
            Pedido::find($id)->update([
                'cliente' => request('cliente'),
                'mensaje' => request('mensaje'),
                'contacto' => request('contacto'),
                'cantidad' => request('cantidad'),
                'medida' => request('medida'),
                ]);
        return;
        }
}
