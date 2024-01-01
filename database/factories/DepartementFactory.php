<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use Faker\Generator as Faker;



/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Departement>
 */
class DepartementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom' => "Génie " . $this->faker->unique()->jobTitle,
            'description' =>  $this->faker->realText($maxNbChars = 30, $indexSize = 2),
            'user_id' => User::where('role', 'chef_de_departement')->inRandomOrder()->first()->id,
        ];
    }
}
