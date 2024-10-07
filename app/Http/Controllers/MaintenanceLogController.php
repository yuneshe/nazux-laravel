<?php

namespace App\Http\Controllers;

use App\Models\MaintenanceLog;
use App\Models\Asset;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaintenanceLogController extends Controller
{
    public function index()
    {
        $maintenanceLogs = MaintenanceLog::with('asset')->get();
        return Inertia::render('MaintenanceLogs/Index', ['maintenanceLogs' => $maintenanceLogs]);
    }

    public function create()
    {
        $assets = Asset::all();
        return Inertia::render('MaintenanceLogs/Create', ['assets' => $assets]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'asset_id' => 'required|exists:assets,id',
            'downtime' => 'required|string',
            'description' => 'nullable|string',
        ]);

        MaintenanceLog::create($request->all());
        return redirect()->route('maintenance-logs.index');
    }

    public function edit($id)
    {
        $maintenanceLog = MaintenanceLog::findOrFail($id);
        $assets = Asset::all();
        return Inertia::render('MaintenanceLogs/Edit', ['maintenanceLog' => $maintenanceLog, 'assets' => $assets]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'asset_id' => 'required|exists:assets,id',
            'downtime' => 'required|string',
            'description' => 'nullable|string',
        ]);

        $maintenanceLog = MaintenanceLog::findOrFail($id);
        $maintenanceLog->update($request->all());
        return redirect()->route('maintenance-logs.index');
    }

    public function destroy($id)
    {
        $maintenanceLog = MaintenanceLog::findOrFail($id);
        $maintenanceLog->delete();
        return redirect()->route('maintenance-logs.index');
    }

    public function uptimeDowntimeReport()
    {
        $assets = Asset::with('maintenanceLogs')->get();
    
        $totalTime = 24 * 7; // Assuming a weekly report
    
        $reportData = $assets->map(function ($asset) use ($totalTime) {
            $totalDowntime = $asset->maintenanceLogs->sum('downtime');
            $totalUptime = $totalTime - $totalDowntime;
    
            return [
                'asset_name' => $asset->name,
                'total_downtime' => $totalDowntime,
                'total_uptime' => $totalUptime,
            ];
        });
    
        return Inertia::render('Reports/UptimeDowntime', ['reportData' => $reportData]);
    }

    public function equipmentStatsReport()
    {
        // Sample data for demonstration
        $data = [
            'labels' => ['January', 'February', 'March', 'April', 'May', 'June'],
            'uptime' => [160, 170, 180, 190, 200, 210],
            'downtime' => [20, 30, 10, 40, 50, 30],
        ];

        return Inertia::render('Reports/UptimeVsDowntimeReport', ['data' => $data]);
    }
    
    
}
