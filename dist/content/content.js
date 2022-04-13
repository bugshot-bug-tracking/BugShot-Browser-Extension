"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/dist/content/content"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Content.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Content.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _sidebar_Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/Sidebar.vue */ "./src/content/components/sidebar/Sidebar.vue");
/* harmony import */ var _listTab_Buglist_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listTab/Buglist.vue */ "./src/content/components/listTab/Buglist.vue");
/* harmony import */ var _infoTab_InfoTab_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infoTab/InfoTab.vue */ "./src/content/components/infoTab/InfoTab.vue");
/* harmony import */ var _formTab_FormTab_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formTab/FormTab.vue */ "./src/content/components/formTab/FormTab.vue");
/* harmony import */ var _overlay_Overlay_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlay/Overlay.vue */ "./src/content/components/overlay/Overlay.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Sidebar: _sidebar_Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Buglist: _listTab_Buglist_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    InfoTab: _infoTab_InfoTab_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    FormTab: _formTab_FormTab_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Overlay: _overlay_Overlay_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  setup: function setup() {
    var showSidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var showList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var showInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var showForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var showOverlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var bugInfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    var bugDetails = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});

    var setDefault = function setDefault() {
      showSidebar.value = true;
      showList.value = false;
      showInfo.value = false;
      showForm.value = false;
      showOverlay.value = false;
      bugInfo.value = {};
      bugDetails.value = {};
    };

    var addEvent = function addEvent() {
      setDefault(); // wait for the values to change to default then execute this

      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        showSidebar.value = false;
        showOverlay.value = true;
      }, 1);
    };

    var listEvent = function listEvent() {
      showList.value = !showList.value;
      if (showList.value === false) showInfo.value = false;
    };

    var infoEvent = function infoEvent(bug) {
      bugInfo.value = bug;
      if (showInfo.value !== true) showInfo.value = !showInfo.value; // console.info({ info: bug });
    };

    var closeInfo = function closeInfo() {
      showInfo.value = false;
    };

    var formOpen = function formOpen(details) {
      bugDetails.value.resolution = {
        width: screen.width * window.devicePixelRatio,
        height: screen.height * window.devicePixelRatio
      };
      console.log(bugDetails.value);
      showForm.value = true;
    };

    var openInfoTab = function openInfoTab(bug) {
      try {
        chrome.runtime.sendMessage({
          message: "getBug",
          payload: {
            bug: bug
          }
        }, function (response) {
          switch (response.message) {
            case "ok":
              emitter.emit("openSidebar");
              infoEvent(response.payload);
              break;

            case "error":
              throw response.error;
              break;
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      emitter.on("openInfoTab", openInfoTab);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      emitter.off("openInfoTab", openInfoTab);
    });
    return {
      showSidebar: showSidebar,
      showList: showList,
      showInfo: showInfo,
      showForm: showForm,
      bugInfo: bugInfo,
      showOverlay: showOverlay,
      bugDetails: bugDetails,
      setDefault: setDefault,
      addEvent: addEvent,
      listEvent: listEvent,
      infoEvent: infoEvent,
      closeInfo: closeInfo,
      formOpen: formOpen
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Marker.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Marker.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _util_calcMarkerCoords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/calcMarkerCoords */ "./src/content/util/calcMarkerCoords.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    marker: {
      type: Object
    },
    bug: {
      type: Object,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var coordonates = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      left: "0px",
      top: "0px"
    });

    var setCoords = function setCoords() {
      var _props$marker, _props$marker$attribu;

      if (!((_props$marker = props.marker) !== null && _props$marker !== void 0 && (_props$marker$attribu = _props$marker.attributes) !== null && _props$marker$attribu !== void 0 && _props$marker$attribu.target_full_selector)) return;
      var element = document.querySelector(props.marker.attributes.target_full_selector);
      if (!element) return;
      var current = element.getBoundingClientRect();
      var coords = (0,_util_calcMarkerCoords__WEBPACK_IMPORTED_MODULE_1__["default"])(props.marker.attributes.web_position_x, props.marker.attributes.web_position_y, props.marker.attributes.target_x, props.marker.attributes.target_y, props.marker.attributes.target_width, props.marker.attributes.target_height, props.marker.attributes.scroll_x, props.marker.attributes.scroll_y, current.x, current.y, current.width, current.height, window.scrollX, window.scrollY);
      coordonates.left = "".concat(coords.x, "px");
      coordonates.top = "".concat(coords.y, "px");
    };

    setCoords();
    window.addEventListener("resize", setCoords);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      window.removeEventListener("resize", setCoords);
    });

    var priorityIcon = function priorityIcon(value) {
      switch (value) {
        case 1:
          return chrome.runtime.getURL("/assets/marks/mark_min.svg");

        case 2:
          return chrome.runtime.getURL("/assets/marks/mark_normal.svg");

        case 3:
          return chrome.runtime.getURL("/assets/marks/mark_imp.svg");

        case 4:
          return chrome.runtime.getURL("/assets/marks/mark_crit.svg");

        default:
          return chrome.runtime.getURL("/assets/marks/mark_normal.svg");
      }
    };

    var __returned__ = {
      props: props,
      coordonates: coordonates,
      setCoords: setCoords,
      priorityIcon: priorityIcon,
      onUnmounted: vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      calcMarkerCoords: _util_calcMarkerCoords__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Markers.ce.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Markers.ce.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Marker_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marker.vue */ "./src/content/components/Marker.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var markers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    var getMarkers = function getMarkers() {
      try {
        chrome.runtime.sendMessage({
          message: "getMarkers"
        }, function (response) {
          switch (response.message) {
            case "ok":
              markers.value = response.payload.filter(function (x) {
                return x.attributes.markers.length > 0;
              });
              break;

            case "error":
              throw response.error;
              break;
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    getMarkers();

    var openInfo = function openInfo(bug) {
      emitter.emit("openInfoTab", bug);
    };

    var __returned__ = {
      markers: markers,
      getMarkers: getMarkers,
      openInfo: openInfo,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      Marker: _Marker_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/formTab/FormTab.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/formTab/FormTab.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _global_tab_Tab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/tab/Tab.vue */ "./src/content/components/global/tab/Tab.vue");
/* harmony import */ var _global_container_Container_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/container/Container.vue */ "./src/content/components/global/container/Container.vue");
/* harmony import */ var _global_state_State_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/state/State.vue */ "./src/content/components/global/state/State.vue");
/* harmony import */ var _global_attachment_Attachments_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/attachment/Attachments.vue */ "./src/content/components/global/attachment/Attachments.vue");
/* harmony import */ var _global_project_ProjectShow_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/project/ProjectShow.vue */ "./src/content/components/global/project/ProjectShow.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    State: _global_state_State_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Tab: _global_tab_Tab_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Container: _global_container_Container_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Attachments: _global_attachment_Attachments_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProjectShow: _global_project_ProjectShow_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  name: "FormTab",
  props: {
    bug: Object
  },
  emits: ["default"],
  setup: function setup(props, context) {
    // good for form reset, debatable if really needed
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var files64 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

    var submit = function submit() {
      props.bug.priority = Number(props.bug.priority);
      state.value = "loading";
      chrome.runtime.sendMessage({
        message: "sendBug",
        payload: props.bug
      }, function (response) {
        if (response.message === "error") {
          state.value = "error";
          setTimeout(function () {
            context.emit("default");
          }, 3800);
          console.error(response.error);
          return;
        }

        if (response.message !== "ok") {
          context.emit("default");
          console.error("Something went wrong with the the bug report!");
          return;
        }

        console.log(response.payload);
        console.log("Bug report sent!");
        submitAttachments(response.payload.id).then(function () {
          console.log("Bug attachments sent!");
          state.value = "success";
          setTimeout(function () {
            context.emit("default");
          }, 3800);
        });
      });
    };

    var submitAttachments = function submitAttachments(bug_id) {
      var filesPromises = files64.value.map(function (file) {
        return new Promise(function (resolve, reject) {
          chrome.runtime.sendMessage({
            message: "saveAttachment",
            payload: {
              data: file.attributes,
              bug_id: bug_id
            }
          }, function (response) {
            console.log(response);

            switch (response.message) {
              case "error":
                reject(response.error);

              case "ok":
                console.info("Attachments Uploaded.");
                resolve(response.payload);
                break;
            }
          });
        });
      });
      return Promise.all(filesPromises);
    }; // get a reference to the file uploaded via attachments component


    var localFiles = function localFiles(files) {
      files64.value = files.value;
    };

    return {
      state: state,
      submit: submit,
      localFiles: localFiles
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/AttachmentItem.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/AttachmentItem.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AttachmentItem",
  props: {
    item: Object,
    isRemote: Boolean
  },
  emits: ["download", "delete"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/Attachments.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/Attachments.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _AttachmentItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttachmentItem.vue */ "./src/content/components/global/attachment/AttachmentItem.vue");
/* harmony import */ var _state_State_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/State.vue */ "./src/content/components/global/state/State.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AttachmentItem: _AttachmentItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    State: _state_State_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  name: "Attachments",
  props: {
    bug: Object,
    isRemote: Boolean // this is intended to be used as a use-case flag, if the data is send to db directly or locally in RAM

  },
  emits: ["getLocal", "loading"],
  setup: function setup(props, context) {
    var files = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var attachments = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var err = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("");

    var emitLoading = function emitLoading(value) {
      context.emit("loading", value);
    };

    var toBase64 = function toBase64(file) {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
          return resolve(reader.result);
        };

        reader.onerror = function (error) {
          return reject(error);
        };
      });
    };

    var upload = function upload(event) {
      emitLoading(true);
      files.value = event.target.files;
      err.value = "";
      var fileInfos = [];
      var errFlag = false;

      if (files.value.length > 10 || attachments.value.length + files.value.length > 10) {
        err.value = "You are limited to a maximum of 10 files";
        emitLoading(false);
        return;
      }

      Array.prototype.forEach.call(files.value, function (file) {
        // if the file is bigger than 5 MiB
        if (file.size > 5 * (1 << 20)) {
          if (errFlag === false) {
            errFlag = true;
            err.value = "Following files are bigger than 5 MiB:\n";
          }

          err.value += " - ".concat(file.name, "\n");
          return;
        }

        fileInfos.push(file);
      });
      emitLoading(false);
      if (errFlag == true) return;
      if (props.isRemote) uploadRemote(fileInfos);else uploadLocal(fileInfos);
    };

    var uploadRemote = function uploadRemote(filesInfo) {
      if (filesInfo.length > 0) {
        emitLoading(true);
        filesInfo.forEach(function (file) {
          try {
            emitLoading(true);
            toBase64(file).then(function (data64) {
              chrome.runtime.sendMessage({
                message: "saveAttachment",
                payload: {
                  bug_id: props.bug.id,
                  data: {
                    designation: file.name,
                    base64: data64
                  }
                }
              }, function (response) {
                console.log(response);

                switch (response.message) {
                  case "error":
                    throw response.error;

                  case "ok":
                    emitLoading(false);
                    updateAttachments();
                    console.info("Attachment Uploaded.");
                    break;
                }
              });
            });
          } catch (error) {
            emitLoading(false);
            err.value = error;
            console.error(error);
          }
        });
      }
    };

    var uploadLocal = function uploadLocal(filesInfo) {
      try {
        emitLoading(true);
        var filesPromises = filesInfo.map(function (file) {
          return new Promise(function (resolve) {
            resolve(toBase64(file));
          });
        });
        Promise.all(filesPromises).then(function (files64) {
          for (var index = 0; index < files64.length; index++) {
            attachments.value.push({
              attributes: {
                designation: filesInfo[index].name,
                base64: files64[index]
              }
            });
          }

          emitLoading(false);
          context.emit("getLocal", attachments);
        });
      } catch (error) {
        emitLoading(false);
        console.error(error);
      }
    };

    var downloadFile = function downloadFile(item) {
      chrome.runtime.sendMessage({
        message: "downloadAttachment",
        payload: {
          attachment_id: item.id,
          bug_id: item.attributes.bug_id
        }
      }, function (response) {
        switch (response.message) {
          case "ok":
            console.info("Request download attachment: ok!");
            break;

          case "error":
            err.value = response.error;
            console.error(error);
            break;

          default:
            console.warn("Request download attachment: not working?");
            break;
        }
      });
    };

    var deleteFile = function deleteFile(item) {
      if (props.isRemote) deleteRemote(item);else deleteLocal(item);
    };

    var deleteRemote = function deleteRemote(item) {
      emitLoading(true);
      chrome.runtime.sendMessage({
        message: "deleteAttachment",
        payload: {
          attachment_id: item.id
        }
      }, function (response) {
        emitLoading(false);

        switch (response.message) {
          case "ok":
            console.info("Request delete attachment: ok!");
            updateAttachments();
            break;

          case "error":
            err.value = response.error;
            console.error(error);
            break;

          default:
            console.warn("Request delete attachment: not working?");
            break;
        }
      });
    };

    var deleteLocal = function deleteLocal(item) {
      attachments.value.splice(attachments.value.indexOf(item), 1);
    };

    var updateAttachments = function updateAttachments() {
      err.value = "";
      if (props.isRemote === false) return;
      emitLoading(true);
      chrome.runtime.sendMessage({
        message: "getAttachments",
        payload: {
          bug_id: props.bug.id
        }
      }, function (response) {
        emitLoading(false);

        switch (response.message) {
          case "ok":
            console.info("Request get attachments: ok!");
            attachments.value = response.payload;
            break;

          case "error":
            err.value = response.error;
            console.error(error);
            break;

          default:
            console.warn("Request get attachments: not working?");
            break;
        }
      });
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (props.isRemote) updateAttachments();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(props, updateAttachments);
    return {
      files: files,
      attachments: attachments,
      err: err,
      upload: upload,
      downloadFile: downloadFile,
      deleteFile: deleteFile
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/container/Container.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/container/Container.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Container"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/modal/Modal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/modal/Modal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Modal",
  emits: ["close"],
  props: {
    show: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/project/ProjectShow.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/project/ProjectShow.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _state_State_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/State.vue */ "./src/content/components/global/state/State.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    State: _state_State_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "ProjectShow",
  emits: ["update"],
  setup: function setup(props, context) {
    var project = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)({});
    var show = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(true);

    var update = function update() {
      show.value = true;
      chrome.runtime.sendMessage({
        message: "currentProject"
      }, function (response) {
        show.value = false;

        switch (response.message) {
          case "error":
            console.error(response.error);
            break;

          case "ok":
            project.value = response.payload;
            break;
        }
      });
    };

    var msgUpdate = function msgUpdate() {
      update();
      context.emit("update");
    };

    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.onMounted)(function () {
      update();
      emitter.on("updateProject", msgUpdate);
    });
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.onUnmounted)(function () {
      emitter.off("updateProject", msgUpdate);
    });
    return {
      project: project,
      show: show
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/state/State.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/state/State.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "State",
  props: {
    state: String,
    show: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/tab/Tab.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/tab/Tab.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Tab"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/InfoTab.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/InfoTab.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _global_tab_Tab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/tab/Tab.vue */ "./src/content/components/global/tab/Tab.vue");
/* harmony import */ var _global_container_Container_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/container/Container.vue */ "./src/content/components/global/container/Container.vue");
/* harmony import */ var _info_Info_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info/Info.vue */ "./src/content/components/infoTab/info/Info.vue");
/* harmony import */ var _global_attachment_Attachments_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/attachment/Attachments.vue */ "./src/content/components/global/attachment/Attachments.vue");
/* harmony import */ var _global_state_State_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/state/State.vue */ "./src/content/components/global/state/State.vue");
/* harmony import */ var _comments_Comments_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments/Comments.vue */ "./src/content/components/infoTab/comments/Comments.vue");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Tab: _global_tab_Tab_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Container: _global_container_Container_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Info: _info_Info_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Attachments: _global_attachment_Attachments_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    State: _global_state_State_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Comments: _comments_Comments_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  name: "InfoTab",
  props: {
    bug: Object
  },
  emits: ["close", "deleted"],
  setup: function setup(props, context) {
    var isLoading = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_6__.reactive)({
      info: true,
      attachments: true,
      comments: true
    });
    var lFlag = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_6__.ref)(true);
    var tabLoading = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_6__.computed)(function () {
      if (!isLoading.info && !isLoading.attachments && !isLoading.comments && lFlag) {
        lFlag.value = false;
        return lFlag.value;
      }

      return lFlag.value;
    });

    var setLoading = function setLoading(value, place) {
      switch (place) {
        case "info":
          isLoading.info = value;
          break;

        case "attachments":
          isLoading.attachments = value;
          break;

        case "comments":
          isLoading.comments = value;
          break;
      }
    };

    var deleteBug = function deleteBug() {
      try {
        chrome.runtime.sendMessage({
          message: "deleteBug",
          payload: {
            bug: props.bug
          }
        }, function (response) {
          switch (response.message) {
            case "ok":
              console.info("Request delete bug: ok!");
              context.emit("close"); // send an event to the list component to update the list

              emitter.emit("deleted");
              break;

            case "error":
              throw response.error;
              break;
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_7__.watch)(props, function () {
      // if the bug details change set the state to loading on the tab
      isLoading.info = true;
      isLoading.attachments = true;
      isLoading.comments = true;
      lFlag.value = true;
    });
    return {
      isLoading: isLoading,
      tabLoading: tabLoading,
      setLoading: setLoading,
      deleteBug: deleteBug
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/Comments.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/Comments.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _message_Message_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message/Message.vue */ "./src/content/components/infoTab/comments/message/Message.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Message: _message_Message_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: "Comments",
  props: {
    bug: Object
  },
  emits: ["loading"],
  setup: function setup(props, context) {
    var chars = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_2__.ref)("");
    var messages = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
    var msgs = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_2__.ref)(null);
    var bottom = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_2__.ref)(null);

    var emitLoading = function emitLoading(value) {
      context.emit("loading", value);
    };

    var update = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                emitLoading(true);
                _context.next = 4;
                return new Promise(function (resolve) {
                  chrome.runtime.sendMessage({
                    message: "getComments",
                    payload: {
                      bug_id: props.bug.id
                    }
                  }, resolve);
                });

              case 4:
                response = _context.sent;
                _context.t0 = response.message;
                _context.next = _context.t0 === "error" ? 8 : _context.t0 === "ok" ? 10 : 18;
                break;

              case 8:
                emitLoading(false);
                throw response.error;

              case 10:
                console.info("Request get comments: ok!");
                messages.value = [];
                _context.next = 14;
                return new Promise(function (resolve) {
                  chrome.runtime.sendMessage({
                    message: "user"
                  }, resolve);
                });

              case 14:
                user = _context.sent;
                response.payload.forEach(function (comment) {
                  messages.value.push({
                    id: comment.id,
                    content: comment.attributes.content,
                    timestamp: comment.attributes.created_at,
                    creator: {
                      first_name: comment.attributes.user.first_name,
                      last_name: comment.attributes.user.last_name
                    },
                    sender: comment.attributes.user.id === user.payload.id ? 0 : 1
                  });
                });
                emitLoading(false);
                return _context.abrupt("break", 18);

              case 18:
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t1 = _context["catch"](0);
                emitLoading(false);
                console.error(_context.t1);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 20]]);
      }));

      return function update() {
        return _ref.apply(this, arguments);
      };
    }();

    var postComment = function postComment() {
      try {
        emitLoading(true);
        chrome.runtime.sendMessage({
          message: "postComment",
          payload: {
            bug_id: props.bug.id,
            content: chars.value
          }
        }, function (response) {
          emitLoading(false);

          switch (response.message) {
            case "error":
              throw response.error;

            case "ok":
              console.info("Comment post request: ok!");
              chars.value = "";
              update();
              break;
          }
        });
      } catch (error) {
        emitLoading(false);
        console.error(error);
      }
    };

    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.onMounted)(update);
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.watch)(props, update);
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.watch)(messages, function () {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.nextTick)(function () {
        var _msgs$value, _msgs$value2;

        (_msgs$value = msgs.value) === null || _msgs$value === void 0 ? void 0 : _msgs$value.parentNode.scrollBy({
          top: (_msgs$value2 = msgs.value) === null || _msgs$value2 === void 0 ? void 0 : _msgs$value2.scrollHeight,
          behavior: "smooth"
        });
      });
    }, {
      deep: true
    });
    return {
      messages: messages,
      chars: chars,
      bottom: bottom,
      msgs: msgs,
      postComment: postComment,
      update: update
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/message/Message.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/message/Message.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Message",
  props: {
    msg: Object
  },
  setup: function setup() {
    var date = function date(dateString) {
      if (dateString === "" || dateString === null) return "";
      if (dateString.slice(-1).toUpperCase() !== "Z") dateString += "Z";
      return new Date(dateString).toLocaleString();
    };

    return {
      date: date
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/info/Info.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/info/Info.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _screenshot_Screenshot_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screenshot/Screenshot.vue */ "./src/content/components/infoTab/screenshot/Screenshot.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Screenshot: _screenshot_Screenshot_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: "Info",
  props: {
    bug: Object
  },
  emits: ["close", "loading"],
  setup: function setup(props, context) {
    var open = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var emitLoading = function emitLoading(value) {
      context.emit("loading", value);
    };

    var date = function date(dateString) {
      if (dateString === "" || dateString === null) return "";
      if (dateString.slice(-1).toUpperCase() !== "Z") dateString += "Z";
      return new Date(dateString).toLocaleString();
    };

    return {
      open: open,
      date: date,
      emitLoading: emitLoading
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _global_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/modal/Modal.vue */ "./src/content/components/global/modal/Modal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Modal: _global_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: "Screenshot",
  props: {
    bug: {
      required: true,
      type: Object
    }
  },
  emits: ["loading"],
  setup: function setup(props, context) {
    var screenshots = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var counter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var bigScreen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var mark = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      show: true,
      x: 0,
      y: 0
    }); // fixes the problem of renedering a null object

    var toggleModal = function toggleModal() {
      if (screenshots.value[0] == null) {
        modal.value = false;
        return;
      }

      modal.value = !modal.value;
    };

    var setLoading = function setLoading(value) {
      context.emit("loading", value);
    };

    var previous = function previous() {
      if (counter.value > 0) counter.value--;
    };

    var next = function next() {
      if (counter.value < screenshots.value.length - 1) counter.value++;
    };

    var update = function update() {
      setLoading(true);
      chrome.runtime.sendMessage({
        message: "getScreenshots",
        payload: {
          bug_id: props.bug.id
        }
      }, function (response) {
        setLoading(false);

        switch (response.message) {
          case "error":
            throw response.error;

          case "ok":
            screenshots.value = response.payload;
            console.info("Request get screenshots: ok!");
            break;
        }
      });
    };

    var thumbnail = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (screenshots.value.length > 0) return atob(screenshots.value[0].attributes.base64);
      return "/";
    });
    var showImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (counter.value >= screenshots.value.length) counter.value = 0;
      var img = screenshots.value[counter.value]; // wait untill rendered to get image sizes

      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
        // get points relative to the original image to put the marker
        mark.x = img.attributes.position_x <= 0 && bigScreen.value.naturalWidth <= 0 ? 0 : img.attributes.position_x / bigScreen.value.naturalWidth * 100;
        mark.y = img.attributes.position_y <= 0 && bigScreen.value.naturalHeight <= 0 ? 0 : img.attributes.position_y / bigScreen.value.naturalHeight * 100;
      });
      return atob(img.attributes.base64);
    });
    var priority = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      switch (Number(props.bug.attributes.priority.id)) {
        case 1:
          return "minor";

        case 2:
          return "normal";

        case 3:
          return "important";

        case 4:
          return "critical";

        default:
          return "normal";
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      update();
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(props, update);
    return {
      screenshots: screenshots,
      modal: modal,
      thumbnail: thumbnail,
      counter: counter,
      bigScreen: bigScreen,
      mark: mark,
      showImage: showImage,
      priority: priority,
      previous: previous,
      next: next,
      toggleModal: toggleModal
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugCard.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugCard.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BugCard",
  props: {
    bug: Object,
    status_name: String
  },
  emits: ["info"],
  setup: function setup(props, context) {
    var date = function date(dateString) {
      if (dateString === "" || dateString === null) return "";
      if (dateString.slice(-1).toUpperCase() !== "Z") dateString += "Z";
      return new Date(dateString).toLocaleString();
    };

    var info = function info() {
      props.bug.attributes.status_name = props.status_name;
      context.emit("info", props.bug);
    };

    return {
      date: date,
      info: info
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugGroup.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugGroup.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BugGroup",
  props: {
    name: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/Buglist.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/Buglist.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _global_tab_Tab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/tab/Tab.vue */ "./src/content/components/global/tab/Tab.vue");
/* harmony import */ var _global_state_State_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/state/State.vue */ "./src/content/components/global/state/State.vue");
/* harmony import */ var _BugGroup_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BugGroup.vue */ "./src/content/components/listTab/BugGroup.vue");
/* harmony import */ var _BugCard_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BugCard.vue */ "./src/content/components/listTab/BugCard.vue");
/* harmony import */ var _global_project_ProjectShow_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/project/ProjectShow.vue */ "./src/content/components/global/project/ProjectShow.vue");
/* harmony import */ var _global_container_Container_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/container/Container.vue */ "./src/content/components/global/container/Container.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Buglist",
  components: {
    Tab: _global_tab_Tab_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    State: _global_state_State_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BugGroup: _BugGroup_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BugCard: _BugCard_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProjectShow: _global_project_ProjectShow_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Container: _global_container_Container_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  emits: ["info"],
  setup: function setup() {
    var statuses = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    var update = function update() {
      if (state.value === "loading") return;
      state.value = "loading";
      chrome.runtime.sendMessage({
        message: "getStatusesAndBugs"
      }, function (response) {
        state.value = null;
        console.log(response);

        if (response.message === "error") {
          state.value = "error";
          console.error(response.error);
          return;
        }

        if (response.message !== "ok") {
          console.error("What was the message?");
          return;
        }

        statuses.value = response.payload;
      });
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      update();
      emitter.on("deleted", update);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      emitter.off("deleted", update);
    });
    return {
      statuses: statuses,
      state: state,
      update: update
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/overlay/Overlay.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/overlay/Overlay.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _util_unique_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/unique-selector */ "./src/content/util/unique-selector/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Overlay",
  props: ["details", "default", "sidebar"],
  setup: function setup(props, context) {
    var lock = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var showOverlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var mark = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      on: false,
      x: 0,
      y: 0
    });

    var marked = function marked(event) {
      event.stopImmediatePropagation(); // Prevent more than 1 click event while registering a bug report

      if (lock.value) return;
      lock.value = true; // hide overlay for screenshot

      showOverlay.value = false;
      setTimeout(function () {
        // Take screenshot
        chrome.runtime.sendMessage({
          message: "takeScreenshot"
        }, function (response) {
          var generateQuerySelector = function generateQuerySelector(el) {
            if (el.tagName.toLowerCase() == "html") return "html";
            var str = el.tagName.toLowerCase();
            str += el.id != "" ? "#" + el.id : "";

            if ((typeof el.className === "string" || el.className instanceof String) && el.className !== "") {
              var classes = el.className.split(/\s/);

              for (var i = 0; i < classes.length; i++) {
                str += "." + classes[i];
              }
            }

            return generateQuerySelector(el.parentNode) + " > " + str;
          };

          props.details.selector = generateQuerySelector(document.elementFromPoint(event.clientX, event.clientY)); // Show overlay again

          showOverlay.value = true;

          if (response.message === "error") {
            context.emit("default");
            console.error(response.error);
            return;
          }

          if (response.message !== "ok") {
            context.emit("default");
            console.error("Something went wrong with the screenshot!");
            return;
          }

          console.log("Screenshot taken!"); // Save screenshot in memory

          props.details.screenshot = response.payload;
          props.details.priority = 2; // Show sidebar again

          context.emit("sidebar"); // coordinates relative to what user sees on screen

          var clientX = event.clientX;
          var clientY = event.clientY; // coordinates relative to the top of the page(it considers scroll)
          // ? this will be usefull when adding a mark of bug later and well need absolute coordonates to page position

          var pageX = event.pageX;
          var pageY = event.pageY;
          mark.value = {
            on: true,
            x: clientX,
            y: clientY
          }; // NEXT open bug form

          props.details.mark_coords = {
            x: clientX,
            y: clientY,
            wx: pageX,
            wy: pageY
          };
          var element = document.elementFromPoint(event.clientX, event.clientY);
          props.details.markers = [{
            position_x: clientX,
            position_y: clientY,
            web_position_x: pageX,
            web_position_y: pageY,
            target_x: element.getBoundingClientRect().x,
            target_y: element.getBoundingClientRect().y,
            target_height: element.getBoundingClientRect().height,
            target_width: element.getBoundingClientRect().width,
            scroll_x: window.scrollX,
            scroll_y: window.scrollY,
            screenshot_height: window.innerHeight,
            screenshot_width: window.innerWidth,
            target_full_selector: (0,_util_unique_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(element, {
              fromRoot: true
            }),
            target_short_selector: (0,_util_unique_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(element),
            target_html: element.outerHTML < 2 << 15 ? element.outerHTML : element.outerHTML.substring(0, (2 << 15) - 10)
          }];
          context.emit("formOpen");
        });
      }, 100);
    };

    var priority = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      switch (Number(props.details.priority)) {
        case 1:
          return "minor";

        case 2:
          return "normal";

        case 3:
          return "important";

        case 4:
          return "critical";

        default:
          return "normal";
      }
    });
    return {
      showOverlay: showOverlay,
      mark: mark,
      priority: priority,
      marked: marked
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/sidebar/Sidebar.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/sidebar/Sidebar.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Sidebar",
  emits: ["default", "list", "add"],
  setup: function setup(props, context) {
    var open = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var logoClick = function logoClick() {
      open.value = !open.value;
      if (open.value === false) // trigger default state if sidebar is closed
        context.emit("default");
    };

    var adminButtonClick = function adminButtonClick(event) {
      chrome.runtime.sendMessage({
        message: "openAdminPannel"
      }, function (response) {
        if (response.message === "ok") console.log("Oppened admin pannel in new tab.");
      });
    };

    var projectButtonClick = function projectButtonClick(event) {
      chrome.runtime.sendMessage({
        message: "openProjectPannel"
      }, function (response) {
        if (response.message === "ok") console.log("Oppened project pannel in new tab.");
      });
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      emitter.on("openSidebar", openSidebar);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
      emitter.off("openSidebar", openSidebar);
    });

    var openSidebar = function openSidebar() {
      open.value = true;
    };

    return {
      open: open,
      logoClick: logoClick,
      adminButtonClick: adminButtonClick,
      projectButtonClick: projectButtonClick
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Content.vue?vue&type=template&id=d3863162":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Content.vue?vue&type=template&id=d3863162 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "bugshot-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Sidebar");

  var _component_Buglist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Buglist");

  var _component_InfoTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoTab");

  var _component_FormTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormTab");

  var _component_Overlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Overlay");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar, {
    onDefault: $setup.setDefault,
    onAdd: $setup.addEvent,
    onList: $setup.listEvent
  }, null, 8
  /* PROPS */
  , ["onDefault", "onAdd", "onList"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.showSidebar]]), $setup.showList ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Buglist, {
    key: 0,
    onInfo: $setup.infoEvent
  }, null, 8
  /* PROPS */
  , ["onInfo"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.showInfo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_InfoTab, {
    key: 1,
    bug: $setup.bugInfo,
    onClose: $setup.closeInfo
  }, null, 8
  /* PROPS */
  , ["bug", "onClose"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.showForm ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FormTab, {
    key: 2,
    bug: $setup.bugDetails,
    onDefault: $setup.setDefault
  }, null, 8
  /* PROPS */
  , ["bug", "onDefault"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.showOverlay ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Overlay, {
    key: 3,
    details: $setup.bugDetails,
    onSidebar: _cache[0] || (_cache[0] = function ($event) {
      return $setup.showSidebar = true;
    }),
    onDefault: $setup.setDefault,
    onFormOpen: $setup.formOpen
  }, null, 8
  /* PROPS */
  , ["details", "onDefault", "onFormOpen"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Marker.vue?vue&type=template&id=a9c7b558":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Marker.vue?vue&type=template&id=a9c7b558 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var _hoisted_1 = ["src"];
var _hoisted_2 = {
  "class": "wrapper"
};
var _hoisted_3 = {
  "class": "container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "marker",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(_objectSpread({}, $setup.coordonates))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "mark", {}, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: $setup.priorityIcon($props.bug.priority),
      alt: "marker"
    }, null, 8
    /* PROPS */
    , _hoisted_1)];
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.designation), 1
  /* TEXT */
  )])])])], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Markers.ce.vue?vue&type=template&id=691d7ede":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Markers.ce.vue?vue&type=template&id=691d7ede ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.markers.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.markers, function (item, index) {
    var _item$attributes;

    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_item$attributes = item.attributes) === null || _item$attributes === void 0 ? void 0 : _item$attributes.markers, function (marker, index2) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Marker"], {
        key: index2,
        bug: {
          id: item.id,
          status_id: item.attributes.status.id,
          designation: item.attributes.designation,
          priority: item.attributes.priority_id
        },
        marker: marker,
        onClickCapture: function onClickCapture($event) {
          return $setup.openInfo({
            id: item.id,
            status_id: item.attributes.status.id
          });
        }
      }, null, 8
      /* PROPS */
      , ["bug", "marker", "onClickCapture"]);
    }), 128
    /* KEYED_FRAGMENT */
    ))]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/formTab/FormTab.vue?vue&type=template&id=486c9c29":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/formTab/FormTab.vue?vue&type=template&id=486c9c29 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  style: {
    "text-align": "center"
  }
}, "New Bug Report", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "form-group"
};
var _hoisted_3 = {
  "class": "form-group"
};
var _hoisted_4 = {
  "class": "form-group d-flex justify-content-evenly mb-lg-2 flex-wrap"
};
var _hoisted_5 = {
  "class": "form-check form-check-inline"
};
var _hoisted_6 = {
  "class": "form-check form-check-inline"
};
var _hoisted_7 = {
  "class": "form-check form-check-inline"
};
var _hoisted_8 = {
  "class": "form-check form-check-inline"
};
var _hoisted_9 = {
  "class": "d-inline-flex justify-content-evenly my-2"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  id: "form-submit",
  type: "submit",
  "class": "btn btn-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Report Bug!")], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Cancel", -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_11];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_State = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("State");

  var _component_ProjectShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProjectShow");

  var _component_Container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Container");

  var _component_Attachments = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Attachments");

  var _component_Tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Tab");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Tab, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_State, {
        show: $setup.state !== null,
        state: $setup.state
      }, null, 8
      /* PROPS */
      , ["show", "state"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Container, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProjectShow)];
        }),
        _: 1
        /* STABLE */

      }), $setup.state === null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Container, {
        key: 0
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
            id: "bug-form",
            onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
              return $setup.submit && $setup.submit.apply($setup, arguments);
            }, ["prevent"]))
          }, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "text",
            "class": "form-control",
            id: "bug-name",
            placeholder: "Enter bug name.",
            required: "",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $props.bug.name = $event;
            }),
            minlength: "1",
            maxlength: "50"
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.bug.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
            "class": "form-control",
            id: "bug-description",
            rows: "3",
            placeholder: "Describe the bug.",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $props.bug.description = $event;
            }),
            maxlength: "1500"
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.bug.description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            "class": "form-check-input option critical",
            type: "radio",
            name: "inlineRadioOptions",
            value: "4",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $props.bug.priority = $event;
            })
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $props.bug.priority]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            "class": "form-check-input option important",
            type: "radio",
            name: "inlineRadioOptions",
            value: "3",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $props.bug.priority = $event;
            })
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $props.bug.priority]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            "class": "form-check-input option normal",
            type: "radio",
            name: "inlineRadioOptions",
            value: "2",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $props.bug.priority = $event;
            }),
            checked: ""
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $props.bug.priority]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            "class": "form-check-input option minoir",
            type: "radio",
            name: "inlineRadioOptions",
            value: "1",
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $props.bug.priority = $event;
            })
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $props.bug.priority]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            id: "form-reset",
            type: "reset",
            "class": "btn",
            onClick: _cache[6] || (_cache[6] = function ($event) {
              return _ctx.$emit('default');
            })
          }, _hoisted_12)])], 32
          /* HYDRATE_EVENTS */
          )];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.state === null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Container, {
        key: 1
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Attachments, {
            bug: $props.bug,
            isRemote: false,
            onGetLocal: $setup.localFiles
          }, null, 8
          /* PROPS */
          , ["bug", "onGetLocal"])];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/AttachmentItem.vue?vue&type=template&id=2f467a70":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/AttachmentItem.vue?vue&type=template&id=2f467a70 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "file-name"
};
var _hoisted_2 = {
  "class": "controls"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.attributes.designation), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$props.isRemote ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "btn download",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('download', $props.item);
    })
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "btn delete",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('delete', $props.item);
    })
  })])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/Attachments.vue?vue&type=template&id=16bd5cf4":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/Attachments.vue?vue&type=template&id=16bd5cf4 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "attachments"
};
var _hoisted_2 = {
  "class": "header"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "title"
}, "Attachments", -1
/* HOISTED */
);

var _hoisted_4 = {
  id: "file-label"
};
var _hoisted_5 = {
  key: 0,
  "class": "error"
};
var _hoisted_6 = {
  style: {
    "white-space": "pre-line"
  }
};
var _hoisted_7 = {
  "class": "files"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AttachmentItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AttachmentItem");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    style: {
      "width": "0",
      "height": "0"
    },
    multiple: "",
    onChange: _cache[0] || (_cache[0] = function () {
      return $setup.upload && $setup.upload.apply($setup, arguments);
    })
  }, null, 32
  /* HYDRATE_EVENTS */
  )])]), $setup.err != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.err), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.attachments, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "item",
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AttachmentItem, {
      item: item,
      isRemote: $props.isRemote,
      onDownload: $setup.downloadFile,
      onDelete: $setup.deleteFile
    }, null, 8
    /* PROPS */
    , ["item", "isRemote", "onDownload", "onDelete"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/container/Container.vue?vue&type=template&id=32fa5161":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/container/Container.vue?vue&type=template&id=32fa5161 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/modal/Modal.vue?vue&type=template&id=6c2e7fb9":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/modal/Modal.vue?vue&type=template&id=6c2e7fb9 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "modal-mask"
};
var _hoisted_2 = {
  "class": "modal-container"
};
var _hoisted_3 = {
  "class": "modal-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    duration: 100,
    name: "modal"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$props.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "modal-wrapper",
        onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return _ctx.$emit('close');
        }, ["self"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-modal-close",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return _ctx.$emit('close');
        })
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "extra")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 3
    /* FORWARDED */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/project/ProjectShow.vue?vue&type=template&id=22fdaba4":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/project/ProjectShow.vue?vue&type=template&id=22fdaba4 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "project-grid-container"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "top"
}, "Current Project", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "company"
}, "Company:", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "company-name"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "project"
}, "Project:", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "project-name"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_State = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("State");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_State, {
    show: $setup.show,
    state: "mini-loading",
    style: {
      "z-index": "1"
    }
  }, null, 8
  /* PROPS */
  , ["show"]), $setup.project.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.project.attributes.company.attributes.designation), 1
  /* TEXT */
  ), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.project.attributes.designation), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/state/State.vue?vue&type=template&id=b13716fe":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/state/State.vue?vue&type=template&id=b13716fe ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "state-wraper"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "logo"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "message"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["state", $props.state])
  }, _hoisted_4, 2
  /* CLASS */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/tab/Tab.vue?vue&type=template&id=00060009":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/tab/Tab.vue?vue&type=template&id=00060009 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "tab"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/InfoTab.vue?vue&type=template&id=e20e0056":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/InfoTab.vue?vue&type=template&id=e20e0056 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "delete-btn-wrapper"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "delete-icon"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Delete Bug ", -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_State = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("State");

  var _component_Info = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Info");

  var _component_Container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Container");

  var _component_Attachments = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Attachments");

  var _component_Comments = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Comments");

  var _component_Tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Tab");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Tab, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_State, {
        state: 'loading',
        show: $setup.tabLoading,
        style: {
          "z-index": "1000"
        }
      }, null, 8
      /* PROPS */
      , ["show"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Container, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_State, {
            state: 'mini-loading',
            show: $setup.isLoading.info
          }, null, 8
          /* PROPS */
          , ["show"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Info, {
            bug: $props.bug,
            onClose: _cache[0] || (_cache[0] = function ($event) {
              return _ctx.$emit('close');
            }),
            onLoading: _cache[1] || (_cache[1] = function ($event) {
              return $setup.setLoading($event, 'info');
            })
          }, null, 8
          /* PROPS */
          , ["bug"])];
        }),
        _: 1
        /* STABLE */

      }, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.tabLoading]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Container, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_State, {
            state: 'mini-loading',
            show: $setup.isLoading.attachments
          }, null, 8
          /* PROPS */
          , ["show"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Attachments, {
            bug: $props.bug,
            isRemote: true,
            onLoading: _cache[2] || (_cache[2] = function ($event) {
              return $setup.setLoading($event, 'attachments');
            })
          }, null, 8
          /* PROPS */
          , ["bug"])];
        }),
        _: 1
        /* STABLE */

      }, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.tabLoading]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Container, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_State, {
            state: 'mini-loading',
            show: $setup.isLoading.comments
          }, null, 8
          /* PROPS */
          , ["show"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Comments, {
            bug: $props.bug,
            onLoading: _cache[3] || (_cache[3] = function ($event) {
              return $setup.setLoading($event, 'comments');
            })
          }, null, 8
          /* PROPS */
          , ["bug"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "btn delete-bug-btn",
        onClick: _cache[4] || (_cache[4] = function () {
          return $setup.deleteBug && $setup.deleteBug.apply($setup, arguments);
        })
      }, _hoisted_4)], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.tabLoading]])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/Comments.vue?vue&type=template&id=02535c3d":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/Comments.vue?vue&type=template&id=02535c3d ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "comments-component"
};
var _hoisted_2 = {
  "class": "comments-top"
};
var _hoisted_3 = {
  "class": "header"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Comments", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "comments-center"
};
var _hoisted_6 = {
  key: 0,
  "class": "content",
  ref: "msgs"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "comments-bottom"
};
var _hoisted_9 = {
  "class": "comments-bottom-header"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Add comment", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Message");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "btn refresh-button",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.update && $setup.update.apply($setup, arguments);
    })
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [$setup.messages.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.messages, function (msg) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Message, {
      key: msg.id,
      msg: msg
    }, null, 8
    /* PROPS */
    , ["msg"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), _hoisted_7], 512
  /* NEED_PATCH */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.chars.length) + " / 250", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "comment-input",
    rows: "3",
    maxlength: "250",
    placeholder: "Write comment...",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.chars = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.chars]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "btn comment-send-button",
    onClick: _cache[2] || (_cache[2] = function () {
      return $setup.postComment && $setup.postComment.apply($setup, arguments);
    })
  }, " Add Comment ")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/message/Message.vue?vue&type=template&id=9ec17b74":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/message/Message.vue?vue&type=template&id=9ec17b74 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content"
};
var _hoisted_2 = {
  "class": "message"
};
var _hoisted_3 = {
  "class": "timestamp"
};
var _hoisted_4 = {
  "class": "creator"
};
var _hoisted_5 = {
  "class": "avatar"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["message-wrapper", $props.msg.sender === 0 ? "self" : "other"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.msg.content), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.date($props.msg.timestamp)), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.msg.creator.first_name[0] + $props.msg.creator.last_name[0]), 1
  /* TEXT */
  )])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/info/Info.vue?vue&type=template&id=33f07bfd":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/info/Info.vue?vue&type=template&id=33f07bfd ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "info",
  "class": "d-flex flex-column no-wrap"
};
var _hoisted_2 = {
  "class": "justify-content-between mb-2"
};
var _hoisted_3 = {
  "class": "title"
};
var _hoisted_4 = {
  "class": "content"
};
var _hoisted_5 = {
  "class": "id"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, " ID: ", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "content"
};
var _hoisted_8 = {
  "class": "justify-content-between align-items-start"
};
var _hoisted_9 = {
  "class": "creator"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Creator:", -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "content"
};
var _hoisted_12 = {
  "class": "date"
};
var _hoisted_13 = {
  "class": "content"
};
var _hoisted_14 = {
  "class": "screenshot"
};
var _hoisted_15 = {
  "class": "url"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "URL:", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "content"
};
var _hoisted_18 = ["href"];
var _hoisted_19 = {
  "class": "description"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Description:", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "content"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Technical information:", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", null, null, -1
/* HOISTED */
);

var _hoisted_24 = [_hoisted_22, _hoisted_23];
var _hoisted_25 = {
  "class": "technical-info"
};
var _hoisted_26 = {
  "class": "os"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Operating System:", -1
/* HOISTED */
);

var _hoisted_28 = {
  "class": "content"
};
var _hoisted_29 = {
  "class": "browser"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Browser:", -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "content"
};
var _hoisted_32 = {
  "class": "selector"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Selector:", -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "content"
};
var _hoisted_35 = {
  "class": "resolution"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Resolution:", -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "content"
};
var _hoisted_38 = {
  "class": "grid1x2 my-3"
};
var _hoisted_39 = {
  "class": "deadline grid1x2"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Priority:", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "grid1x2 status"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Status:", -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "content status"
};
var _hoisted_44 = {
  "class": "deadline"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Deadline:", -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Screenshot = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Screenshot");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.designation), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "btn close-button",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('close');
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.id), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("".concat($props.bug.attributes.creator.attributes.first_name, " ").concat($props.bug.attributes.creator.attributes.last_name)), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.date($props.bug.attributes.created_at)), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Screenshot, {
    bug: $props.bug,
    onLoading: $setup.emitLoading
  }, null, 8
  /* PROPS */
  , ["bug", "onLoading"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $props.bug.url
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.url), 9
  /* TEXT, PROPS */
  , _hoisted_18)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.description), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "technical",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      open: $setup.open
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "technical-label d-inline-flex justify-content-between",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.open = !$setup.open;
    })
  }, _hoisted_24), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.operating_system), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.browser), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.selector), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.resolution), 1
  /* TEXT */
  )])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["content priority", 'p' + $props.bug.attributes.priority.id])
  }, null, 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.status_name), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.deadline ? $setup.date($props.bug.attributes.deadline) : "No deadline"), 1
  /* TEXT */
  )])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=template&id=6d200986":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=template&id=6d200986 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["src"];

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "enlarge"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = ["src"];
var _hoisted_4 = {
  "class": "controls-bottom"
};
var _hoisted_5 = {
  "class": "controls"
};
var _hoisted_6 = {
  key: 0,
  "class": "images-counter"
};
var _hoisted_7 = {
  key: 0,
  "class": "controls-side"
};
var _hoisted_8 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "thumbnail-wraper",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.toggleModal && $setup.toggleModal.apply($setup, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "thumbnail",
    src: $setup.thumbnail,
    alt: "Screenshots"
  }, null, 8
  /* PROPS */
  , _hoisted_1), _hoisted_2]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Modal, {
    show: $setup.modal,
    onClose: _cache[4] || (_cache[4] = function ($event) {
      return $setup.modal = !$setup.modal;
    }),
    "class": "big-screenshot"
  }, {
    extra: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "btn btn-hide-mark",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.mark.show = !$setup.mark.show;
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.mark.show ? "Hide" : "Show") + " mark ", 1
      /* TEXT */
      ), $setup.screenshots.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.counter + 1) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.screenshots.length), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), $setup.screenshots.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [$setup.counter > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        "class": "btn btn-side-arrow arrow-left",
        onClick: _cache[2] || (_cache[2] = function () {
          return $setup.previous && $setup.previous.apply($setup, arguments);
        })
      })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8)), $setup.counter < $setup.screenshots.length - 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 2,
        "class": "btn btn-side-arrow arrow-right",
        onClick: _cache[3] || (_cache[3] = function () {
          return $setup.next && $setup.next.apply($setup, arguments);
        })
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $setup.showImage,
        alt: "Screenshots",
        ref: "bigScreen"
      }, null, 8
      /* PROPS */
      , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["marker", $setup.priority]),
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          left: $setup.mark.x + '%',
          top: $setup.mark.y + '%'
        })
      }, null, 6
      /* CLASS, STYLE */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.mark.show]])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugCard.vue?vue&type=template&id=788c51fc":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugCard.vue?vue&type=template&id=788c51fc ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bug-card"
};
var _hoisted_2 = {
  "class": "card"
};
var _hoisted_3 = {
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "card-text d-flex justify-content-between"
};
var _hoisted_5 = {
  "class": "bug-deadline"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card-header bug-title",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.info && $setup.info.apply($setup, arguments);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.designation), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.attributes.deadline ? $setup.date($props.bug.attributes.deadline) : "No deadline"), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bug priority", 'p' + $props.bug.attributes.priority.id])
  }, null, 2
  /* CLASS */
  )])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugGroup.vue?vue&type=template&id=6c57cb7d":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugGroup.vue?vue&type=template&id=6c57cb7d ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bug-group"
};
var _hoisted_2 = {
  "class": "group-name"
};
var _hoisted_3 = {
  "class": "group-bugs"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/Buglist.vue?vue&type=template&id=10923170":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/Buglist.vue?vue&type=template&id=10923170 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_State = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("State");

  var _component_ProjectShow = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ProjectShow");

  var _component_Container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Container");

  var _component_BugCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BugCard");

  var _component_BugGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BugGroup");

  var _component_Tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Tab");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Tab, {
    style: {
      "width": "17vw"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_State, {
        show: $setup.state !== null,
        state: $setup.state
      }, null, 8
      /* PROPS */
      , ["show", "state"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Container, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ProjectShow, {
            onUpdate: $setup.update
          }, null, 8
          /* PROPS */
          , ["onUpdate"])];
        }),
        _: 1
        /* STABLE */

      }), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.statuses, function (status) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BugGroup, {
          key: status.id,
          name: status.attributes.designation
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(status.attributes.bugs, function (bug) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BugCard, {
                key: bug.id,
                bug: bug,
                status_name: status.attributes.designation,
                onInfo: _cache[0] || (_cache[0] = function ($event) {
                  return _ctx.$emit('info', $event);
                })
              }, null, 8
              /* PROPS */
              , ["bug", "status_name"]);
            }), 128
            /* KEYED_FRAGMENT */
            ))];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["name"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/overlay/Overlay.vue?vue&type=template&id=6dca1e67":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/overlay/Overlay.vue?vue&type=template&id=6dca1e67 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: "overlay",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      marked: $setup.mark.on
    }),
    onClickOnce: _cache[0] || (_cache[0] = function () {
      return $setup.marked && $setup.marked.apply($setup, arguments);
    })
  }, [$setup.mark.on ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["marker", $setup.priority]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("left: ".concat($setup.mark.x, "px; top: ").concat($setup.mark.y, "px;"))
  }, null, 6
  /* CLASS, STYLE */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 34
  /* CLASS, HYDRATE_EVENTS */
  )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.showOverlay]]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/sidebar/Sidebar.vue?vue&type=template&id=48d5d702":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/sidebar/Sidebar.vue?vue&type=template&id=48d5d702 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    id: "sidebar",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      open: $setup.open
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "logo",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.logoClick && $setup.logoClick.apply($setup, arguments);
    })
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "bug-list-button",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('list');
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.open]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "admin-button",
    onClick: _cache[2] || (_cache[2] = function () {
      return $setup.adminButtonClick && $setup.adminButtonClick.apply($setup, arguments);
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.open]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "project-button",
    onClick: _cache[3] || (_cache[3] = function () {
      return $setup.projectButtonClick && $setup.projectButtonClick.apply($setup, arguments);
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.open]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "add-button",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.$emit('add');
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.open]])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./src/content/content.js":
/*!********************************!*\
  !*** ./src/content/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Content_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Content.vue */ "./src/content/components/Content.vue");
/* harmony import */ var _components_Markers_ce_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Markers.ce.vue */ "./src/content/components/Markers.ce.vue");
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





if (!window.emitter) window.emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_3__["default"])();
var extensionOrigin = "chrome-extension://" + chrome.runtime.id;
if (location.ancestorOrigins.contains(extensionOrigin)) throw "";
console.log(extensionOrigin);

var BugShot = /*#__PURE__*/function (_HTMLElement) {
  _inherits(BugShot, _HTMLElement);

  var _super = _createSuper(BugShot);

  function BugShot() {
    var _this;

    _classCallCheck(this, BugShot);

    _this = _super.call(this);

    _this.attachShadow({
      mode: "open"
    });

    vue__WEBPACK_IMPORTED_MODULE_0__.createApp(_components_Content_vue__WEBPACK_IMPORTED_MODULE_1__["default"]).mount(_this.shadowRoot);
    setCSS(_this.shadowRoot);
    return _this;
  }

  return _createClass(BugShot);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // Add CSS stylesheet links in the provided DOM


function setCSS(dom) {
  var styleSheet = [chrome.runtime.getURL("/libraries/bootstrap.css"), chrome.runtime.getURL("/content/Styles.css")];
  styleSheet.forEach(function (sheet) {
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", sheet);
    dom.prepend(link);
  });
} // check to see if the element was defined beforehand if not define it


if (!customElements.get("bug-shot")) customElements.define("bug-shot", BugShot);
var bugshot = null; // check to see if the page contains an instance of bugshot

var domBugshot = document.getElementsByTagName("bug-shot"); // if no instance found define add one otherwise get refference to the one present

if (domBugshot.length === 0) {
  // create a containing element to host the custom element
  bugshot = document.createElement("div");
  bugshot.style.cssText = "\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    width: fit-content;\n    height: fit-content;\n    overflow: hidden;\n    background-color: transparent;\n    z-index: 2047483647;\n    ";
  bugshot.appendChild(document.createElement("bug-shot"));
  document.body.append(bugshot);
} else {
  bugshot = domBugshot[0];
} // check to see if the element was defined beforehand if not define it


var element = vue__WEBPACK_IMPORTED_MODULE_0__.defineCustomElement(_components_Markers_ce_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
if (!customElements.get("bug-shot-markers")) customElements.define("bug-shot-markers", element);
var markers = null; // check to see if the page contains an instance of bugshot-markers

var domMarkers = document.getElementsByTagName("bug-shot-markers"); // if no instance found define add one otherwise remove the one present and create a new one (in case of SPA's it will help refetch the markers data)

if (domMarkers.length === 0) {
  markers = document.createElement("bug-shot-markers");
  document.body.appendChild(markers);
} else {
  markers = domMarkers[0];
  markers.remove();
  markers = document.createElement("bug-shot-markers");
  document.body.appendChild(markers);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (sender.id !== chrome.runtime.id) console.error(sender);

  switch (request.message) {
    case "getStatus":
      sendResponse({
        message: "ok",
        payload: {
          status: !bugshot.hidden,
          markers: !markers.hidden
        }
      });
      break;

    case "setStatus":
      bugshot.hidden = !request.payload.status;
      sendResponse({
        message: "ok",
        payload: {
          status: !bugshot.hidden
        }
      });
      break;

    case "setMarkers":
      markers.hidden = !request.payload.status;
      sendResponse({
        message: "ok",
        payload: {
          status: !markers.hidden
        }
      });
      break;

    case "refresh":
      bugshot.innerHTML = "";
      bugshot.appendChild(document.createElement("bug-shot"));
      sendResponse({
        message: "ok",
        payload: 1
      });
      break;

    case "updateProject":
      emitter.emit("updateProject");
      break;
  }

  return true;
});

/***/ }),

/***/ "./src/content/util/calcMarkerCoords.js":
/*!**********************************************!*\
  !*** ./src/content/util/calcMarkerCoords.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calcMarkerCoords)
/* harmony export */ });
function calcMarkerCoords(markerX, markerY, originalElementX, originalElementY, originalElementWidth, originalElementHeight, originalElementScrollX, originalElementScrollY, currentElementX, currentElementY, currentElementWidth, currentElementHeight, currentElementScrollX, currentElementScrollY) {
  var x = 0,
      y = 0; // calculate the distance on the x axis within the element (relative to the element) and transform it to %

  var offsetX = (markerX - originalElementX - originalElementScrollX) / originalElementWidth; // using the element current x position account for the scroll if present and add value relative to the width of the element to account for changes in width

  x = currentElementX + currentElementScrollX + currentElementWidth * offsetX;
  var offsetY = (markerY - originalElementY - originalElementScrollY) / originalElementHeight;
  y = currentElementY + currentElementScrollY + currentElementHeight * offsetY;
  return {
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./src/content/util/unique-selector/getAttributes.js":
/*!***********************************************************!*\
  !*** ./src/content/util/unique-selector/getAttributes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAttributes": () => (/* binding */ getAttributes)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Returns the Attribute selectors of the element
 * @param  { DOM Element } element
 * @param  { Array } array of attributes to ignore
 * @return { Array }
 */
function getAttributes(el) {
  var attributesToIgnore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['id', 'class', 'length'];
  var attributes = el.attributes;

  var attrs = _toConsumableArray(attributes);

  return attrs.reduce(function (sum, next) {
    if (!(attributesToIgnore.indexOf(next.nodeName) > -1)) {
      sum.push("[".concat(next.nodeName, "=\"").concat(next.value, "\"]"));
    }

    return sum;
  }, []);
}

/***/ }),

/***/ "./src/content/util/unique-selector/getClasses.js":
/*!********************************************************!*\
  !*** ./src/content/util/unique-selector/getClasses.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClassSelectors": () => (/* binding */ getClassSelectors),
/* harmony export */   "getClasses": () => (/* binding */ getClasses)
/* harmony export */ });
/**
 * Get class names for an element
 *
 * @pararm { Element } el
 * @return { Array }
 */
function getClasses(el) {
  if (!el.hasAttribute('class')) {
    return [];
  }

  try {
    var classList = Array.prototype.slice.call(el.classList); // return only the valid CSS selectors based on RegEx

    return classList.filter(function (item) {
      return !/^[a-z_-][a-z\d_-]*$/i.test(item) ? null : item;
    });
  } catch (e) {
    var className = el.getAttribute('class'); // remove duplicate and leading/trailing whitespaces

    className = className.trim().replace(/\s+/g, ' '); // split into separate classnames

    return className.split(' ');
  }
}
/**
 * Returns the Class selectors of the element
 * @param  { Object } element
 * @return { Array }
 */

function getClassSelectors(el) {
  var classList = getClasses(el).filter(Boolean);
  return classList.map(function (cl) {
    return ".".concat(cl);
  });
}

/***/ }),

/***/ "./src/content/util/unique-selector/getCombinations.js":
/*!*************************************************************!*\
  !*** ./src/content/util/unique-selector/getCombinations.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCombinations": () => (/* binding */ getCombinations)
/* harmony export */ });
/**
 * Recursively combinate items.
 * @param  { Array } result
 * @param  { Array } items
 * @param  { Array } data
 * @param  { Number } start
 * @param  { Number } end
 * @param  { Number } index
 * @param  { Number } k
 */
function kCombinations(result, items, data, start, end, index, k) {
  if (index === k) {
    result.push(data.slice(0, index).join(''));
    return;
  }

  for (var i = start; i <= end && end - i + 1 >= k - index; ++i) {
    data[index] = items[i];
    kCombinations(result, items, data, i + 1, end, index + 1, k);
  }
}
/**
 * Returns all the possible selector combinations
 * @param  { Array } items
 * @param  { Number } k
 * @return { Array }
 */


function getCombinations(items, k) {
  var result = [],
      n = items.length,
      data = [];

  for (var l = 1; l <= k; ++l) {
    kCombinations(result, items, data, 0, n - 1, 0, l);
  }

  return result;
}

/***/ }),

/***/ "./src/content/util/unique-selector/getID.js":
/*!***************************************************!*\
  !*** ./src/content/util/unique-selector/getID.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getID": () => (/* binding */ getID)
/* harmony export */ });
/**
 * Returns the Tag of the element
 * @param  { Object } element
 * @return { String }
 */
function getID(el) {
  var id = el.getAttribute('id');

  if (id !== null && id !== '') {
    // if the ID starts with a number or contains ":" selecting with a hash will cause a DOMException
    return id.match(/(?:^\d|:)/) ? "[id=\"".concat(id, "\"]") : '#' + id;
  }

  return null;
}

/***/ }),

/***/ "./src/content/util/unique-selector/getNthChild.js":
/*!*********************************************************!*\
  !*** ./src/content/util/unique-selector/getNthChild.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNthChild": () => (/* binding */ getNthChild)
/* harmony export */ });
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isElement */ "./src/content/util/unique-selector/isElement.js");

/**
 * Returns the selectors based on the position of the element relative to its siblings
 * @param  { Object } element
 * @return { Array }
 */

function getNthChild(element) {
  var counter = 0;
  var k;
  var sibling;
  var parentNode = element.parentNode;

  if (Boolean(parentNode)) {
    var childNodes = parentNode.childNodes;
    var len = childNodes.length;

    for (k = 0; k < len; k++) {
      sibling = childNodes[k];

      if ((0,_isElement__WEBPACK_IMPORTED_MODULE_0__.isElement)(sibling)) {
        counter++;

        if (sibling === element) {
          return ":nth-child(".concat(counter, ")");
        }
      }
    }
  }

  return null;
}

/***/ }),

/***/ "./src/content/util/unique-selector/getParents.js":
/*!********************************************************!*\
  !*** ./src/content/util/unique-selector/getParents.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParents": () => (/* binding */ getParents)
/* harmony export */ });
/* harmony import */ var _isElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isElement */ "./src/content/util/unique-selector/isElement.js");

/**
 * Returns all the element and all of its parents
 * @param { DOM Element }
 * @return { Array of DOM elements }
 */

function getParents(el) {
  var parents = [];
  var currentElement = el;

  while ((0,_isElement__WEBPACK_IMPORTED_MODULE_0__.isElement)(currentElement)) {
    parents.push(currentElement);
    currentElement = currentElement.parentNode;
  }

  return parents;
}

/***/ }),

/***/ "./src/content/util/unique-selector/getTag.js":
/*!****************************************************!*\
  !*** ./src/content/util/unique-selector/getTag.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTag": () => (/* binding */ getTag)
/* harmony export */ });
/**
 * Returns the Tag of the element
 * @param  { Object } element
 * @return { String }
 */
function getTag(el) {
  return el.tagName.toLowerCase().replace(/:/g, '\\:');
}

/***/ }),

/***/ "./src/content/util/unique-selector/index.js":
/*!***************************************************!*\
  !*** ./src/content/util/unique-selector/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unique)
/* harmony export */ });
/* harmony import */ var _getID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getID */ "./src/content/util/unique-selector/getID.js");
/* harmony import */ var _getClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getClasses */ "./src/content/util/unique-selector/getClasses.js");
/* harmony import */ var _getCombinations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCombinations */ "./src/content/util/unique-selector/getCombinations.js");
/* harmony import */ var _getAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getAttributes */ "./src/content/util/unique-selector/getAttributes.js");
/* harmony import */ var _getNthChild__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNthChild */ "./src/content/util/unique-selector/getNthChild.js");
/* harmony import */ var _getTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getTag */ "./src/content/util/unique-selector/getTag.js");
/* harmony import */ var _isUnique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isUnique */ "./src/content/util/unique-selector/isUnique.js");
/* harmony import */ var _getParents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getParents */ "./src/content/util/unique-selector/getParents.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Expose `unique`
 */








/**
 * Returns all the selectors of the elmenet
 * @param  { Object } element
 * @return { Object }
 */

function getAllSelectors(el, selectors, attributesToIgnore) {
  var funcs = {
    Tag: _getTag__WEBPACK_IMPORTED_MODULE_5__.getTag,
    NthChild: _getNthChild__WEBPACK_IMPORTED_MODULE_4__.getNthChild,
    Attributes: function Attributes(elem) {
      return (0,_getAttributes__WEBPACK_IMPORTED_MODULE_3__.getAttributes)(elem, attributesToIgnore);
    },
    Class: _getClasses__WEBPACK_IMPORTED_MODULE_1__.getClassSelectors,
    ID: _getID__WEBPACK_IMPORTED_MODULE_0__.getID
  };
  return selectors.reduce(function (res, next) {
    res[next] = funcs[next](el);
    return res;
  }, {});
}
/**
 * Tests uniqueNess of the element inside its parent
 * @param  { Object } element
 * @param { String } Selectors
 * @return { Boolean }
 */


function testUniqueness(element, selector) {
  var parentNode = element.parentNode;
  var elements = parentNode.querySelectorAll(selector);
  return elements.length === 1 && elements[0] === element;
}
/**
 * Tests all selectors for uniqueness and returns the first unique selector.
 * @param  { Object } element
 * @param  { Array } selectors
 * @return { String }
 */


function getFirstUnique(element, selectors) {
  return selectors.find(testUniqueness.bind(null, element));
}
/**
 * Checks all the possible selectors of an element to find one unique and return it
 * @param  { Object } element
 * @param  { Array } items
 * @param  { String } tag
 * @return { String }
 */


function getUniqueCombination(element, items, tag) {
  var combinations = (0,_getCombinations__WEBPACK_IMPORTED_MODULE_2__.getCombinations)(items, 3),
      firstUnique = getFirstUnique(element, combinations);

  if (Boolean(firstUnique)) {
    return firstUnique;
  }

  if (Boolean(tag)) {
    combinations = combinations.map(function (combination) {
      return tag + combination;
    });
    firstUnique = getFirstUnique(element, combinations);

    if (Boolean(firstUnique)) {
      return firstUnique;
    }
  }

  return null;
}
/**
 * Returns a uniqueSelector based on the passed options
 * @param  { DOM } element
 * @param  { Array } options
 * @return { String }
 */


function getUniqueSelector(element, selectorTypes, attributesToIgnore, excludeRegex) {
  var foundSelector;
  var elementSelectors = getAllSelectors(element, selectorTypes, attributesToIgnore);

  if (excludeRegex && excludeRegex instanceof RegExp) {
    elementSelectors.ID = excludeRegex.test(elementSelectors.ID) ? null : elementSelectors.ID;
    elementSelectors.Class = elementSelectors.Class.filter(function (className) {
      return !excludeRegex.test(className);
    });
  }

  var _iterator = _createForOfIteratorHelper(selectorTypes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var selectorType = _step.value;
      var ID = elementSelectors.ID,
          Tag = elementSelectors.Tag,
          Classes = elementSelectors.Class,
          Attributes = elementSelectors.Attributes,
          NthChild = elementSelectors.NthChild;

      switch (selectorType) {
        case "ID":
          if (Boolean(ID) && testUniqueness(element, ID)) {
            return ID;
          }

          break;

        case "Tag":
          if (Boolean(Tag) && testUniqueness(element, Tag)) {
            return Tag;
          }

          break;

        case "Class":
          if (Boolean(Classes) && Classes.length) {
            foundSelector = getUniqueCombination(element, Classes, Tag);

            if (foundSelector) {
              return foundSelector;
            }
          }

          break;

        case "Attributes":
          if (Boolean(Attributes) && Attributes.length) {
            foundSelector = getUniqueCombination(element, Attributes, Tag);

            if (foundSelector) {
              return foundSelector;
            }
          }

          break;

        case "NthChild":
          if (Boolean(NthChild)) {
            return NthChild;
          }

      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return "*";
}
/**
 * Generate unique CSS selector for given DOM element
 *
 * @param {Element} el
 * @return {String}
 * @api private
 */


function unique(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$selectorType = options.selectorTypes,
      selectorTypes = _options$selectorType === void 0 ? ["ID", "Class", "Tag", "NthChild"] : _options$selectorType,
      _options$attributesTo = options.attributesToIgnore,
      attributesToIgnore = _options$attributesTo === void 0 ? ["id", "class", "length"] : _options$attributesTo,
      _options$excludeRegex = options.excludeRegex,
      excludeRegex = _options$excludeRegex === void 0 ? null : _options$excludeRegex,
      _options$fromRoot = options.fromRoot,
      fromRoot = _options$fromRoot === void 0 ? false : _options$fromRoot;
  var allSelectors = [];
  var parents = (0,_getParents__WEBPACK_IMPORTED_MODULE_7__.getParents)(el);

  var _iterator2 = _createForOfIteratorHelper(parents),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var elem = _step2.value;

      var _selector = getUniqueSelector(elem, selectorTypes, attributesToIgnore, excludeRegex);

      if (Boolean(_selector)) {
        allSelectors.push(_selector);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var selectors = [];

  for (var _i = 0, _allSelectors = allSelectors; _i < _allSelectors.length; _i++) {
    var it = _allSelectors[_i];
    selectors.unshift(it);
    var selector = selectors.join(" > ");

    if ((0,_isUnique__WEBPACK_IMPORTED_MODULE_6__.isUnique)(el, selector) && (!fromRoot || it === "html" || allSelectors[allSelectors.length - 1] === it)) {
      return selector;
    }
  }

  return null;
}

/***/ }),

/***/ "./src/content/util/unique-selector/isElement.js":
/*!*******************************************************!*\
  !*** ./src/content/util/unique-selector/isElement.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Determines if the passed el is a DOM element
 */
function isElement(el) {
  var isElem;

  if ((typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === 'object') {
    isElem = el instanceof HTMLElement;
  } else {
    isElem = !!el && _typeof(el) === 'object' && el.nodeType === 1 && typeof el.nodeName === 'string';
  }

  return isElem;
}

/***/ }),

/***/ "./src/content/util/unique-selector/isUnique.js":
/*!******************************************************!*\
  !*** ./src/content/util/unique-selector/isUnique.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnique": () => (/* binding */ isUnique)
/* harmony export */ });
/**
 * Checks if the selector is unique
 * @param  { Object } element
 * @param  { String } selector
 * @return { Array }
 */
function isUnique(el, selector) {
  if (!Boolean(selector)) return false;
  var elems = el.ownerDocument.querySelectorAll(selector);
  return elems.length === 1 && elems[0] === el;
}

/***/ }),

/***/ "./src/content/components/Content.vue":
/*!********************************************!*\
  !*** ./src/content/components/Content.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Content_vue_vue_type_template_id_d3863162__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=d3863162 */ "./src/content/components/Content.vue?vue&type=template&id=d3863162");
/* harmony import */ var _Content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js */ "./src/content/components/Content.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Content_vue_vue_type_template_id_d3863162__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/Content.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/Marker.vue":
/*!*******************************************!*\
  !*** ./src/content/components/Marker.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Marker_vue_vue_type_template_id_a9c7b558__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Marker.vue?vue&type=template&id=a9c7b558 */ "./src/content/components/Marker.vue?vue&type=template&id=a9c7b558");
/* harmony import */ var _Marker_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marker.vue?vue&type=script&setup=true&lang=js */ "./src/content/components/Marker.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Marker_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Marker_vue_vue_type_template_id_a9c7b558__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/Marker.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/Markers.ce.vue":
/*!***********************************************!*\
  !*** ./src/content/components/Markers.ce.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Markers_ce_vue_vue_type_template_id_691d7ede__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Markers.ce.vue?vue&type=template&id=691d7ede */ "./src/content/components/Markers.ce.vue?vue&type=template&id=691d7ede");
/* harmony import */ var _Markers_ce_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Markers.ce.vue?vue&type=script&setup=true&lang=js */ "./src/content/components/Markers.ce.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Markers_ce_vue_vue_type_style_index_0_id_691d7ede_inline_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Markers.ce.vue?vue&type=style&index=0&id=691d7ede&inline&lang=scss */ "./src/content/components/Markers.ce.vue?vue&type=style&index=0&id=691d7ede&inline&lang=scss");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Markers_ce_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Markers_ce_vue_vue_type_template_id_691d7ede__WEBPACK_IMPORTED_MODULE_0__.render],['styles',[_Markers_ce_vue_vue_type_style_index_0_id_691d7ede_inline_lang_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]],['__file',"src/content/components/Markers.ce.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/formTab/FormTab.vue":
/*!****************************************************!*\
  !*** ./src/content/components/formTab/FormTab.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormTab_vue_vue_type_template_id_486c9c29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormTab.vue?vue&type=template&id=486c9c29 */ "./src/content/components/formTab/FormTab.vue?vue&type=template&id=486c9c29");
/* harmony import */ var _FormTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormTab.vue?vue&type=script&lang=js */ "./src/content/components/formTab/FormTab.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FormTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FormTab_vue_vue_type_template_id_486c9c29__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/formTab/FormTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/global/attachment/AttachmentItem.vue":
/*!*********************************************************************!*\
  !*** ./src/content/components/global/attachment/AttachmentItem.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AttachmentItem_vue_vue_type_template_id_2f467a70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AttachmentItem.vue?vue&type=template&id=2f467a70 */ "./src/content/components/global/attachment/AttachmentItem.vue?vue&type=template&id=2f467a70");
/* harmony import */ var _AttachmentItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttachmentItem.vue?vue&type=script&lang=js */ "./src/content/components/global/attachment/AttachmentItem.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AttachmentItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AttachmentItem_vue_vue_type_template_id_2f467a70__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/global/attachment/AttachmentItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/global/attachment/Attachments.vue":
/*!******************************************************************!*\
  !*** ./src/content/components/global/attachment/Attachments.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Attachments_vue_vue_type_template_id_16bd5cf4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attachments.vue?vue&type=template&id=16bd5cf4 */ "./src/content/components/global/attachment/Attachments.vue?vue&type=template&id=16bd5cf4");
/* harmony import */ var _Attachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Attachments.vue?vue&type=script&lang=js */ "./src/content/components/global/attachment/Attachments.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Attachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Attachments_vue_vue_type_template_id_16bd5cf4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/global/attachment/Attachments.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/global/container/Container.vue":
/*!***************************************************************!*\
  !*** ./src/content/components/global/container/Container.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Container_vue_vue_type_template_id_32fa5161__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.vue?vue&type=template&id=32fa5161 */ "./src/content/components/global/container/Container.vue?vue&type=template&id=32fa5161");
/* harmony import */ var _Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.vue?vue&type=script&lang=js */ "./src/content/components/global/container/Container.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Container_vue_vue_type_template_id_32fa5161__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/global/container/Container.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/global/modal/Modal.vue":
/*!*******************************************************!*\
  !*** ./src/content/components/global/modal/Modal.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_6c2e7fb9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=6c2e7fb9 */ "./src/content/components/global/modal/Modal.vue?vue&type=template&id=6c2e7fb9");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./src/content/components/global/modal/Modal.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_vue_vue_type_template_id_6c2e7fb9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/global/modal/Modal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/global/project/ProjectShow.vue":
/*!***************************************************************!*\
  !*** ./src/content/components/global/project/ProjectShow.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectShow_vue_vue_type_template_id_22fdaba4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectShow.vue?vue&type=template&id=22fdaba4 */ "./src/content/components/global/project/ProjectShow.vue?vue&type=template&id=22fdaba4");
/* harmony import */ var _ProjectShow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectShow.vue?vue&type=script&lang=js */ "./src/content/components/global/project/ProjectShow.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProjectShow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProjectShow_vue_vue_type_template_id_22fdaba4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/global/project/ProjectShow.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/global/state/State.vue":
/*!*******************************************************!*\
  !*** ./src/content/components/global/state/State.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _State_vue_vue_type_template_id_b13716fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State.vue?vue&type=template&id=b13716fe */ "./src/content/components/global/state/State.vue?vue&type=template&id=b13716fe");
/* harmony import */ var _State_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State.vue?vue&type=script&lang=js */ "./src/content/components/global/state/State.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_State_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_State_vue_vue_type_template_id_b13716fe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/global/state/State.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/global/tab/Tab.vue":
/*!***************************************************!*\
  !*** ./src/content/components/global/tab/Tab.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tab_vue_vue_type_template_id_00060009__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab.vue?vue&type=template&id=00060009 */ "./src/content/components/global/tab/Tab.vue?vue&type=template&id=00060009");
/* harmony import */ var _Tab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab.vue?vue&type=script&lang=js */ "./src/content/components/global/tab/Tab.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Tab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tab_vue_vue_type_template_id_00060009__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/global/tab/Tab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/infoTab/InfoTab.vue":
/*!****************************************************!*\
  !*** ./src/content/components/infoTab/InfoTab.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoTab_vue_vue_type_template_id_e20e0056__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoTab.vue?vue&type=template&id=e20e0056 */ "./src/content/components/infoTab/InfoTab.vue?vue&type=template&id=e20e0056");
/* harmony import */ var _InfoTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoTab.vue?vue&type=script&lang=js */ "./src/content/components/infoTab/InfoTab.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InfoTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InfoTab_vue_vue_type_template_id_e20e0056__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/infoTab/InfoTab.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/infoTab/comments/Comments.vue":
/*!**************************************************************!*\
  !*** ./src/content/components/infoTab/comments/Comments.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comments_vue_vue_type_template_id_02535c3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments.vue?vue&type=template&id=02535c3d */ "./src/content/components/infoTab/comments/Comments.vue?vue&type=template&id=02535c3d");
/* harmony import */ var _Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments.vue?vue&type=script&lang=js */ "./src/content/components/infoTab/comments/Comments.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Comments_vue_vue_type_template_id_02535c3d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/infoTab/comments/Comments.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/infoTab/comments/message/Message.vue":
/*!*********************************************************************!*\
  !*** ./src/content/components/infoTab/comments/message/Message.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Message_vue_vue_type_template_id_9ec17b74__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=9ec17b74 */ "./src/content/components/infoTab/comments/message/Message.vue?vue&type=template&id=9ec17b74");
/* harmony import */ var _Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js */ "./src/content/components/infoTab/comments/message/Message.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Message_vue_vue_type_template_id_9ec17b74__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/infoTab/comments/message/Message.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/infoTab/info/Info.vue":
/*!******************************************************!*\
  !*** ./src/content/components/infoTab/info/Info.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Info_vue_vue_type_template_id_33f07bfd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Info.vue?vue&type=template&id=33f07bfd */ "./src/content/components/infoTab/info/Info.vue?vue&type=template&id=33f07bfd");
/* harmony import */ var _Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info.vue?vue&type=script&lang=js */ "./src/content/components/infoTab/info/Info.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Info_vue_vue_type_template_id_33f07bfd__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/infoTab/info/Info.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/infoTab/screenshot/Screenshot.vue":
/*!******************************************************************!*\
  !*** ./src/content/components/infoTab/screenshot/Screenshot.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Screenshot_vue_vue_type_template_id_6d200986__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screenshot.vue?vue&type=template&id=6d200986 */ "./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=template&id=6d200986");
/* harmony import */ var _Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screenshot.vue?vue&type=script&lang=js */ "./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Screenshot_vue_vue_type_template_id_6d200986__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/infoTab/screenshot/Screenshot.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/listTab/BugCard.vue":
/*!****************************************************!*\
  !*** ./src/content/components/listTab/BugCard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BugCard_vue_vue_type_template_id_788c51fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BugCard.vue?vue&type=template&id=788c51fc */ "./src/content/components/listTab/BugCard.vue?vue&type=template&id=788c51fc");
/* harmony import */ var _BugCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BugCard.vue?vue&type=script&lang=js */ "./src/content/components/listTab/BugCard.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BugCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BugCard_vue_vue_type_template_id_788c51fc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/listTab/BugCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/listTab/BugGroup.vue":
/*!*****************************************************!*\
  !*** ./src/content/components/listTab/BugGroup.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BugGroup_vue_vue_type_template_id_6c57cb7d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BugGroup.vue?vue&type=template&id=6c57cb7d */ "./src/content/components/listTab/BugGroup.vue?vue&type=template&id=6c57cb7d");
/* harmony import */ var _BugGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BugGroup.vue?vue&type=script&lang=js */ "./src/content/components/listTab/BugGroup.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BugGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BugGroup_vue_vue_type_template_id_6c57cb7d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/listTab/BugGroup.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/listTab/Buglist.vue":
/*!****************************************************!*\
  !*** ./src/content/components/listTab/Buglist.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Buglist_vue_vue_type_template_id_10923170__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buglist.vue?vue&type=template&id=10923170 */ "./src/content/components/listTab/Buglist.vue?vue&type=template&id=10923170");
/* harmony import */ var _Buglist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buglist.vue?vue&type=script&lang=js */ "./src/content/components/listTab/Buglist.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Buglist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Buglist_vue_vue_type_template_id_10923170__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/listTab/Buglist.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/overlay/Overlay.vue":
/*!****************************************************!*\
  !*** ./src/content/components/overlay/Overlay.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Overlay_vue_vue_type_template_id_6dca1e67__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overlay.vue?vue&type=template&id=6dca1e67 */ "./src/content/components/overlay/Overlay.vue?vue&type=template&id=6dca1e67");
/* harmony import */ var _Overlay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overlay.vue?vue&type=script&lang=js */ "./src/content/components/overlay/Overlay.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Overlay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Overlay_vue_vue_type_template_id_6dca1e67__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/overlay/Overlay.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/sidebar/Sidebar.vue":
/*!****************************************************!*\
  !*** ./src/content/components/sidebar/Sidebar.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_48d5d702__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=48d5d702 */ "./src/content/components/sidebar/Sidebar.vue?vue&type=template&id=48d5d702");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js */ "./src/content/components/sidebar/Sidebar.vue?vue&type=script&lang=js");
/* harmony import */ var _home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_radum_Projects_Remote_extension_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sidebar_vue_vue_type_template_id_48d5d702__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/content/components/sidebar/Sidebar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/content/components/Content.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/content/components/Content.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Content.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Content.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/Marker.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./src/content/components/Marker.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Marker_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Marker_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Marker.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Marker.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/content/components/Markers.ce.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./src/content/components/Markers.ce.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Markers_ce_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Markers_ce_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Markers.ce.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Markers.ce.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/content/components/formTab/FormTab.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/content/components/formTab/FormTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormTab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/formTab/FormTab.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/global/attachment/AttachmentItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./src/content/components/global/attachment/AttachmentItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AttachmentItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AttachmentItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AttachmentItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/AttachmentItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/global/attachment/Attachments.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./src/content/components/global/attachment/Attachments.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Attachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Attachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Attachments.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/Attachments.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/global/container/Container.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./src/content/components/global/container/Container.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Container.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/container/Container.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/global/modal/Modal.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/content/components/global/modal/Modal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/modal/Modal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/global/project/ProjectShow.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./src/content/components/global/project/ProjectShow.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectShow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectShow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectShow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/project/ProjectShow.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/global/state/State.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/content/components/global/state/State.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_State_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_State_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./State.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/state/State.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/global/tab/Tab.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/content/components/global/tab/Tab.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/tab/Tab.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/infoTab/InfoTab.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/content/components/infoTab/InfoTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoTab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/InfoTab.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/infoTab/comments/Comments.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./src/content/components/infoTab/comments/Comments.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Comments.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/Comments.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/infoTab/comments/message/Message.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./src/content/components/infoTab/comments/message/Message.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Message.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/message/Message.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/infoTab/info/Info.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./src/content/components/infoTab/info/Info.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Info.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/info/Info.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Screenshot.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/listTab/BugCard.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/content/components/listTab/BugCard.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BugCard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugCard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/listTab/BugGroup.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/content/components/listTab/BugGroup.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BugGroup.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugGroup.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/listTab/Buglist.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/content/components/listTab/Buglist.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Buglist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Buglist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Buglist.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/Buglist.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/overlay/Overlay.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/content/components/overlay/Overlay.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Overlay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Overlay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Overlay.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/overlay/Overlay.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/sidebar/Sidebar.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/content/components/sidebar/Sidebar.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/sidebar/Sidebar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/Content.vue?vue&type=template&id=d3863162":
/*!**************************************************************************!*\
  !*** ./src/content/components/Content.vue?vue&type=template&id=d3863162 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Content_vue_vue_type_template_id_d3863162__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Content_vue_vue_type_template_id_d3863162__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Content.vue?vue&type=template&id=d3863162 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Content.vue?vue&type=template&id=d3863162");


/***/ }),

/***/ "./src/content/components/Marker.vue?vue&type=template&id=a9c7b558":
/*!*************************************************************************!*\
  !*** ./src/content/components/Marker.vue?vue&type=template&id=a9c7b558 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Marker_vue_vue_type_template_id_a9c7b558__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Marker_vue_vue_type_template_id_a9c7b558__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Marker.vue?vue&type=template&id=a9c7b558 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Marker.vue?vue&type=template&id=a9c7b558");


/***/ }),

/***/ "./src/content/components/Markers.ce.vue?vue&type=template&id=691d7ede":
/*!*****************************************************************************!*\
  !*** ./src/content/components/Markers.ce.vue?vue&type=template&id=691d7ede ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Markers_ce_vue_vue_type_template_id_691d7ede__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Markers_ce_vue_vue_type_template_id_691d7ede__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Markers.ce.vue?vue&type=template&id=691d7ede */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Markers.ce.vue?vue&type=template&id=691d7ede");


/***/ }),

/***/ "./src/content/components/formTab/FormTab.vue?vue&type=template&id=486c9c29":
/*!**********************************************************************************!*\
  !*** ./src/content/components/formTab/FormTab.vue?vue&type=template&id=486c9c29 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormTab_vue_vue_type_template_id_486c9c29__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormTab_vue_vue_type_template_id_486c9c29__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormTab.vue?vue&type=template&id=486c9c29 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/formTab/FormTab.vue?vue&type=template&id=486c9c29");


/***/ }),

/***/ "./src/content/components/global/attachment/AttachmentItem.vue?vue&type=template&id=2f467a70":
/*!***************************************************************************************************!*\
  !*** ./src/content/components/global/attachment/AttachmentItem.vue?vue&type=template&id=2f467a70 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AttachmentItem_vue_vue_type_template_id_2f467a70__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AttachmentItem_vue_vue_type_template_id_2f467a70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AttachmentItem.vue?vue&type=template&id=2f467a70 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/AttachmentItem.vue?vue&type=template&id=2f467a70");


/***/ }),

/***/ "./src/content/components/global/attachment/Attachments.vue?vue&type=template&id=16bd5cf4":
/*!************************************************************************************************!*\
  !*** ./src/content/components/global/attachment/Attachments.vue?vue&type=template&id=16bd5cf4 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Attachments_vue_vue_type_template_id_16bd5cf4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Attachments_vue_vue_type_template_id_16bd5cf4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Attachments.vue?vue&type=template&id=16bd5cf4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/attachment/Attachments.vue?vue&type=template&id=16bd5cf4");


/***/ }),

/***/ "./src/content/components/global/container/Container.vue?vue&type=template&id=32fa5161":
/*!*********************************************************************************************!*\
  !*** ./src/content/components/global/container/Container.vue?vue&type=template&id=32fa5161 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Container_vue_vue_type_template_id_32fa5161__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Container_vue_vue_type_template_id_32fa5161__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Container.vue?vue&type=template&id=32fa5161 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/container/Container.vue?vue&type=template&id=32fa5161");


/***/ }),

/***/ "./src/content/components/global/modal/Modal.vue?vue&type=template&id=6c2e7fb9":
/*!*************************************************************************************!*\
  !*** ./src/content/components/global/modal/Modal.vue?vue&type=template&id=6c2e7fb9 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_6c2e7fb9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_6c2e7fb9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=template&id=6c2e7fb9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/modal/Modal.vue?vue&type=template&id=6c2e7fb9");


/***/ }),

/***/ "./src/content/components/global/project/ProjectShow.vue?vue&type=template&id=22fdaba4":
/*!*********************************************************************************************!*\
  !*** ./src/content/components/global/project/ProjectShow.vue?vue&type=template&id=22fdaba4 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectShow_vue_vue_type_template_id_22fdaba4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectShow_vue_vue_type_template_id_22fdaba4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectShow.vue?vue&type=template&id=22fdaba4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/project/ProjectShow.vue?vue&type=template&id=22fdaba4");


/***/ }),

/***/ "./src/content/components/global/state/State.vue?vue&type=template&id=b13716fe":
/*!*************************************************************************************!*\
  !*** ./src/content/components/global/state/State.vue?vue&type=template&id=b13716fe ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_State_vue_vue_type_template_id_b13716fe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_State_vue_vue_type_template_id_b13716fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./State.vue?vue&type=template&id=b13716fe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/state/State.vue?vue&type=template&id=b13716fe");


/***/ }),

/***/ "./src/content/components/global/tab/Tab.vue?vue&type=template&id=00060009":
/*!*********************************************************************************!*\
  !*** ./src/content/components/global/tab/Tab.vue?vue&type=template&id=00060009 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tab_vue_vue_type_template_id_00060009__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tab_vue_vue_type_template_id_00060009__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tab.vue?vue&type=template&id=00060009 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/tab/Tab.vue?vue&type=template&id=00060009");


/***/ }),

/***/ "./src/content/components/infoTab/InfoTab.vue?vue&type=template&id=e20e0056":
/*!**********************************************************************************!*\
  !*** ./src/content/components/infoTab/InfoTab.vue?vue&type=template&id=e20e0056 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoTab_vue_vue_type_template_id_e20e0056__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoTab_vue_vue_type_template_id_e20e0056__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InfoTab.vue?vue&type=template&id=e20e0056 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/InfoTab.vue?vue&type=template&id=e20e0056");


/***/ }),

/***/ "./src/content/components/infoTab/comments/Comments.vue?vue&type=template&id=02535c3d":
/*!********************************************************************************************!*\
  !*** ./src/content/components/infoTab/comments/Comments.vue?vue&type=template&id=02535c3d ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Comments_vue_vue_type_template_id_02535c3d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Comments_vue_vue_type_template_id_02535c3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Comments.vue?vue&type=template&id=02535c3d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/Comments.vue?vue&type=template&id=02535c3d");


/***/ }),

/***/ "./src/content/components/infoTab/comments/message/Message.vue?vue&type=template&id=9ec17b74":
/*!***************************************************************************************************!*\
  !*** ./src/content/components/infoTab/comments/message/Message.vue?vue&type=template&id=9ec17b74 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_template_id_9ec17b74__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_template_id_9ec17b74__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Message.vue?vue&type=template&id=9ec17b74 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/comments/message/Message.vue?vue&type=template&id=9ec17b74");


/***/ }),

/***/ "./src/content/components/infoTab/info/Info.vue?vue&type=template&id=33f07bfd":
/*!************************************************************************************!*\
  !*** ./src/content/components/infoTab/info/Info.vue?vue&type=template&id=33f07bfd ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_template_id_33f07bfd__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_template_id_33f07bfd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Info.vue?vue&type=template&id=33f07bfd */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/info/Info.vue?vue&type=template&id=33f07bfd");


/***/ }),

/***/ "./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=template&id=6d200986":
/*!************************************************************************************************!*\
  !*** ./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=template&id=6d200986 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Screenshot_vue_vue_type_template_id_6d200986__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Screenshot_vue_vue_type_template_id_6d200986__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Screenshot.vue?vue&type=template&id=6d200986 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/infoTab/screenshot/Screenshot.vue?vue&type=template&id=6d200986");


/***/ }),

/***/ "./src/content/components/listTab/BugCard.vue?vue&type=template&id=788c51fc":
/*!**********************************************************************************!*\
  !*** ./src/content/components/listTab/BugCard.vue?vue&type=template&id=788c51fc ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugCard_vue_vue_type_template_id_788c51fc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugCard_vue_vue_type_template_id_788c51fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BugCard.vue?vue&type=template&id=788c51fc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugCard.vue?vue&type=template&id=788c51fc");


/***/ }),

/***/ "./src/content/components/listTab/BugGroup.vue?vue&type=template&id=6c57cb7d":
/*!***********************************************************************************!*\
  !*** ./src/content/components/listTab/BugGroup.vue?vue&type=template&id=6c57cb7d ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugGroup_vue_vue_type_template_id_6c57cb7d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugGroup_vue_vue_type_template_id_6c57cb7d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BugGroup.vue?vue&type=template&id=6c57cb7d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/BugGroup.vue?vue&type=template&id=6c57cb7d");


/***/ }),

/***/ "./src/content/components/listTab/Buglist.vue?vue&type=template&id=10923170":
/*!**********************************************************************************!*\
  !*** ./src/content/components/listTab/Buglist.vue?vue&type=template&id=10923170 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Buglist_vue_vue_type_template_id_10923170__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Buglist_vue_vue_type_template_id_10923170__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Buglist.vue?vue&type=template&id=10923170 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/listTab/Buglist.vue?vue&type=template&id=10923170");


/***/ }),

/***/ "./src/content/components/overlay/Overlay.vue?vue&type=template&id=6dca1e67":
/*!**********************************************************************************!*\
  !*** ./src/content/components/overlay/Overlay.vue?vue&type=template&id=6dca1e67 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Overlay_vue_vue_type_template_id_6dca1e67__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Overlay_vue_vue_type_template_id_6dca1e67__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Overlay.vue?vue&type=template&id=6dca1e67 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/overlay/Overlay.vue?vue&type=template&id=6dca1e67");


/***/ }),

/***/ "./src/content/components/sidebar/Sidebar.vue?vue&type=template&id=48d5d702":
/*!**********************************************************************************!*\
  !*** ./src/content/components/sidebar/Sidebar.vue?vue&type=template&id=48d5d702 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_48d5d702__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_48d5d702__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=template&id=48d5d702 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/sidebar/Sidebar.vue?vue&type=template&id=48d5d702");


/***/ }),

/***/ "./src/content/components/Markers.ce.vue?vue&type=style&index=0&id=691d7ede&inline&lang=scss":
/*!***************************************************************************************************!*\
  !*** ./src/content/components/Markers.ce.vue?vue&type=style&index=0&id=691d7ede&inline&lang=scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_styleInlineLoader_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Markers_ce_vue_vue_type_style_index_0_id_691d7ede_inline_lang_scss__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_styleInlineLoader_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Markers_ce_vue_vue_type_style_index_0_id_691d7ede_inline_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/styleInlineLoader.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Markers.ce.vue?vue&type=style&index=0&id=691d7ede&inline&lang=scss */ "./node_modules/vue-loader/dist/styleInlineLoader.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Markers.ce.vue?vue&type=style&index=0&id=691d7ede&inline&lang=scss");
 

/***/ }),

/***/ "./node_modules/vue-loader/dist/styleInlineLoader.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Markers.ce.vue?vue&type=style&index=0&id=691d7ede&inline&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/styleInlineLoader.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Markers.ce.vue?vue&type=style&index=0&id=691d7ede&inline&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".marker {\n  position: absolute;\n  margin-left: -9px;\n  margin-top: -32px;\n  padding: 0px;\n  transform: none;\n  cursor: pointer;\n  z-index: 20220401;\n}\n.marker img {\n  width: 18px;\n}\n.marker:hover .wrapper {\n  display: block;\n}\n.wrapper {\n  position: relative;\n  display: none;\n}\n.wrapper .container {\n  position: absolute;\n  background-color: #f8f8fc;\n  top: -46px;\n  left: 18px;\n  border-radius: 8px;\n  min-height: 2rem;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #e6e6ff;\n}\n.wrapper .container p {\n  margin: unset;\n  border-bottom: 2px solid #e6e6ff;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.wrapper .container::before {\n  content: \"\";\n  position: absolute;\n  top: 9px;\n  left: -20px;\n  z-index: 0;\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-left: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid #f8f8fc;\n}\n.wrapper .container::after {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: -22px;\n  z-index: -1;\n  width: 0;\n  height: 0;\n  border-top: 11px solid transparent;\n  border-left: 11px solid transparent;\n  border-bottom: 11px solid transparent;\n  border-right: 11px solid #e6e6ff;\n}");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["dist/vendor"], () => (__webpack_exec__("./src/content/content.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);