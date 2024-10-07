<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LogController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TechnicianController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\WorkOrderController;
use App\Http\Controllers\MaintenanceLogController;
use App\Http\Controllers\MaintenanceController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\InventoryController;
use App\Models\WorkOrder;
use App\Events\WorkOrderAssigned;

Route::get('/home', [UserController::class, 'home'])->name('home')->middleware(['auth', 'verified']);
// ++++++++++++++++++++++++++++++++++++++++Admin Space++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//####################################                   #######################################################
Route::group(['middleware' => ['role:admin']], function () { 
    Route::resource('users', UserController::class);

 });

//####################################                    #####################################################
// ++++++++++++++++++++++++++++++++++++++++Admin Space++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-------Technician-Routes----------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Route::group(['middleware'=> ['role:technician']],function () {

   Route::get('technician/home', [TechnicianController::class, 'index'])->name('technician.home');
    
});

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-------Technician-Routes----------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//###################################                           ####################################################

Route::get('/reports/uptime-downtime', [ReportController::class, 'uptimeDowntimeReport']);
Route::resource('inventory', InventoryController::class);
Route::resource('maintenance', MaintenanceController::class);
Route::resource('maintenancelogs', MaintenanceLogController::class);
Route::get('/reports/uptime-downtime', [MaintenanceLogController::class, 'uptimeDowntimeReport'])->name('reports.uptime-downtime');



Route::get('/test-broadcast', function () {
    $workOrder = WorkOrder::find(1); // Use an existing work order ID

    event(new WorkOrderAssigned($workOrder));

    return 'Event has been broadcasted!';
});
// Work Order Routes
Route::resource('work-orders', WorkOrderController::class);
Route::resource('categories', CategoryController::class);
Route::resource('assets', AssetController::class);
Route::get('/reports/stock-level', [InventoryController::class, 'stockLevelReport'])->name('reports.stock-level');
Route::get('/reports/equipment-stats', [MaintenanceLogController::class, 'equipmentStatsReport'])->name('reports.equipment-stats');



    Route::post('/notifications/read', [NotificationController::class, 'markAsRead']);
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'user' => auth()->user(), // Pass the authenticated user
        ]);
    });



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('add-to-log', [LogController::class, 'addToLog']);
Route::get('activity-logs',[LogController::class, 'ActivityLog']);

require __DIR__.'/auth.php';
