<?php

namespace App\Http\Requests;

use App\Models\Agent;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateAgentRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('agent_edit');
    }

    public function rules()
    {
        return [
            'display_name' => [
                'string',
                'nullable',
            ],
            'first_name' => [
                'string',
                'nullable',
            ],
            'last_name' => [
                'string',
                'nullable',
            ],
            'notify_phone' => [
                'string',
                'nullable',
            ],
            'contact_phone' => [
                'string',
                'nullable',
            ],
            'timezone' => [
                'string',
                'nullable',
            ],
            'call_line' => [
                'string',
                'nullable',
            ],
            'biography' => [
                'string',
                'nullable',
            ],
            'license' => [
                'string',
                'nullable',
            ],
            'website' => [
                'string',
                'nullable',
            ],
            'facebook' => [
                'string',
                'nullable',
            ],
            'google_plus' => [
                'string',
                'nullable',
            ],
            'linked_in' => [
                'string',
                'nullable',
            ],
            'twitter' => [
                'string',
                'nullable',
            ],
            'instagram' => [
                'string',
                'nullable',
            ],
            'settings' => [
                'string',
                'nullable',
            ],
            'office' => [
                'string',
                'nullable',
            ],
            'template' => [
                'string',
                'nullable',
            ],
            'is_vetted' => [
                'boolean',
            ],
            'vetting_data' => [
                'date_format:' . config('project.date_format'),
                'nullable',
            ],
            'user_confirmed_info' => [
                'boolean',
            ],
            'demo' => [
                'boolean',
            ],
        ];
    }
}
