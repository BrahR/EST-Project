<?php

namespace Database\Factories;

use App\Models\Departement;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;



/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Departement>
 */
class FiliereFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $departement = Departement::inRandomOrder()->first();
        return [
            'nom' => "Filière de " . $this->faker->unique()->jobTitle,
            'description' => $this->faker->realText($maxNbChars = 30, $indexSize = 2),
            'departement_id' => $departement->id ,
        ];
    }
}
