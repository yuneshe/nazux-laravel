<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller
{
    public function markAsRead(Request $request)
   {
    
    $notification = Notification::find($request->id);
    $notification->read = true;
    $notification->save();
    }

}
