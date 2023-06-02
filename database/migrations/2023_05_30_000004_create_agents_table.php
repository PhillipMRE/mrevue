<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgentsTable extends Migration
{
    public function up()
    {
        Schema::create('agents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('display_name')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('notify_phone')->nullable();
            $table->string('contact_phone')->nullable();
            $table->string('timezone')->nullable();
            $table->string('call_line')->nullable();
            $table->longText('biography')->nullable();
            $table->string('license')->nullable();
            $table->string('website')->nullable();
            $table->string('facebook')->nullable();
            $table->string('google_plus')->nullable();
            $table->string('linked_in')->nullable();
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->string('settings')->nullable();
            $table->string('office')->nullable();
            $table->longText('template')->nullable();
            $table->boolean('is_vetted')->default(0)->nullable();
            $table->date('vetting_data')->nullable();
            $table->boolean('user_confirmed_info')->default(0)->nullable();
            $table->boolean('demo')->default(0)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
