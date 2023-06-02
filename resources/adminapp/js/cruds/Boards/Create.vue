<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.board.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.source,
                      'is-focused': activeField == 'source'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.source')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.source"
                      @input="updateSource"
                      @focus="focusField('source')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.name,
                      'is-focused': activeField == 'name'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.name"
                      @input="updateName"
                      @focus="focusField('name')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.description,
                      'is-focused': activeField == 'description'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.description')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.description"
                      @input="updateDescription"
                      @focus="focusField('description')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.show_courtesy"
                        :checked="entry.show_courtesy"
                        @change="updateShowCourtesy"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.board.fields.show_courtesy') }}</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.prominent_courtesy_of"
                        :checked="entry.prominent_courtesy_of"
                        @change="updateProminentCourtesyOf"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{
                        $t('cruds.board.fields.prominent_courtesy_of')
                      }}</label
                    >
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.disclaimer,
                      'is-focused': activeField == 'disclaimer'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.disclaimer')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.disclaimer"
                      @input="updateDisclaimer"
                      @focus="focusField('disclaimer')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.state,
                      'is-focused': activeField == 'state'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.state')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.state"
                      @input="updateState"
                      @focus="focusField('state')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.general_area,
                      'is-focused': activeField == 'general_area'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.general_area')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.general_area"
                      @input="updateGeneralArea"
                      @focus="focusField('general_area')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.agent_roster"
                        :checked="entry.agent_roster"
                        @change="updateAgentRoster"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.board.fields.agent_roster') }}</label
                    >
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.sold_data,
                      'is-focused': activeField == 'sold_data'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.sold_data')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.sold_data"
                      @input="updateSoldData"
                      @focus="focusField('sold_data')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.strict_customer"
                        :checked="entry.strict_customer"
                        @change="updateStrictCustomer"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.board.fields.strict_customer') }}</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.expand_courtesy_by_default"
                        :checked="entry.expand_courtesy_by_default"
                        @change="updateExpandCourtesyByDefault"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{
                        $t('cruds.board.fields.expand_courtesy_by_default')
                      }}</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.include_office_name_on_listing"
                        :checked="entry.include_office_name_on_listing"
                        @change="updateIncludeOfficeNameOnListing"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{
                        $t('cruds.board.fields.include_office_name_on_listing')
                      }}</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.include_agent_name_on_listing"
                        :checked="entry.include_agent_name_on_listing"
                        @change="updateIncludeAgentNameOnListing"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{
                        $t('cruds.board.fields.include_agent_name_on_listing')
                      }}</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.show_tooltip_on_non_mls_data"
                        :checked="entry.show_tooltip_on_non_mls_data"
                        @change="updateShowTooltipOnNonMlsData"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{
                        $t('cruds.board.fields.show_tooltip_on_non_mls_data')
                      }}</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.hide_days_on_market"
                        :checked="entry.hide_days_on_market"
                        @change="updateHideDaysOnMarket"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.board.fields.hide_days_on_market') }}</label
                    >
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.zoom,
                      'is-focused': activeField == 'zoom'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.zoom')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.zoom"
                      @input="updateZoom"
                      @focus="focusField('zoom')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.latitude,
                      'is-focused': activeField == 'latitude'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.latitude')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.latitude"
                      @input="updateLatitude"
                      @focus="focusField('latitude')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.longitude,
                      'is-focused': activeField == 'longitude'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.longitude')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.longitude"
                      @input="updateLongitude"
                      @focus="focusField('longitude')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.last_sync_at,
                      'is-focused': activeField == 'last_sync_at'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.last_sync_at')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      :value="entry.last_sync_at"
                      @input="updateLastSyncAt"
                      @focus="focusField('last_sync_at')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.private_note,
                      'is-focused': activeField == 'private_note'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.board.fields.private_note')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.private_note"
                      @input="updatePrivateNote"
                      @focus="focusField('private_note')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.board.fields.public_note') }}</label>
                    <ckeditor
                      :editor="editor"
                      :value="entry.public_note"
                      @input="updatePublicNote"
                    >
                    </ckeditor>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  components: {
    ClassicEditor
  },
  data() {
    return {
      status: '',
      activeField: '',
      editor: ClassicEditor
    }
  },
  computed: {
    ...mapGetters('BoardsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('BoardsSingle', [
      'storeData',
      'resetState',
      'setSource',
      'setName',
      'setDescription',
      'setShowCourtesy',
      'setProminentCourtesyOf',
      'setDisclaimer',
      'setState',
      'setGeneralArea',
      'setAgentRoster',
      'setSoldData',
      'setStrictCustomer',
      'setExpandCourtesyByDefault',
      'setIncludeOfficeNameOnListing',
      'setIncludeAgentNameOnListing',
      'setShowTooltipOnNonMlsData',
      'setHideDaysOnMarket',
      'setZoom',
      'setLatitude',
      'setLongitude',
      'setLastSyncAt',
      'setPrivateNote',
      'setPublicNote'
    ]),
    updateSource(e) {
      this.setSource(e.target.value)
    },
    updateName(e) {
      this.setName(e.target.value)
    },
    updateDescription(e) {
      this.setDescription(e.target.value)
    },
    updateShowCourtesy(e) {
      this.setShowCourtesy(e.target.checked)
    },
    updateProminentCourtesyOf(e) {
      this.setProminentCourtesyOf(e.target.checked)
    },
    updateDisclaimer(e) {
      this.setDisclaimer(e.target.value)
    },
    updateState(e) {
      this.setState(e.target.value)
    },
    updateGeneralArea(e) {
      this.setGeneralArea(e.target.value)
    },
    updateAgentRoster(e) {
      this.setAgentRoster(e.target.checked)
    },
    updateSoldData(e) {
      this.setSoldData(e.target.value)
    },
    updateStrictCustomer(e) {
      this.setStrictCustomer(e.target.checked)
    },
    updateExpandCourtesyByDefault(e) {
      this.setExpandCourtesyByDefault(e.target.checked)
    },
    updateIncludeOfficeNameOnListing(e) {
      this.setIncludeOfficeNameOnListing(e.target.checked)
    },
    updateIncludeAgentNameOnListing(e) {
      this.setIncludeAgentNameOnListing(e.target.checked)
    },
    updateShowTooltipOnNonMlsData(e) {
      this.setShowTooltipOnNonMlsData(e.target.checked)
    },
    updateHideDaysOnMarket(e) {
      this.setHideDaysOnMarket(e.target.checked)
    },
    updateZoom(e) {
      this.setZoom(e.target.value)
    },
    updateLatitude(e) {
      this.setLatitude(e.target.value)
    },
    updateLongitude(e) {
      this.setLongitude(e.target.value)
    },
    updateLastSyncAt(e) {
      this.setLastSyncAt(e.target.value)
    },
    updatePrivateNote(e) {
      this.setPrivateNote(e.target.value)
    },
    updatePublicNote(value) {
      this.setPublicNote(value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'boards.index' })
          this.$eventHub.$emit('create-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
