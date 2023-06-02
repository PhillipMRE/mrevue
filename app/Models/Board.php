<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Board extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'boards';

    protected $orderable = [
        'id',
        'name',
        'description',
    ];

    protected $filterable = [
        'id',
        'name',
        'description',
    ];

    protected $dates = [
        'last_sync_at',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $casts = [
        'show_courtesy'                  => 'boolean',
        'prominent_courtesy_of'          => 'boolean',
        'agent_roster'                   => 'boolean',
        'strict_customer'                => 'boolean',
        'expand_courtesy_by_default'     => 'boolean',
        'include_office_name_on_listing' => 'boolean',
        'include_agent_name_on_listing'  => 'boolean',
        'show_tooltip_on_non_mls_data'   => 'boolean',
        'hide_days_on_market'            => 'boolean',
    ];

    protected $fillable = [
        'source',
        'name',
        'description',
        'show_courtesy',
        'prominent_courtesy_of',
        'disclaimer',
        'state',
        'general_area',
        'agent_roster',
        'sold_data',
        'strict_customer',
        'expand_courtesy_by_default',
        'include_office_name_on_listing',
        'include_agent_name_on_listing',
        'show_tooltip_on_non_mls_data',
        'hide_days_on_market',
        'zoom',
        'latitude',
        'longitude',
        'last_sync_at',
        'private_note',
        'public_note',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function getLastSyncAtAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.datetime_format')) : null;
    }

    public function setLastSyncAtAttribute($value)
    {
        $this->attributes['last_sync_at'] = $value ? Carbon::createFromFormat(config('project.datetime_format'), $value)->format('Y-m-d H:i:s') : null;
    }
}
