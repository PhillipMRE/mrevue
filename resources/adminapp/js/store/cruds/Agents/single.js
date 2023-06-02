function initialState() {
  return {
    entry: {
      id: null,
      display_name: '',
      first_name: '',
      last_name: '',
      notify_phone: '',
      contact_phone: '',
      timezone: '',
      call_line: '',
      biography: '',
      license: '',
      website: '',
      facebook: '',
      google_plus: '',
      linked_in: '',
      twitter: '',
      instagram: '',
      settings: '',
      office: '',
      template: '',
      is_vetted: true,
      vetting_data: '',
      user_confirmed_info: false,
      demo: false,
      created_at: '',
      updated_at: '',
      deleted_at: ''
    },
    loading: false
  }
}

const route = 'agents'

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
  setDisplayName({ commit }, value) {
    commit('setDisplayName', value)
  },
  setFirstName({ commit }, value) {
    commit('setFirstName', value)
  },
  setLastName({ commit }, value) {
    commit('setLastName', value)
  },
  setNotifyPhone({ commit }, value) {
    commit('setNotifyPhone', value)
  },
  setContactPhone({ commit }, value) {
    commit('setContactPhone', value)
  },
  setTimezone({ commit }, value) {
    commit('setTimezone', value)
  },
  setCallLine({ commit }, value) {
    commit('setCallLine', value)
  },
  setBiography({ commit }, value) {
    commit('setBiography', value)
  },
  setLicense({ commit }, value) {
    commit('setLicense', value)
  },
  setWebsite({ commit }, value) {
    commit('setWebsite', value)
  },
  setFacebook({ commit }, value) {
    commit('setFacebook', value)
  },
  setGooglePlus({ commit }, value) {
    commit('setGooglePlus', value)
  },
  setLinkedIn({ commit }, value) {
    commit('setLinkedIn', value)
  },
  setTwitter({ commit }, value) {
    commit('setTwitter', value)
  },
  setInstagram({ commit }, value) {
    commit('setInstagram', value)
  },
  setSettings({ commit }, value) {
    commit('setSettings', value)
  },
  setOffice({ commit }, value) {
    commit('setOffice', value)
  },
  setTemplate({ commit }, value) {
    commit('setTemplate', value)
  },
  setIsVetted({ commit }, value) {
    commit('setIsVetted', value)
  },
  setVettingData({ commit }, value) {
    commit('setVettingData', value)
  },
  setUserConfirmedInfo({ commit }, value) {
    commit('setUserConfirmedInfo', value)
  },
  setDemo({ commit }, value) {
    commit('setDemo', value)
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
  setDisplayName(state, value) {
    state.entry.display_name = value
  },
  setFirstName(state, value) {
    state.entry.first_name = value
  },
  setLastName(state, value) {
    state.entry.last_name = value
  },
  setNotifyPhone(state, value) {
    state.entry.notify_phone = value
  },
  setContactPhone(state, value) {
    state.entry.contact_phone = value
  },
  setTimezone(state, value) {
    state.entry.timezone = value
  },
  setCallLine(state, value) {
    state.entry.call_line = value
  },
  setBiography(state, value) {
    state.entry.biography = value
  },
  setLicense(state, value) {
    state.entry.license = value
  },
  setWebsite(state, value) {
    state.entry.website = value
  },
  setFacebook(state, value) {
    state.entry.facebook = value
  },
  setGooglePlus(state, value) {
    state.entry.google_plus = value
  },
  setLinkedIn(state, value) {
    state.entry.linked_in = value
  },
  setTwitter(state, value) {
    state.entry.twitter = value
  },
  setInstagram(state, value) {
    state.entry.instagram = value
  },
  setSettings(state, value) {
    state.entry.settings = value
  },
  setOffice(state, value) {
    state.entry.office = value
  },
  setTemplate(state, value) {
    state.entry.template = value
  },
  setIsVetted(state, value) {
    state.entry.is_vetted = value
  },
  setVettingData(state, value) {
    state.entry.vetting_data = value
  },
  setUserConfirmedInfo(state, value) {
    state.entry.user_confirmed_info = value
  },
  setDemo(state, value) {
    state.entry.demo = value
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
