<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('for')->nullable();
            $table->string('title')->nullable();
            $table->longText('content')->nullable();
            $table->boolean('sticky')->default(0)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
