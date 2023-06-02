import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'

import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import AgentsIndex from './cruds/Agents'
import AgentsSingle from './cruds/Agents/single'
import ClientsIndex from './cruds/Clients'
import ClientsSingle from './cruds/Clients/single'
import PostsIndex from './cruds/Posts'
import PostsSingle from './cruds/Posts/single'
import BoardsIndex from './cruds/Boards'
import BoardsSingle from './cruds/Boards/single'
import StatesIndex from './cruds/States'
import StatesSingle from './cruds/States/single'
import SourceStatusTypesIndex from './cruds/SourceStatusTypes'
import SourceStatusTypesSingle from './cruds/SourceStatusTypes/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    AgentsIndex,
    AgentsSingle,
    ClientsIndex,
    ClientsSingle,
    PostsIndex,
    PostsSingle,
    BoardsIndex,
    BoardsSingle,
    StatesIndex,
    StatesSingle,
    SourceStatusTypesIndex,
    SourceStatusTypesSingle
  },
  strict: debug
})
