<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Http\Resources\Admin\ClientResource;
use App\Models\Agent;
use App\Models\Client;
use App\Models\User;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ClientApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('client_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ClientResource(Client::with(['agent', 'user'])->advancedFilter());
    }

    public function store(StoreClientRequest $request)
    {
        $client = Client::create($request->validated());

        return (new ClientResource($client))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('client_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'agent' => Agent::get(['id', 'display_name']),
                'user'  => User::get(['id', 'name']),
            ],
        ]);
    }

    public function show(Client $client)
    {
        abort_if(Gate::denies('client_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ClientResource($client->load(['agent', 'user']));
    }

    public function update(UpdateClientRequest $request, Client $client)
    {
        $client->update($request->validated());

        return (new ClientResource($client))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Client $client)
    {
        abort_if(Gate::denies('client_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ClientResource($client->load(['agent', 'user'])),
            'meta' => [
                'agent' => Agent::get(['id', 'display_name']),
                'user'  => User::get(['id', 'name']),
            ],
        ]);
    }

    public function destroy(Client $client)
    {
        abort_if(Gate::denies('client_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $client->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
