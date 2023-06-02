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
              <strong>{{ $t('cruds.board.title_singular') }}</strong>
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
                          {{ $t('cruds.board.fields.id') }}
                        </td>
                        <td>
                          {{ entry.id }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.source') }}
                        </td>
                        <td>
                          {{ entry.source }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.name') }}
                        </td>
                        <td>
                          {{ entry.name }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.description') }}
                        </td>
                        <td>
                          {{ entry.description }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.show_courtesy') }}
                        </td>
                        <td>
                          <datatable-checkbox :value="entry.show_courtesy">
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.prominent_courtesy_of') }}
                        </td>
                        <td>
                          <datatable-checkbox
                            :value="entry.prominent_courtesy_of"
                          >
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.disclaimer') }}
                        </td>
                        <td>
                          {{ entry.disclaimer }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.state') }}
                        </td>
                        <td>
                          {{ entry.state }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.general_area') }}
                        </td>
                        <td>
                          {{ entry.general_area }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.agent_roster') }}
                        </td>
                        <td>
                          <datatable-checkbox :value="entry.agent_roster">
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.sold_data') }}
                        </td>
                        <td>
                          {{ entry.sold_data }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.strict_customer') }}
                        </td>
                        <td>
                          <datatable-checkbox :value="entry.strict_customer">
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t('cruds.board.fields.expand_courtesy_by_default')
                          }}
                        </td>
                        <td>
                          <datatable-checkbox
                            :value="entry.expand_courtesy_by_default"
                          >
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t(
                              'cruds.board.fields.include_office_name_on_listing'
                            )
                          }}
                        </td>
                        <td>
                          <datatable-checkbox
                            :value="entry.include_office_name_on_listing"
                          >
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t(
                              'cruds.board.fields.include_agent_name_on_listing'
                            )
                          }}
                        </td>
                        <td>
                          <datatable-checkbox
                            :value="entry.include_agent_name_on_listing"
                          >
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{
                            $t(
                              'cruds.board.fields.show_tooltip_on_non_mls_data'
                            )
                          }}
                        </td>
                        <td>
                          <datatable-checkbox
                            :value="entry.show_tooltip_on_non_mls_data"
                          >
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.hide_days_on_market') }}
                        </td>
                        <td>
                          <datatable-checkbox
                            :value="entry.hide_days_on_market"
                          >
                          </datatable-checkbox>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.zoom') }}
                        </td>
                        <td>
                          {{ entry.zoom }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.latitude') }}
                        </td>
                        <td>
                          {{ entry.latitude }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.longitude') }}
                        </td>
                        <td>
                          {{ entry.longitude }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.last_sync_at') }}
                        </td>
                        <td>
                          {{ entry.last_sync_at }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.private_note') }}
                        </td>
                        <td>
                          {{ entry.private_note }}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-primary">
                          {{ $t('cruds.board.fields.public_note') }}
                        </td>
                        <td>
                          <ckeditor
                            :editor="editor"
                            :value="entry.public_note"
                            disabled
                          >
                          </ckeditor>
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
import DatatableCheckbox from '@components/Datatables/DatatableCheckbox'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  components: {
    DatatableCheckbox,
    ClassicEditor
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
    ...mapGetters('BoardsSingle', ['entry'])
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
    ...mapActions('BoardsSingle', ['fetchShowData', 'resetState'])
  }
}
</script>
