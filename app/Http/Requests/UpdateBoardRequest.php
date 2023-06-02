<?php

namespace App\Http\Requests;

use App\Models\Board;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateBoardRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('board_edit');
    }

    public function rules()
    {
        return [
            'source' => [
                'string',
                'nullable',
            ],
            'name' => [
                'string',
                'nullable',
            ],
            'description' => [
                'string',
                'nullable',
            ],
            'show_courtesy' => [
                'boolean',
            ],
            'prominent_courtesy_of' => [
                'boolean',
            ],
            'disclaimer' => [
                'string',
                'nullable',
            ],
            'state' => [
                'string',
                'nullable',
            ],
            'general_area' => [
                'string',
                'nullable',
            ],
            'agent_roster' => [
                'boolean',
            ],
            'sold_data' => [
                'string',
                'nullable',
            ],
            'strict_customer' => [
                'boolean',
            ],
            'expand_courtesy_by_default' => [
                'boolean',
            ],
            'include_office_name_on_listing' => [
                'boolean',
            ],
            'include_agent_name_on_listing' => [
                'boolean',
            ],
            'show_tooltip_on_non_mls_data' => [
                'boolean',
            ],
            'hide_days_on_market' => [
                'boolean',
            ],
            'zoom' => [
                'string',
                'nullable',
            ],
            'latitude' => [
                'string',
                'nullable',
            ],
            'longitude' => [
                'string',
                'nullable',
            ],
            'last_sync_at' => [
                'date_format:' . config('project.datetime_format'),
                'nullable',
            ],
            'private_note' => [
                'string',
                'nullable',
            ],
            'public_note' => [
                'string',
                'nullable',
            ],
        ];
    }
}
