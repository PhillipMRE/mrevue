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
                <strong>{{ $t('cruds.agent.title_singular') }}</strong>
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
                      'has-items': entry.display_name,
                      'is-focused': activeField == 'display_name'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.display_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.display_name"
                      @input="updateDisplayName"
                      @focus="focusField('display_name')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.first_name,
                      'is-focused': activeField == 'first_name'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.first_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.first_name"
                      @input="updateFirstName"
                      @focus="focusField('first_name')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.last_name,
                      'is-focused': activeField == 'last_name'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.last_name')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.last_name"
                      @input="updateLastName"
                      @focus="focusField('last_name')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.notify_phone,
                      'is-focused': activeField == 'notify_phone'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.notify_phone')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.notify_phone"
                      @input="updateNotifyPhone"
                      @focus="focusField('notify_phone')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.contact_phone,
                      'is-focused': activeField == 'contact_phone'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.contact_phone')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.contact_phone"
                      @input="updateContactPhone"
                      @focus="focusField('contact_phone')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.timezone,
                      'is-focused': activeField == 'timezone'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.timezone')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.timezone"
                      @input="updateTimezone"
                      @focus="focusField('timezone')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.call_line,
                      'is-focused': activeField == 'call_line'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.call_line')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.call_line"
                      @input="updateCallLine"
                      @focus="focusField('call_line')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label>{{ $t('cruds.agent.fields.biography') }}</label>
                    <ckeditor
                      :editor="editor"
                      :value="entry.biography"
                      @input="updateBiography"
                    >
                    </ckeditor>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.license,
                      'is-focused': activeField == 'license'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.license')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.license"
                      @input="updateLicense"
                      @focus="focusField('license')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.website,
                      'is-focused': activeField == 'website'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.website')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.website"
                      @input="updateWebsite"
                      @focus="focusField('website')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.facebook,
                      'is-focused': activeField == 'facebook'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.facebook')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.facebook"
                      @input="updateFacebook"
                      @focus="focusField('facebook')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.google_plus,
                      'is-focused': activeField == 'google_plus'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.google_plus')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.google_plus"
                      @input="updateGooglePlus"
                      @focus="focusField('google_plus')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.linked_in,
                      'is-focused': activeField == 'linked_in'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.linked_in')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.linked_in"
                      @input="updateLinkedIn"
                      @focus="focusField('linked_in')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.twitter,
                      'is-focused': activeField == 'twitter'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.twitter')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.twitter"
                      @input="updateTwitter"
                      @focus="focusField('twitter')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.instagram,
                      'is-focused': activeField == 'instagram'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.instagram')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.instagram"
                      @input="updateInstagram"
                      @focus="focusField('instagram')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.settings,
                      'is-focused': activeField == 'settings'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.settings')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.settings"
                      @input="updateSettings"
                      @focus="focusField('settings')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.office,
                      'is-focused': activeField == 'office'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.office')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.office"
                      @input="updateOffice"
                      @focus="focusField('office')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.template,
                      'is-focused': activeField == 'template'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.template')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.template"
                      @input="updateTemplate"
                      @focus="focusField('template')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.is_vetted"
                        :checked="entry.is_vetted"
                        @change="updateIsVetted"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.agent.fields.is_vetted') }}</label
                    >
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.vetting_data,
                      'is-focused': activeField == 'vetting_data'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.agent.fields.vetting_data')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.vetting_data"
                      @input="updateVettingData"
                      @focus="focusField('vetting_data')"
                      @blur="clearFocus"
                    >
                    </datetime-picker>
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.user_confirmed_info"
                        :checked="entry.user_confirmed_info"
                        @change="updateUserConfirmedInfo"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.agent.fields.user_confirmed_info') }}</label
                    >
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.demo"
                        :checked="entry.demo"
                        @change="updateDemo"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.agent.fields.demo') }}</label
                    >
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
    ...mapGetters('AgentsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('AgentsSingle', [
      'storeData',
      'resetState',
      'setDisplayName',
      'setFirstName',
      'setLastName',
      'setNotifyPhone',
      'setContactPhone',
      'setTimezone',
      'setCallLine',
      'setBiography',
      'setLicense',
      'setWebsite',
      'setFacebook',
      'setGooglePlus',
      'setLinkedIn',
      'setTwitter',
      'setInstagram',
      'setSettings',
      'setOffice',
      'setTemplate',
      'setIsVetted',
      'setVettingData',
      'setUserConfirmedInfo',
      'setDemo'
    ]),
    updateDisplayName(e) {
      this.setDisplayName(e.target.value)
    },
    updateFirstName(e) {
      this.setFirstName(e.target.value)
    },
    updateLastName(e) {
      this.setLastName(e.target.value)
    },
    updateNotifyPhone(e) {
      this.setNotifyPhone(e.target.value)
    },
    updateContactPhone(e) {
      this.setContactPhone(e.target.value)
    },
    updateTimezone(e) {
      this.setTimezone(e.target.value)
    },
    updateCallLine(e) {
      this.setCallLine(e.target.value)
    },
    updateBiography(value) {
      this.setBiography(value)
    },
    updateLicense(e) {
      this.setLicense(e.target.value)
    },
    updateWebsite(e) {
      this.setWebsite(e.target.value)
    },
    updateFacebook(e) {
      this.setFacebook(e.target.value)
    },
    updateGooglePlus(e) {
      this.setGooglePlus(e.target.value)
    },
    updateLinkedIn(e) {
      this.setLinkedIn(e.target.value)
    },
    updateTwitter(e) {
      this.setTwitter(e.target.value)
    },
    updateInstagram(e) {
      this.setInstagram(e.target.value)
    },
    updateSettings(e) {
      this.setSettings(e.target.value)
    },
    updateOffice(e) {
      this.setOffice(e.target.value)
    },
    updateTemplate(e) {
      this.setTemplate(e.target.value)
    },
    updateIsVetted(e) {
      this.setIsVetted(e.target.checked)
    },
    updateVettingData(e) {
      this.setVettingData(e.target.value)
    },
    updateUserConfirmedInfo(e) {
      this.setUserConfirmedInfo(e.target.checked)
    },
    updateDemo(e) {
      this.setDemo(e.target.checked)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'agents.index' })
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
