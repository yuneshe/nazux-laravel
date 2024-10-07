<?php
// app/Http/Controllers/UserController.php
namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Notification;
use App\Models\WorkOrder;
use App\Models\Asset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('roles')->paginate(10); // Adjust the number of items per page as needed
        $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
        $usersWithRoles = $users->getCollection()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'roles' => $user->roles->pluck('name'), // Only take role names
            ];
        });
    
        return Inertia::render('Users/Index', [
            'users' => [
                'data' => $usersWithRoles,
                'links' => $users->linkCollection()->toArray(),
            ],
            'notifications' => $notifications,
            'user' => Auth::user(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'location' => 'required|string|max:255',
            'password' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'location' => $request->name,
            'password' => Hash::make($request->password),
        ]);
        $user->assignRole('technician');
        // $users_without_any_roles = User::doesntHave('roles')->get();
        // $users_without_any_roles->assignRole('technician');
        return redirect()->route('users.index');
    }

    public function edit($id)
    {
        $user = User::with('roles')->findOrFail($id);
        $roles = Role::all(); // Assuming you're using Spatie roles
        return Inertia::render('Users/Edit', [
            'user' => $user,
            'roles' => $roles,
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'role' => 'required|string|exists:roles,name',
        ]);
    
        $user = User::findOrFail($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
    
        $user->syncRoles($request->role);
    
        return redirect()->route('users.index')->with('success', 'User updated successfully');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index');
    }
    public function show($id)
    {
    $user = User::with('roles')->findOrFail($id);
    return response()->json($user);
    }
    public function home(){

        $user = Auth::user();
        if($user->hasRole('admin')){
            return redirect()->route('users.index');
        }
        elseif($user->hasRole('technician')){
            // dd('you are logged as technician');
        //     $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
        //     $workOrders = WorkOrder::where('created_by', auth()->id())->get();
        //     $assets = Asset::latest()->take(5)->get();
        // return inertia::render('Technician/Home',[
        //     'workOrders' => $workOrders,
        //     'assets' => $assets,
        //     'notifications' => $notifications,
        //     'user' => Auth::user(),
        // ]);
        return redirect()->route('technician.home');
        }else{
            dd('you are probably a mananger Yuneshe!');
        }

    }
}
