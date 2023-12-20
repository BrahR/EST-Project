<?php

namespace Database\Factories;

use App\Models\Element;
use App\Models\Departement;
use App\Models\Module;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Model;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Departement>
 */
class ElementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $module = Module::inRandomOrder()->first();
        $user = User::inRandomOrder()->first();
        return [
            'nom' =>  $this->faker->unique()->word,
            'description' =>  $this->faker->sentence,
            'user_id' => $user->id ,
            'module_id' => $module->id ,
        ];
    }
}
