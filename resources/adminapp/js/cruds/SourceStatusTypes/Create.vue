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
                <strong>{{
                  $t('cruds.sourceStatusType.title_singular')
                }}</strong>
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
                      'has-items': entry.name,
                      'is-focused': activeField == 'name'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.sourceStatusType.fields.name')
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
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.listing_status"
                        :checked="entry.listing_status"
                        @change="updateListingStatus"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{
                        $t('cruds.sourceStatusType.fields.listing_status')
                      }}</label
                    >
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.type,
                      'is-focused': activeField == 'type'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.sourceStatusType.fields.type')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.type"
                      @input="updateType"
                      @focus="focusField('type')"
                      @blur="clearFocus"
                    />
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

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('SourceStatusTypesSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('SourceStatusTypesSingle', [
      'storeData',
      'resetState',
      'setName',
      'setListingStatus',
      'setType'
    ]),
    updateName(e) {
      this.setName(e.target.value)
    },
    updateListingStatus(e) {
      this.setListingStatus(e.target.checked)
    },
    updateType(e) {
      this.setType(e.target.value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'source_status_types.index' })
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
