function initialState() {
  return {
    entry: {
      id: null,
      source: '',
      name: '',
      description: '',
      show_courtesy: false,
      prominent_courtesy_of: false,
      disclaimer: '',
      state: '',
      general_area: '',
      agent_roster: false,
      sold_data: '',
      strict_customer: true,
      expand_courtesy_by_default: true,
      include_office_name_on_listing: true,
      include_agent_name_on_listing: true,
      show_tooltip_on_non_mls_data: false,
      hide_days_on_market: true,
      zoom: '',
      latitude: '',
      longitude: '',
      last_sync_at: '',
      private_note: '',
      public_note: '',
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    loading: false
  }
}

const route = 'boards'

const getters = {
  entry: state => state.entry,
  loading: state => state.loading
}

const actions = {
  storeData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      axios
        .post(route, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  updateData({ commit, state, dispatch }) {
    commit('setLoading', true)
    dispatch('Alert/resetState', null, { root: true })

    return new Promise((resolve, reject) => {
      let params = objectToFormData(state.entry, {
        indices: true,
        booleansAsIntegers: true
      })
      params.set('_method', 'PUT')
      axios
        .post(`${route}/${state.entry.id}`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          let message = error.response.data.message || error.message
          let errors = error.response.data.errors

          dispatch(
            'Alert/setAlert',
            { message: message, errors: errors, color: 'danger' },
            { root: true }
          )

          reject(error)
        })
        .finally(() => {
          commit('setLoading', false)
        })
    })
  },
  setSource({ commit }, value) {
    commit('setSource', value)
  },
  setName({ commit }, value) {
    commit('setName', value)
  },
  setDescription({ commit }, value) {
    commit('setDescription', value)
  },
  setShowCourtesy({ commit }, value) {
    commit('setShowCourtesy', value)
  },
  setProminentCourtesyOf({ commit }, value) {
    commit('setProminentCourtesyOf', value)
  },
  setDisclaimer({ commit }, value) {
    commit('setDisclaimer', value)
  },
  setState({ commit }, value) {
    commit('setState', value)
  },
  setGeneralArea({ commit }, value) {
    commit('setGeneralArea', value)
  },
  setAgentRoster({ commit }, value) {
    commit('setAgentRoster', value)
  },
  setSoldData({ commit }, value) {
    commit('setSoldData', value)
  },
  setStrictCustomer({ commit }, value) {
    commit('setStrictCustomer', value)
  },
  setExpandCourtesyByDefault({ commit }, value) {
    commit('setExpandCourtesyByDefault', value)
  },
  setIncludeOfficeNameOnListing({ commit }, value) {
    commit('setIncludeOfficeNameOnListing', value)
  },
  setIncludeAgentNameOnListing({ commit }, value) {
    commit('setIncludeAgentNameOnListing', value)
  },
  setShowTooltipOnNonMlsData({ commit }, value) {
    commit('setShowTooltipOnNonMlsData', value)
  },
  setHideDaysOnMarket({ commit }, value) {
    commit('setHideDaysOnMarket', value)
  },
  setZoom({ commit }, value) {
    commit('setZoom', value)
  },
  setLatitude({ commit }, value) {
    commit('setLatitude', value)
  },
  setLongitude({ commit }, value) {
    commit('setLongitude', value)
  },
  setLastSyncAt({ commit }, value) {
    commit('setLastSyncAt', value)
  },
  setPrivateNote({ commit }, value) {
    commit('setPrivateNote', value)
  },
  setPublicNote({ commit }, value) {
    commit('setPublicNote', value)
  },
  setCreatedAt({ commit }, value) {
    commit('setCreatedAt', value)
  },
  setUpdatedAt({ commit }, value) {
    commit('setUpdatedAt', value)
  },
  setDeletedAt({ commit }, value) {
    commit('setDeletedAt', value)
  },
  fetchEditData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}/edit`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  fetchShowData({ commit, dispatch }, id) {
    axios.get(`${route}/${id}`).then(response => {
      commit('setEntry', response.data.data)
    })
  },
  resetState({ commit }) {
    commit('resetState')
  }
}

const mutations = {
  setEntry(state, entry) {
    state.entry = entry
  },
  setSource(state, value) {
    state.entry.source = value
  },
  setName(state, value) {
    state.entry.name = value
  },
  setDescription(state, value) {
    state.entry.description = value
  },
  setShowCourtesy(state, value) {
    state.entry.show_courtesy = value
  },
  setProminentCourtesyOf(state, value) {
    state.entry.prominent_courtesy_of = value
  },
  setDisclaimer(state, value) {
    state.entry.disclaimer = value
  },
  setState(state, value) {
    state.entry.state = value
  },
  setGeneralArea(state, value) {
    state.entry.general_area = value
  },
  setAgentRoster(state, value) {
    state.entry.agent_roster = value
  },
  setSoldData(state, value) {
    state.entry.sold_data = value
  },
  setStrictCustomer(state, value) {
    state.entry.strict_customer = value
  },
  setExpandCourtesyByDefault(state, value) {
    state.entry.expand_courtesy_by_default = value
  },
  setIncludeOfficeNameOnListing(state, value) {
    state.entry.include_office_name_on_listing = value
  },
  setIncludeAgentNameOnListing(state, value) {
    state.entry.include_agent_name_on_listing = value
  },
  setShowTooltipOnNonMlsData(state, value) {
    state.entry.show_tooltip_on_non_mls_data = value
  },
  setHideDaysOnMarket(state, value) {
    state.entry.hide_days_on_market = value
  },
  setZoom(state, value) {
    state.entry.zoom = value
  },
  setLatitude(state, value) {
    state.entry.latitude = value
  },
  setLongitude(state, value) {
    state.entry.longitude = value
  },
  setLastSyncAt(state, value) {
    state.entry.last_sync_at = value
  },
  setPrivateNote(state, value) {
    state.entry.private_note = value
  },
  setPublicNote(state, value) {
    state.entry.public_note = value
  },
  setCreatedAt(state, value) {
    state.entry.created_at = value
  },
  setUpdatedAt(state, value) {
    state.entry.updated_at = value
  },
  setDeletedAt(state, value) {
    state.entry.deleted_at = value
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  resetState(state) {
    state = Object.assign(state, initialState())
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
