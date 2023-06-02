<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBoardRequest;
use App\Http\Requests\UpdateBoardRequest;
use App\Http\Resources\Admin\BoardResource;
use App\Models\Board;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BoardApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('board_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BoardResource(Board::advancedFilter());
    }

    public function store(StoreBoardRequest $request)
    {
        $board = Board::create($request->validated());

        return (new BoardResource($board))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('board_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Board $board)
    {
        abort_if(Gate::denies('board_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BoardResource($board);
    }

    public function update(UpdateBoardRequest $request, Board $board)
    {
        $board->update($request->validated());

        return (new BoardResource($board))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Board $board)
    {
        abort_if(Gate::denies('board_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new BoardResource($board),
            'meta' => [],
        ]);
    }

    public function destroy(Board $board)
    {
        abort_if(Gate::denies('board_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $board->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
