<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function uptimeDowntimeReport()
    {
        $assets = Asset::with('maintenanceLogs')->get();

        $report = $assets->map(function ($asset) {
            $uptime = $asset->maintenanceLogs->sum(function ($log) {
                return $log->downtime ? 0 : $log->duration;
            });

            $downtime = $asset->maintenanceLogs->sum(function ($log) {
                return $log->downtime ? $log->duration : 0;
            });

            return [
                'asset_id' => $asset->id,
                'name' => $asset->name,
                'uptime' => $uptime,
                'downtime' => $downtime,
            ];
        });

        return response()->json($report);
    }

    
}
