<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Medida;
class MedidaController extends Controller
{
    public function store(Request $request){
        request()->all();
        Medida::create([
            'medida' => request('medida'),
            'tipo' => request('tipo'),
            ]);
        return;
        }
        public function update(Request $request, $id){
            Medida::find($id)->update([
                'medida' => request('medida'),
            'tipo' => request('tipo'),
                ]);
        return;
        }
        public function index(){
            $Tiposs = Medida::all(); 
            return $Tiposs;
        }
        public function destroy($id){
            Medida::find($id)->delete();
        }
        public function MedidaContador(){
            $contador=Medida::count();
            return $contador;
        }
}
