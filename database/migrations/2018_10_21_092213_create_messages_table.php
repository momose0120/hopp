<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('name_en')->nullable();
            $table->string('type')->nullable();
            $table->string('position')->nullable();
            $table->string('title')->nullable();
            $table->string('profile')->nullable();
            $table->string('content')->nullable();
            $table->string('title_01')->nullable();
            $table->string('content_01')->nullable();
            $table->string('title_02')->nullable();
            $table->string('content_02')->nullable();
            $table->string('title_03')->nullable();
            $table->string('content_03')->nullable();
            $table->string('main_image')->nullable();
            $table->string('image_01')->nullable();
            $table->string('image_02')->nullable();
            $table->string('image_03')->nullable();
            $table->string('image_04')->nullable();
            $table->string('image_05')->nullable();
            $table->string('main_image_title')->nullable();
            $table->string('image_01_title')->nullable();
            $table->string('image_02_title')->nullable();
            $table->string('image_03_title')->nullable();
            $table->string('image_04_title')->nullable();
            $table->string('image_05_title')->nullable();
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
        Schema::dropIfExists('messages');
    }
}
