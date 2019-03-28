<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//vistas
Route::get('/Productos', 'PublicController@index');
Route::get('/Servicios', 'PublicController@indexServicios');
//listados
Route::get('/Productos/listado', 'PublicController@ProductoListado');
Route::get('/Madera/Verde/listado', 'PublicController@MaderasVerdeListado');
Route::get('/Madera/Seca/listado', 'PublicController@MaderasSecaListado');
Route::get('/Madera/Impregnada/listado', 'PublicController@MaderasImpregnadaListado');
Route::get('/Polines/listado', 'PublicController@PolinesListado');
Route::get('/Subproductos/listado', 'PublicController@SubProductosListado');
//Coctacto
Route::post('/Contactar','ContactController@store');
//pedido
Route::post('/Productos/Pedido','PedidoController@store');
Route::post('/Verde/Pedido','PedidoController@store');
Route::post('/Seca/Pedido','PedidoController@store');
Route::post('/Impregnada/Pedido','PedidoController@store');
Route::post('/Polines/Pedido','PedidoController@store');
Route::post('/SubProductos/Pedido','PedidoController@store');
//detalles
Route::get('/Productos/{id}','PublicController@ProductoDetalle');
Route::get('/Verde/{id}','PublicController@ProductoDetalle');
Route::get('/Seca/{id}','PublicController@ProductoDetalle');
Route::get('/Impregnada/{id}','PublicController@ProductoDetalle');
Route::get('/SubProductos/{id}','PublicController@ProductoDetalle');
Route::get('/Polines/{id}','PublicController@ProductoDetalle');
//redireciones
Route::get('/Servicios/Impregnado', 'PublicController@Redirect');
Route::get('/Servicios/Secado', 'PublicController@Redirect');
Route::get('/Verde','PublicController@Redirecciones');
Route::get('/Seca','PublicController@Redirecciones');
Route::get('/Impregnada','PublicController@Redirecciones');
Route::get('/Polines','PublicController@Redirecciones');
Route::get('/SubProductos','PublicController@Redirecciones');
Auth::routes();
Route::group(['middleware' => 'admin'], function () {
    Route::get('/ControlAdmin', 'AdminController@index');
    Route::resource('/ControlAdmin/Producto','ProductoController');
    Route::resource('/ControlAdmin/Categoria','CategoriaController');
    Route::resource('/ControlAdmin/Tipo','TypeController');
    Route::resource('/ControlAdmin/Medida','MedidaController');
    Route::get('/ControlAdmin/ProductosContador', 'ProductoController@ProductosContador');
    Route::get('/ControlAdmin/TiposContador', 'TypeController@tipoContador');
    Route::get('/ControlAdmin/CategoriasContador', 'CategoriaController@CategoriasContador');
});

Route::get('/home', 'HomeController@index')->name('home');
