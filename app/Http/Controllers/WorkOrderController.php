<?php

// app/Http/Controllers/WorkOrderController.php
namespace App\Http\Controllers;

use App\Models\WorkOrder;
use App\Models\Asset;
use App\Models\Notification;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Events\WorkOrderAssigned;
use Illuminate\Support\Facades\Event;

class WorkOrderController extends Controller
{
    public function index()
    {
        $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
        $workOrders = WorkOrder::with('equipment', 'createdBy')->get();
        return Inertia::render('WorkOrders/WorkOrdersPage', [
            'user' => Auth::user(),
            'workOrders' => $workOrders,
             'notifications' => $notifications,
        ]);
    }

    public function create()
    {
        $equipmentOptions = Asset::with('category')
    ->whereHas('category', function ($query) {
        $query->where('name', 'Equipment');
    })
    ->get();

        
        return Inertia::render('WorkOrders/Create',['equipmentOptions' => $equipmentOptions]);
    }

    public function store(Request $request)
    {
        // $workOrder = WorkOrder::find(3); // Replace with actual work order retrieval logic
        // Event::dispatch(new WorkOrderAssigned($workOrder));
        // dd($workOrder->created_by);
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'scheduled_date' => 'nullable|date',
            'equipment_id' => 'required|exists:assets,id',
        ]);

      $workOrder = WorkOrder::create([
            'title' => $request->title,
            'description' => $request->description,
            'scheduled_date' => $request->scheduled_date,
            'equipment_id' => $request->equipment_id,
            'created_by' => auth()->id(),
        ]);
           
        $workOrder1 = WorkOrder::first(); // Replace with actual work order retrieval logic
        Event::dispatch(new WorkOrderAssigned($workOrder));
        
     return redirect()->route('work-orders.index')->with('success', 'Work Order created successfully.');
    }

    public function show(WorkOrder $workOrder)
    {
        $workOrder->load('equipment', 'createdBy');
        return Inertia::render('WorkOrders/Show', ['workOrder' => $workOrder]);
    }

    public function edit(WorkOrder $workOrder)
    {
        return Inertia::render('WorkOrders/Edit', ['workOrder' => $workOrder]);
    }

    public function update(Request $request, WorkOrder $workOrder)
    {
        $id = $request->id;
        
        $workOrder = WorkOrder::find($id);
        // dd($id);   
        if (!$workOrder) {
            return response()->json(['error' => 'Work order not found.'], 404);
        }
        
        // Update the WorkOrder
        $workOrder->update($request->all());
         
        return redirect()->route('work-orders.index')->with('success', 'Work Order updated successfully.');

    
    }

    public function destroy(WorkOrder $workOrder)
    {
        $workOrder->delete();
        return redirect()->route('work-orders.index')->with('success', 'Work Order deleted successfully.');
    }
}
