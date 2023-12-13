<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Backup\Tasks\Backup\BackupJob;

class BackupController extends Controller
{
    public function Backup()
    {
        $backupJob = new BackupJob();
        $backupJob->run();

        return redirect()->back()->with('success', 'Backup process initiated successfully!');
    }
}
