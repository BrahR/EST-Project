<?php

namespace App\Models;

use App\Models\Element;
use App\Models\Etudiant;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Absence extends Model
{
    use HasFactory;

    protected $fillable = [
        'justification'
    ];

    public function etudiant(){
        return $this->belongsTo(Etudiant::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function element(){
        return $this->belongsTo(Element::class);
    }

}
