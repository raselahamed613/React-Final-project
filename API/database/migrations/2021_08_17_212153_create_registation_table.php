<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registation', function (Blueprint $table) {
            $table->id();
            $table->text("name");
            $table->text("address");
            $table->text("dob");
            $table->text("contact_number");
            $table->text("email");
            $table->text("passwoard");
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
        Schema::dropIfExists('registation');
    }
}
