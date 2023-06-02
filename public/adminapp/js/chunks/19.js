(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ClassicEditor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      status: '',
      activeField: '',
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('BoardsSingle', ['entry', 'loading'])),
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler: function handler() {
        this.resetState();
        this.fetchEditData(this.$route.params.id);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('BoardsSingle', ['fetchEditData', 'updateData', 'resetState', 'setSource', 'setName', 'setDescription', 'setShowCourtesy', 'setProminentCourtesyOf', 'setDisclaimer', 'setState', 'setGeneralArea', 'setAgentRoster', 'setSoldData', 'setStrictCustomer', 'setExpandCourtesyByDefault', 'setIncludeOfficeNameOnListing', 'setIncludeAgentNameOnListing', 'setShowTooltipOnNonMlsData', 'setHideDaysOnMarket', 'setZoom', 'setLatitude', 'setLongitude', 'setLastSyncAt', 'setPrivateNote', 'setPublicNote'])), {}, {
    updateSource: function updateSource(e) {
      this.setSource(e.target.value);
    },
    updateName: function updateName(e) {
      this.setName(e.target.value);
    },
    updateDescription: function updateDescription(e) {
      this.setDescription(e.target.value);
    },
    updateShowCourtesy: function updateShowCourtesy(e) {
      this.setShowCourtesy(e.target.checked);
    },
    updateProminentCourtesyOf: function updateProminentCourtesyOf(e) {
      this.setProminentCourtesyOf(e.target.checked);
    },
    updateDisclaimer: function updateDisclaimer(e) {
      this.setDisclaimer(e.target.value);
    },
    updateState: function updateState(e) {
      this.setState(e.target.value);
    },
    updateGeneralArea: function updateGeneralArea(e) {
      this.setGeneralArea(e.target.value);
    },
    updateAgentRoster: function updateAgentRoster(e) {
      this.setAgentRoster(e.target.checked);
    },
    updateSoldData: function updateSoldData(e) {
      this.setSoldData(e.target.value);
    },
    updateStrictCustomer: function updateStrictCustomer(e) {
      this.setStrictCustomer(e.target.checked);
    },
    updateExpandCourtesyByDefault: function updateExpandCourtesyByDefault(e) {
      this.setExpandCourtesyByDefault(e.target.checked);
    },
    updateIncludeOfficeNameOnListing: function updateIncludeOfficeNameOnListing(e) {
      this.setIncludeOfficeNameOnListing(e.target.checked);
    },
    updateIncludeAgentNameOnListing: function updateIncludeAgentNameOnListing(e) {
      this.setIncludeAgentNameOnListing(e.target.checked);
    },
    updateShowTooltipOnNonMlsData: function updateShowTooltipOnNonMlsData(e) {
      this.setShowTooltipOnNonMlsData(e.target.checked);
    },
    updateHideDaysOnMarket: function updateHideDaysOnMarket(e) {
      this.setHideDaysOnMarket(e.target.checked);
    },
    updateZoom: function updateZoom(e) {
      this.setZoom(e.target.value);
    },
    updateLatitude: function updateLatitude(e) {
      this.setLatitude(e.target.value);
    },
    updateLongitude: function updateLongitude(e) {
      this.setLongitude(e.target.value);
    },
    updateLastSyncAt: function updateLastSyncAt(e) {
      this.setLastSyncAt(e.target.value);
    },
    updatePrivateNote: function updatePrivateNote(e) {
      this.setPrivateNote(e.target.value);
    },
    updatePublicNote: function updatePublicNote(value) {
      this.setPublicNote(value);
    },
    submitForm: function submitForm() {
      var _this = this;
      this.updateData().then(function () {
        _this.$router.push({
          name: 'boards.index'
        });
        _this.$eventHub.$emit('update-success');
      })["catch"](function (error) {
        _this.status = 'failed';
        _.delay(function () {
          _this.status = '';
        }, 3000);
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=template&id=3bf010be&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=template&id=3bf010be& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container-fluid"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header card-header-primary card-header-icon"
  }, [_vm._m(0), _vm._v(" "), _c("h4", {
    staticClass: "card-title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("global.edit")) + "\n              "), _c("strong", [_vm._v(_vm._s(_vm.$t("cruds.board.title_singular")))])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("back-button")], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("bootstrap-alert"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.source,
      "is-focused": _vm.activeField == "source"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.source")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.entry.source
    },
    on: {
      input: _vm.updateSource,
      focus: function focus($event) {
        return _vm.focusField("source");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.name,
      "is-focused": _vm.activeField == "name"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.name")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.entry.name
    },
    on: {
      input: _vm.updateName,
      focus: function focus($event) {
        return _vm.focusField("name");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.description,
      "is-focused": _vm.activeField == "description"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.description")))]), _vm._v(" "), _c("textarea", {
    staticClass: "form-control",
    attrs: {
      rows: "5"
    },
    domProps: {
      value: _vm.entry.description
    },
    on: {
      input: _vm.updateDescription,
      focus: function focus($event) {
        return _vm.focusField("description");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group form-check"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: _vm.entry.show_courtesy,
      checked: _vm.entry.show_courtesy
    },
    on: {
      change: _vm.updateShowCourtesy
    }
  }), _vm._m(1), _vm._v(_vm._s(_vm.$t("cruds.board.fields.show_courtesy")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group form-check"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: _vm.entry.prominent_courtesy_of,
      checked: _vm.entry.prominent_courtesy_of
    },
    on: {
      change: _vm.updateProminentCourtesyOf
    }
  }), _vm._m(2), _vm._v(_vm._s(_vm.$t("cruds.board.fields.prominent_courtesy_of")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.disclaimer,
      "is-focused": _vm.activeField == "disclaimer"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.disclaimer")))]), _vm._v(" "), _c("textarea", {
    staticClass: "form-control",
    attrs: {
      rows: "5"
    },
    domProps: {
      value: _vm.entry.disclaimer
    },
    on: {
      input: _vm.updateDisclaimer,
      focus: function focus($event) {
        return _vm.focusField("disclaimer");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.state,
      "is-focused": _vm.activeField == "state"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.state")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.entry.state
    },
    on: {
      input: _vm.updateState,
      focus: function focus($event) {
        return _vm.focusField("state");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.general_area,
      "is-focused": _vm.activeField == "general_area"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.general_area")))]), _vm._v(" "), _c("textarea", {
    staticClass: "form-control",
    attrs: {
      rows: "5"
    },
    domProps: {
      value: _vm.entry.general_area
    },
    on: {
      input: _vm.updateGeneralArea,
      focus: function focus($event) {
        return _vm.focusField("general_area");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group form-check"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: _vm.entry.agent_roster,
      checked: _vm.entry.agent_roster
    },
    on: {
      change: _vm.updateAgentRoster
    }
  }), _vm._m(3), _vm._v(_vm._s(_vm.$t("cruds.board.fields.agent_roster")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.sold_data,
      "is-focused": _vm.activeField == "sold_data"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.sold_data")))]), _vm._v(" "), _c("textarea", {
    staticClass: "form-control",
    attrs: {
      rows: "5"
    },
    domProps: {
      value: _vm.entry.sold_data
    },
    on: {
      input: _vm.updateSoldData,
      focus: function focus($event) {
        return _vm.focusField("sold_data");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group form-check"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: _vm.entry.strict_customer,
      checked: _vm.entry.strict_customer
    },
    on: {
      change: _vm.updateStrictCustomer
    }
  }), _vm._m(4), _vm._v(_vm._s(_vm.$t("cruds.board.fields.strict_customer")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group form-check"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: _vm.entry.expand_courtesy_by_default,
      checked: _vm.entry.expand_courtesy_by_default
    },
    on: {
      change: _vm.updateExpandCourtesyByDefault
    }
  }), _vm._m(5), _vm._v(_vm._s(_vm.$t("cruds.board.fields.expand_courtesy_by_default")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group form-check"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: _vm.entry.include_office_name_on_listing,
      checked: _vm.entry.include_office_name_on_listing
    },
    on: {
      change: _vm.updateIncludeOfficeNameOnListing
    }
  }), _vm._m(6), _vm._v(_vm._s(_vm.$t("cruds.board.fields.include_office_name_on_listing")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group form-check"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: _vm.entry.include_agent_name_on_listing,
      checked: _vm.entry.include_agent_name_on_listing
    },
    on: {
      change: _vm.updateIncludeAgentNameOnListing
    }
  }), _vm._m(7), _vm._v(_vm._s(_vm.$t("cruds.board.fields.include_agent_name_on_listing")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group form-check"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: _vm.entry.show_tooltip_on_non_mls_data,
      checked: _vm.entry.show_tooltip_on_non_mls_data
    },
    on: {
      change: _vm.updateShowTooltipOnNonMlsData
    }
  }), _vm._m(8), _vm._v(_vm._s(_vm.$t("cruds.board.fields.show_tooltip_on_non_mls_data")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group form-check"
  }, [_c("label", {
    staticClass: "form-check-label"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      value: _vm.entry.hide_days_on_market,
      checked: _vm.entry.hide_days_on_market
    },
    on: {
      change: _vm.updateHideDaysOnMarket
    }
  }), _vm._m(9), _vm._v(_vm._s(_vm.$t("cruds.board.fields.hide_days_on_market")))])]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.zoom,
      "is-focused": _vm.activeField == "zoom"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.zoom")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.entry.zoom
    },
    on: {
      input: _vm.updateZoom,
      focus: function focus($event) {
        return _vm.focusField("zoom");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.latitude,
      "is-focused": _vm.activeField == "latitude"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.latitude")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.entry.latitude
    },
    on: {
      input: _vm.updateLatitude,
      focus: function focus($event) {
        return _vm.focusField("latitude");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.longitude,
      "is-focused": _vm.activeField == "longitude"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.longitude")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.entry.longitude
    },
    on: {
      input: _vm.updateLongitude,
      focus: function focus($event) {
        return _vm.focusField("longitude");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.last_sync_at,
      "is-focused": _vm.activeField == "last_sync_at"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.last_sync_at")))]), _vm._v(" "), _c("datetime-picker", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      value: _vm.entry.last_sync_at
    },
    on: {
      input: _vm.updateLastSyncAt,
      focus: function focus($event) {
        return _vm.focusField("last_sync_at");
      },
      blur: _vm.clearFocus
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.private_note,
      "is-focused": _vm.activeField == "private_note"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.board.fields.private_note")))]), _vm._v(" "), _c("textarea", {
    staticClass: "form-control",
    attrs: {
      rows: "5"
    },
    domProps: {
      value: _vm.entry.private_note
    },
    on: {
      input: _vm.updatePrivateNote,
      focus: function focus($event) {
        return _vm.focusField("private_note");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("cruds.board.fields.public_note")))]), _vm._v(" "), _c("ckeditor", {
    attrs: {
      editor: _vm.editor,
      value: _vm.entry.public_note
    },
    on: {
      input: _vm.updatePublicNote
    }
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("vue-button-spinner", {
    staticClass: "btn-primary",
    attrs: {
      status: _vm.status,
      isLoading: _vm.loading,
      disabled: _vm.loading
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("global.save")) + "\n            ")])], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("edit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-check-sign"
  }, [_c("span", {
    staticClass: "check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-check-sign"
  }, [_c("span", {
    staticClass: "check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-check-sign"
  }, [_c("span", {
    staticClass: "check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-check-sign"
  }, [_c("span", {
    staticClass: "check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-check-sign"
  }, [_c("span", {
    staticClass: "check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-check-sign"
  }, [_c("span", {
    staticClass: "check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-check-sign"
  }, [_c("span", {
    staticClass: "check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-check-sign"
  }, [_c("span", {
    staticClass: "check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "form-check-sign"
  }, [_c("span", {
    staticClass: "check"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/adminapp/js/cruds/Boards/Edit.vue":
/*!*****************************************************!*\
  !*** ./resources/adminapp/js/cruds/Boards/Edit.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_3bf010be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=3bf010be& */ "./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=template&id=3bf010be&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_3bf010be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_3bf010be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Boards/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=template&id=3bf010be&":
/*!************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=template&id=3bf010be& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3bf010be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=3bf010be& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Boards/Edit.vue?vue&type=template&id=3bf010be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3bf010be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_3bf010be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);