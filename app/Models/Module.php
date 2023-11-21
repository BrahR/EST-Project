<?php

namespace App\Models;

use App\Models\Filiere;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Element;

class Module extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom',
        'description'
    ];

    public function filieres(){
        return $this->belongsTo(Filiere::class);
    }
    public function element(){
        return $this->hasMany(Element::class);
    }
}
