<?php


Route::group([

    'middleware' => 'api',

], function ($router) {


    // Route pour authentification
    
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink','AuthController@sendEmail');
    

    // Route pour la gestion des employeurs


    Route::post('employeur/inscrire','EmployeurController@inscrire');



});