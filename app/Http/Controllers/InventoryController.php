<?php
namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InventoryController extends Controller
{
    public function index()
    {
        $inventories = Inventory::with('asset')->get();
        return Inertia::render('Inventory/Index', ['inventories' => $inventories]);
    }

    public function show($id)
    {
        $inventory = Inventory::with('asset')->findOrFail($id);
        return Inertia::render('Inventory/Show', ['inventory' => $inventory]);
    }

    public function create()
    {
        return Inertia::render('Inventory/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'quantity' => 'required|numeric',
        ]);

        Inventory::create($request->all());
        return redirect()->route('inventory.index');
    }

    public function edit(Inventory $inventory)
    {
        return Inertia::render('Inventory/Edit', compact('inventory'));
    }

    public function update(Request $request, Inventory $inventory)
    {
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'quantity' => 'required|numeric',
        ]);

        $inventory->update($request->all());
        return redirect()->route('inventory.index');
    }

    public function destroy(Inventory $inventory)
    {
        $inventory->delete();
        return redirect()->route('inventory.index');
    }


    public function stockLevelReport()
    {
        $inventories = Inventory::all();

        $reportData = $inventories->map(function ($inventory) {
            return [
                'item_name' => $inventory->name,
                'stock_level' => $inventory->quantity,
            ];
        });

        return Inertia::render('Reports/StockLevel', ['reportData' => $reportData]);
    }
}
