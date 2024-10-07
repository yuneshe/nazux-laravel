<?php
namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Categories/Index', ['categories' => $categories]);
    }

    public function create()
    {
        return Inertia::render('Categories/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:categories,name',
        ]);

        Category::create($request->all());
        return redirect()->route('categories.index');
    }

    public function edit($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Categories/Edit', ['category' => $category]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|unique:categories,name,' . $id,
        ]);

        $category = Category::findOrFail($id);
        $category->update($request->all());
        return redirect()->route('categories.index');
    }

    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return redirect()->route('categories.index');
    }
}
