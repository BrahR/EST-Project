<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
   
    public function index(){
        $module=Module::with('filiere:id,nom')->get();
        return response()->json(['module'=>$module]);
    }

    public function store(Request $request){
        $validatedData=$request->validate([
            "nom" => "required|string",
            "description" => 'required',
            "filiere_id" => 'required|integer'
        ]);
        $module=Module::create([
            'nom' => $validatedData['nom'],
            'description' => $validatedData['description'],
            'filiere_id' => $validatedData['filiere_id']
        ]);
        return response()->json(['module'=>$module]);
    }

   
    public function show(string $id){
        $module=Module::with('filiere:id,nom')->find($id);
        if(!empty($module)){
            return response()->json(['module'=>$module]);
        }else{
            return response()->json(['message'=>'Module not found']);
        }
    }

   
    public function update(Request $request, string $id){
        $module=Module::find($id);
        if(!empty($module)){
            $validatedData=$request->validate([
                "nom" => "required|string",
                "description" => 'required',
                "filiere_id" => 'required|integer'
            ]);
            $module->nom=$validatedData['nom'];
            $module->description=$validatedData['description'];
            $module->filiere_id=$validatedData['filiere_id'];
            $module->save();
            return response()->json(['module'=>$module]);
        }else{
            return response()->json(['message'=>'Module not found']);
        }
    }

   
    public function destroy(string $id){
        $module=Module::find($id);
        if(!empty($module)){
            $module->delete();
            return response()->json(['message'=>'succes']);
        }else{
            return response()->json(['message'=>"Deletion failed"]);
        }
    }
}
