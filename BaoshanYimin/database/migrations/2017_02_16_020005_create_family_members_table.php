<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFamilyMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('family_members', function (Blueprint $table) {
            $table->string('family_member_uid',40)->unique();
            $table->string('uid',40);
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('gender');
            $table->string('degree')->nullable();
            $table->string('occupation')->nullable();
            $table->string('race');
            $table->string('contact_phone')->nullable();
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
        Schema::dropIfExists('family_members');
    }
}
