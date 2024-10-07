<?php

namespace App\Http\Controllers;
use App\Models\Asset;
use App\Models\Notification;
use App\Models\WorkOrder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TechnicianController extends Controller
{
    public function index(){
        $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
        $workOrders = WorkOrder::where('created_by', auth()->id())->get();
        $assets = Asset::latest()->take(5)->get();
    return inertia::render('Technician/Home',[
        'workOrders' => $workOrders,
        'assets' => $assets,
        'notifications' => $notifications,
        'user' => Auth::user(),
    ]);
    }
}
