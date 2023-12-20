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
        $user = User::inRandomOrder()->first();
        return [
            'nom' => "Génie " . $this->faker->unique()->word,
            'description' =>  $this->faker->sentence,
            'user_id' => $user->id ,
        ];
    }
}
