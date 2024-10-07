<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up()
    {
        Schema::table('assets', function (Blueprint $table) { 
            $table->string('location')->nullable();
            $table->string('attachment')->nullable();
            $table->string('photo')->nullable();
            $table->string('manufacturer')->nullable();
        });
    }

    public function down()
    {
        Schema::table('assets', function (Blueprint $table) {
            $table->dropColumn(['location','attachment', 'photo', 'manufacturer']);
        });
    }
};
