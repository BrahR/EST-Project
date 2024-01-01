<?php

namespace Database\Factories;

use App\Models\Module;
use App\Models\Filiere;
use App\Models\Departement;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;



/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Departement>
 */
class ModuleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $filiere = Filiere::inRandomOrder()->first();
        return [
            'nom' => "Module de " . $this->faker->unique()->jobTitle,
            'description' => $this->faker->realText($maxNbChars = 30, $indexSize = 2),
            'filiere_id' => $filiere->id ,
        ];
    }
}
