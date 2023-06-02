<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">remove_red_eye</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.view') }}
              <strong>{{ $t('cruds.agent.title_singular') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <back-button></back-button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <div class="table">
                    <tbody>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.display_name') }}
                        </td>
                        <td>
                          {{ entry.display_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.first_name') }}
                        </td>
                        <td>
                          {{ entry.first_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.last_name') }}
                        </td>
                        <td>
                          {{ entry.last_name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.notify_phone') }}
                        </td>
                        <td>
                          {{ entry.notify_phone }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.contact_phone') }}
                        </td>
                        <td>
                          {{ entry.contact_phone }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.timezone') }}
                        </td>
                        <td>
                          {{ entry.timezone }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.call_line') }}
                        </td>
                        <td>
                          {{ entry.call_line }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.biography') }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.biography"
                            disabled
                          >
                          </ckeditor>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.license') }}
                        </td>
                        <td>
                          {{ entry.license }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.website') }}
                        </td>
                        <td>
                          {{ entry.website }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.facebook') }}
                        </td>
                        <td>
                          {{ entry.facebook }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.google_plus') }}
                        </td>
                        <td>
                          {{ entry.google_plus }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.linked_in') }}
                        </td>
                        <td>
                          {{ entry.linked_in }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.twitter') }}
                        </td>
                        <td>
                          {{ entry.twitter }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.instagram') }}
                        </td>
                        <td>
                          {{ entry.instagram }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.settings') }}
                        </td>
                        <td>
                          {{ entry.settings }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.office') }}
                        </td>
                        <td>
                          {{ entry.office }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.template') }}
                        </td>
                        <td>
                          {{ entry.template }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.is_vetted') }}
                        </td>
                        <td>
                          <datatable-checkbox :value="entry.is_vetted">
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.vetting_data') }}
                        </td>
                        <td>
                          {{ entry.vetting_data }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.user_confirmed_info') }}
                        </td>
                        <td>
                          <datatable-checkbox
                            :value="entry.user_confirmed_info"
                          >
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.agent.fields.demo') }}
                        </td>
                        <td>
                          <datatable-checkbox :value="entry.demo">
                          </datatable-checkbox>
                        </td>
                      </tr>
                    </tbody>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import DatatableCheckbox from '@components/Datatables/DatatableCheckbox'

export default {
  components: {
    ClassicEditor,
    DatatableCheckbox
  },
  data() {
    return {
      editor: ClassicEditor
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('AgentsSingle', ['entry'])
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchShowData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('AgentsSingle', ['fetchShowData', 'resetState'])
  }
}
</script>
