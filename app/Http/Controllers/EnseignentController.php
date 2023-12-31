<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Element;
use App\Models\Departement;
use Illuminate\Http\Request;

class EnseignentController extends Controller
{
    public function index()
    {
        $enseign = User::with('elements:id,nom')
        ->where('role', 'enseignant')
        ->get();
        return response()->json(['enseign'=>$enseign]);
    }

    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nom' => 'string|required|min:5|max:20',
            'prenom' => 'string|required|min:5|max:20',
            'email' => 'string|required|email|unique:users',
            'password' => "required|min:8",
            'id_element'=>'exists:elements,id'
        ]);
        $hashedPwd = bcrypt($validatedData['password']);
        $user = User::create([
            "nom" => $validatedData['nom'],
            "prenom" => $validatedData['prenom'],
            "email" => $validatedData['email'],
            "role"=>"enseignant",
            "password" => $hashedPwd
        ]);
        $element=Element::find($validatedData['id_element']);
        $element->user()->associate($user);
        $element->save();
        return response()->json(['user'=>$user]);
    }

    
    public function show(string $id)
    {
        $user=User::where('id', $id)
        ->where('role', 'enseignant')
        ->with('elements:id,nom')
        ->first();
        if(!empty($user)){
            return response()->json(['enseign' => $user]);
        }else{
            return response()->json(["message"=>"Chef de departement not found"]);
        }
    }

    
    public function update(Request $request, string $id)
    {
        $user=User::where('id', $id)
        ->where('role', 'enseignant')
        ->first();
        if(!empty($user)){
            $validatedData=$request->validate([
                'nom' => 'string|required|min:5|max:20',
                'prenom' => 'string|required|min:5|max:20',
                'email' => 'string|required|email|unique:users',
                'password' => "required|min:8"
            ]);
            $user->nom=$validatedData['nom'];
            $user->prenom=$validatedData['prenom'];
            $user->email=$validatedData['email'];
            $user->password=$validatedData['password'];
            $user->save();
            return response()->json(['users' => $user]);
        }else{
            return response()->json(["message" => "Chef de departement not found"]);
        }
    }

    
    public function destroy(string $id)
    {
        $user=User::where('id', $id)
        ->where('role', 'enseignant')
        ->first();
        if(!empty($user)){
            $user->delete();
            return response()->json(["message" => "success"]);
        }else{
            return response()->json(["message" => "Deletion failed"]);
        }
    }
}
