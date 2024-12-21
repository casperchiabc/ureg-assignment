<?php

use App\Http\Controllers\RateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Rate;
use App\Models\Currency;

Route::get('/currencies', function (Request $request) {
    return Currency::get();
});

Route::get('/rates', function (Request $request) {
    return Rate::get();
});

Route::get('/rates/{currencyId}', [RateController::class, 'getCurrencyRates']);
