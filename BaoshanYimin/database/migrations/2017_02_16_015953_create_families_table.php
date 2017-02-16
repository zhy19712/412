<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFamiliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('families', function (Blueprint $table) {
            $table->string('uid',40)->unique();
            $table->bigIncrements('id');
            $table->string('file')->nullable();
            $table->string('poor_reason')->nullable();
            $table->string('income')->nullable();
            $table->string('income_source')->nullable();
            $table->string('house_structure')->nullable();
            $table->string('house_size')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('families');
    }
}
