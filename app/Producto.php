<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $fillable = [
     'producto', 'descripcion', 'categoria', 'tipo','url',
    ];
}
