<?php

namespace App\Http\Controllers;

use App\Models\Asset;
use App\Models\Attachment;
use App\Models\Photo;
use App\Models\Category;
use App\Models\Notification;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class AssetController extends Controller
{
    public function index(Request $request)
    {
        $query = Asset::with('category', 'photo');
        $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
        if ($request->has('category') && $request->category !== 'all') {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('name', $request->category);
            });
        }
    
        $assets = $query->paginate(10); // Adjust the number of items per page as needed
        $categories = Category::all();
        return inertia('Assets/Index', [
            'assets' => $assets,
            'categories' => $categories,
            'activeCategory' => $request->category ?? 'all',
            'notifications' => $notifications,
            'user' => Auth::user(),
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Assets/Create', ['categories' => $categories]);
    }

  
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'description' => 'nullable|string',
            'location' => 'nullable|string|max:255',
            'value' => 'required',
            'attachment' => 'nullable|file|mimes:pdf,doc,docx,xls,xlsx',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'manufacturer' => 'nullable|string|max:255',
        ]);

        $asset = Asset::create($validated);

        if ($request->hasFile('attachment')) {
            $attachmentPath = $request->file('attachment')->store('attachments', 'public');
            Attachment::create([
                'asset_id' => $asset->id,
                'file_path' => $attachmentPath,
            ]);
        }

        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('photos','public');
            Photo::create([
                'asset_id' => $asset->id,
                'file_path' => $photoPath,
            ]);
        }

        return redirect()->route('assets.index');
    }

    public function edit($id)
    {
        $asset = Asset::findOrFail($id);
        $categories = Category::all();
        return Inertia::render('Assets/Edit', ['asset' => $asset, 'categories' => $categories]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'value' => 'decimal',
            'description' => 'nullable|string',
        ]);

        $asset = Asset::findOrFail($id);
        $asset->update($request->all());
        return redirect()->route('assets.index');
    }

    public function destroy($id)
    {
        $asset = Asset::findOrFail($id);

        // The deletion logic is handled by the Asset model's deleting event
        $asset->delete();

        return redirect()->route('assets.index')->with('success', 'Asset deleted successfully.');
    }

    public function show($id)
    {
    $notifications = Notification::where('user_id', auth()->id())->where('read', false)->get();
    $asset = Asset::with(['category', 'attachments', 'photo'])->findOrFail($id);
    return inertia('Assets/Show', [
        'asset' => $asset,
        'notifications' => $notifications,
    ]);
    }
}
