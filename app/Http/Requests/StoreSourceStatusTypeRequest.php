<?php

namespace App\Http\Requests;

use App\Models\SourceStatusType;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreSourceStatusTypeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('source_status_type_create');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'nullable',
            ],
            'listing_status' => [
                'boolean',
            ],
            'type' => [
                'string',
                'nullable',
            ],
        ];
    }
}
