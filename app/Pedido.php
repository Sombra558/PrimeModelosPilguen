<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = [
        'cliente','mensaje','contacto','cantidad','medida',
    ];
}
