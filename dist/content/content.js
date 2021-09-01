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
    Sidebar: _sidebar_Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    ListTab: _listTab_Buglist_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    InfoTab: _infoTab_InfoTab_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    FormTab: _formTab_FormTab_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    Overlay: _overlay_Overlay_vue__WEBPACK_IMPORTED_MODULE_5__.default
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

      setTimeout(function () {
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    State: _global_state_State_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    Tab: _global_tab_Tab_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Container: _global_container_Container_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    Attachments: _global_attachment_Attachments_vue__WEBPACK_IMPORTED_MODULE_4__.default
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
              data: {
                name: file.designation,
                data: file.data
              },
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
    AttachmentItem: _AttachmentItem_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    State: _state_State_vue__WEBPACK_IMPORTED_MODULE_2__.default
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
      if (props.isRemote) uploadRemote(fileInfos);else uploadLocal(fileInfos);
    };

    var uploadRemote = function uploadRemote(filesInfo) {
      emitLoading(true);
      filesInfo.forEach(function (file) {
        try {
          emitLoading(true);
          toBase64(file).then(function (data64) {
            chrome.runtime.sendMessage({
              message: "saveAttachment",
              payload: {
                data: {
                  name: file.name,
                  data: data64
                },
                bug_id: props.bug.id
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
              designation: filesInfo[index].name,
              data: files64[index]
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
          bug_id: props.bug.id,
          data: item
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
          bug_id: props.bug.id,
          data: item
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
        message: "getAttachment",
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
    Tab: _global_tab_Tab_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Container: _global_container_Container_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Info: _info_Info_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    Attachments: _global_attachment_Attachments_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    State: _global_state_State_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    Comments: _comments_Comments_vue__WEBPACK_IMPORTED_MODULE_5__.default
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
            bug_id: props.bug.id
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
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _message_Message_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message/Message.vue */ "./src/content/components/infoTab/comments/message/Message.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Message: _message_Message_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  name: "Comments",
  props: {
    bug: Object
  },
  emits: ["loading"],
  setup: function setup(props, context) {
    var chars = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)("");
    var messages = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var msgs = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var bottom = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

    var emitLoading = function emitLoading(value) {
      context.emit("loading", value);
    };

    var update = function update() {
      try {
        messages.value = [];
        emitLoading(true);
        chrome.runtime.sendMessage({
          message: "getComments",
          payload: {
            bug_id: props.bug.id
          }
        }, function (response) {
          emitLoading(false);

          switch (response.message) {
            case "error":
              throw response.error;

            case "ok":
              console.info("Request get comments: ok!");
              response.payload.forEach(function (comment) {
                messages.value.push({
                  id: comment.id,
                  content: comment.content,
                  timestamp: comment.created_at,
                  creator: {
                    first_name: comment.first_name,
                    last_name: comment.last_name
                  },
                  sender: 1 // ! Here should be a comparasion with the auth user to see if it is the creator

                });
              });
              break;
          }
        });
      } catch (error) {
        emitLoading(false);
        console.error(error);
      }
    };

    var postComment = function postComment() {
      try {
        emitLoading(true);
        chrome.runtime.sendMessage({
          message: "postComment",
          payload: {
            bug_id: props.bug.id,
            data: {
              user_id: 2,
              //! this will need to be changed when a user sesion will be available
              content: chars.value
            }
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

    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.onMounted)(update);
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.watch)(props, update);
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.watch)(messages, function () {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
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
      postComment: postComment
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
  setup: function setup() {}
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
    Screenshot: _screenshot_Screenshot_vue__WEBPACK_IMPORTED_MODULE_1__.default
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

    return {
      open: open,
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
    Modal: _global_modal_Modal_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  name: "Screenshot",
  props: {
    bug: Object
  },
  emits: ["loading"],
  setup: function setup(props, context) {
    var images = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{}]);
    var modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var showMark = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var counter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);

    var setLoading = function setLoading(value) {
      context.emit("loading", value);
    };

    var previous = function previous() {
      if (counter.value > 0) counter.value--;
    };

    var next = function next() {
      if (counter.value < images.value.length - 1) counter.value++;
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
            images.value = response.payload;
            console.info("Request get screenshots: ok!");
            break;
        }
      });
    };

    var thumbnail = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (images.value.length > 0) return images.value[0].data;
      return "/";
    });
    var shownImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var img = images.value[counter.value];
      console.log(img); // used for getting the image dimensions from base64 data

      var i = new Image();
      i.src = img.data;
      return {
        image: img.data,
        number: counter.value + 1,
        // needed the position relative to the original image resolution so it can account for different image distorsions while shown via modal
        mark: {
          x: img.position.x / i.width * 100,
          y: img.position.y / i.height * 100
        }
      };
    });
    var priority = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      switch (Number(props.bug.priority_id)) {
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
      images: images,
      modal: modal,
      thumbnail: thumbnail,
      shownImage: shownImage,
      priority: priority,
      showMark: showMark,
      setLoading: setLoading,
      previous: previous,
      next: next
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
    bug: Object
  },
  emits: ["info"]
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Buglist",
  components: {
    Tab: _global_tab_Tab_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    State: _global_state_State_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    BugGroup: _BugGroup_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    BugCard: _BugCard_vue__WEBPACK_IMPORTED_MODULE_4__.default
  },
  emits: ["info"],
  setup: function setup() {
    var bugs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      status: [],
      info: []
    });
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("loading");

    var update = function update() {
      chrome.runtime.sendMessage({
        message: "getBugs"
      }, function (response) {
        state.value = null;

        if (response.message === "error") {
          state.value = "error";
          console.error(response.error);
          return;
        }

        if (response.message === "empty") {
          console.log("No project buggs");
          return;
        }

        if (response.message !== "ok") {
          console.error("What was the message?");
          return;
        }

        bugs.status = [];
        bugs.info = [];
        response.payload.forEach(function (stage) {
          bugs.status.push({
            id: stage.id,
            name: stage.designation
          });
          bugs.info[stage.id] = stage.bugs;
          stage.bugs.forEach(function (bug) {
            if (bug.deadline === null) bug.deadline = "no deadline";
            bug.status = {
              id: stage.id,
              designation: stage.designation,
              project_id: stage.project_id
            };
          });
        });
      });
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(update);
    emitter.on("deleted", update);
    return {
      bugs: bugs,
      state: state
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Overlay",
  props: ["details"],
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
          }; // NEXT oppen bug form

          props.details.mark_coords = {
            x: clientX,
            y: clientY
          };
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

  var _component_ListTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListTab");

  var _component_InfoTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoTab");

  var _component_FormTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormTab");

  var _component_Overlay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Overlay");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar, {
    onDefault: $setup.setDefault,
    onAdd: $setup.addEvent,
    onList: $setup.listEvent
  }, null, 8
  /* PROPS */
  , ["onDefault", "onAdd", "onList"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.showSidebar]]), $setup.showList ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ListTab, {
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
  "class": "form-group d-flex justify-content-between mb-lg-2"
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
      , ["show", "state"]), $setup.state === null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Container, {
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
            })
          }, null, 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.bug.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
            "class": "form-control",
            id: "bug-description",
            rows: "3",
            placeholder: "Describe the bug.",
            required: "",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $props.bug.description = $event;
            }),
            maxlength: "250"
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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.item.designation), 1
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
            show: $setup.isLoading.attachments,
            style: {
              "z-index": "0"
            }
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
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.tabLoading]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Container, null, {
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

      }, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$setup.tabLoading]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "comments-top"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "header"
}, "Comments")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "comments-center"
};
var _hoisted_4 = {
  key: 0,
  "class": "content",
  ref: "msgs"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, null, -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "comments-bottom"
};
var _hoisted_7 = {
  "class": "comments-bottom-header"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Add comment", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Message");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$setup.messages.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.messages, function (msg) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Message, {
      key: msg.id,
      msg: msg
    }, null, 8
    /* PROPS */
    , ["msg"]);
  }), 128
  /* KEYED_FRAGMENT */
  )), _hoisted_5], 512
  /* NEED_PATCH */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.chars.length) + " / 250", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    id: "comment-input",
    rows: "3",
    maxlength: "250",
    placeholder: "Write comment...",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.chars = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.chars]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "btn comment-send-button",
    onClick: _cache[1] || (_cache[1] = function () {
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
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.msg.timestamp), 1
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
  "class": "justify-content-between"
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

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.designation), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "btn close-button",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('close');
    })
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.id), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.user_id), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.created_at), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Screenshot, {
    bug: $props.bug,
    onLoading: $setup.emitLoading
  }, null, 8
  /* PROPS */
  , ["bug", "onLoading"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $props.bug.url
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.url), 9
  /* TEXT, PROPS */
  , _hoisted_18)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.description), 1
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
  }, _hoisted_24), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.operating_system), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.browser), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.selector), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.resolution), 1
  /* TEXT */
  )])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["content priority", 'p' + $props.bug.priority_id])
  }, null, 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.status.designation), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.deadline), 1
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "thumbnail-wraper",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.modal = !$setup.modal;
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
    })
  }, {
    extra: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "btn btn-hide-mark",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.showMark = !$setup.showMark;
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.showMark ? "Hide" : "Show") + " mark ", 1
      /* TEXT */
      ), $setup.images.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.shownImage.number) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.images.length), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), $setup.images.length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "btn btn-side-arrow arrow-left",
        onClick: _cache[2] || (_cache[2] = function () {
          return $setup.previous && $setup.previous.apply($setup, arguments);
        })
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "btn btn-side-arrow arrow-right",
        onClick: _cache[3] || (_cache[3] = function () {
          return $setup.next && $setup.next.apply($setup, arguments);
        })
      })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $setup.shownImage.image,
        alt: "Screenshots"
      }, null, 8
      /* PROPS */
      , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["marker", $setup.priority]),
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(" \n\t\t\tleft: calc(".concat($setup.shownImage.mark.x, "% - 16px);\n\t\t\ttop: calc(").concat($setup.shownImage.mark.y, "% - 56px);\t\t\t\n\t\t\t"))
      }, null, 6
      /* CLASS, STYLE */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.showMark]])];
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
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('info', $props.bug);
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.designation), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.bug.deadline), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bug priority", 'p' + $props.bug.priority_id])
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
      , ["show", "state"]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bugs.status, function (status) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BugGroup, {
          key: status.id,
          name: status.name
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.bugs.info[status.id], function (bug) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BugCard, {
                key: bug.id,
                bug: bug,
                onInfo: _cache[0] || (_cache[0] = function ($event) {
                  return _ctx.$emit('info', $event);
                })
              }, null, 8
              /* PROPS */
              , ["bug"]);
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
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("left: ".concat($setup.mark.x - 16, "px; top: ").concat($setup.mark.y - 56, "px;"))
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
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




window.emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_2__.default)();
var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
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
      mode: 'open'
    });

    vue__WEBPACK_IMPORTED_MODULE_0__.createApp(_components_Content_vue__WEBPACK_IMPORTED_MODULE_1__.default).mount(_this.shadowRoot);
    setCSS(_this.shadowRoot);
    return _this;
  }

  return BugShot;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // Add CSS stylesheet links in the provided DOM


function setCSS(dom) {
  var styleSheet = [chrome.runtime.getURL("/libraries/bootstrap.css"), chrome.runtime.getURL("/content/Styles.css")];
  styleSheet.forEach(function (sheet) {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', sheet);
    dom.prepend(link);
  });
}

window.customElements.define("bug-shot", BugShot); // After the preparations are done append the new element to the DOM

var div = document.createElement("div");
div.style.cssText = "\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    width: fit-content;\n    height: fit-content;\n    overflow: hidden;\n    background-color: transparent;\n    z-index: 10000;\n    ";
div.appendChild(document.createElement("bug-shot"));
document.body.append(div);

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



_Content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Content_vue_vue_type_template_id_d3863162__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/Content.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_FormTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _FormTab_vue_vue_type_template_id_486c9c29__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_FormTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/formTab/FormTab.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FormTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_AttachmentItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _AttachmentItem_vue_vue_type_template_id_2f467a70__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_AttachmentItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/global/attachment/AttachmentItem.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AttachmentItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Attachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Attachments_vue_vue_type_template_id_16bd5cf4__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Attachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/global/attachment/Attachments.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Attachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Container_vue_vue_type_template_id_32fa5161__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/global/container/Container.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Modal_vue_vue_type_template_id_6c2e7fb9__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/global/modal/Modal.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_State_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _State_vue_vue_type_template_id_b13716fe__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_State_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/global/state/State.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_State_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Tab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Tab_vue_vue_type_template_id_00060009__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Tab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/global/tab/Tab.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Tab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_InfoTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _InfoTab_vue_vue_type_template_id_e20e0056__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_InfoTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/infoTab/InfoTab.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_InfoTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Comments_vue_vue_type_template_id_02535c3d__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/infoTab/comments/Comments.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Message_vue_vue_type_template_id_9ec17b74__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/infoTab/comments/message/Message.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Info_vue_vue_type_template_id_33f07bfd__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/infoTab/info/Info.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Screenshot_vue_vue_type_template_id_6d200986__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/infoTab/screenshot/Screenshot.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_BugCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _BugCard_vue_vue_type_template_id_788c51fc__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_BugCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/listTab/BugCard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BugCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_BugGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _BugGroup_vue_vue_type_template_id_6c57cb7d__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_BugGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/listTab/BugGroup.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BugGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Buglist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Buglist_vue_vue_type_template_id_10923170__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Buglist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/listTab/Buglist.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Buglist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Overlay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Overlay_vue_vue_type_template_id_6dca1e67__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Overlay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/overlay/Overlay.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Overlay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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



_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Sidebar_vue_vue_type_template_id_48d5d702__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/content/components/sidebar/Sidebar.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/content/components/Content.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/content/components/Content.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Content.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/Content.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/formTab/FormTab.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/content/components/formTab/FormTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AttachmentItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Attachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Container_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/content/components/global/modal/Modal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/content/components/global/state/State.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/content/components/global/state/State.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_State_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InfoTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Comments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Message_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Screenshot_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugCard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BugGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Buglist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Overlay_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["dist/vendor"], () => (__webpack_exec__("./src/content/content.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);