<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SourceStatusType extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'source_status_types';

    protected $casts = [
        'listing_status' => 'boolean',
    ];

    protected $filterable = [
        'id',
        'name',
        'type',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'name',
        'listing_status',
        'type',
    ];

    protected $fillable = [
        'name',
        'listing_status',
        'type',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
