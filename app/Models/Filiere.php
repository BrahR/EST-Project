<?php

namespace App\Models;

use PDO;
use App\Models\Module;
use App\Models\Etudiant;
use App\Models\Departement;

use Illuminate\Database\Eloquent\Model;
use function PHPUnit\Framework\returnSelf;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Filiere extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'description'
    ];
    public function departement(){
        return $this->belongsTo(Departement::class);
    }
    public function modules(){
        return $this->hasMany(Module::class);
    }
    public function etudiant(){
        return $this->hasMany(Etudiant::class);
    }
}
