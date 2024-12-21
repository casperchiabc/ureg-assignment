<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ConversionRateService;
use Illuminate\Support\Facades\Log;

class RateController extends Controller
{
    private $crs;

    public function __construct(ConversionRateService $crs)
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

        Log::debug($validatedData);

        return $this->crs->getCurrencyRates($validatedData['currencyId'], $validatedData['date']);
    }
}
