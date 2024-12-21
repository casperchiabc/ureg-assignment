<?php

namespace App\Services;
use App\Models\Rate;
use App\Models\Currency;
use Illuminate\Support\Facades\Log;

class ConversionRateService
{
    public function getCurrencyRates($currencyId, $effectiveDate) 
    {
        // ORM\DB operation can be further abstracted to repos if needed (personally i think most of the time are
        // not needed, unless the project has multiple different ORMs or DB). Since this is a very simple apps,
        // I am just gonna leave it here.
        $currencies = Currency::leftJoin('rates', 'currencies.id', '=', 'rates.target_currency_id')
            ->select('currencies.*', 'rates.rate', 'rates.effective_date')
            ->orWhere('currencies.id', $currencyId)
            ->orWhere(function ($query) use ($effectiveDate, $currencyId) {
                $query->where('effective_date', $effectiveDate)->where('base_currency_id', $currencyId);
            })
            ->get();
             
        return $currencies;
    }
}