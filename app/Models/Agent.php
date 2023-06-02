<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Agent extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'agents';

    protected $dates = [
        'vetting_data',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'display_name',
        'first_name',
        'last_name',
        'contact_phone',
    ];

    protected $casts = [
        'is_vetted'           => 'boolean',
        'user_confirmed_info' => 'boolean',
        'demo'                => 'boolean',
    ];

    protected $orderable = [
        'id',
        'display_name',
        'first_name',
        'last_name',
        'contact_phone',
        'user_confirmed_info',
    ];

    protected $fillable = [
        'display_name',
        'first_name',
        'last_name',
        'notify_phone',
        'contact_phone',
        'timezone',
        'call_line',
        'biography',
        'license',
        'website',
        'facebook',
        'google_plus',
        'linked_in',
        'twitter',
        'instagram',
        'settings',
        'office',
        'template',
        'is_vetted',
        'vetting_data',
        'user_confirmed_info',
        'demo',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function getVettingDataAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setVettingDataAttribute($value)
    {
        $this->attributes['vetting_data'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }
}
