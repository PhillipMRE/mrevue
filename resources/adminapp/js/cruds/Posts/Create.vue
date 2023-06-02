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
                <strong>{{ $t('cruds.post.title_singular') }}</strong>
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
                      'has-items': entry.for,
                      'is-focused': activeField == 'for'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.post.fields.for')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.for"
                      @input="updateFor"
                      @focus="focusField('for')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.title,
                      'is-focused': activeField == 'title'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.post.fields.title')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.title"
                      @input="updateTitle"
                      @focus="focusField('title')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.content,
                      'is-focused': activeField == 'content'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.post.fields.content')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.content"
                      @input="updateContent"
                      @focus="focusField('content')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div class="form-group form-check">
                    <label class="form-check-label"
                      ><input
                        class="form-check-input"
                        type="checkbox"
                        :value="entry.sticky"
                        :checked="entry.sticky"
                        @change="updateSticky"
                      /><span class="form-check-sign"
                        ><span class="check"></span></span
                      >{{ $t('cruds.post.fields.sticky') }}</label
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

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('PostsSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('PostsSingle', [
      'storeData',
      'resetState',
      'setFor',
      'setTitle',
      'setContent',
      'setSticky'
    ]),
    updateFor(e) {
      this.setFor(e.target.value)
    },
    updateTitle(e) {
      this.setTitle(e.target.value)
    },
    updateContent(e) {
      this.setContent(e.target.value)
    },
    updateSticky(e) {
      this.setSticky(e.target.checked)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'posts.index' })
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
