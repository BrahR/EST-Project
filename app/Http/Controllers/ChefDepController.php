<?php

namespace App\Http\Controllers;

use App\Models\Departement;
use App\Models\User;
use Illuminate\Http\Request;

class ChefDepController extends Controller
{
    public function index()
    {
        $chefDep = User::with('departement')
            ->where('role', 'chef_de_departement')
            ->get();
        return response()->json(['chefDep'=>$chefDep]);
    }

    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nom' => 'string|required|min:5|max:20',
            'prenom' => 'string|required|min:5|max:20',
            'email' => 'string|required|email|unique:users',
            'password' => "required|min:8",
            'id_departement'=>'exists:departements,id'
        ]);
        $hashedPwd = bcrypt($validatedData['password']);
        $user = User::create([
            "nom" => $validatedData['nom'],
            "prenom" => $validatedData['prenom'],
            "email" => $validatedData['email'],
            "role"=>"chef_de_departement",
            "password" => $hashedPwd
        ]);
        $departement=Departement::find($validatedData['id_departement']);
        $departement->user()->associate($user);
        $departement->save();
        return response()->json(['user'=>$user]);
    }

    
    public function show(string $id)
    {
        $user=User::where('id', $id)
        ->where('role', 'chef_de_departement')
        ->with('Departement:id,nom')
        ->first();
        if(!empty($user)){
            return response()->json(['chefDep' => $user]);
        }else{
            return response()->json(["message"=>"Chef de departement not found"]);
        }
    }

    
    public function update(Request $request, string $id)
    {
        $user=User::where('id', $id)
        ->where('role', 'chef_de_departement')
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
        ->where('role', 'chef_de_departement')
        ->first();
        if(!empty($user)){
            $user->delete();
            return response()->json(["message" => "success"]);
        }else{
            return response()->json(["message" => "Deletion failed"]);
        }
    }
}
