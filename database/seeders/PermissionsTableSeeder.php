<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
            [
                'id'    => 1,
                'title' => 'user_management_access',
            ],
            [
                'id'    => 2,
                'title' => 'permission_create',
            ],
            [
                'id'    => 3,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 4,
                'title' => 'permission_show',
            ],
            [
                'id'    => 5,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_access',
            ],
            [
                'id'    => 7,
                'title' => 'role_create',
            ],
            [
                'id'    => 8,
                'title' => 'role_edit',
            ],
            [
                'id'    => 9,
                'title' => 'role_show',
            ],
            [
                'id'    => 10,
                'title' => 'role_delete',
            ],
            [
                'id'    => 11,
                'title' => 'role_access',
            ],
            [
                'id'    => 12,
                'title' => 'user_create',
            ],
            [
                'id'    => 13,
                'title' => 'user_edit',
            ],
            [
                'id'    => 14,
                'title' => 'user_show',
            ],
            [
                'id'    => 15,
                'title' => 'user_delete',
            ],
            [
                'id'    => 16,
                'title' => 'user_access',
            ],
            [
                'id'    => 17,
                'title' => 'agent_create',
            ],
            [
                'id'    => 18,
                'title' => 'agent_edit',
            ],
            [
                'id'    => 19,
                'title' => 'agent_show',
            ],
            [
                'id'    => 20,
                'title' => 'agent_delete',
            ],
            [
                'id'    => 21,
                'title' => 'agent_access',
            ],
            [
                'id'    => 22,
                'title' => 'client_create',
            ],
            [
                'id'    => 23,
                'title' => 'client_edit',
            ],
            [
                'id'    => 24,
                'title' => 'client_show',
            ],
            [
                'id'    => 25,
                'title' => 'client_delete',
            ],
            [
                'id'    => 26,
                'title' => 'client_access',
            ],
            [
                'id'    => 27,
                'title' => 'post_create',
            ],
            [
                'id'    => 28,
                'title' => 'post_edit',
            ],
            [
                'id'    => 29,
                'title' => 'post_show',
            ],
            [
                'id'    => 30,
                'title' => 'post_delete',
            ],
            [
                'id'    => 31,
                'title' => 'post_access',
            ],
            [
                'id'    => 32,
                'title' => 'blog_access',
            ],
            [
                'id'    => 33,
                'title' => 'board_create',
            ],
            [
                'id'    => 34,
                'title' => 'board_edit',
            ],
            [
                'id'    => 35,
                'title' => 'board_show',
            ],
            [
                'id'    => 36,
                'title' => 'board_delete',
            ],
            [
                'id'    => 37,
                'title' => 'board_access',
            ],
            [
                'id'    => 38,
                'title' => 'developer_setting_access',
            ],
            [
                'id'    => 39,
                'title' => 'state_create',
            ],
            [
                'id'    => 40,
                'title' => 'state_edit',
            ],
            [
                'id'    => 41,
                'title' => 'state_show',
            ],
            [
                'id'    => 42,
                'title' => 'state_delete',
            ],
            [
                'id'    => 43,
                'title' => 'state_access',
            ],
            [
                'id'    => 44,
                'title' => 'source_status_type_create',
            ],
            [
                'id'    => 45,
                'title' => 'source_status_type_edit',
            ],
            [
                'id'    => 46,
                'title' => 'source_status_type_show',
            ],
            [
                'id'    => 47,
                'title' => 'source_status_type_delete',
            ],
            [
                'id'    => 48,
                'title' => 'source_status_type_access',
            ],
        ];

        Permission::insert($permissions);
    }
}
