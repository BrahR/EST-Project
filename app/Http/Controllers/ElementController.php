<?php

namespace App\Http\Controllers;

use App\Models\Element;
use Illuminate\Http\Request;

class ElementController extends Controller{
   
    public function index(){
        $element=Element::with(['module:id,nom', 'user:id,nom'])->get();
        return response()->json(['element'=>$element]);
    }

    public function store(Request $request){
        $validatedData=$request->validate([
            "nom" => "required|string",
            "description" => 'required',
            "user_id" => 'required|integer',
            "module_id" => 'required|integer'
        ]);
        $element=Element::create([
            'nom' => $validatedData['nom'],
            'description' => $validatedData['description'],
            'user_id' => $validatedData['user_id'],
            'module_id' => $validatedData['module_id']
        ]);
        return response()->json(['element'=>$element]);
    }

   
    public function show(string $id){
        $element=Element::with(['module:id,nom', 'user:id,nom'])->find($id);
        if(!empty($element)){
            return response()->json(['element'=>$element]);
        }else{
            return response()->json(['message'=>'element not found']);
        }
    }

   
    public function update(Request $request, string $id){
        $element=Element::find($id);
        if(!empty($element)){
            $validatedData=$request->validate([
                "nom" => "required|string",
                "description" => 'required',
                "user_id" => 'required|integer',
                "module_id" => 'required|integer'
            ]);
            $element->nom=$validatedData['nom'];
            $element->description=$validatedData['description'];
            $element->user_id=$validatedData['user_id'];
            $element->module_id=$validatedData['module_id'];
            $element->save();
            return response()->json(['element'=>$element]);
        }else{
            return response()->json(['message'=>'element not found']);
        }
    }

   
    public function destroy(string $id){
        $element=Element::find($id);
        if(!empty($element)){
            $element->delete();
            return response()->json(['message'=>'succes']);
        }else{
            return response()->json(['message'=>"Deletion failed"]);
        }
    }
}
