<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSourceStatusTypeRequest;
use App\Http\Requests\UpdateSourceStatusTypeRequest;
use App\Http\Resources\Admin\SourceStatusTypeResource;
use App\Models\SourceStatusType;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SourceStatusTypeApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('source_status_type_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SourceStatusTypeResource(SourceStatusType::advancedFilter());
    }

    public function store(StoreSourceStatusTypeRequest $request)
    {
        $sourceStatusType = SourceStatusType::create($request->validated());

        return (new SourceStatusTypeResource($sourceStatusType))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('source_status_type_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(SourceStatusType $sourceStatusType)
    {
        abort_if(Gate::denies('source_status_type_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SourceStatusTypeResource($sourceStatusType);
    }

    public function update(UpdateSourceStatusTypeRequest $request, SourceStatusType $sourceStatusType)
    {
        $sourceStatusType->update($request->validated());

        return (new SourceStatusTypeResource($sourceStatusType))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(SourceStatusType $sourceStatusType)
    {
        abort_if(Gate::denies('source_status_type_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new SourceStatusTypeResource($sourceStatusType),
            'meta' => [],
        ]);
    }

    public function destroy(SourceStatusType $sourceStatusType)
    {
        abort_if(Gate::denies('source_status_type_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $sourceStatusType->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
