<?php

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');

    // Agent
    Route::resource('agents', 'AgentApiController');

    // Client
    Route::resource('clients', 'ClientApiController');

    // Post
    Route::resource('posts', 'PostApiController');

    // Board
    Route::resource('boards', 'BoardApiController');

    // State
    Route::resource('states', 'StateApiController');

    // Source Status Type
    Route::resource('source-status-types', 'SourceStatusTypeApiController');
});
