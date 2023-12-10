<?php

namespace App\Http\Controllers;

use App\Models\Departement;
use Illuminate\Http\Request;

class DepartementController extends Controller
{

    public function index(){
        $departement=Departement::all();
        return response()->json(['departement' => $departement]);
        }

    public function store(Request $request) {
        $validatedData=$request->validate([
            'nom'=> "string|required",
            'description'=>'required'
        ]);
        $departement=Departement::create([
            'nom', 'description'
        ]);
    }

    public function update(Request $request, $id){
        $departement=Departement::findOrFail($id);
        $validatedData=$request->validate([
            'titre'=> "string|required",
            'description'=>'required'
        ]);

        $departement->nom=$validatedData['titre'];
        $departement->description=$validatedData['description'];

        $departement->save();

    }
    public function destroy($id){
        $departement=Departement::findOrFail($id);
        $departement->delete();
    }
    

}

