<?php

use App\Models\Filiere;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\ChefDepController;
use App\Http\Controllers\ElementController;
use App\Http\Controllers\FiliereController;
use App\Http\Controllers\EnseignentController;
use App\Http\Controllers\DepartementController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [UserController::class, 'Login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::resource("/departements", DepartementController::class)->only([
        'index', 'show', 'store', 'update', 'destroy'
    ]);
    Route::resource("/filieres", FiliereController::class)->only([
        'index', 'show', 'store', 'update', 'destroy'
    ]);
    Route::resource("/modules", ModuleController::class)->only([
        'index', 'show', 'store', 'update', 'destroy'
    ]);
    Route::resource("/elements", ElementController::class)->only([
        'index', 'show', 'store', 'update', 'destroy'
    ]);
    Route::resource("/chef-departement", ChefDepController::class)->only([
        'index', 'show', 'store', 'update', 'destroy'
    ]);
    Route::resource("/enseignant", EnseignentController::class)->only([
        'index', 'show', 'store', 'update', 'destroy'
    ]);
});
