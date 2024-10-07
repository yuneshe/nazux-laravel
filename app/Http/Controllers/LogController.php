<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;


class LogController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {


    }
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function addToLog()
    {
        \LogActivity::addToLog('Add To Log Test');
        dd('log insert successfully.');
    }


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function activityLog()
    {
        $logs = \LogActivity::logActivityLists();
        return Inertia::render('Logs', ['logs' => $logs]);
    }
}