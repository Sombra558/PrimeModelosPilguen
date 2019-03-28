<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contacto;

class ContactController extends Controller
{
    public function store(Request $request){
        request()->all();
        Contacto::create([
			'cliente' => request('cliente'),
			'mensaje' => request('mensaje'),
            'contacto' => request('contacto'),
			]);	
        return;
        }
        public function update(Request $request, $id){
            Contacto::find($id)->update([
                'cliente' => request('cliente'),
                'mensaje' => request('mensaje'),
                'contacto' => request('contacto'),
                ]);
        return;
        }
}
