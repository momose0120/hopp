<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecruitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recruits', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('job');
            $table->string('salary')->nullable();
            $table->string('work_location')->nullable();
            $table->string('work_hours')->nullable();
            $table->string('work_period')->nullable();
            $table->string('welfare')->nullable();
            $table->string('main_image_title')->nullable();
            $table->string('main_image')->nullable();
            $table->string('image_01_title')->nullable();
            $table->string('image_02_title')->nullable();
            $table->string('image_03_title')->nullable();
            $table->string('image_04_title')->nullable();
            $table->string('image_05_title')->nullable();
            $table->string('image_01')->nullable();
            $table->string('image_02')->nullable();
            $table->string('image_03')->nullable();
            $table->string('image_04')->nullable();
            $table->string('image_05')->nullable();
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
        Schema::dropIfExists('recruits');
    }
}
