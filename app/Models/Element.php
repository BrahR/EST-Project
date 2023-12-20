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
        'description',
        'user_id',
        'module_id'
    ];

    public function module(){
        return $this->belongsTo(Module::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function absences(){
        return $this->hasMany(Absence::class);
    }
    
}
