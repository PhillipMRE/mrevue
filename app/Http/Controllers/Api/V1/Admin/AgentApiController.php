<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAgentRequest;
use App\Http\Requests\UpdateAgentRequest;
use App\Http\Resources\Admin\AgentResource;
use App\Models\Agent;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AgentApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('agent_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AgentResource(Agent::advancedFilter());
    }

    public function store(StoreAgentRequest $request)
    {
        $agent = Agent::create($request->validated());

        return (new AgentResource($agent))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('agent_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Agent $agent)
    {
        abort_if(Gate::denies('agent_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new AgentResource($agent);
    }

    public function update(UpdateAgentRequest $request, Agent $agent)
    {
        $agent->update($request->validated());

        return (new AgentResource($agent))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Agent $agent)
    {
        abort_if(Gate::denies('agent_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new AgentResource($agent),
            'meta' => [],
        ]);
    }

    public function destroy(Agent $agent)
    {
        abort_if(Gate::denies('agent_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $agent->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
