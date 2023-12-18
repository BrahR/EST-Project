<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Hashing\BcryptHasher;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function Signup(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'string|required|min:5|max:20',
            'email' => 'string|required|email|unique:users',
            'password' => "required|min:8"
        ]);
        $hashedPwd = bcrypt($validatedData['password']);
        $user = User::create([
            "name" => $validatedData['name'],
            "email" => $validatedData['email'],
            "password" => $hashedPwd
        ]);
        auth()->login($user);
    }

    public function Login(Request $request)
    {
        $validatedData = $request->validate([
            "email" => "required|string|email",
            "pwd" => "required"
        ]);

        $user = User::where('email', $validatedData['email'])->first();
        if ($user && Hash::check($validatedData['pwd'], $user->password)) {
            auth()->login($user);
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json(['token' => $token]);
        }
        return response()->json(['error' => 'Login Error']);
    }

    public function Logout()
    {
        auth()->logout();
        return redirect("/");
    }
}
