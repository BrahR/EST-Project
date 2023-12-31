<?php

namespace App\Models;

use PDO;
use App\Models\User;
use App\Models\Filiere;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Departement extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'nom',
        'description',
        'user_id'
    ];

    public static function boot() {
        parent::boot();

         static::deleting(function($departement) { // before delete() method call this
             $departement->filieres->each(function($filiere) {
                $filiere->modules->each(function($module) {
                    $module->elements->each(function($element) {
                        $element->delete();
                    });
                    $module->delete();
                });
                $filiere->delete();
             });
        });
    }

    public function user(){
        return $this->hasOne(User::class);
    }

    public function filieres(){
        return $this->hasMany(Filiere::class);
    }

    

}
