<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CurrencyRateService;

class RateController extends Controller
{
    private $crs;

    public function __construct(CurrencyRateService $crs)
    {
        $this->crs = $crs;
    }

    public function getCurrencyRates(Request $request, $currencyId) 
    {
        $request->merge(['currencyId' => $currencyId]);
        $validatedData = $request->validate([
            'currencyId' => 'required|exists:currencies,id',
            'date' => 'required|date_format:Y-m-d',
        ]);

        return $this->crs->getCurrencyRates($validatedData['currencyId'], $validatedData['date']);
    }
}
