<?php

namespace App\Http\Controllers;

use App\Models\Maintenance;
use App\Models\Asset;
use App\Models\Notification;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class MaintenanceController extends Controller
{
    public function index()
    {
        $maintenances = Maintenance::with('equipment','parts','tools')->get();
        $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
    
        // dd($maintenances);
        return Inertia::render('Maintenance/IndexMaintenance', [
            'maintenances' => $maintenances,
            'notifications' => $notifications,
            'user' => Auth::user(),
        ]);
    }

    public function create()
    {
        $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
        $equipments = Asset::with('category')->get();
    
        return Inertia::render('Maintenance/CreateMaintenance', [
            'equipments' => $equipments,
            'notifications' => $notifications,
            'user' => Auth::user(),
        ]);
    }
    public function edit(Maintenance $maintenance)
    {
        $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
        $equipments = Asset::all();
        $maintenance->load('parts', 'tools'); // Eager load parts and tools
        return inertia('Maintenance/EditMaintenance', [
            'maintenance' => $maintenance,
            'equipments' => $equipments,
            'notifications' => $notifications,
            'user' => Auth::user(),
        ]);
    }

    public function store(Request $request)
    {
      
        // Validate the request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'equipment_id' => 'required|exists:assets,id',
            'procedures' => 'nullable|file|mimes:pdf|max:2048',
            'frequency' => 'required|string|in:daily,weekly,monthly,yearly',
            'start_date' => 'required|date',
            'parts' => 'nullable|array',
            'parts.*' => 'exists:assets,id',
            'tools' => 'nullable|array',
            'tools.*' => 'exists:assets,id',
        ]);
    
        // Handle the procedures file upload if it exists
        if ($request->hasFile('procedures')) {
            $validatedData['procedures'] = $request->file('procedures')->store('procedures', 'public');
        }
    
        // Create the maintenance record
        $maintenance = Maintenance::create($validatedData);
    
        // Attach parts and tools if they exist
        $assets = [];
        if ($request->has('parts')) {
            foreach ($request->input('parts') as $partId) {
                $assets[$partId] = ['type' => 'part'];
            }
        }
        if ($request->has('tools')) {
            foreach ($request->input('tools') as $toolId) {
                $assets[$toolId] = ['type' => 'tool'];
            }
        }
        $maintenance->parts()->sync($assets);
        $maintenance->tools()->sync($assets);
    
        // Return a success response
        return redirect()->route('maintenance.index')->with('success', 'Maintenance created successfully!');
    }
    


    public function show(Maintenance $maintenance)
    {
        $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
        return Inertia::render('Maintenances/Show', [
            'maintenance' => $maintenance,
            'notifications' => $notifications,
            'user' => Auth::user(),
        ]);
    }


    public function update(Request $request, Maintenance $maintenance)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'equipment_id' => 'required|exists:assets,id',
            'procedures' => 'nullable|file|mimes:pdf|max:2048',
            'frequency' => 'required|string|in:daily,weekly,monthly,yearly',
            'start_date' => 'nullable|date',
            'parts' => 'nullable|array',
            'parts.*' => 'exists:assets,id',
            'tools' => 'nullable|array',
            'tools.*' => 'exists:assets,id',
        ]);
    
        // Handle the procedures file upload if it exists
        if ($request->hasFile('procedures')) {
            $validatedData['procedures'] = $request->file('procedures')->store('procedures', 'public');
        }
    
        // Update the maintenance record
        $maintenance->update($validatedData);
    
        // Sync parts and tools
        if ($request->has('parts')) {
            $maintenance->parts()->sync($request->input('parts'));
        }
    
        if ($request->has('tools')) {
            $maintenance->tools()->sync($request->input('tools'));
        }
    
        // Return a success response
        return redirect()->route('maintenances.index')->with('success', 'Maintenance updated successfully!');
    }
    
    public function destroy(Maintenance $maintenance)
    {
        $maintenance->delete();

        return Redirect::route('maintenances.index');
    }
}
