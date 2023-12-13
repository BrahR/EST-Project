<?php

namespace App\Http\Controllers;

use App\Models\Departement;
use Illuminate\Http\Request;
use Illuminate\Support\Js;

class DepartementController extends Controller
{

    public function index(){
        $departement=Departement::all();
        return response()->json(['departement' => $departement]);
    }

    public function show($id){
        $departement=Departement::findOrFail($id);
        if(!empty($departement)){
            return response()->json($departement);
        }else{
            return response()->json(["message"=>"Département not found"]);
        }
    }

    public function store(Request $request) {
        $validatedData=$request->validate([
            'nom'=> "string|required",
            'description'=>'required'
        ]);
        $departement=Departement::create([
            'nom', 'description'
        ]);
        return response()->json(['departement' => $departement]);

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

        return response()->json(['departement' => $departement]);

    }
    public function destroy($id){
        $departement=Departement::findOrFail($id);
        if($departement->delete()){
            return response()->json(["message => success"]);
        }else{
            return response()->json(["message => fail"]);
        }
    }
    

}

