<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHouseholdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('householders', function (Blueprint $table) {
            $table->string('uid',40)->unique();
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('gender');
            $table->string('degree')->nullable();
            $table->string('occupation')->nullable();
            $table->string('race');
            $table->string('contact_phone')->nullable();
            $table->integer('household_size')->nullable();
            $table->integer('immigrant_num')->nullable();
            $table->string('reservoir')->nullable();
            $table->string('bank')->nullable();
            $table->string('account_number')->nullable();
            $table->string('move_from_province')->nullable();
            $table->string('move_from_city')->nullable();
            $table->string('move_from_county')->nullable();
            $table->string('move_from_village')->nullable();
            $table->string('move_from_group')->nullable();
            $table->string('move_to_province')->nullable();
            $table->string('move_to_city')->nullable();
            $table->string('move_to_county')->nullable();
            $table->string('move_to_village')->nullable();
            $table->string('move_to_group')->nullable();
            $table->string('recorder_id')->nullable();
            $table->string('verifier_id')->nullable();
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
        Schema::dropIfExists('householders');
    }
}
