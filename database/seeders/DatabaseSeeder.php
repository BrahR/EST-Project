<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use App\Models\Module;
use App\Models\Element;
use App\Models\Filiere;
use App\Models\Departement;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            "nom" => "admin",
            "email" => "admin@gmail.com",
            "role" => "admin",
            "password" => bcrypt("password")
        ]);

        $utilisateur = User::factory(20)->create();
        $departement = Departement::factory(20)->create();
        $filiere = Filiere::factory(20)->create();
        $module = Module::factory(20)->create();
        $elment=Element::factory(20)->create();
    }
}
