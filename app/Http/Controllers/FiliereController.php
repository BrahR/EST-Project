<?php

namespace App\Http\Controllers;

use App\Models\Filiere;
use Illuminate\Http\Request;

class FiliereController extends Controller
{
    public function index(){
        $filiere=Filiere::with('departement:id,nom')->get();
        return response()->json(["filiere" => $filiere]);
    }

   
    public function store(Request $request){
        $validatedData=$request->validate([
            'nom' => 'string|required',
            'description' => 'required',
            'departement_id' =>  'required|integer'
        ]);
        $filiere=Filiere::create([
            'nom' =>$validatedData['nom'],
            'description' =>$validatedData['description'],
            'departement_id' =>$validatedData['departement_id']
        ]);
        
        return response()->json(["filiere"=>$filiere]);
    }

   
    public function show(string $id){
        $filiere=Filiere::with('departement:id,nom')->find($id);
        if(!empty($filiere)){
            return response()->json(["filiere" => $filiere]);
        }else{
            return response()->json(["message" => "Filiere not found"]);
        }
    }

   
    public function update(Request $request, string $id){
        $filiere=Filiere::find($id);
        if(!empty($filiere)){
            $validatedData=$request->validate([
                'nom'=>'req uired|string',
                'description'=>'required',
                'departement_id'=>'required|integer'
            ]);
            $filiere->nom=$validatedData['nom'];
            $filiere->description=$validatedData['description'];
            $filiere->departement_id=$validatedData['departement_id'];
            $filiere->save();
            return response()->json(["filiere" => $filiere]);
        }else{
            return response()->json(["message" => "Filiere not found"]);
        }
    }

   
    public function destroy(string $id){
        $filiere=Filiere::find($id);
        if(!empty($filiere)){
            $filiere->delete();
            return response()->json(["message"=>"succes"]);
        }else{
            return response()->json(["message"=>"Deletion failed"]);
        }
    }
}
