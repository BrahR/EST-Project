<?php

namespace App\Models;

use App\Models\Module;
use App\Models\Absence;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Element extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'nom',
        'description'
    ];

    public function modules(){
        return $this->belongsTo(Module::class);
    }

    public function absences(){
        return $this->hasMany(Absence::class);
    }
    
}
