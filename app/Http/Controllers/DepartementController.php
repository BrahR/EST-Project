<?php

namespace App\Http\Controllers;

use App\Models\Departement;
use Illuminate\Http\Request;

class DepartementController extends Controller
{

    public function index(){
        $departement=Departement::all();
        return response()->json(['departements' => $departement]);
    }

    public function show($id){
        $departement=Departement::find($id);
        if(!empty($departement)){
            return response()->json();
        }else{
            return response()->json(["message"=>"Departement not found"]);
        }
    }

    public function store(Request $request) {
        $validatedData=$request->validate([
            'nom'=> "string|required",
            'description'=>'required'
        ]);
        $departement=Departement::create([
            'nom'=>$validatedData['nom'], 
            'description'=>$validatedData['description']
        ]);
        return response()->json(['departements' => $departement]);

    }

    public function update(Request $request, $id){
        $departement=Departement::find($id);
        if(!empty($filiere)){
            $validatedData=$request->validate([
                'titre'=> "string|required",
                'description'=>'required',
            ]);
            $departement->nom=$validatedData['titre'];
            $departement->description=$validatedData['description'];
            $departement->save();
            return response()->json(['departements' => $departement]);
        }else{
            return response()->json(["message" => "Filiere not found"]);
        }


    }
    public function destroy($id){
        $departement=Departement::find($id);
        if($departement->delete()){
            return response()->json(["message" => "success"]);
        }else{
            return response()->json(["message" => "Deletion failed"]);
        }
    }

}




