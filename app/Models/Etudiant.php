<?php

namespace App\Models;

use App\Models\Absence;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Etudiant extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom'
    ];

    public function absences(){
        return $this->hasMany(Absence::class);
    }

    public function filiere(){
        return $this->belongsTo(Filiere::class); 
    }
}
