<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'posts';

    protected $casts = [
        'sticky' => 'boolean',
    ];

    protected $filterable = [
        'id',
        'title',
    ];

    protected $orderable = [
        'id',
        'title',
        'sticky',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'for',
        'title',
        'content',
        'sticky',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
