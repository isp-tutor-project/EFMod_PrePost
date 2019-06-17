System.register("thermite/TAssessIcon", ["thermite/TObject", "util/CUtil"], function (exports_1, context_1) {
    "use strict";
    var TObject_1, CUtil_1, TAssessIcon;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TObject_1_1) {
                TObject_1 = TObject_1_1;
            },
            function (CUtil_1_1) {
                CUtil_1 = CUtil_1_1;
            }
        ],
        execute: function () {
            TAssessIcon = class TAssessIcon extends TObject_1.TObject {
                constructor() {
                    super();
                    this.init3();
                }
                TAssessIconInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_1.CUtil.trace("TAssessIcon:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TAssessIcon On Stage");
                    super.onAddedToStage(evt);
                    this.Sright.visible = false;
                    this.Swrong.visible = false;
                    this.SplaceKeeper.visible = false;
                }
                showIcon(icon) {
                    this.fadeChild(icon, "on", true);
                }
            };
            exports_1("TAssessIcon", TAssessIcon);
        }
    };
});
System.register("thermite/TSelectorIcons", ["thermite/TObject", "util/CUtil"], function (exports_2, context_2) {
    "use strict";
    var TObject_2, CUtil_2, TSelectorIcons;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (TObject_2_1) {
                TObject_2 = TObject_2_1;
            },
            function (CUtil_2_1) {
                CUtil_2 = CUtil_2_1;
            }
        ],
        execute: function () {
            TSelectorIcons = class TSelectorIcons extends TObject_2.TObject {
                constructor() {
                    super();
                    this.init3();
                }
                TSelectorIconsInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_2.CUtil.trace("TSelectorIcons:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TSelectorIcons On Stage");
                    super.onAddedToStage(evt);
                }
                hideAllIcons() {
                    for (var i1 = 0; i1 < this.numChildren; i1++) {
                        this.getChildAt(i1).visible = false;
                    }
                }
                showIcon(iName) {
                    this.getChildByName(iName).visible = true;
                }
            };
            exports_2("TSelectorIcons", TSelectorIcons);
        }
    };
});
System.register("thermite/TImgButton", ["thermite/TButton", "util/CUtil"], function (exports_3, context_3) {
    "use strict";
    var TButton_1, CUtil_3, Timeline, TImgButton;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (TButton_1_1) {
                TButton_1 = TButton_1_1;
            },
            function (CUtil_3_1) {
                CUtil_3 = CUtil_3_1;
            }
        ],
        execute: function () {
            Timeline = createjs.Timeline;
            TImgButton = class TImgButton extends TButton_1.TButton {
                constructor() {
                    super();
                    this.init4();
                }
                TImgButtonInitialize() {
                    this.TButtonInitialize.call(this);
                    this.init4();
                }
                initialize() {
                    this.TButtonInitialize.call(this);
                    this.init4();
                }
                init4() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_3.CUtil.trace("TImgButton:Constructor");
                }
                Destructor() {
                    super.Destructor();
                }
                onAddedToStage(evt) {
                    console.log("ImgButton On Stage");
                    this.mouseChildren = false;
                    this.timeline = new Timeline(null, null, null);
                    this.STATE_UP = "Sup";
                    this.STATE_OVER = "Sover";
                    this.STATE_DOWN = "Sdown";
                    this.STATE_DISABLED = "Sdisabled";
                    this.STATE_FOCUS = "Sfocus";
                    this.curState = this.STATE_UP;
                    this.addChild(this[this.STATE_UP]);
                    this.addChild(this[this.STATE_OVER]);
                    this.addChild(this[this.STATE_DOWN]);
                    this.addChild(this[this.STATE_DISABLED]);
                    this.addChild(this[this.STATE_FOCUS]);
                    if (this.Slabel)
                        this.addChild(this.Slabel);
                    this.resetState();
                    this[this.STATE_UP].visible = true;
                }
                captureDefState(thisObj) {
                    super.captureDefState(thisObj);
                    thisObj.defState = {
                        "curState": this.curState,
                        "fPressed": this.fPressed,
                        "fEnabled": this.fEnabled,
                        "fOver": this.fOver
                    };
                }
                restoreDefState(thisObj) {
                    if (this.traceMode)
                        CUtil_3.CUtil.trace("Button Reseting: " + this.name);
                    this.curState = thisObj.defState.curState;
                    this.fPressed = thisObj.defState.fPressed;
                    this.fEnabled = thisObj.defState.fEnabled;
                    this.fOver = thisObj.defState.fOver;
                    this.enable(this.fEnabled);
                    super.restoreDefState(thisObj);
                }
                captureLogState(obj = null) {
                    obj = super.captureLogState(obj);
                    obj['target'] = 'button';
                    obj['name'] = this.name;
                    obj['state'] = this.curState;
                    obj['pressed'] = this.fPressed.toString();
                    obj['enabled'] = this.fEnabled.toString();
                    obj['over'] = this.fOver.toString();
                    return obj;
                }
                capturestringState() {
                    let stringVal = "<button this.name={this.name} state={curState} pressed={fPressed.toString()} enabled={fEnabled.toString()} over={fOver.toString()}/>";
                    return stringVal;
                }
                resetState() {
                    this[this.STATE_UP].visible = false;
                    this[this.STATE_OVER].visible = false;
                    this[this.STATE_DOWN].visible = false;
                    this[this.STATE_DISABLED].visible = false;
                    this[this.STATE_FOCUS].visible = false;
                }
            };
            exports_3("TImgButton", TImgButton);
        }
    };
});
System.register("thermite/TSelectorItemButton", ["thermite/TImgButton", "util/CUtil"], function (exports_4, context_4) {
    "use strict";
    var TImgButton_1, CUtil_4, TSelectorItemButton;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (TImgButton_1_1) {
                TImgButton_1 = TImgButton_1_1;
            },
            function (CUtil_4_1) {
                CUtil_4 = CUtil_4_1;
            }
        ],
        execute: function () {
            TSelectorItemButton = class TSelectorItemButton extends TImgButton_1.TImgButton {
                constructor() {
                    super();
                    this.init5();
                }
                TSelectorItemButtonInitialize() {
                    this.TImgButtonInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgButtonInitialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_4.CUtil.trace("TSelectorItemButton:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TSelectorItemButton On Stage");
                    super.onAddedToStage(evt);
                    this.addChild(this.Sicons);
                    this.addChild(this.Scheckbox);
                }
            };
            exports_4("TSelectorItemButton", TSelectorItemButton);
        }
    };
});
System.register("thermite/TLabeledTab", ["thermite/TObject", "util/CUtil"], function (exports_5, context_5) {
    "use strict";
    var TObject_3, CUtil_5, TLabeledTab;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (TObject_3_1) {
                TObject_3 = TObject_3_1;
            },
            function (CUtil_5_1) {
                CUtil_5 = CUtil_5_1;
            }
        ],
        execute: function () {
            TLabeledTab = class TLabeledTab extends TObject_3.TObject {
                constructor() {
                    super();
                    this.init3();
                }
                TLabeledTabInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_5.CUtil.trace("TLabeledTab:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TLabeledTab On Stage");
                    super.onAddedToStage(evt);
                }
            };
            exports_5("TLabeledTab", TLabeledTab);
        }
    };
});
System.register("thermite/TTabTool", ["thermite/TObject", "util/CUtil"], function (exports_6, context_6) {
    "use strict";
    var TObject_4, CUtil_6, TTabTool;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (TObject_4_1) {
                TObject_4 = TObject_4_1;
            },
            function (CUtil_6_1) {
                CUtil_6 = CUtil_6_1;
            }
        ],
        execute: function () {
            TTabTool = class TTabTool extends TObject_4.TObject {
                constructor() {
                    super();
                    this.init3();
                }
                TTabToolInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_6.CUtil.trace("TTabTool:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TTabTool On Stage");
                    super.onAddedToStage(evt);
                    this.hideAllIcons();
                }
                hideAllIcons() {
                    var tabItemBut;
                    for (var i1 = 1; i1 < 10; i1++) {
                        tabItemBut = this.getChildByName("Sitem" + i1);
                        if (tabItemBut) {
                            CUtil_6.CUtil.trace("Initializing tab item selector: item" + i1);
                            tabItemBut.Sicons.hideAllIcons();
                        }
                    }
                }
            };
            exports_6("TTabTool", TTabTool);
        }
    };
});
System.register("thermite/TSelectorButton", ["thermite/TButton", "util/CUtil"], function (exports_7, context_7) {
    "use strict";
    var TButton_2, CUtil_7, TSelectorButton;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (TButton_2_1) {
                TButton_2 = TButton_2_1;
            },
            function (CUtil_7_1) {
                CUtil_7 = CUtil_7_1;
            }
        ],
        execute: function () {
            TSelectorButton = class TSelectorButton extends TButton_2.TButton {
                constructor() {
                    super();
                    this.init5();
                }
                TSelectorButtonInitialize() {
                    this.TImgButtonInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgButtonInitialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_7.CUtil.trace("TSelectorButton:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("SelectorButton On Stage");
                    super.onAddedToStage(evt);
                    this.SchangeLabel.visible = false;
                }
            };
            exports_7("TSelectorButton", TSelectorButton);
        }
    };
});
System.register("thermite/TController", ["thermite/TObject", "thermite/events/TSelectEvent", "util/CUtil", "util/CONST"], function (exports_8, context_8) {
    "use strict";
    var TObject_5, TSelectEvent_1, CUtil_8, CONST_1, TController;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (TObject_5_1) {
                TObject_5 = TObject_5_1;
            },
            function (TSelectEvent_1_1) {
                TSelectEvent_1 = TSelectEvent_1_1;
            },
            function (CUtil_8_1) {
                CUtil_8 = CUtil_8_1;
            },
            function (CONST_1_1) {
                CONST_1 = CONST_1_1;
            }
        ],
        execute: function () {
            TController = class TController extends TObject_5.TObject {
                constructor() {
                    super();
                    this.sel1 = "";
                    this.sel2 = "";
                    this.sel3 = "";
                    this.useChanged = false;
                    this.toolEnabled = false;
                    this.init3();
                }
                TControllerInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_8.CUtil.trace("TController:Constructor");
                    this.useChanged = false;
                    this.toolEnabled = false;
                }
                onAddedToStage(evt) {
                    console.log("TController On Stage");
                    super.onAddedToStage(evt);
                }
                onRemovedFromStage(evt) {
                    console.log("TController Off Stage");
                    super.onRemovedFromStage(evt);
                }
                initState() {
                    this.StopButton.SsubLabel.visible = false;
                    this.ScenterButton.SsubLabel.visible = false;
                    this.SbottomButton.SsubLabel.visible = false;
                    this.StabTool.visible = false;
                }
                deepStateCopy(src) {
                    super.deepStateCopy(src);
                    var ptrController = src;
                    this.sel1 = ptrController.sel1;
                    this.sel2 = ptrController.sel2;
                    this.sel3 = ptrController.sel3;
                    this.StopButton.SsubLabel.text = ptrController.StopButton.SsubLabel.text;
                    this.StopButton.SsubLabel.visible = ptrController.StopButton.SsubLabel.visible;
                    this.ScenterButton.SsubLabel.text = ptrController.ScenterButton.SsubLabel.text;
                    this.ScenterButton.SsubLabel.visible = ptrController.ScenterButton.SsubLabel.visible;
                    this.SbottomButton.SsubLabel.text = ptrController.SbottomButton.SsubLabel.text;
                    this.SbottomButton.SsubLabel.visible = ptrController.SbottomButton.SsubLabel.visible;
                }
                captureLogState(obj = null) {
                    obj = super.captureLogState(obj);
                    obj['object'] = 'imgcontroller';
                    obj['name'] = this.name;
                    obj['Item1'] = this.StopButton.SsubLabel.text;
                    obj['Changed1'] = this.StopButton.SchangeLabel.visible;
                    obj['Item2'] = this.ScenterButton.SsubLabel.text;
                    obj['Changed2'] = this.ScenterButton.SchangeLabel.visible;
                    obj['Item3'] = this.SbottomButton.SsubLabel.text;
                    obj['Changed3'] = this.SbottomButton.SchangeLabel.visible;
                    return obj;
                }
                captureXMLState() {
                    let stateVal = { topbutton: {}, centerbutton: {}, bottombutton: {} };
                    stateVal.name = this.name;
                    stateVal.topbutton.Item = this.sel1;
                    stateVal.topbutton.Changed = this.StopButton.SchangeLabel.visible;
                    stateVal.topbutton.Text = this.StopButton.SsubLabel.text;
                    stateVal.topbutton.Visible = this.StopButton.SsubLabel.visible;
                    stateVal.centerbutton.Item = this.sel2;
                    stateVal.centerbutton.Changed = this.ScenterButton.SchangeLabel.visible;
                    stateVal.centerbutton.Text = this.ScenterButton.SsubLabel.text;
                    stateVal.centerbutton.Visible = this.ScenterButton.SsubLabel.visible;
                    stateVal.bottombutton.Item = this.sel3;
                    stateVal.bottombutton.Changed = this.SbottomButton.SchangeLabel.visible;
                    stateVal.bottombutton.Text = this.SbottomButton.SsubLabel.text;
                    stateVal.bottombutton.Visible = this.SbottomButton.SsubLabel.visible;
                    return stateVal;
                }
                restoreXMLState(stateVal) {
                    this.sel1 = stateVal.topbutton.Item;
                    this.StopButton.SsubLabel.text = stateVal.topbutton.Text;
                    this.StopButton.SsubLabel.visible = stateVal.topbutton.Visible;
                    this.sel2 = stateVal.centerbutton.Item;
                    this.ScenterButton.SsubLabel.text = stateVal.centerbutton.Text;
                    this.ScenterButton.SsubLabel.visible = stateVal.centerbutton.Visible;
                    this.sel3 = stateVal.bottombutton.Item;
                    this.SbottomButton.SsubLabel.text = stateVal.bottombutton.Text;
                    this.SbottomButton.SsubLabel.visible = stateVal.bottombutton.Visible;
                }
                compareXMLState(stateVal) {
                    var bTest = true;
                    this.StopButton.SchangeLabel.visible = false;
                    this.ScenterButton.SchangeLabel.visible = false;
                    this.SbottomButton.SchangeLabel.visible = false;
                    if (this.sel1 != stateVal.topbutton.Item) {
                        this.useChanged ? this.StopButton.SchangeLabel.visible = true : null;
                        bTest = false;
                    }
                    if (this.sel2 != stateVal.centerbutton.Item) {
                        this.useChanged ? this.ScenterButton.SchangeLabel.visible = true : null;
                        bTest = false;
                    }
                    if (this.sel3 != stateVal.bottombutton.Item) {
                        this.useChanged ? this.SbottomButton.SchangeLabel.visible = true : null;
                        bTest = false;
                    }
                    return bTest;
                }
                initLabels(label1, label2, label3) {
                    this.StopButton.StopLabel.text = label1;
                    this.ScenterButton.StopLabel.text = label2;
                    this.SbottomButton.StopLabel.text = label3;
                    this.StabTool.StopTab.StabLabel.text = label1;
                    this.StabTool.ScenterTab.StabLabel.text = label2;
                    this.StabTool.SbottomTab.StabLabel.text = label3;
                }
                enableTool(bFlag) {
                    if (bFlag && !this.toolEnabled) {
                        this.topBndListener = this.StopButton.on(CONST_1.CONST.BUTTON_CLICK, this.topClick, this);
                        this.ctrBndListener = this.ScenterButton.on(CONST_1.CONST.BUTTON_CLICK, this.centerClick, this);
                        this.btmBndListener = this.SbottomButton.on(CONST_1.CONST.BUTTON_CLICK, this.bottomClick, this);
                        this.StopButton.enableButton(bFlag);
                        this.ScenterButton.enableButton(bFlag);
                        this.SbottomButton.enableButton(bFlag);
                        this.toolEnabled = true;
                    }
                    else if (!bFlag && this.toolEnabled) {
                        this.StopButton.off(CONST_1.CONST.BUTTON_CLICK, this.topBndListener);
                        this.ScenterButton.off(CONST_1.CONST.BUTTON_CLICK, this.ctrBndListener);
                        this.SbottomButton.off(CONST_1.CONST.BUTTON_CLICK, this.btmBndListener);
                        this.StopButton.enableButton(bFlag);
                        this.ScenterButton.enableButton(bFlag);
                        this.SbottomButton.enableButton(bFlag);
                        this.toolEnabled = false;
                    }
                }
                showTabTool(item1ID, item2ID, checkedItem, tabID) {
                    CUtil_8.CUtil.trace("Show TabTool: " + item1ID + " : " + item2ID + " : " + tabID);
                    this.item1Listener = item1ID;
                    this.item2Listener = item2ID;
                    this.StopButton.visible = false;
                    this.ScenterButton.visible = false;
                    this.SbottomButton.visible = false;
                    this.StabTool.StopTab.visible = false;
                    this.StabTool.ScenterTab.visible = false;
                    this.StabTool.SbottomTab.visible = false;
                    this.StabTool.hideAllIcons();
                    this.StabTool.Sitem1.visible = true;
                    this.StabTool.Sitem2.visible = true;
                    this.StabTool.Sitem3.visible = false;
                    this.StabTool.Sitem4.visible = false;
                    this.StabTool.Sitem5.visible = false;
                    this.StabTool.Sitem1.Scheckbox.setCheck(false);
                    this.StabTool.Sitem2.Scheckbox.setCheck(false);
                    if (checkedItem)
                        this.StabTool[checkedItem].Scheckbox.setCheck(true);
                    this.StabTool.Sitem1.Sicons[item1ID].visible = true;
                    this.StabTool.Sitem2.Sicons[item2ID].visible = true;
                    this.item1BndListener = this.StabTool.Sitem1.on(CONST_1.CONST.BUTTON_CLICK, this[item1ID], this);
                    this.item2BndListener = this.StabTool.Sitem2.on(CONST_1.CONST.BUTTON_CLICK, this[item2ID], this);
                    this.resizeDismissMask(true);
                    this.dismissBndListener = this.StabTool.SdismissButton.on(CONST_1.CONST.BUTTON_CLICK, this.doDismiss, this);
                    this.StabTool[tabID].visible = true;
                    this.StabTool.visible = true;
                }
                show3TabTool(item1ID, item2ID, item3ID, checkedItem, tabID) {
                    CUtil_8.CUtil.trace("Show TabTool: " + item1ID + " : " + item2ID + " : " + item3ID + " : " + tabID);
                    this.item1Listener = item1ID;
                    this.item2Listener = item2ID;
                    this.item3Listener = item3ID;
                    this.StopButton.visible = false;
                    this.ScenterButton.visible = false;
                    this.SbottomButton.visible = false;
                    this.StabTool.StopTab.visible = false;
                    this.StabTool.ScenterTab.visible = false;
                    this.StabTool.SbottomTab.visible = false;
                    this.StabTool.hideAllIcons();
                    this.StabTool.Sitem1.visible = false;
                    this.StabTool.Sitem2.visible = false;
                    this.StabTool.Sitem3.visible = true;
                    this.StabTool.Sitem4.visible = true;
                    this.StabTool.Sitem5.visible = true;
                    this.StabTool.Sitem3.Scheckbox.setCheck(false);
                    this.StabTool.Sitem4.Scheckbox.setCheck(false);
                    this.StabTool.Sitem5.Scheckbox.setCheck(false);
                    if (checkedItem)
                        this.StabTool[checkedItem].Scheckbox.setCheck(true);
                    this.StabTool.Sitem3.Sicons[item1ID].visible = true;
                    this.StabTool.Sitem4.Sicons[item2ID].visible = true;
                    this.StabTool.Sitem5.Sicons[item3ID].visible = true;
                    this.item3BndListener = this.StabTool.Sitem3.on(CONST_1.CONST.BUTTON_CLICK, this[item1ID], this);
                    this.item4BndListener = this.StabTool.Sitem4.on(CONST_1.CONST.BUTTON_CLICK, this[item2ID], this);
                    this.item5BndListener = this.StabTool.Sitem5.on(CONST_1.CONST.BUTTON_CLICK, this[item3ID], this);
                    this.resizeDismissMask(true);
                    this.dismissBndListener = this.StabTool.SdismissButton.on(CONST_1.CONST.BUTTON_CLICK, this.doDismiss, this);
                    this.StabTool[tabID].visible = true;
                    this.StabTool.visible = true;
                }
                resizeDismissMask(showHide) {
                    var iPnt = this.globalToLocal(0, 0);
                    var ePnt = this.globalToLocal(this.tutorDoc.STAGEWIDTH, this.tutorDoc.STAGEHEIGHT);
                }
                dismissTool(eventID) {
                    CUtil_8.CUtil.trace("dismiss TabTool: " + eventID);
                    var logData = { 'action': 'dismissTool', 'targetid': name, 'selection': eventID };
                    this.tutorDoc.log.logActionEvent(logData);
                    this.queryQuestionDone();
                    this.StabTool.Sitem1.off(CONST_1.CONST.BUTTON_CLICK, this.item1BndListener);
                    this.StabTool.Sitem2.off(CONST_1.CONST.BUTTON_CLICK, this.item2BndListener);
                    this.resizeDismissMask(false);
                    this.StabTool.SdismissButton.off(CONST_1.CONST.BUTTON_CLICK, this.dismissBndListener);
                    this.StopButton.visible = true;
                    this.ScenterButton.visible = true;
                    this.SbottomButton.visible = true;
                    this.StabTool.visible = false;
                    if (eventID)
                        this.dispatchEvent(new TSelectEvent_1.TSelectEvent(eventID, TSelectEvent_1.TSelectEvent.WOZTABSELECT));
                    this.hostScene.onSelect(this.name);
                }
                dismiss3Tool(eventID) {
                    CUtil_8.CUtil.trace("dismiss 3 TabTool: " + eventID);
                    var logData = { 'action': 'this.dismiss3Tool', 'targetid': name, 'selection': eventID };
                    this.tutorDoc.log.logActionEvent(logData);
                    this.queryQuestionDone();
                    this.StabTool.Sitem3.off(CONST_1.CONST.BUTTON_CLICK, this.item3BndListener);
                    this.StabTool.Sitem4.off(CONST_1.CONST.BUTTON_CLICK, this.item4BndListener);
                    this.StabTool.Sitem5.off(CONST_1.CONST.BUTTON_CLICK, this.item5BndListener);
                    this.resizeDismissMask(false);
                    this.StabTool.SdismissButton.off(CONST_1.CONST.BUTTON_CLICK, this.dismissBndListener);
                    this.StopButton.visible = true;
                    this.ScenterButton.visible = true;
                    this.SbottomButton.visible = true;
                    this.StabTool.visible = false;
                    if (eventID)
                        this.dispatchEvent(new TSelectEvent_1.TSelectEvent(eventID, TSelectEvent_1.TSelectEvent.WOZTABSELECT));
                    this.hostScene.onSelect(this.name);
                }
                doDismiss(evt) {
                    this.dismissTool(null);
                }
                queryQuestionDone() {
                }
                topClick(evt) {
                }
                centerClick(evt) {
                }
                bottomClick(evt) {
                }
            };
            exports_8("TController", TController);
        }
    };
});
System.register("thermite/TBakingController", ["thermite/TController", "util/CUtil"], function (exports_9, context_9) {
    "use strict";
    var TController_1, CUtil_9, TBakingController;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (TController_1_1) {
                TController_1 = TController_1_1;
            },
            function (CUtil_9_1) {
                CUtil_9 = CUtil_9_1;
            }
        ],
        execute: function () {
            TBakingController = class TBakingController extends TController_1.TController {
                constructor() {
                    super();
                    this.init4();
                }
                TBakingControllerInitialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                initialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                init4() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_9.CUtil.trace("TBakingController:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TBakingController On Stage");
                    super.onAddedToStage(evt);
                    this.initLabels("Temperature", "Sweetener", "Eggs");
                }
                topClick(evt) {
                    this.show3TabTool("temp200", "temp350", "temp500", this.sel1, "StopTab");
                }
                temp200(evt) {
                    this.StopButton.SsubLabel.text = "200 Degrees";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem3";
                    this.dismiss3Tool("temp200");
                }
                temp350(evt) {
                    this.StopButton.SsubLabel.text = "350 Degrees";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem4";
                    this.dismiss3Tool("temp350");
                }
                temp500(evt) {
                    this.StopButton.SsubLabel.text = "500 Degrees";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem5";
                    this.dismiss3Tool("temp500");
                }
                centerClick(evt) {
                    this.showTabTool("honey", "sugar", this.sel2, "ScenterTab");
                }
                honey(evt) {
                    this.ScenterButton.SsubLabel.text = "Honey";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem1";
                    this.dismissTool("honey");
                }
                sugar(evt) {
                    this.ScenterButton.SsubLabel.text = "Sugar";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem2";
                    this.dismissTool("sugar");
                }
                bottomClick(evt) {
                    this.showTabTool("oneEgg", "threeEgg", this.sel3, "SbottomTab");
                }
                oneEgg(evt) {
                    this.SbottomButton.SsubLabel.text = "One Egg";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem1";
                    this.dismissTool("oneEgg");
                }
                threeEgg(evt) {
                    this.SbottomButton.SsubLabel.text = "Three Eggs";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem2";
                    this.dismissTool("threeEgg");
                }
                queryQuestionDone() {
                    if (this.sel1 && this.sel2 && this.sel3)
                        this.dispatchEvent(new Event("Done"));
                }
            };
            exports_9("TBakingController", TBakingController);
        }
    };
});
System.register("thermite/TImgTool", ["thermite/TObject", "core/CEFTimeLine", "thermite/events/TMouseEvent", "thermite/events/TSelectEvent", "util/CUtil"], function (exports_10, context_10) {
    "use strict";
    var TObject_6, CEFTimeLine_1, TMouseEvent_1, TSelectEvent_2, CUtil_10, TImgTool;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (TObject_6_1) {
                TObject_6 = TObject_6_1;
            },
            function (CEFTimeLine_1_1) {
                CEFTimeLine_1 = CEFTimeLine_1_1;
            },
            function (TMouseEvent_1_1) {
                TMouseEvent_1 = TMouseEvent_1_1;
            },
            function (TSelectEvent_2_1) {
                TSelectEvent_2 = TSelectEvent_2_1;
            },
            function (CUtil_10_1) {
                CUtil_10 = CUtil_10_1;
            }
        ],
        execute: function () {
            TImgTool = class TImgTool extends TObject_6.TObject {
                constructor() {
                    super();
                    this.useFeatureMask = false;
                    this.init3();
                }
                TImgToolInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_10.CUtil.trace("TImgTool:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TImgTool On Stage");
                    if (!this.fAdded) {
                        this.effectTimeLine = new CEFTimeLine_1.CEFTimeLine(null, null, { "useTicks": false, "loop": false, "paused": true }, this.tutorDoc);
                        this.effectTweens = new Array();
                        this.addChild(this[this.feature1A]);
                        this.addChild(this[this.feature1B]);
                        this.addChild(this[this.feature2A]);
                        this.addChild(this[this.feature2B]);
                        this.addChild(this[this.feature3A]);
                        this.addChild(this[this.feature3B]);
                        this.fAdded = true;
                    }
                    super.onAddedToStage(evt);
                }
                initState() {
                    this.hideAllButtons();
                }
                initListeners() {
                    this[this.feature1A].on(TMouseEvent_1.TMouseEvent.CLICK, this.dofeature1A, this);
                    this[this.feature1B].on(TMouseEvent_1.TMouseEvent.CLICK, this.dofeature1B, this);
                    this[this.feature2A].on(TMouseEvent_1.TMouseEvent.CLICK, this.dofeature2A, this);
                    this[this.feature2B].on(TMouseEvent_1.TMouseEvent.CLICK, this.dofeature2B, this);
                    this[this.feature3A].on(TMouseEvent_1.TMouseEvent.CLICK, this.dofeature3A, this);
                    this[this.feature3B].on(TMouseEvent_1.TMouseEvent.CLICK, this.dofeature3B, this);
                }
                manageMasks(target) {
                }
                deepStateCopy(src) {
                    super.deepStateCopy(src);
                    this[this.feature1A].visible = src[this.feature1A].visible;
                    this[this.feature1B].visible = src[this.feature1B].visible;
                    this[this.feature2A].visible = src[this.feature2A].visible;
                    this[this.feature2B].visible = src[this.feature2B].visible;
                    this[this.feature3A].visible = src[this.feature3A].visible;
                    this[this.feature3B].visible = src[this.feature3B].visible;
                    if (this.useFeatureMask) {
                        this[this.featureMaskA].visible = src[this.featureMaskA].visible;
                        this[this.featureMaskB].visible = src[this.featureMaskB].visible;
                    }
                }
                get captureLOGString() {
                    var result;
                    if (this[this.feature1A].visible)
                        result = this.feature1A;
                    else if (this[this.feature1B].visible)
                        result = this.feature1B;
                    else
                        result = "none";
                    result += "-";
                    if (this[this.feature2A].visible)
                        result += this.feature2A;
                    else if (this[this.feature2B].visible)
                        result += this.feature2B;
                    else
                        result += "none";
                    result += "-";
                    if (this[this.feature3A].visible)
                        result += this.feature3A;
                    else if (this[this.feature3B].visible)
                        result += this.feature3B;
                    else
                        result += "none";
                    return result;
                }
                captureLogState(obj = null) {
                    obj = super.captureLogState(obj);
                    var image1;
                    var image2;
                    var image3;
                    var imageMask1;
                    var imageMask2;
                    if (this[this.feature1A].visible)
                        image1 = this.feature1A;
                    else if (this[this.feature1B].visible)
                        image1 = this.feature1B;
                    else
                        image1 = "none";
                    if (this[this.feature2A].visible)
                        image2 = this.feature2A;
                    else if (this[this.feature2B].visible)
                        image2 = this.feature2B;
                    else
                        image2 = "none";
                    if (this[this.feature3A].visible)
                        image3 = this.feature3A;
                    else if (this[this.feature3B].visible)
                        image3 = this.feature3B;
                    else
                        image3 = "none";
                    if (this.useFeatureMask) {
                        if (this[this.featureMaskA].visible)
                            imageMask1 = "true";
                        else
                            imageMask1 = "false";
                        if (this[this.featureMaskB].visible)
                            imageMask2 = "true";
                        else
                            imageMask2 = "false";
                    }
                    obj['object'] = 'imgtool';
                    obj['name'] = this.name;
                    obj['image1'] = image1;
                    obj['image2'] = image2;
                    obj['image3'] = image3;
                    obj['mask1'] = imageMask1;
                    obj['mask2'] = imageMask2;
                    return obj;
                }
                captureXMLState() {
                    var stateVal = { imgtool: {} };
                    var imgTool = imgTool.imgTool;
                    if (this[this.feature1A].visible)
                        imgTool.image1 = this.feature1A;
                    else if (this[this.feature1B].visible)
                        imgTool.image1 = this.feature1B;
                    else
                        imgTool.image1 = "none";
                    if (this[this.feature2A].visible)
                        imgTool.image2 = this.feature2A;
                    else if (this[this.feature2B].visible)
                        imgTool.image2 = this.feature2B;
                    else
                        imgTool.image2 = "none";
                    if (this[this.feature3A].visible)
                        imgTool.image3 = this.feature3A;
                    else if (this[this.feature3B].visible)
                        imgTool.image3 = this.feature3B;
                    else
                        imgTool.image3 = "none";
                    this.imgTool.name = this.name;
                    if (this.useFeatureMask) {
                        if (this[this.featureMaskA].visible)
                            imgTool.imageMask1 = "true";
                        else
                            imgTool.imageMask1 = "false";
                        if (this[this.featureMaskB].visible)
                            imgTool.imageMask2 = "true";
                        else
                            imgTool.imageMask2 = "false";
                    }
                    return stateVal;
                }
                restoreXMLState(stateVal) {
                    this[this.feature1A].visible = false;
                    this[this.feature1B].visible = false;
                    if (stateVal.image1 != "none")
                        this[stateVal.image1].visible = true;
                    this[this.feature2A].visible = false;
                    this[this.feature2B].visible = false;
                    if (stateVal.image2 != "none")
                        this[stateVal.image2].visible = true;
                    this[this.feature3A].visible = false;
                    this[this.feature3B].visible = false;
                    if (stateVal.image3 != "none")
                        this[stateVal.image3].visible = true;
                    if (this.useFeatureMask) {
                        this[this.featureMaskA].visible = (stateVal.mask1 == "true") ? true : false;
                        this[this.featureMaskB].visible = (stateVal.mask2 == "true") ? true : false;
                    }
                }
                compareXMLState(xmlState) {
                    var bTest = true;
                    if ((this[xmlState.image1].visible != true) ||
                        (this[xmlState.image2].visible != true) ||
                        (this[xmlState.image3].visible != true))
                        bTest = false;
                    return bTest;
                }
                hideAllButtons() {
                    for (var i1 = 0; i1 < this.numChildren; i1++) {
                        this.getChildAt(i1).visible = false;
                    }
                }
                enableTool(bFlag) {
                    this[this.feature1A].enableButton(bFlag);
                    this[this.feature1B].enableButton(bFlag);
                    this[this.feature2A].enableButton(bFlag);
                    this[this.feature2B].enableButton(bFlag);
                    this[this.feature3A].enableButton(bFlag);
                    this[this.feature3B].enableButton(bFlag);
                }
                logSelection(feature) {
                    var logData = { 'action': 'imageclicked', 'targetid': name, 'selection': feature };
                    this.tutorDoc.log.logActionEvent(logData);
                }
                dofeature1A(evt) {
                    this.logSelection(this.feature1A);
                    this.dispatchEvent(new TSelectEvent_2.TSelectEvent(this.feature1A, TSelectEvent_2.TSelectEvent.WOZIMGSELECT));
                }
                dofeature1B(evt) {
                    this.logSelection(this.feature1B);
                    this.dispatchEvent(new TSelectEvent_2.TSelectEvent(this.feature1B, TSelectEvent_2.TSelectEvent.WOZIMGSELECT));
                }
                dofeature2A(evt) {
                    this.logSelection(this.feature2A);
                    this.dispatchEvent(new TSelectEvent_2.TSelectEvent(this.feature2A, TSelectEvent_2.TSelectEvent.WOZIMGSELECT));
                }
                dofeature2B(evt) {
                    this.logSelection(this.feature2B);
                    this.dispatchEvent(new TSelectEvent_2.TSelectEvent(this.feature2B, TSelectEvent_2.TSelectEvent.WOZIMGSELECT));
                }
                dofeature3A(evt) {
                    this.logSelection(this.feature3A);
                    this.dispatchEvent(new TSelectEvent_2.TSelectEvent(this.feature3A, TSelectEvent_2.TSelectEvent.WOZIMGSELECT));
                }
                dofeature3B(evt) {
                    this.logSelection(this.feature3B);
                    this.dispatchEvent(new TSelectEvent_2.TSelectEvent(this.feature3B, TSelectEvent_2.TSelectEvent.WOZIMGSELECT));
                }
            };
            exports_10("TImgTool", TImgTool);
        }
    };
});
System.register("thermite/TImgTool322", ["thermite/TImgTool", "thermite/events/TSelectEvent", "util/CUtil", "util/CONST"], function (exports_11, context_11) {
    "use strict";
    var TImgTool_1, TSelectEvent_3, CUtil_11, CONST_2, TImgTool322;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (TImgTool_1_1) {
                TImgTool_1 = TImgTool_1_1;
            },
            function (TSelectEvent_3_1) {
                TSelectEvent_3 = TSelectEvent_3_1;
            },
            function (CUtil_11_1) {
                CUtil_11 = CUtil_11_1;
            },
            function (CONST_2_1) {
                CONST_2 = CONST_2_1;
            }
        ],
        execute: function () {
            TImgTool322 = class TImgTool322 extends TImgTool_1.TImgTool {
                constructor() {
                    super();
                    this.init4();
                }
                TImgTool322Initialize() {
                    this.TImgToolInitialize.call(this);
                    this.init4();
                }
                initialize() {
                    this.TImgToolInitialize.call(this);
                    this.init4();
                }
                init4() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_11.CUtil.trace("TImgTool322:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TImgTool322 On Stage");
                    this.addChild(this[this.feature1C]);
                    super.onAddedToStage(evt);
                }
                initListeners() {
                    super.initListeners();
                    this[this.feature1C].on(CONST_2.CONST.BUTTON_CLICK, this.dofeature1C, this);
                }
                deepStateCopy(src) {
                    super.deepStateCopy(src);
                    this[this.feature1C].visible = src[this.feature1C].visible;
                }
                get captureLOGString() {
                    var result;
                    if (this[this.feature1A].visible)
                        result = this.feature1A;
                    else if (this[this.feature1B].visible)
                        result = this.feature1B;
                    else if (this[this.feature1C].visible)
                        result = this.feature1C;
                    else
                        result = "none";
                    result += "-";
                    if (this[this.feature2A].visible)
                        result += this.feature2A;
                    else if (this[this.feature2B].visible)
                        result += this.feature2B;
                    else
                        result += "none";
                    result += "-";
                    if (this[this.feature3A].visible)
                        result += this.feature3A;
                    else if (this[this.feature3B].visible)
                        result += this.feature3B;
                    else
                        result += "none";
                    return result;
                }
                captureLogState(obj = null) {
                    obj = super.captureLogState(obj);
                    var image1;
                    var image2;
                    var image3;
                    if (this[this.feature1A].visible)
                        image1 = this.feature1A;
                    else if (this[this.feature1B].visible)
                        image1 = this.feature1B;
                    else if (this[this.feature1C].visible)
                        image1 = this.feature1C;
                    else
                        image1 = "none";
                    if (this[this.feature2A].visible)
                        image2 = this.feature2A;
                    else if (this[this.feature2B].visible)
                        image2 = this.feature2B;
                    else
                        image2 = "none";
                    if (this[this.feature3A].visible)
                        image3 = this.feature3A;
                    else if (this[this.feature3B].visible)
                        image3 = this.feature3B;
                    else
                        image3 = "none";
                    obj['object'] = 'imgtool';
                    obj['name'] = this.name;
                    obj['image1'] = image1;
                    obj['image2'] = image2;
                    obj['image3'] = image3;
                    return obj;
                }
                captureXMLState() {
                    var stateVal = {};
                    if (this[this.feature1A].visible)
                        stateVal.image1 = this.feature1A;
                    else if (this[this.feature1B].visible)
                        stateVal.image1 = this.feature1B;
                    else if (this[this.feature1C].visible)
                        stateVal.image1 = this.feature1C;
                    else
                        stateVal.image1 = "none";
                    if (this[this.feature2A].visible)
                        stateVal.image2 = this.feature2A;
                    else if (this[this.feature2B].visible)
                        stateVal.image2 = this.feature2B;
                    else
                        stateVal.image2 = "none";
                    if (this[this.feature3A].visible)
                        stateVal.image3 = this.feature3A;
                    else if (this[this.feature3B].visible)
                        stateVal.image3 = this.feature3B;
                    else
                        stateVal.image3 = "none";
                    stateVal.name = this.name;
                    return stateVal;
                }
                restoreXMLState(stateVal) {
                    this[this.feature1A].visible = false;
                    this[this.feature1B].visible = false;
                    this[this.feature1C].visible = false;
                    if (stateVal.image1 != "none")
                        this[stateVal.image1].visible = true;
                    this[this.feature2A].visible = false;
                    this[this.feature2B].visible = false;
                    if (stateVal.image2 != "none")
                        this[stateVal.image2].visible = true;
                    this[this.feature3A].visible = false;
                    this[this.feature3B].visible = false;
                    if (stateVal.image3 != "none")
                        this[stateVal.image3].visible = true;
                }
                enableTool(bFlag) {
                    super.enableTool(bFlag);
                    this[this.feature1C].enableButton(bFlag);
                }
                dofeature1C(evt) {
                    this.logSelection(this.feature1C);
                    this.dispatchEvent(new TSelectEvent_3.TSelectEvent(this.feature1C, TSelectEvent_3.TSelectEvent.WOZIMGSELECT));
                }
            };
            exports_11("TImgTool322", TImgTool322);
        }
    };
});
System.register("thermite/TBakingImgTool", ["thermite/TImgTool322", "util/CUtil"], function (exports_12, context_12) {
    "use strict";
    var TImgTool322_1, CUtil_12, TBakingImgTool;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (TImgTool322_1_1) {
                TImgTool322_1 = TImgTool322_1_1;
            },
            function (CUtil_12_1) {
                CUtil_12 = CUtil_12_1;
            }
        ],
        execute: function () {
            TBakingImgTool = class TBakingImgTool extends TImgTool322_1.TImgTool322 {
                constructor() {
                    super();
                    this.init5();
                }
                TBakingImgToolInitialize() {
                    this.TImgTool322Initialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgTool322Initialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_12.CUtil.trace("TBakingImgTool:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TBakingImgTool On Stage");
                    this.feature1A = "temp200";
                    this.feature1B = "temp350";
                    this.feature1C = "temp500";
                    this.feature2A = "honey";
                    this.feature2B = "sugar";
                    this.feature3A = "oneEgg";
                    this.feature3B = "threeEgg";
                    this.initListeners();
                    super.onAddedToStage(evt);
                }
            };
            exports_12("TBakingImgTool", TBakingImgTool);
        }
    };
});
System.register("thermite/TCarsController", ["thermite/TController", "util/CUtil"], function (exports_13, context_13) {
    "use strict";
    var TController_2, CUtil_13, TCarsController;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (TController_2_1) {
                TController_2 = TController_2_1;
            },
            function (CUtil_13_1) {
                CUtil_13 = CUtil_13_1;
            }
        ],
        execute: function () {
            TCarsController = class TCarsController extends TController_2.TController {
                constructor() {
                    super();
                    this.init4();
                }
                TCarsControllerInitialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                initialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                init4() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_13.CUtil.trace("TCarsController:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TCarsController On Stage");
                    super.onAddedToStage(evt);
                    this.initLabels("Roof", "Doors", "Tires");
                }
                topClick(evt) {
                    this.showTabTool("topClosed", "topOpen", this.sel1, "StopTab");
                }
                topClosed(evt) {
                    this.StopButton.SsubLabel.text = "Closed";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem1";
                    this.dismissTool("topClosed");
                }
                topOpen(evt) {
                    this.StopButton.SsubLabel.text = "Open";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem2";
                    this.dismissTool("topOpen");
                }
                centerClick(evt) {
                    this.showTabTool("doorsTwo", "doorsFour", this.sel2, "ScenterTab");
                }
                doorsTwo(evt) {
                    this.ScenterButton.SsubLabel.text = "Two";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem1";
                    this.dismissTool("doorsTwo");
                }
                doorsFour(evt) {
                    this.ScenterButton.SsubLabel.text = "Four";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem2";
                    this.dismissTool("doorsFour");
                }
                bottomClick(evt) {
                    this.showTabTool("tiresLarge", "tiresSmall", this.sel3, "SbottomTab");
                }
                tiresLarge(evt) {
                    this.SbottomButton.SsubLabel.text = "Large";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem1";
                    this.dismissTool("tiresLarge");
                }
                tiresSmall(evt) {
                    this.SbottomButton.SsubLabel.text = "Small";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem2";
                    this.dismissTool("tiresSmall");
                }
                queryQuestionDone() {
                    if (this.sel1 && this.sel2 && this.sel3)
                        this.dispatchEvent(new Event("Done"));
                }
            };
            exports_13("TCarsController", TCarsController);
        }
    };
});
System.register("thermite/TCarsImgTool", ["thermite/TImgTool", "util/CUtil"], function (exports_14, context_14) {
    "use strict";
    var TImgTool_2, CUtil_14, TCarsImgTool;
    var __moduleName = context_14 && context_14.id;
    return {
        setters: [
            function (TImgTool_2_1) {
                TImgTool_2 = TImgTool_2_1;
            },
            function (CUtil_14_1) {
                CUtil_14 = CUtil_14_1;
            }
        ],
        execute: function () {
            TCarsImgTool = class TCarsImgTool extends TImgTool_2.TImgTool {
                constructor() {
                    super();
                    this.init5();
                }
                TCarsImgToolInitialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_14.CUtil.trace("TCarsImgTool:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TCarsImgTool On Stage");
                    this.feature1A = "topClosed";
                    this.feature1B = "topOpen";
                    this.feature2A = "doorsTwo";
                    this.feature2B = "doorsFour";
                    this.feature3A = "tiresLarge";
                    this.feature3B = "tiresSmall";
                    this.initListeners();
                    super.onAddedToStage(evt);
                }
            };
            exports_14("TCarsImgTool", TCarsImgTool);
        }
    };
});
System.register("thermite/TComboButton", ["thermite/TImgButton", "util/CUtil"], function (exports_15, context_15) {
    "use strict";
    var TImgButton_2, CUtil_15, TComboButton;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (TImgButton_2_1) {
                TImgButton_2 = TImgButton_2_1;
            },
            function (CUtil_15_1) {
                CUtil_15 = CUtil_15_1;
            }
        ],
        execute: function () {
            TComboButton = class TComboButton extends TImgButton_2.TImgButton {
                constructor() {
                    super();
                    this.init5();
                }
                TComboButtonInitialize() {
                    this.TImgButtonInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgButtonInitialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_15.CUtil.trace("TComboButton:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("ComboButton On Stage");
                    super.onAddedToStage(evt);
                    this.addChild(this.SchangeLabel);
                    this.addChild(this.StopLabel);
                    this.addChild(this.SsubLabel);
                    this.SchangeLabel.visible = false;
                }
            };
            exports_15("TComboButton", TComboButton);
        }
    };
});
System.register("thermite/TDrinkController", ["thermite/TController", "util/CUtil"], function (exports_16, context_16) {
    "use strict";
    var TController_3, CUtil_16, TDrinkController;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (TController_3_1) {
                TController_3 = TController_3_1;
            },
            function (CUtil_16_1) {
                CUtil_16 = CUtil_16_1;
            }
        ],
        execute: function () {
            TDrinkController = class TDrinkController extends TController_3.TController {
                constructor() {
                    super();
                    this.init4();
                }
                TDrinkControllerInitialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                initialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                init4() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_16.CUtil.trace("TDrinkController:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TDrinkController On Stage");
                    super.onAddedToStage(evt);
                    this.initLabels("Time", "Age", "Drink");
                }
                topClick(evt) {
                    this.show3TabTool("clockNoon", "clockThree", "clockSix", this.sel1, "StopTab");
                }
                clockNoon(evt) {
                    this.StopButton.SsubLabel.text = "Noon";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem3";
                    this.dismiss3Tool("clockNoon");
                }
                clockThree(evt) {
                    this.StopButton.SsubLabel.text = "3:00 PM";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem4";
                    this.dismiss3Tool("clockThree");
                }
                clockSix(evt) {
                    this.StopButton.SsubLabel.text = "6:00 PM";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem5";
                    this.dismiss3Tool("clockSix");
                }
                centerClick(evt) {
                    this.showTabTool("ageYoung", "ageOlder", this.sel2, "ScenterTab");
                }
                ageYoung(evt) {
                    this.ScenterButton.SsubLabel.text = "Younger";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem1";
                    this.dismissTool("ageYoung");
                }
                ageOlder(evt) {
                    this.ScenterButton.SsubLabel.text = "Older";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem2";
                    this.dismissTool("ageOlder");
                }
                bottomClick(evt) {
                    this.showTabTool("drinkLemon", "drinkTea", this.sel3, "SbottomTab");
                }
                drinkLemon(evt) {
                    this.SbottomButton.SsubLabel.text = "Lemonade";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem1";
                    this.dismissTool("drinkLemon");
                }
                drinkTea(evt) {
                    this.SbottomButton.SsubLabel.text = "Iced Tea";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem2";
                    this.dismissTool("drinkTea");
                }
                queryQuestionDone() {
                    if (this.sel1 && this.sel2 && this.sel3)
                        this.dispatchEvent(new Event("Done"));
                }
            };
            exports_16("TDrinkController", TDrinkController);
        }
    };
});
System.register("thermite/TDrinkImgTool", ["thermite/TImgTool322", "util/CUtil"], function (exports_17, context_17) {
    "use strict";
    var TImgTool322_2, CUtil_17, TDrinkImgTool;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (TImgTool322_2_1) {
                TImgTool322_2 = TImgTool322_2_1;
            },
            function (CUtil_17_1) {
                CUtil_17 = CUtil_17_1;
            }
        ],
        execute: function () {
            TDrinkImgTool = class TDrinkImgTool extends TImgTool322_2.TImgTool322 {
                constructor() {
                    super();
                    this.init5();
                }
                TDrinkImgToolInitialize() {
                    this.TImgTool322Initialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgTool322Initialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_17.CUtil.trace("TDrinkImgTool:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TDrinkImgTool On Stage");
                    this.feature1A = "clockNoon";
                    this.feature1B = "clockThree";
                    this.feature1C = "clockSix";
                    this.feature2A = "ageYoung";
                    this.feature2B = "ageOlder";
                    this.feature3A = "drinkLemon";
                    this.feature3B = "drinkTea";
                    this.initListeners();
                    super.onAddedToStage(evt);
                }
            };
            exports_17("TDrinkImgTool", TDrinkImgTool);
        }
    };
});
System.register("thermite/THouseController", ["thermite/TController", "util/CUtil"], function (exports_18, context_18) {
    "use strict";
    var TController_4, CUtil_18, THouseController;
    var __moduleName = context_18 && context_18.id;
    return {
        setters: [
            function (TController_4_1) {
                TController_4 = TController_4_1;
            },
            function (CUtil_18_1) {
                CUtil_18 = CUtil_18_1;
            }
        ],
        execute: function () {
            THouseController = class THouseController extends TController_4.TController {
                constructor() {
                    super();
                    this.init4();
                }
                THouseControllerInitialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                initialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                init4() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_18.CUtil.trace("THouseController:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("THouseController On Stage");
                    super.onAddedToStage(evt);
                    this.initLabels("Chimney", "Paint Color", "Front Door");
                }
                topClick(evt) {
                    this.showTabTool("chimneyLeft", "chimneyRight", this.sel1, "StopTab");
                }
                chimneyLeft(evt) {
                    this.StopButton.SsubLabel.text = "Left Side";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem1";
                    this.dismissTool("chimneyLeft");
                }
                chimneyRight(evt) {
                    this.StopButton.SsubLabel.text = "Right Side";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem2";
                    this.dismissTool("chimneyRight");
                }
                centerClick(evt) {
                    this.showTabTool("pinkPaint", "bluePaint", this.sel2, "ScenterTab");
                }
                pinkPaint(evt) {
                    this.ScenterButton.SsubLabel.text = "Pink Paint";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem1";
                    this.dismissTool("pinkPaint");
                }
                bluePaint(evt) {
                    this.ScenterButton.SsubLabel.text = "Blue Paint";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem2";
                    this.dismissTool("bluePaint");
                }
                bottomClick(evt) {
                    this.showTabTool("singleDoor", "doubleDoor", this.sel3, "SbottomTab");
                }
                singleDoor(evt) {
                    this.SbottomButton.SsubLabel.text = "Single Door";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem1";
                    this.dismissTool("singleDoor");
                }
                doubleDoor(evt) {
                    this.SbottomButton.SsubLabel.text = "Double Door";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem2";
                    this.dismissTool("doubleDoor");
                }
                queryQuestionDone() {
                    if (this.sel1 && this.sel2 && this.sel3)
                        this.dispatchEvent(new Event("Done"));
                }
            };
            exports_18("THouseController", THouseController);
        }
    };
});
System.register("thermite/THouseImgTool", ["thermite/TImgTool", "util/CUtil"], function (exports_19, context_19) {
    "use strict";
    var TImgTool_3, CUtil_19, THouseImgTool;
    var __moduleName = context_19 && context_19.id;
    return {
        setters: [
            function (TImgTool_3_1) {
                TImgTool_3 = TImgTool_3_1;
            },
            function (CUtil_19_1) {
                CUtil_19 = CUtil_19_1;
            }
        ],
        execute: function () {
            THouseImgTool = class THouseImgTool extends TImgTool_3.TImgTool {
                constructor() {
                    super();
                    this.init5();
                }
                THouseImgToolInitialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_19.CUtil.trace("THouseImgTool:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("THouseImgTool On Stage");
                    this.feature1A = "singleDoor";
                    this.feature1B = "doubleDoor";
                    this.feature2A = "bluePaint";
                    this.feature2B = "pinkPaint";
                    this.feature3A = "chimneyLeft";
                    this.feature3B = "chimneyRight";
                    this.initListeners();
                    super.onAddedToStage(evt);
                }
            };
            exports_19("THouseImgTool", THouseImgTool);
        }
    };
});
System.register("thermite/TImgCheckButton", ["thermite/TImgButton", "util/CUtil", "util/CONST"], function (exports_20, context_20) {
    "use strict";
    var TImgButton_3, CUtil_20, CONST_3, TImgCheckButton;
    var __moduleName = context_20 && context_20.id;
    return {
        setters: [
            function (TImgButton_3_1) {
                TImgButton_3 = TImgButton_3_1;
            },
            function (CUtil_20_1) {
                CUtil_20 = CUtil_20_1;
            },
            function (CONST_3_1) {
                CONST_3 = CONST_3_1;
            }
        ],
        execute: function () {
            TImgCheckButton = class TImgCheckButton extends TImgButton_3.TImgButton {
                constructor() {
                    super();
                    this.fChecked = false;
                    this._ftrChecked = "";
                    this._ftrUnchecked = "";
                    this.init5();
                }
                TImgCheckButtonInitialize() {
                    this.TImgButtonInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgButtonInitialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_20.CUtil.trace("TImgCheckButton:Constructor");
                    this.STATE_CHECKED = "Schecked";
                }
                Destructor() {
                    super.Destructor();
                }
                onAddedToStage(evt) {
                    super.onAddedToStage(evt);
                    this.addChild(this[this.STATE_CHECKED]);
                    if (this.fChecked)
                        this[this.STATE_CHECKED].visible = true;
                    else
                        this[this.STATE_CHECKED].visible = false;
                }
                highLight(color) {
                    this.Slabel.color = color;
                }
                set label(newLabel) {
                    this.Slabel.text = newLabel;
                }
                get label() {
                    return this.Slabel.text;
                }
                set showLabel(bVisible) {
                    this.Slabel.visible = bVisible;
                }
                captureDefState(TutScene) {
                    super.captureDefState(TutScene);
                }
                restoreDefState(TutScene) {
                    this.fChecked = false;
                    super.restoreDefState(TutScene);
                }
                deepStateCopy(src) {
                    this.fChecked = src["fChecked"];
                    this.curState = src["curState"];
                    this._isvalid = src["_isvalid"];
                    this.label = src["Slabel"].label.text;
                    this.Slabel.visible = src["Slabel"].visible;
                    this.gotoState(this.curState);
                    super.deepStateCopy(src);
                }
                captureLogState(obj = null) {
                    obj = super.captureLogState(obj);
                    obj['checked'] = this.fChecked.toString();
                    return obj;
                }
                captureXMLState() {
                    let xmlVal = super.captureXMLState();
                    xmlVal.checked = this.fChecked.toString();
                    return xmlVal;
                }
                resetState() {
                    super.resetState();
                    this[this.STATE_CHECKED].visible = false;
                }
                gotoState(sState) {
                    if (this.traceMode)
                        CUtil_20.CUtil.trace("Button.gotoState: ", name + " " + sState);
                    this.resetState();
                    this.curState = sState;
                    if (!this.fEnabled) {
                        this[this.STATE_UP].visible = false;
                        this[this.STATE_DISABLED].visible = true;
                        this.fPressed = false;
                    }
                    else
                        switch (sState) {
                            case this.STATE_DOWN:
                                this[this.STATE_DOWN].visible = true;
                                this.fPressed = true;
                                break;
                            case this.STATE_UP:
                                if (this.fChecked)
                                    this[this.STATE_CHECKED].visible = true;
                                else
                                    this[this.STATE_UP].visible = true;
                                this.fPressed = false;
                                break;
                            case this.STATE_OVER:
                                if (!this.fPressed) {
                                    if (this.fChecked)
                                        this[this.STATE_CHECKED].visible = true;
                                    else
                                        this[this.STATE_OVER].visible = true;
                                }
                                else
                                    this[this.STATE_DOWN].visible = true;
                                this.fOver = true;
                                break;
                            case CONST_3.CONST.STATE_OUT:
                                if (this.fChecked)
                                    this[this.STATE_CHECKED].visible = true;
                                else
                                    this[this.STATE_UP].visible = true;
                                this.fOver = false;
                                this.fPressed = false;
                                break;
                        }
                }
                doMouseClicked(evt) {
                    this.setCheck(!this.fChecked);
                    if (this.traceMode)
                        CUtil_20.CUtil.trace("Setting Checked State: " + this.fChecked + " on button: " + name);
                    this.doClickActions(evt);
                }
                setCheck(bCheck) {
                    this.fChecked = bCheck;
                    this.gotoState(this.STATE_UP);
                }
                getChecked() {
                    return this.fChecked;
                }
                assertFeatures() {
                    if (this.fChecked) {
                        this._activeFeature = this._ftrChecked;
                    }
                    else {
                        this._activeFeature = this._ftrUnchecked;
                    }
                    if (this._activeFeature != "") {
                        this.tutorDoc.addFeature(this._activeFeature);
                    }
                    return this.activeFeature;
                }
                retractFeatures() {
                    if (this._ftrChecked != "") {
                        this.tutorDoc.delFeature(this._ftrChecked);
                    }
                    if (this._ftrUnchecked != "") {
                        this.tutorDoc.delFeature(this._ftrUnchecked);
                    }
                }
                loadXML(xmlSrc) {
                    super.loadXML(xmlSrc);
                    if (xmlSrc.valid != undefined)
                        this._isvalid = xmlSrc.valid;
                    if (xmlSrc.ftrChecked != undefined)
                        this._ftrChecked = xmlSrc.ftrChecked;
                    if (xmlSrc.ftrUnchecked != undefined)
                        this._ftrUnchecked = xmlSrc.ftrUnchecked;
                    if (xmlSrc.checked != undefined)
                        this.setCheck(Boolean(xmlSrc.checked == "true" ? true : false));
                    if (xmlSrc.label != undefined)
                        this.setLabel(xmlSrc.label);
                    if (xmlSrc.showlabel != undefined)
                        this.showLabel = (Boolean(xmlSrc.showlabel == "true" ? true : false));
                }
                saveXML() {
                    let propVector;
                    return propVector;
                }
                deSerializeObj(objData) {
                    console.log("deserializing: CheckButton Control");
                    super.deSerializeObj(objData);
                }
            };
            exports_20("TImgCheckButton", TImgCheckButton);
        }
    };
});
System.register("thermite/TImgCircleControl", ["thermite/TImgCheckButton", "util/CUtil"], function (exports_21, context_21) {
    "use strict";
    var TImgCheckButton_1, CUtil_21, TImgCircleControl;
    var __moduleName = context_21 && context_21.id;
    return {
        setters: [
            function (TImgCheckButton_1_1) {
                TImgCheckButton_1 = TImgCheckButton_1_1;
            },
            function (CUtil_21_1) {
                CUtil_21 = CUtil_21_1;
            }
        ],
        execute: function () {
            TImgCircleControl = class TImgCircleControl extends TImgCheckButton_1.TImgCheckButton {
                constructor() {
                    super();
                    this.init6();
                }
                TImgCircleControlInitialize() {
                    this.TImgCheckButtonInitialize.call(this);
                    this.init6();
                }
                initialize() {
                    this.TImgCheckButtonInitialize.call(this);
                    this.init6();
                }
                init6() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_21.CUtil.trace("TImgCircleControl:Constructor");
                }
                logClick() {
                    var logData = { 'action': 'circle_click', 'targetid': name, 'label': this.Slabel.text, 'selection': this.fChecked };
                    this.tutorDoc.log.logActionEvent(logData);
                }
                resetState() {
                    this.Sup.visible = false;
                    this.Sover.visible = false;
                    this.Sdown.visible = false;
                    this.SdisabledUp.visible = false;
                    this.SdisabledDown.visible = false;
                    this.Sfocus.visible = false;
                    if (this.fChecked)
                        this.Schecked.visible = true;
                    else
                        this.Schecked.visible = false;
                }
                gotoState(sState) {
                    CUtil_21.CUtil.trace("TCircleControl.gotoState: ", name + " " + sState);
                    this.resetState();
                    this.curState = sState;
                    if (!this.fEnabled) {
                        if (!this.fChecked)
                            this.SdisabledUp.visible = true;
                        else
                            this.SdisabledDown.visible = true;
                        this.fPressed = false;
                    }
                    else
                        switch (sState) {
                            case "Sdown":
                                this.Sdown.visible = true;
                                this.fPressed = true;
                                break;
                            case "Sup":
                                if (this.fChecked)
                                    this.Schecked.visible = true;
                                else
                                    this.Sup.visible = true;
                                this.fPressed = false;
                                break;
                            case "Sover":
                                if (!this.fPressed)
                                    this.Sover.visible = true;
                                else
                                    this.Sdown.visible = true;
                                break;
                            case "Sout":
                                if (this.fChecked)
                                    this.Schecked.visible = true;
                                else
                                    this.Sup.visible = true;
                                break;
                        }
                }
                get captureLOGString() {
                    var strVal;
                    strVal = this.fChecked ? "checked" : "unchecked";
                    return strVal;
                }
                captureLOGState() {
                    let obj = { button: {} };
                    obj.button['name'] = this.Slabel.text;
                    obj.button['checked'] = this.fChecked.toString();
                    return obj;
                }
                restoreXMLState(xmlState) {
                    this.curState = xmlState.state;
                    this.fChecked = (xmlState.checked = "true") ? true : false;
                    this.fPressed = (xmlState.pressed = "true") ? true : false;
                    this.fEnabled = (xmlState.enabled = "true") ? true : false;
                }
                compareXMLState(xmlState) {
                    var bTest = true;
                    if (this.fChecked != xmlState.checked)
                        bTest = false;
                    return bTest;
                }
            };
            exports_21("TImgCircleControl", TImgCircleControl);
        }
    };
});
System.register("thermite/TImgRadioButton", ["thermite/TImgCheckButton", "util/CUtil", "thermite/events/TButtonEvent"], function (exports_22, context_22) {
    "use strict";
    var TImgCheckButton_2, CUtil_22, TButtonEvent_1, TImgRadioButton;
    var __moduleName = context_22 && context_22.id;
    return {
        setters: [
            function (TImgCheckButton_2_1) {
                TImgCheckButton_2 = TImgCheckButton_2_1;
            },
            function (CUtil_22_1) {
                CUtil_22 = CUtil_22_1;
            },
            function (TButtonEvent_1_1) {
                TButtonEvent_1 = TButtonEvent_1_1;
            }
        ],
        execute: function () {
            TImgRadioButton = class TImgRadioButton extends TImgCheckButton_2.TImgCheckButton {
                constructor() {
                    super();
                    this.init6();
                }
                TImgRadioButtonInitialize() {
                    this.TImgCheckButtonInitialize.call(this);
                    this.init6();
                }
                initialize() {
                    this.TImgCheckButtonInitialize.call(this);
                    this.init6();
                }
                init6() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_22.CUtil.trace("TImgRadioButton:Constructor");
                }
                doMouseClicked(evt) {
                    this.setCheck(true);
                    if (this.traceMode)
                        CUtil_22.CUtil.trace("Setting Checked State: " + this.fChecked + " on button: " + name);
                    this.doClickActions(evt);
                }
                setCheck(bCheck) {
                    super.setCheck(bCheck);
                    if (this.fChecked)
                        this.dispatchEvent(new TButtonEvent_1.TButtonEvent(TButtonEvent_1.TButtonEvent.WOZCHECKED));
                    else
                        this.dispatchEvent(new TButtonEvent_1.TButtonEvent(TButtonEvent_1.TButtonEvent.WOZUNCHECKED));
                }
            };
            exports_22("TImgRadioButton", TImgRadioButton);
        }
    };
});
System.register("thermite/TLabelControl", [], function (exports_23, context_23) {
    "use strict";
    var Text, TLabelControl;
    var __moduleName = context_23 && context_23.id;
    return {
        setters: [],
        execute: function () {
            Text = createjs.Text;
            TLabelControl = class TLabelControl extends Text {
                constructor() {
                    super();
                }
                setLabel(newLabel, colour = 0x000000) {
                    this.text = newLabel;
                }
            };
            exports_23("TLabelControl", TLabelControl);
        }
    };
});
System.register("thermite/TMemoryController", ["thermite/TController", "util/CUtil"], function (exports_24, context_24) {
    "use strict";
    var TController_5, CUtil_23, TMemoryController;
    var __moduleName = context_24 && context_24.id;
    return {
        setters: [
            function (TController_5_1) {
                TController_5 = TController_5_1;
            },
            function (CUtil_23_1) {
                CUtil_23 = CUtil_23_1;
            }
        ],
        execute: function () {
            TMemoryController = class TMemoryController extends TController_5.TController {
                constructor() {
                    super();
                    this.init4();
                }
                TMemoryControllerInitialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                initialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                init4() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_23.CUtil.trace("TMemoryController:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TMemoryController On Stage");
                    super.onAddedToStage(evt);
                    this.initLabels("Lighting", "Flashcards", "Time");
                }
                topClick(evt) {
                    this.showTabTool("lightBright", "lightDim", this.sel1, "StopTab");
                }
                lightBright(evt) {
                    this.StopButton.SsubLabel.text = "Bright";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem1";
                    this.dismissTool("lightBright");
                }
                lightDim(evt) {
                    this.StopButton.SsubLabel.text = "Dim";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem2";
                    this.dismissTool("lightDim");
                }
                centerClick(evt) {
                    this.showTabTool("cardIcons", "cardWords", this.sel2, "ScenterTab");
                }
                cardIcons(evt) {
                    this.ScenterButton.SsubLabel.text = "10 Pictures";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem1";
                    this.dismissTool("cardIcons");
                }
                cardWords(evt) {
                    this.ScenterButton.SsubLabel.text = "10 Words";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem2";
                    this.dismissTool("cardWords");
                }
                bottomClick(evt) {
                    this.showTabTool("minutesOne", "minutesFive", this.sel3, "SbottomTab");
                }
                minutesOne(evt) {
                    this.SbottomButton.SsubLabel.text = "15 Seconds";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem1";
                    this.dismissTool("minutesOne");
                }
                minutesFive(evt) {
                    this.SbottomButton.SsubLabel.text = "45 Seconds";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem2";
                    this.dismissTool("minutesFive");
                }
                queryQuestionDone() {
                    if (this.sel1 && this.sel2 && this.sel3)
                        this.dispatchEvent(new Event("Done"));
                }
            };
            exports_24("TMemoryController", TMemoryController);
        }
    };
});
System.register("thermite/TMemoryImgTool", ["thermite/TImgTool", "util/CUtil", "util/CONST"], function (exports_25, context_25) {
    "use strict";
    var TImgTool_4, CUtil_24, CONST_4, TMemoryImgTool;
    var __moduleName = context_25 && context_25.id;
    return {
        setters: [
            function (TImgTool_4_1) {
                TImgTool_4 = TImgTool_4_1;
            },
            function (CUtil_24_1) {
                CUtil_24 = CUtil_24_1;
            },
            function (CONST_4_1) {
                CONST_4 = CONST_4_1;
            }
        ],
        execute: function () {
            TMemoryImgTool = class TMemoryImgTool extends TImgTool_4.TImgTool {
                constructor() {
                    super();
                    this.init5();
                }
                TMemoryImgToolInitialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_24.CUtil.trace("TMemoryImgTool:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TMemoryImgTool On Stage");
                    this.feature1A = "lightBright";
                    this.feature1B = "lightDim";
                    this.feature2A = "cardIcons";
                    this.feature2B = "cardWords";
                    this.feature3A = "minutesOne";
                    this.feature3B = "minutesFive";
                    this.useFeatureMask = true;
                    this.featureMaskA = "maskDim";
                    this.featureMaskB = "maskBright";
                    this.initListeners();
                    super.onAddedToStage(evt);
                }
                manageMasks(target) {
                    if (this.useFeatureMask) {
                        switch (target) {
                            case "lightBright":
                                this[this.featureMaskA].visible = false;
                                this[this.featureMaskB].visible = true;
                                break;
                            case "lightDim":
                                this[this.featureMaskA].visible = true;
                                this[this.featureMaskB].visible = false;
                                break;
                            case "cardIcons":
                                if (this.currentEvtTar != null) {
                                    this[this.featureMaskA].removeEventListener(CONST_4.CONST.BUTTON_CLICK, this.currentEvtTar);
                                    this[this.featureMaskB].removeEventListener(CONST_4.CONST.BUTTON_CLICK, this.currentEvtTar);
                                }
                                this[this.featureMaskA].on(CONST_4.CONST.BUTTON_CLICK, this.dofeature2A);
                                this[this.featureMaskB].on(CONST_4.CONST.BUTTON_CLICK, this.dofeature2A);
                                this.currentEvtTar = this.dofeature2A;
                                break;
                            case "cardWords":
                                if (this.currentEvtTar != null) {
                                    this[this.featureMaskA].removeEventListener(CONST_4.CONST.BUTTON_CLICK, this.currentEvtTar);
                                    this[this.featureMaskB].removeEventListener(CONST_4.CONST.BUTTON_CLICK, this.currentEvtTar);
                                }
                                this[this.featureMaskA].on(CONST_4.CONST.BUTTON_CLICK, this.dofeature2B);
                                this[this.featureMaskB].on(CONST_4.CONST.BUTTON_CLICK, this.dofeature2B);
                                this.currentEvtTar = this.dofeature2B;
                                break;
                        }
                    }
                }
            };
            exports_25("TMemoryImgTool", TMemoryImgTool);
        }
    };
});
System.register("thermite/TNavCollection", ["thermite/TObject", "util/CUtil"], function (exports_26, context_26) {
    "use strict";
    var TObject_7, CUtil_25, TNavCollection;
    var __moduleName = context_26 && context_26.id;
    return {
        setters: [
            function (TObject_7_1) {
                TObject_7 = TObject_7_1;
            },
            function (CUtil_25_1) {
                CUtil_25 = CUtil_25_1;
            }
        ],
        execute: function () {
            TNavCollection = class TNavCollection extends TObject_7.TObject {
                constructor() {
                    super();
                    this.traceMode = false;
                    this.init3();
                }
                TNavCollectionInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_25.CUtil.trace("TNavCollection:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TNavCollection On Stage");
                    super.onAddedToStage(evt);
                }
            };
            exports_26("TNavCollection", TNavCollection);
        }
    };
});
System.register("thermite/TPrompt", ["thermite/TObject", "util/CUtil"], function (exports_27, context_27) {
    "use strict";
    var TObject_8, CUtil_26, TPrompt;
    var __moduleName = context_27 && context_27.id;
    return {
        setters: [
            function (TObject_8_1) {
                TObject_8 = TObject_8_1;
            },
            function (CUtil_26_1) {
                CUtil_26 = CUtil_26_1;
            }
        ],
        execute: function () {
            TPrompt = class TPrompt extends TObject_8.TObject {
                constructor() {
                    super();
                    this.traceTPrompt = false;
                    this.init3();
                }
                TPromptInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_26.CUtil.trace("TPrompt:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TPrompt On Stage");
                    super.onAddedToStage(evt);
                    this.bTweenable = false;
                }
                setObjMode(TutScene, sMode) {
                    if (this.traceTPrompt)
                        CUtil_26.CUtil.trace("\t*** Start - Walking Top Level Nav Objects***");
                    for (var sceneObj in TutScene) {
                        if (sceneObj != "instance" && TutScene[sceneObj].instance instanceof TObject_8.TObject) {
                            TutScene[sceneObj].instance.setAutomationMode(TutScene[sceneObj], sMode);
                        }
                    }
                    if (this.traceTPrompt)
                        CUtil_26.CUtil.trace("\t*** End - Walking Top Level Nav Objects***");
                }
                dumpSceneObjs(TutScene) {
                    for (var sceneObj in TutScene) {
                        if (this.traceTPrompt)
                            CUtil_26.CUtil.trace("\tNavPanelObj : " + sceneObj);
                        if (sceneObj != "instance" && TutScene[sceneObj].instance instanceof TObject_8.TObject) {
                            if (this.traceTPrompt)
                                CUtil_26.CUtil.trace("\tT***");
                            TutScene[sceneObj].instance.dumpSubObjs(TutScene[sceneObj], "\t");
                        }
                    }
                }
            };
            exports_27("TPrompt", TPrompt);
        }
    };
});
System.register("thermite/TNextPrompt", ["thermite/TPrompt"], function (exports_28, context_28) {
    "use strict";
    var TPrompt_1, TNextPrompt;
    var __moduleName = context_28 && context_28.id;
    return {
        setters: [
            function (TPrompt_1_1) {
                TPrompt_1 = TPrompt_1_1;
            }
        ],
        execute: function () {
            TNextPrompt = class TNextPrompt extends TPrompt_1.TPrompt {
                constructor() {
                    super();
                }
            };
            exports_28("TNextPrompt", TNextPrompt);
        }
    };
});
System.register("thermite/TP2Scene", ["thermite/TScene", "thermite/events/TSelectEvent", "thermite/events/TMouseEvent", "util/CUtil", "util/CONST"], function (exports_29, context_29) {
    "use strict";
    var TScene_1, TSelectEvent_4, TMouseEvent_2, CUtil_27, CONST_5, TP2Scene;
    var __moduleName = context_29 && context_29.id;
    return {
        setters: [
            function (TScene_1_1) {
                TScene_1 = TScene_1_1;
            },
            function (TSelectEvent_4_1) {
                TSelectEvent_4 = TSelectEvent_4_1;
            },
            function (TMouseEvent_2_1) {
                TMouseEvent_2 = TMouseEvent_2_1;
            },
            function (CUtil_27_1) {
                CUtil_27 = CUtil_27_1;
            },
            function (CONST_5_1) {
                CONST_5 = CONST_5_1;
            }
        ],
        execute: function () {
            TP2Scene = class TP2Scene extends TScene_1.TScene {
                constructor() {
                    super();
                    this.traceTP2 = false;
                    this.fCompleteA = false;
                    this.fCompleteB = false;
                    this.init5();
                }
                TP2SceneInitialize() {
                    this.TSceneInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TSceneInitialize.call(this);
                    this.init5();
                }
                init5() {
                    if (this.traceTP2)
                        CUtil_27.CUtil.trace("TP2Scene:Constructor");
                    this.selOneC = null;
                    if (this.tutorDoc.testFeatureSet("FTR_TYPEA"))
                        this.sType = "_A";
                    else if (this.tutorDoc.testFeatureSet("FTR_TYPEB"))
                        this.sType = "_B";
                    else
                        this.sType = "";
                    this.cvsEncoding = ["NC", "CVS", "CVS_WV", "SC", "CVS_WV", "SC", "HOTAT", "MC"];
                }
                onCreate() {
                    super.onCreate();
                }
                Destructor() {
                    super.Destructor();
                    this[this.imgTool1].off(TSelectEvent_4.TSelectEvent.WOZIMGSELECT, this.imgToolA);
                    this[this.imgTool2].off(TSelectEvent_4.TSelectEvent.WOZIMGSELECT, this.imgToolB);
                    this[this.tabController1].off(TSelectEvent_4.TSelectEvent.WOZTABSELECT, this.tabtoolA);
                    this[this.tabController2].off(TSelectEvent_4.TSelectEvent.WOZTABSELECT, this.tabtoolB);
                    this[this.tabController1].off("Done", this.tabDoneA);
                    this[this.tabController2].off("Done", this.tabDoneB);
                }
                wireControls() {
                    this.imgToolA = this[this.imgTool1].on(TSelectEvent_4.TSelectEvent.WOZIMGSELECT, this.doImageMapA, this);
                    this.imgToolB = this[this.imgTool2].on(TSelectEvent_4.TSelectEvent.WOZIMGSELECT, this.doImageMapB, this);
                    this.tabtoolA = this[this.tabController1].on(TSelectEvent_4.TSelectEvent.WOZTABSELECT, this.doTabMapA, this);
                    this.tabtoolB = this[this.tabController2].on(TSelectEvent_4.TSelectEvent.WOZTABSELECT, this.doTabMapB, this);
                    this.tabDoneA = this[this.tabController1].on("Done", this.questionFinishedA, this);
                    this.tabDoneB = this[this.tabController2].on("Done", this.questionFinishedB, this);
                }
                questionFinishedA(evt) {
                    CUtil_27.CUtil.trace("#### QuestionA finished");
                    this.fCompleteA = true;
                    if (this.fCompleteB) {
                        this.$questionFinished();
                    }
                }
                questionFinishedB(evt) {
                    CUtil_27.CUtil.trace("#### QuestionB finished");
                    this.fCompleteB = true;
                    if (this.fCompleteA) {
                        this.$questionFinished();
                    }
                }
                encodeExptString(TVTEXT, TV, NTV1, NTV2) {
                    var code = 0;
                    if (this[this.tabController1][TV] != this[this.tabController2][TV])
                        code += 1;
                    if (this[this.tabController1][NTV1] != this[this.tabController2][NTV1])
                        code += 2;
                    if (this[this.tabController1][NTV2] != this[this.tabController2][NTV2])
                        code += 4;
                    var strEncoding = this.cvsEncoding[code];
                    return strEncoding;
                }
                encodeExptState(TVTEXT, TV, NTV1, NTV2) {
                    let stateVal = { CVS: {} };
                    var code = 0;
                    if (this[this.tabController1][TV] != this[this.tabController2][TV])
                        code += 1;
                    if (this[this.tabController1][NTV1] != this[this.tabController2][NTV1])
                        code += 2;
                    if (this[this.tabController1][NTV2] != this[this.tabController2][NTV2])
                        code += 4;
                    stateVal.CVS.code = this.cvsEncoding[code];
                    stateVal.CVS.tv = TVTEXT;
                    return stateVal;
                }
                doImageMapA(evt) {
                    if (this.traceTP2)
                        CUtil_27.CUtil.trace("doImgMap: " + evt.selection);
                    switch (evt.selection) {
                        case this.selOneA:
                        case this.selOneB:
                        case this.selOneC:
                            this[this.tabController1].topClick(new TMouseEvent_2.TMouseEvent("", CONST_5.CONST.BUTTON_CLICK));
                            break;
                        case this.selTwoA:
                        case this.selTwoB:
                            this[this.tabController1].centerClick(new TMouseEvent_2.TMouseEvent("", CONST_5.CONST.BUTTON_CLICK));
                            break;
                        case this.selThreeA:
                        case this.selThreeB:
                            this[this.tabController1].bottomClick(new TMouseEvent_2.TMouseEvent("", CONST_5.CONST.BUTTON_CLICK));
                            break;
                    }
                }
                doTabMapA(evt) {
                    if (this.traceTP2)
                        CUtil_27.CUtil.trace(" this.doTabMap: " + evt.selection);
                    switch (evt.selection) {
                        case this.selOneA:
                        case this.selOneB:
                        case this.selOneC:
                            this[this.imgTool1][this.selOneA].visible = false;
                            this[this.imgTool1][this.selOneB].visible = false;
                            if (this.selOneC)
                                this[this.imgTool1][this.selOneC].visible = false;
                            break;
                        case this.selTwoA:
                        case this.selTwoB:
                            this[this.imgTool1][this.selTwoA].visible = false;
                            this[this.imgTool1][this.selTwoB].visible = false;
                            break;
                        case this.selThreeA:
                        case this.selThreeB:
                            this[this.imgTool1][this.selThreeA].visible = false;
                            this[this.imgTool1][this.selThreeB].visible = false;
                            break;
                    }
                    this[this.imgTool1][evt.selection].visible = true;
                }
                doImageMapB(evt) {
                    if (this.traceTP2)
                        CUtil_27.CUtil.trace("doImgMap: " + evt.selection);
                    switch (evt.selection) {
                        case this.selOneA:
                        case this.selOneB:
                        case this.selOneC:
                            this[this.tabController2].topClick(new TMouseEvent_2.TMouseEvent("", CONST_5.CONST.BUTTON_CLICK));
                            break;
                        case this.selTwoA:
                        case this.selTwoB:
                            this[this.tabController2].centerClick(new TMouseEvent_2.TMouseEvent("", CONST_5.CONST.BUTTON_CLICK));
                            break;
                        case this.selThreeA:
                        case this.selThreeB:
                            this[this.tabController2].bottomClick(new TMouseEvent_2.TMouseEvent("", CONST_5.CONST.BUTTON_CLICK));
                            break;
                    }
                }
                doTabMapB(evt) {
                    if (this.traceTP2)
                        CUtil_27.CUtil.trace(" this.doTabMap: " + evt.selection);
                    switch (evt.selection) {
                        case this.selOneA:
                        case this.selOneB:
                        case this.selOneC:
                            this[this.imgTool2][this.selOneA].visible = false;
                            this[this.imgTool2][this.selOneB].visible = false;
                            if (this.selOneC)
                                this[this.imgTool2][this.selOneC].visible = false;
                            break;
                        case this.selTwoA:
                        case this.selTwoB:
                            this[this.imgTool2][this.selTwoA].visible = false;
                            this[this.imgTool2][this.selTwoB].visible = false;
                            break;
                        case this.selThreeA:
                        case this.selThreeB:
                            this[this.imgTool2][this.selThreeA].visible = false;
                            this[this.imgTool2][this.selThreeB].visible = false;
                            break;
                    }
                    this[this.imgTool2][evt.selection].visible = true;
                }
            };
            exports_29("TP2Scene", TP2Scene);
        }
    };
});
System.register("thermite/TPanelDark", ["thermite/TButton", "util/CUtil"], function (exports_30, context_30) {
    "use strict";
    var TButton_3, CUtil_28, TPanelDark;
    var __moduleName = context_30 && context_30.id;
    return {
        setters: [
            function (TButton_3_1) {
                TButton_3 = TButton_3_1;
            },
            function (CUtil_28_1) {
                CUtil_28 = CUtil_28_1;
            }
        ],
        execute: function () {
            TPanelDark = class TPanelDark extends TButton_3.TButton {
                constructor() {
                    super();
                    CUtil_28.CUtil.trace("TPanelDark:Constructor");
                }
            };
            exports_30("TPanelDark", TPanelDark);
        }
    };
});
System.register("thermite/TPanelLight", ["thermite/TButton", "util/CUtil"], function (exports_31, context_31) {
    "use strict";
    var TButton_4, CUtil_29, TPanelLight;
    var __moduleName = context_31 && context_31.id;
    return {
        setters: [
            function (TButton_4_1) {
                TButton_4 = TButton_4_1;
            },
            function (CUtil_29_1) {
                CUtil_29 = CUtil_29_1;
            }
        ],
        execute: function () {
            TPanelLight = class TPanelLight extends TButton_4.TButton {
                constructor() {
                    super();
                    CUtil_29.CUtil.trace("TPanelLight:Constructor");
                }
            };
            exports_31("TPanelLight", TPanelLight);
        }
    };
});
System.register("thermite/TRocketController", ["thermite/TController", "util/CUtil"], function (exports_32, context_32) {
    "use strict";
    var TController_6, CUtil_30, TRocketController;
    var __moduleName = context_32 && context_32.id;
    return {
        setters: [
            function (TController_6_1) {
                TController_6 = TController_6_1;
            },
            function (CUtil_30_1) {
                CUtil_30 = CUtil_30_1;
            }
        ],
        execute: function () {
            TRocketController = class TRocketController extends TController_6.TController {
                constructor() {
                    super();
                    this.init4();
                }
                TRocketControllerInitialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                initialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                init4() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_30.CUtil.trace("TRocketController:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TRocketController On Stage");
                    super.onAddedToStage(evt);
                    this.initLabels("Body", "Windows", "Engine");
                }
                topClick(evt) {
                    this.showTabTool("curvedBody", "straightBody", this.sel1, "StopTab");
                }
                curvedBody(evt) {
                    this.StopButton.SsubLabel.text = "Curved";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem1";
                    this.dismissTool("curvedBody");
                }
                straightBody(evt) {
                    this.StopButton.SsubLabel.text = "Straight";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem2";
                    this.dismissTool("straightBody");
                }
                centerClick(evt) {
                    this.showTabTool("oneWindow", "fourWindow", this.sel2, "ScenterTab");
                }
                oneWindow(evt) {
                    this.ScenterButton.SsubLabel.text = "One";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem1";
                    this.dismissTool("oneWindow");
                }
                fourWindow(evt) {
                    this.ScenterButton.SsubLabel.text = "Four";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem2";
                    this.dismissTool("fourWindow");
                }
                bottomClick(evt) {
                    this.showTabTool("downEngines", "tiltEngines", this.sel3, "SbottomTab");
                }
                downEngines(evt) {
                    this.SbottomButton.SsubLabel.text = "Down";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem1";
                    this.dismissTool("downEngines");
                }
                tiltEngines(evt) {
                    this.SbottomButton.SsubLabel.text = "Tilted";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem2";
                    this.dismissTool("tiltEngines");
                }
                queryQuestionDone() {
                    if (this.sel1 && this.sel2 && this.sel3)
                        this.dispatchEvent(new Event("Done"));
                }
            };
            exports_32("TRocketController", TRocketController);
        }
    };
});
System.register("thermite/TRocketImgTool", ["thermite/TImgTool", "util/CUtil"], function (exports_33, context_33) {
    "use strict";
    var TImgTool_5, CUtil_31, TRocketImgTool;
    var __moduleName = context_33 && context_33.id;
    return {
        setters: [
            function (TImgTool_5_1) {
                TImgTool_5 = TImgTool_5_1;
            },
            function (CUtil_31_1) {
                CUtil_31 = CUtil_31_1;
            }
        ],
        execute: function () {
            TRocketImgTool = class TRocketImgTool extends TImgTool_5.TImgTool {
                constructor() {
                    super();
                    this.init5();
                }
                TRocketImgToolInitialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_31.CUtil.trace("TRocketImgTool:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TRocketImgTool On Stage");
                    this.feature1A = "curvedBody";
                    this.feature1B = "straightBody";
                    this.feature2A = "oneWindow";
                    this.feature2B = "fourWindow";
                    this.feature3A = "downEngines";
                    this.feature3B = "tiltEngines";
                    this.initListeners();
                    super.onAddedToStage(evt);
                }
            };
            exports_33("TRocketImgTool", TRocketImgTool);
        }
    };
});
System.register("thermite/TSelector", ["thermite/TObject", "util/CUtil"], function (exports_34, context_34) {
    "use strict";
    var TObject_9, CUtil_32, TSelector;
    var __moduleName = context_34 && context_34.id;
    return {
        setters: [
            function (TObject_9_1) {
                TObject_9 = TObject_9_1;
            },
            function (CUtil_32_1) {
                CUtil_32 = CUtil_32_1;
            }
        ],
        execute: function () {
            TSelector = class TSelector extends TObject_9.TObject {
                constructor() {
                    super();
                    this.init3();
                }
                TSelectorInitialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                initialize() {
                    this.TObjectInitialize.call(this);
                    this.init3();
                }
                init3() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_32.CUtil.trace("TSelector:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TSelector On Stage");
                    super.onAddedToStage(evt);
                    this.button.on("WOZMOUSE_OVER", this.doButtonOver);
                    this.button.on("WOZMOUSE_CLICK", this.doMouseClick);
                    this.clicker.on("WOZMOUSE_OVER", this.doMouseOver);
                    this.clicker.on("WOZMOUSE_OUT", this.doMouseOut);
                    this.clicker.on("WOZMOUSE_DOWN", this.doMouseDown);
                    this.clicker.on("WOZMOUSE_CLICK", this.doMouseClick);
                }
                setAutomation(bFlag) {
                    this.bAuto = bFlag;
                }
                doMouseClick(evt) {
                }
                doMouseDown(evt) {
                }
                doMouseUp(evt) {
                }
                doMouseOver(evt) {
                }
                doMouseOut(evt) {
                }
            };
            exports_34("TSelector", TSelector);
        }
    };
});
System.register("thermite/TStudyController", ["thermite/TController", "util/CUtil"], function (exports_35, context_35) {
    "use strict";
    var TController_7, CUtil_33, TStudyController;
    var __moduleName = context_35 && context_35.id;
    return {
        setters: [
            function (TController_7_1) {
                TController_7 = TController_7_1;
            },
            function (CUtil_33_1) {
                CUtil_33 = CUtil_33_1;
            }
        ],
        execute: function () {
            TStudyController = class TStudyController extends TController_7.TController {
                constructor() {
                    super();
                    this.init4();
                }
                TStudyControllerInitialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                initialize() {
                    this.TControllerInitialize.call(this);
                    this.init4();
                }
                init4() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_33.CUtil.trace("TStudyController:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TStudyController On Stage");
                    super.onAddedToStage(evt);
                    this.initLabels("Who", "Where", "Drink");
                }
                topClick(evt) {
                    this.showTabTool("studyAlone", "studyFriend", this.sel1, "StopTab");
                }
                studyAlone(evt) {
                    this.StopButton.SsubLabel.text = "Alone";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem1";
                    this.dismissTool("studyAlone");
                }
                studyFriend(evt) {
                    this.StopButton.SsubLabel.text = "Friend";
                    this.StopButton.SsubLabel.visible = true;
                    this.sel1 = "Sitem2";
                    this.dismissTool("studyFriend");
                }
                centerClick(evt) {
                    this.showTabTool("atHome", "atLibrary", this.sel2, "ScenterTab");
                }
                atHome(evt) {
                    this.ScenterButton.SsubLabel.text = "Home";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem1";
                    this.dismissTool("atHome");
                }
                atLibrary(evt) {
                    this.ScenterButton.SsubLabel.text = "Library";
                    this.ScenterButton.SsubLabel.visible = true;
                    this.sel2 = "Sitem2";
                    this.dismissTool("atLibrary");
                }
                bottomClick(evt) {
                    this.showTabTool("drinkWater", "drinkSoda", this.sel3, "SbottomTab");
                }
                drinkWater(evt) {
                    this.SbottomButton.SsubLabel.text = "Water";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem1";
                    this.dismissTool("drinkWater");
                }
                drinkSoda(evt) {
                    this.SbottomButton.SsubLabel.text = "Soda";
                    this.SbottomButton.SsubLabel.visible = true;
                    this.sel3 = "Sitem2";
                    this.dismissTool("drinkSoda");
                }
                queryQuestionDone() {
                    if (this.sel1 && this.sel2 && this.sel3)
                        this.dispatchEvent(new Event("Done"));
                }
            };
            exports_35("TStudyController", TStudyController);
        }
    };
});
System.register("thermite/TStudyImgTool", ["thermite/TImgTool", "util/CUtil"], function (exports_36, context_36) {
    "use strict";
    var TImgTool_6, CUtil_34, TStudyImgTool;
    var __moduleName = context_36 && context_36.id;
    return {
        setters: [
            function (TImgTool_6_1) {
                TImgTool_6 = TImgTool_6_1;
            },
            function (CUtil_34_1) {
                CUtil_34 = CUtil_34_1;
            }
        ],
        execute: function () {
            TStudyImgTool = class TStudyImgTool extends TImgTool_6.TImgTool {
                constructor() {
                    super();
                    this.init5();
                }
                TStudyImgToolInitialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                initialize() {
                    this.TImgToolInitialize.call(this);
                    this.init5();
                }
                init5() {
                    this.traceMode = true;
                    if (this.traceMode)
                        CUtil_34.CUtil.trace("TStudyImgTool:Constructor");
                }
                onAddedToStage(evt) {
                    console.log("TStudyImgTool On Stage");
                    this.feature1A = "studyAlone";
                    this.feature1B = "studyFriend";
                    this.feature2A = "atHome";
                    this.feature2B = "atLibrary";
                    this.feature3A = "drinkWater";
                    this.feature3B = "drinkSoda";
                    this.initListeners();
                    super.onAddedToStage(evt);
                }
            };
            exports_36("TStudyImgTool", TStudyImgTool);
        }
    };
});
System.register("thermite/TTip1", ["thermite/TScene", "util/CUtil"], function (exports_37, context_37) {
    "use strict";
    var TScene_2, CUtil_35, TTip1;
    var __moduleName = context_37 && context_37.id;
    return {
        setters: [
            function (TScene_2_1) {
                TScene_2 = TScene_2_1;
            },
            function (CUtil_35_1) {
                CUtil_35 = CUtil_35_1;
            }
        ],
        execute: function () {
            TTip1 = class TTip1 extends TScene_2.TScene {
                constructor() {
                    super();
                    CUtil_35.CUtil.trace("TTip1:Constructor");
                }
            };
            exports_37("TTip1", TTip1);
        }
    };
});
//# sourceMappingURL=exts.js.map