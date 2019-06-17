var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class AssessmentA {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVTUTOR);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                var nCorrect = 0;
                if (this.getModuleValue('q1CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar1.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar1.Swrong.visible = true;
                if ((this.getModuleValue('q2Good') == "unchecked") && (this.getModuleValue('q2Bad') == "checked")) {
                    nCorrect++;
                    this.Sassess.Sstar2.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar2.Swrong.visible = true;
                if (this.getModuleValue('q2CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar3.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar3.Swrong.visible = true;
                if (this.getModuleValue('q3CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar4.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar4.Swrong.visible = true;
                if ((this.getModuleValue('q4Good') == "unchecked") && (this.getModuleValue('q4Bad') == "checked")) {
                    nCorrect++;
                    this.Sassess.Sstar5.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar5.Swrong.visible = true;
                if (this.getModuleValue('q4CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar6.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar6.Swrong.visible = true;
                if (this.getModuleValue('q5CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar7.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar7.Swrong.visible = true;
                if ((this.getModuleValue('q6Good') == "unchecked") && (this.getModuleValue('q6Bad') == "checked")) {
                    nCorrect++;
                    this.Sassess.Sstar8.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar8.Swrong.visible = true;
                if (this.getModuleValue('q6CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar9.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar9.Swrong.visible = true;
                this.Sassess.Sresult.text = nCorrect + " / 9";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.AssessmentA = AssessmentA;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class AssessmentB {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVTUTOR);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                var nCorrect = 0;
                if (this.getModuleValue('q1CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar1.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar1.Swrong.visible = true;
                if ((this.getModuleValue('q2Good') == "unchecked") && (this.getModuleValue('q2Bad') == "checked")) {
                    nCorrect++;
                    this.Sassess.Sstar2.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar2.Swrong.visible = true;
                if (this.getModuleValue('q2CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar3.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar3.Swrong.visible = true;
                if (this.getModuleValue('q3CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar4.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar4.Swrong.visible = true;
                if ((this.getModuleValue('q4Good') == "unchecked") && (this.getModuleValue('q4Bad') == "checked")) {
                    nCorrect++;
                    this.Sassess.Sstar5.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar5.Swrong.visible = true;
                if (this.getModuleValue('q4CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar6.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar6.Swrong.visible = true;
                if (this.getModuleValue('q5CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar7.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar7.Swrong.visible = true;
                if ((this.getModuleValue('q6Good') == "unchecked") && (this.getModuleValue('q6Bad') == "checked")) {
                    nCorrect++;
                    this.Sassess.Sstar8.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar8.Swrong.visible = true;
                if (this.getModuleValue('q6CVS') == "CVS") {
                    nCorrect++;
                    this.Sassess.Sstar9.Sright.visible = true;
                }
                else
                    this.Sassess.Sstar9.Swrong.visible = true;
                this.Sassess.Sresult.text = nCorrect + " / 9";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.AssessmentB = AssessmentB;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class CONST {
        }
        CONST.TUTORCONTAINER = "STutorContainer";
        CONST.NAVNONE = 0;
        CONST.NAVBACK = 1;
        CONST.NAVNEXT = 2;
        CONST.NAVBOTH = 3;
        CONST.NEXTSCENE = "nextbutton";
        CONST.PREVSCENE = "prevbutton";
        CONST.NAVSCENE = "SCENE";
        CONST.NAVTUTOR = "TUTOR";
        CONST.MOUSE_MOVE = "mousemove";
        CONST.MOUSE_DOWN = "mousedown";
        CONST.MOUSE_UP = "mouseup";
        CONST.MOUSE_CLICK = "click";
        CONST.DOUBLE_CLICK = "dblclick";
        CONST.CLICK = "click";
        CONST.FLATSTATE = 0;
        CONST.NORMALSTATE = 1;
        CONST.NORMALwBUBBLE = 2;
        CONST.SELECTEDSTATE = 3;
        CONST.SELECTEDwBUBBLE = 4;
        CONST.NORMALnoARROW = 5;
        CONST.SELECTEDnoARROW = 6;
        CONST.SELECTED2noARROW = 7;
        CONST.FTRS_ALL = null;
        CONST.VAR_FTR = "varsel";
        CONST.FTR_PRE = "FTR_PRE";
        CONST.FTR_DEV = "FTR_DEV";
        CONST.WOZTABSELECT = "WOZTABSELECT";
        CONST.WOZIMGSELECT = "WOZIMGSELECT";
        CONST.CHANGE = "CHANGE";
        CONST.BUTTON_CLICK = "buttonclick";
        EFMod_PrePost.CONST = CONST;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class $Common {
            $preCreateScene() { }
            $onCreateScene() { }
            $preEnterScene() { }
            $onEnterScene() { }
            $preExitScene() { }
            $onExitScene() { }
            $preShowScene() { }
            $preHideScene() { }
            $demoInitScene() { }
            $logScene() { }
            $rewindScene() { }
            $resolveTemplate(templID) { }
            $handleEvent() { }
            $nodePreEnter(nodeId) { }
            $nodePreExit(nodeId) { }
            $nodeAction(actionId) { }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(id) { }
            $timedEvents(id) { }
            $onAction(target, evt) { }
            $queryFinished() {
                let stateComplete = false;
                return stateComplete;
            }
            $canGoBack() {
                let stateComplete = true;
                return stateComplete;
            }
            $updateNav() {
                if (!this.$queryFinished())
                    this.enableNext(false);
                else
                    this.enableNext(true);
                if (!this.$canGoBack())
                    this.enableBack(false);
                else
                    this.enableBack(true);
            }
            $questionFinished(evt) {
                this.setSceneValue("complete", true);
            }
        }
        EFMod_PrePost.$Common = $Common;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class EndScene {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBACK, EFMod_PrePost.CONST.NAVTUTOR);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                var _assessCorrect = 0;
                var _designCorrect = 0;
                if ((this.getModuleValue('q2Good') == "unchecked") && (this.getModuleValue('q2Bad') == "checked")) {
                    _assessCorrect++;
                }
                if ((this.getModuleValue('q4Good') == "unchecked") && (this.getModuleValue('q4Bad') == "checked")) {
                    _assessCorrect++;
                }
                if ((this.getModuleValue('q6Good') == "unchecked") && (this.getModuleValue('q6Bad') == "checked")) {
                    _assessCorrect++;
                }
                if (this.getModuleValue('q1CVS') == "CVS") {
                    _designCorrect++;
                }
                if (this.getModuleValue('q2CVS') == "CVS") {
                    _designCorrect++;
                }
                if (this.getModuleValue('q3CVS') == "CVS") {
                    _designCorrect++;
                }
                if (this.getModuleValue('q4CVS') == "CVS") {
                    _designCorrect++;
                }
                if (this.getModuleValue('q5CVS') == "CVS") {
                    _designCorrect++;
                }
                if (this.getModuleValue('q6CVS') == "CVS") {
                    _designCorrect++;
                }
                this.setModuleValue('Correct_Designs', _designCorrect);
                this.setModuleValue('Correct_Assessments', _assessCorrect);
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "SdoneButton":
                        this.nextTrack("$onAction:" + target);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.EndScene = EndScene;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class Q1Splash {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVTUTOR);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
                this.StitleText.text = "Question 1 of 6";
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.Q1Splash = Q1Splash;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class Q2Splash {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVTUTOR);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.StitleText.text = "Question 2 of 6";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.Q2Splash = Q2Splash;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class Q3Splash {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVTUTOR);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.StitleText.text = "Question 3 of 6";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.Q3Splash = Q3Splash;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class Q4Splash {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVTUTOR);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.StitleText.text = "Question 4 of 6";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.Q4Splash = Q4Splash;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class Q5Splash {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVTUTOR);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.StitleText.text = "Question 5 of 6";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.Q5Splash = Q5Splash;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class Q6Splash {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVTUTOR);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.StitleText.text = "Question 6 of 6";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.Q6Splash = Q6Splash;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class SIntroPart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.selOneA = "clockNoon";
                this.selOneB = "clockThree";
                this.selOneC = "clockSix";
                this.selTwoA = "ageYoung";
                this.selTwoB = "ageOlder";
                this.selThreeA = "drinkLemon";
                this.selThreeB = "drinkTea";
                this.i1p2imgTool.on(EFMod_PrePost.CONST.WOZIMGSELECT, this.$doImageMap, this);
                this.i1p2tabController.on(EFMod_PrePost.CONST.WOZTABSELECT, this.$doTabMap, this);
                this.i1p2tabController.on("Done", this.$questionFinished, this);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
            $doImageMap(evt) {
                switch (evt.selection) {
                    case "chimneyLeft":
                    case "chimneyRight":
                        this.i1p2tabController.topClick(new EFMod_PrePost.TMouseEvent("", EFMod_PrePost.CONST.BUTTON_CLICK));
                        break;
                    case "pinkPaint":
                    case "bluePaint":
                        this.i1p2tabController.centerClick(new EFMod_PrePost.TMouseEvent("", EFMod_PrePost.CONST.BUTTON_CLICK));
                        break;
                    case "singleDoor":
                    case "doubleDoor":
                        this.i1p2tabController.bottomClick(new EFMod_PrePost.TMouseEvent("", EFMod_PrePost.CONST.BUTTON_CLICK));
                        break;
                }
            }
            $doTabMap(evt) {
                switch (evt.selection) {
                    case "chimneyLeft":
                    case "chimneyRight":
                        this.i1p2imgTool.chimneyLeft.visible = false;
                        this.i1p2imgTool.chimneyRight.visible = false;
                        break;
                    case "pinkPaint":
                    case "bluePaint":
                        this.i1p2imgTool.pinkPaint.visible = false;
                        this.i1p2imgTool.bluePaint.visible = false;
                        break;
                    case "singleDoor":
                    case "doubleDoor":
                        this.i1p2imgTool.singleDoor.visible = false;
                        this.i1p2imgTool.doubleDoor.visible = false;
                        break;
                }
                this.i1p2imgTool[evt.selection].visible = true;
            }
        }
        EFMod_PrePost.SIntroPart1 = SIntroPart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class SIntroPart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.selOneA = "clockNoon";
                this.selOneB = "clockThree";
                this.selOneC = "clockSix";
                this.selTwoA = "ageYoung";
                this.selTwoB = "ageOlder";
                this.selThreeA = "drinkLemon";
                this.selThreeB = "drinkTea";
                this.imgTool1 = "imgToolAq1";
                this.imgTool2 = "imgToolBq1";
                this.tabController1 = "tabControllerAq1";
                this.tabController2 = "tabControllerBq1";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.SIntroPart2 = SIntroPart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class SIntroPart3 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.selOneA = "clockNoon";
                this.selOneB = "clockThree";
                this.selOneC = "clockSix";
                this.selTwoA = "ageYoung";
                this.selTwoB = "ageOlder";
                this.selThreeA = "drinkLemon";
                this.selThreeB = "drinkTea";
                this.imgTool1 = "imgToolAq1";
                this.imgTool2 = "imgToolBq1";
                this.tabController1 = "tabControllerAq1";
                this.tabController2 = "tabControllerBq1";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.SIntroPart3 = SIntroPart3;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class SNavigator {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNONE, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (cueID) {
                    case "$start":
                        console.log("executing CuePoint START");
                        break;
                    case "$end":
                        console.log("executing CuePoint END");
                        break;
                }
            }
            $timedEvents(id) {
            }
        }
        EFMod_PrePost.SNavigator = SNavigator;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class SSceneStart {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNONE, EFMod_PrePost.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = false;
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sstart":
                        this.nextTrack("$onAction:" + this.graphState);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.SSceneStart = SSceneStart;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        var MouseEvent = createjs.MouseEvent;
        class TMouseEvent extends MouseEvent {
            constructor(TarObjID, type, bubbles = false, cancelable = false, stageX = 0, stageY = 0, nativeEvent = null, pointerID = 0, primary = false, rawX = 0, rawY = 0) {
                super(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY);
            }
            clone() {
                return new TMouseEvent(this.tarObjID, this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
            }
            captureLogState(obj = null) {
                obj['event'] = 'TMouseEvent';
                obj['tarObjID'] = this.tarObjID;
                obj['localX'] = this.localX;
                obj['localY'] = this.localY;
                return obj;
            }
            captureXMLState() {
                var eventState = {};
                return eventState;
            }
            restoreXMLState(xmlState) {
            }
            compareXMLState(xmlState) {
                var bTest = true;
                return bTest;
            }
        }
        TMouseEvent.MOUSE_OVER = "rollover";
        TMouseEvent.MOUSE_OUT = "rollout";
        TMouseEvent.MOUSE_DOWN = "mousedown";
        TMouseEvent.MOUSE_CLICK = "pressup";
        TMouseEvent.MOUSE_MOVE = "mousemove";
        TMouseEvent.MOUSE_UP = "mouseup";
        TMouseEvent.DOUBLE_CLICK = "dblclick";
        TMouseEvent.CLICK = "click";
        TMouseEvent.WOZCLICK = "WOZMOUSE_CLICK";
        TMouseEvent.WOZCLICKED = "WOZMOUSE_CLICKED";
        TMouseEvent.WOZDBLCLICK = "WOZMOUSE_DBLCLICKED";
        TMouseEvent.WOZMOVE = "WOZMOUSE_MOVE";
        TMouseEvent.WOZDOWN = "WOZMOUSE_DOWN";
        TMouseEvent.WOZUP = "WOZMOUSE_UP";
        TMouseEvent.WOZOVER = "WOZMOUSE_OVER";
        TMouseEvent.WOZOUT = "WOZMOUSE_OUT";
        TMouseEvent.WOZKEYDOWN = "WOZKEY_DOWN";
        TMouseEvent.WOZKEYUP = "WOZMKEY_UP";
        TMouseEvent.WOZNULL = "WOZNULL";
        EFMod_PrePost.TMouseEvent = TMouseEvent;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ1APart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNONE, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "clockNoon";
                this.selOneB = "clockThree";
                this.selOneC = "clockSix";
                this.selTwoA = "ageYoung";
                this.selTwoB = "ageOlder";
                this.selThreeA = "drinkLemon";
                this.selThreeB = "drinkTea";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "q1DesignButton":
                        this.nextTrack("$onAction:" + target);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ1APart1 = TQ1APart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ1APart1B {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.imgTool1 = "imgToolAq1";
                this.imgTool2 = "imgToolBq1";
                this.tabController1 = "tabControllerAq1";
                this.tabController2 = "tabControllerBq1";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "clockNoon";
                this.selOneB = "clockThree";
                this.selOneC = "clockSix";
                this.selTwoA = "ageYoung";
                this.selTwoB = "ageOlder";
                this.selThreeA = "drinkLemon";
                this.selThreeB = "drinkTea";
                if (!this.getSceneValue("initialized")) {
                    this.imgToolAq1.bPersist = true;
                    this.imgToolBq1.bPersist = true;
                    this.tabControllerAq1.bPersist = true;
                    this.tabControllerBq1.bPersist = true;
                    this.imgToolAq1.initState();
                    this.imgToolBq1.initState();
                    this.tabControllerAq1.initState();
                    this.tabControllerBq1.initState();
                    this.setSceneValue("initialized", true);
                    this.setSceneValue("complete", false);
                }
                this.tabControllerAq1.enableTool(true);
                this.tabControllerBq1.enableTool(true);
                this.imgToolAq1.enableTool(true);
                this.imgToolBq1.enableTool(true);
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q1CVS', this.encodeExptString("time of day", "sel1", "sel2", "sel3"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ1APart1B = TQ1APart1B;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ1APart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolAq1";
                this.imgTool2 = "imgToolBq1";
                this.tabController1 = "tabControllerAq1";
                this.tabController2 = "tabControllerBq1";
                this.q1TextControl1.bPersist = true;
                this.wireControls();
            }
            $onEnterScene() {
                this.q1TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "clockNoon";
                this.selOneB = "clockThree";
                this.selOneC = "clockSix";
                this.selTwoA = "ageYoung";
                this.selTwoB = "ageOlder";
                this.selThreeA = "drinkLemon";
                this.selThreeB = "drinkTea";
                this.tabControllerAq1.enableTool(false);
                this.tabControllerBq1.enableTool(false);
                this.imgToolAq1.enableTool(false);
                this.imgToolBq1.enableTool(false);
            }
            $preExitScene() {
                this.setModuleValue('q1Response', this.q1TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q1TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ1APart2 = TQ1APart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ1BPart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "temp200";
                this.selOneB = "temp350";
                this.selOneC = "temp500";
                this.selTwoA = "honey";
                this.selTwoB = "sugar";
                this.selThreeA = "oneEgg";
                this.selThreeB = "threeEgg";
                this.tabControllerAq1.enableTool(false);
                this.tabControllerBq1.enableTool(false);
                this.imgToolAq1.enableTool(false);
                this.imgToolBq1.enableTool(false);
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "q1DesignButton":
                        this.nextTrack("$onAction:" + target);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ1BPart1 = TQ1BPart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ1BPart1B {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolAq1";
                this.imgTool2 = "imgToolBq1";
                this.tabController1 = "tabControllerAq1";
                this.tabController2 = "tabControllerBq1";
                this.imgToolAq1.bPersist = true;
                this.imgToolBq1.bPersist = true;
                this.tabControllerAq1.bPersist = true;
                this.tabControllerBq1.bPersist = true;
                this.wireControls();
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "temp200";
                this.selOneB = "temp350";
                this.selOneC = "temp500";
                this.selTwoA = "honey";
                this.selTwoB = "sugar";
                this.selThreeA = "oneEgg";
                this.selThreeB = "threeEgg";
                this.imgToolAq1.initState();
                this.imgToolBq1.initState();
                this.tabControllerAq1.initState();
                this.tabControllerBq1.initState();
                this.tabControllerAq1.enableTool(true);
                this.tabControllerBq1.enableTool(true);
                this.imgToolAq1.enableTool(true);
                this.imgToolBq1.enableTool(true);
            }
            $preExitScene() {
                this.setModuleValue('q1CVS', this.encodeExptString("temperature", "sel1", "sel2", "sel3"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ1BPart1B = TQ1BPart1B;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ1BPart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolAq1";
                this.imgTool2 = "imgToolBq1";
                this.tabController1 = "tabControllerAq1";
                this.tabController2 = "tabControllerBq1";
                this.q1TextControl1.bPersist = true;
                this.wireControls();
            }
            $onEnterScene() {
                this.q1TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "temp200";
                this.selOneB = "temp350";
                this.selOneC = "temp500";
                this.selTwoA = "honey";
                this.selTwoB = "sugar";
                this.selThreeA = "oneEgg";
                this.selThreeB = "threeEgg";
                this.tabControllerAq1.enableTool(false);
                this.tabControllerBq1.enableTool(false);
                this.imgToolAq1.enableTool(false);
                this.imgToolBq1.enableTool(false);
            }
            $preExitScene() {
                this.setModuleValue('q1Response', this.q1TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q1TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ1BPart2 = TQ1BPart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ2APart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.imgTool1 = "imgToolCq2";
                this.imgTool2 = "imgToolDq2";
                this.tabController1 = "tabControllerCq2";
                this.tabController2 = "tabControllerDq2";
                this.imgToolCq2.bPersist = true;
                this.imgToolDq2.bPersist = true;
                this.tabControllerCq2.bPersist = true;
                this.tabControllerDq2.bPersist = true;
                this.q2Check1.bPersist = true;
                this.q2Check2.bPersist = true;
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "clockNoon";
                this.selOneB = "clockThree";
                this.selOneC = "clockSix";
                this.selTwoA = "ageYoung";
                this.selTwoB = "ageOlder";
                this.selThreeA = "drinkLemon";
                this.selThreeB = "drinkTea";
                this.tabControllerCq2.enableTool(false);
                this.tabControllerDq2.enableTool(false);
                this.imgToolCq2.enableTool(false);
                this.imgToolDq2.enableTool(false);
                if (!this.getSceneValue("initialized")) {
                    this.imgToolCq2.initState();
                    this.imgToolDq2.initState();
                    this.tabControllerCq2.initState();
                    this.tabControllerDq2.initState();
                    this.imgToolCq2["clockThree"].visible = true;
                    this.imgToolCq2["ageYoung"].visible = true;
                    this.imgToolCq2["drinkLemon"].visible = true;
                    this.imgToolDq2["clockThree"].visible = true;
                    this.imgToolDq2["ageYoung"].visible = true;
                    this.imgToolDq2["drinkTea"].visible = true;
                    this.tabControllerCq2.sel1 = "Sitem4";
                    this.tabControllerCq2.StopButton.SsubLabel.text = "3:00 pm";
                    this.tabControllerCq2.StopButton.SsubLabel.visible = true;
                    this.tabControllerCq2.sel2 = "Sitem1";
                    this.tabControllerCq2.ScenterButton.SsubLabel.text = "Younger";
                    this.tabControllerCq2.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerCq2.sel3 = "Sitem1";
                    this.tabControllerCq2.SbottomButton.SsubLabel.text = "Lemonade";
                    this.tabControllerCq2.SbottomButton.SsubLabel.visible = true;
                    this.tabControllerDq2.sel1 = "Sitem4";
                    this.tabControllerDq2.StopButton.SsubLabel.text = "3:00 pm";
                    this.tabControllerDq2.StopButton.SsubLabel.visible = true;
                    this.tabControllerDq2.sel2 = "Sitem1";
                    this.tabControllerDq2.ScenterButton.SsubLabel.text = "Younger";
                    this.tabControllerDq2.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerDq2.sel3 = "Sitem2";
                    this.tabControllerDq2.SbottomButton.SsubLabel.text = "Iced Tea";
                    this.tabControllerDq2.SbottomButton.SsubLabel.visible = true;
                    this.setModuleValue("Q2expState1", this.tabControllerCq2.captureXMLState());
                    this.setModuleValue("Q2expState2", this.tabControllerDq2.captureXMLState());
                    this.setSceneValue("initialized", true);
                    this.setSceneValue("complete", false);
                }
                this.q2Check2.label = "Bad Way";
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q2Good', this.q2Check1.captureLOGString);
                this.setModuleValue('q2Bad', this.q2Check2.captureLOGString);
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q2Check1.getChecked() || this.q2Check2.getChecked())
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ2APart1 = TQ2APart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ2APart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq2";
                this.imgTool2 = "imgToolDq2";
                this.tabController1 = "tabControllerCq2";
                this.tabController2 = "tabControllerDq2";
                this.q2TextControl1.bPersist = true;
            }
            $onEnterScene() {
                this.q2TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "clockNoon";
                this.selOneB = "clockThree";
                this.selOneC = "clockSix";
                this.selTwoA = "ageYoung";
                this.selTwoB = "ageOlder";
                this.selThreeA = "drinkLemon";
                this.selThreeB = "drinkTea";
                this.tabControllerCq2.enableTool(false);
                this.tabControllerDq2.enableTool(false);
                this.imgToolCq2.enableTool(false);
                this.imgToolDq2.enableTool(false);
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q2Response', this.q2TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q2TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ2APart2 = TQ2APart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ2APart3 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq2";
                this.imgTool2 = "imgToolDq2";
                this.tabController1 = "tabControllerCq2";
                this.tabController2 = "tabControllerDq2";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "clockNoon";
                this.selOneB = "clockThree";
                this.selOneC = "clockSix";
                this.selTwoA = "ageYoung";
                this.selTwoB = "ageOlder";
                this.selThreeA = "drinkLemon";
                this.selThreeB = "drinkTea";
                this.tabControllerCq2.enableTool(true);
                this.tabControllerDq2.enableTool(true);
                this.imgToolCq2.enableTool(true);
                this.imgToolDq2.enableTool(true);
                this.tabControllerCq2.useChanged = true;
                this.tabControllerDq2.useChanged = true;
                this.wireControls();
            }
            $preExitScene() {
                this.tabControllerCq2.useChanged = false;
                this.tabControllerDq2.useChanged = false;
                this.setModuleValue('q2CVS', this.encodeExptString("age of seller", "sel2", "sel1", "sel3"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                result = !this.tabControllerCq2.compareXMLState(this.getModuleValue("Q2expState1"));
                result = !this.tabControllerDq2.compareXMLState(this.getModuleValue("Q2expState2")) || result;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ2APart3 = TQ2APart3;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ2BPart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.imgTool1 = "imgToolCq2";
                this.imgTool2 = "imgToolDq2";
                this.tabController1 = "tabControllerCq2";
                this.tabController2 = "tabControllerDq2";
                this.imgToolCq2.bPersist = true;
                this.imgToolDq2.bPersist = true;
                this.tabControllerCq2.bPersist = true;
                this.tabControllerDq2.bPersist = true;
                this.q2Check1.bPersist = true;
                this.q2Check2.bPersist = true;
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "temp200";
                this.selOneB = "temp350";
                this.selOneC = "temp500";
                this.selTwoA = "honey";
                this.selTwoB = "sugar";
                this.selThreeA = "oneEgg";
                this.selThreeB = "threeEgg";
                this.tabControllerCq2.enableTool(false);
                this.tabControllerDq2.enableTool(false);
                this.imgToolCq2.enableTool(false);
                this.imgToolDq2.enableTool(false);
                if (!this.getSceneValue("initialized")) {
                    this.imgToolCq2.initState();
                    this.imgToolDq2.initState();
                    this.tabControllerCq2.initState();
                    this.tabControllerDq2.initState();
                    this.imgToolCq2["temp350"].visible = true;
                    this.imgToolCq2["sugar"].visible = true;
                    this.imgToolCq2["threeEgg"].visible = true;
                    this.imgToolDq2["temp350"].visible = true;
                    this.imgToolDq2["honey"].visible = true;
                    this.imgToolDq2["threeEgg"].visible = true;
                    this.tabControllerCq2.sel1 = "Sitem4";
                    this.tabControllerCq2.StopButton.SsubLabel.text = "350 Degrees";
                    this.tabControllerCq2.StopButton.SsubLabel.visible = true;
                    this.tabControllerCq2.sel2 = "Sitem2";
                    this.tabControllerCq2.ScenterButton.SsubLabel.text = "Sugar";
                    this.tabControllerCq2.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerCq2.sel3 = "Sitem2";
                    this.tabControllerCq2.SbottomButton.SsubLabel.text = "Three";
                    this.tabControllerCq2.SbottomButton.SsubLabel.visible = true;
                    this.tabControllerDq2.sel1 = "Sitem4";
                    this.tabControllerDq2.StopButton.SsubLabel.text = "350 Degrees";
                    this.tabControllerDq2.StopButton.SsubLabel.visible = true;
                    this.tabControllerDq2.sel2 = "Sitem1";
                    this.tabControllerDq2.ScenterButton.SsubLabel.text = "Honey";
                    this.tabControllerDq2.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerDq2.sel3 = "Sitem2";
                    this.tabControllerDq2.SbottomButton.SsubLabel.text = "Three";
                    this.tabControllerDq2.SbottomButton.SsubLabel.visible = true;
                    this.setModuleValue("Q2expState1", this.tabControllerCq2.captureXMLState());
                    this.setModuleValue("Q2expState2", this.tabControllerDq2.captureXMLState());
                    this.setSceneValue("initialized", true);
                    this.setSceneValue("complete", false);
                }
                this.q2Check2.label = "Bad Way";
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q2Good', this.q2Check1.captureLOGString);
                this.setModuleValue('q2Bad', this.q2Check2.captureLOGString);
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q2Check1.getChecked() || this.q2Check2.getChecked())
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ2BPart1 = TQ2BPart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ2BPart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq2";
                this.imgTool2 = "imgToolDq2";
                this.tabController1 = "tabControllerCq2";
                this.tabController2 = "tabControllerDq2";
                this.q2TextControl1.bPersist = true;
            }
            $onEnterScene() {
                this.q2TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "temp200";
                this.selOneB = "temp350";
                this.selOneC = "temp500";
                this.selTwoA = "honey";
                this.selTwoB = "sugar";
                this.selThreeA = "oneEgg";
                this.selThreeB = "threeEgg";
                this.tabControllerCq2.enableTool(false);
                this.tabControllerDq2.enableTool(false);
                this.imgToolCq2.enableTool(false);
                this.imgToolDq2.enableTool(false);
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q2Response', this.q2TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q2TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ2BPart2 = TQ2BPart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ2BPart3 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq2";
                this.imgTool2 = "imgToolDq2";
                this.tabController1 = "tabControllerCq2";
                this.tabController2 = "tabControllerDq2";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "temp200";
                this.selOneB = "temp350";
                this.selOneC = "temp500";
                this.selTwoA = "honey";
                this.selTwoB = "sugar";
                this.selThreeA = "oneEgg";
                this.selThreeB = "threeEgg";
                this.tabControllerCq2.enableTool(true);
                this.tabControllerDq2.enableTool(true);
                this.imgToolCq2.enableTool(true);
                this.imgToolDq2.enableTool(true);
                this.tabControllerCq2.useChanged = true;
                this.tabControllerDq2.useChanged = true;
                this.wireControls();
            }
            $preExitScene() {
                this.tabControllerCq2.useChanged = false;
                this.tabControllerDq2.useChanged = false;
                this.setModuleValue('q2CVS', this.encodeExptString("number of eggs", "sel3", "sel1", "sel2"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                result = !this.tabControllerCq2.compareXMLState(this.getModuleValue("Q2expState1"));
                result = !this.tabControllerDq2.compareXMLState(this.getModuleValue("Q2expState2")) || result;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ2BPart3 = TQ2BPart3;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ3APart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNONE, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "curvedBody";
                this.selOneB = "straightBody";
                this.selTwoA = "oneWindow";
                this.selTwoB = "fourWindow";
                this.selThreeA = "downEngines";
                this.selThreeB = "tiltEngines";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "q3DesignButton":
                        this.nextTrack("$onAction:" + target);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ3APart1 = TQ3APart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ3APart1B {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.imgTool1 = "imgToolAq3";
                this.imgTool2 = "imgToolBq3";
                this.tabController1 = "tabControllerAq3";
                this.tabController2 = "tabControllerBq3";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "curvedBody";
                this.selOneB = "straightBody";
                this.selTwoA = "oneWindow";
                this.selTwoB = "fourWindow";
                this.selThreeA = "downEngines";
                this.selThreeB = "tiltEngines";
                if (!this.getSceneValue("initialized")) {
                    this.imgToolAq3.bPersist = true;
                    this.imgToolBq3.bPersist = true;
                    this.tabControllerAq3.bPersist = true;
                    this.tabControllerBq3.bPersist = true;
                    this.imgToolAq3.initState();
                    this.imgToolBq3.initState();
                    this.tabControllerAq3.initState();
                    this.tabControllerBq3.initState();
                    this.setSceneValue("initialized", true);
                    this.setSceneValue("complete", false);
                }
                this.tabControllerAq3.enableTool(true);
                this.tabControllerBq3.enableTool(true);
                this.imgToolAq3.enableTool(true);
                this.imgToolBq3.enableTool(true);
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q3CVS', this.encodeExptString("engine direction", "sel3", "sel1", "sel2"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ3APart1B = TQ3APart1B;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ3APart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolAq3";
                this.imgTool2 = "imgToolBq3";
                this.tabController1 = "tabControllerAq3";
                this.tabController2 = "tabControllerBq3";
                this.q3TextControl1.bPersist = true;
                this.wireControls();
            }
            $onEnterScene() {
                this.q3TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "curvedBody";
                this.selOneB = "straightBody";
                this.selTwoA = "oneWindow";
                this.selTwoB = "fourWindow";
                this.selThreeA = "downEngines";
                this.selThreeB = "tiltEngines";
                this.tabControllerAq3.enableTool(false);
                this.tabControllerBq3.enableTool(false);
                this.imgToolAq3.enableTool(false);
                this.imgToolBq3.enableTool(false);
            }
            $preExitScene() {
                this.setModuleValue('q3Response', this.q3TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q3TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ3APart2 = TQ3APart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ3BPart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "topClosed";
                this.selOneB = "topOpen";
                this.selTwoA = "doorsTwo";
                this.selTwoB = "doorsFour";
                this.selThreeA = "tiresLarge";
                this.selThreeB = "tiresSmall";
                this.tabControllerAq3.enableTool(false);
                this.tabControllerBq3.enableTool(false);
                this.imgToolAq3.enableTool(false);
                this.imgToolBq3.enableTool(false);
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "q3DesignButton":
                        this.nextTrack("$onAction:" + target);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ3BPart1 = TQ3BPart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ3BPart1B {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolAq3";
                this.imgTool2 = "imgToolBq3";
                this.tabController1 = "tabControllerAq3";
                this.tabController2 = "tabControllerBq3";
                this.imgToolAq3.bPersist = true;
                this.imgToolBq3.bPersist = true;
                this.tabControllerAq3.bPersist = true;
                this.tabControllerBq3.bPersist = true;
                this.wireControls();
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "topClosed";
                this.selOneB = "topOpen";
                this.selTwoA = "doorsTwo";
                this.selTwoB = "doorsFour";
                this.selThreeA = "tiresLarge";
                this.selThreeB = "tiresSmall";
                this.imgToolAq3.initState();
                this.imgToolBq3.initState();
                this.tabControllerAq3.initState();
                this.tabControllerBq3.initState();
                this.tabControllerAq3.enableTool(true);
                this.tabControllerBq3.enableTool(true);
                this.imgToolAq3.enableTool(true);
                this.imgToolBq3.enableTool(true);
            }
            $preExitScene() {
                this.setModuleValue('q3CVS', this.encodeExptString("size of tires", "sel3", "sel1", "sel2"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ3BPart1B = TQ3BPart1B;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ3BPart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolAq3";
                this.imgTool2 = "imgToolBq3";
                this.tabController1 = "tabControllerAq3";
                this.tabController2 = "tabControllerBq3";
                this.q3TextControl1.bPersist = true;
            }
            $onEnterScene() {
                this.q3TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "topClosed";
                this.selOneB = "topOpen";
                this.selTwoA = "doorsTwo";
                this.selTwoB = "doorsFour";
                this.selThreeA = "tiresLarge";
                this.selThreeB = "tiresSmall";
                this.tabControllerAq3.enableTool(false);
                this.tabControllerBq3.enableTool(false);
                this.imgToolAq3.enableTool(false);
                this.imgToolBq3.enableTool(false);
            }
            $preExitScene() {
                this.setModuleValue('q3Response', this.q3TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q3TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ3BPart2 = TQ3BPart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ4APart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.imgTool1 = "imgToolCq4";
                this.imgTool2 = "imgToolDq4";
                this.tabController1 = "tabControllerCq4";
                this.tabController2 = "tabControllerDq4";
                this.imgToolCq4.bPersist = true;
                this.imgToolDq4.bPersist = true;
                this.tabControllerCq4.bPersist = true;
                this.tabControllerDq4.bPersist = true;
                this.q4Check1.bPersist = true;
                this.q4Check2.bPersist = true;
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "curvedBody";
                this.selOneB = "straightBody";
                this.selTwoA = "oneWindow";
                this.selTwoB = "fourWindow";
                this.selThreeA = "downEngines";
                this.selThreeB = "tiltEngines";
                this.tabControllerCq4.enableTool(false);
                this.tabControllerDq4.enableTool(false);
                this.imgToolCq4.enableTool(false);
                this.imgToolDq4.enableTool(false);
                if (!this.getSceneValue("initialized")) {
                    this.imgToolCq4.initState();
                    this.imgToolDq4.initState();
                    this.tabControllerCq4.initState();
                    this.tabControllerDq4.initState();
                    this.imgToolCq4["straightBody"].visible = true;
                    this.imgToolCq4["fourWindow"].visible = true;
                    this.imgToolCq4["downEngines"].visible = true;
                    this.imgToolDq4["curvedBody"].visible = true;
                    this.imgToolDq4["oneWindow"].visible = true;
                    this.imgToolDq4["tiltEngines"].visible = true;
                    this.tabControllerCq4.sel1 = "Sitem2";
                    this.tabControllerCq4.StopButton.SsubLabel.text = "Straight";
                    this.tabControllerCq4.StopButton.SsubLabel.visible = true;
                    this.tabControllerCq4.sel2 = "Sitem2";
                    this.tabControllerCq4.ScenterButton.SsubLabel.text = "Four";
                    this.tabControllerCq4.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerCq4.sel3 = "Sitem1";
                    this.tabControllerCq4.SbottomButton.SsubLabel.text = "Down";
                    this.tabControllerCq4.SbottomButton.SsubLabel.visible = true;
                    this.tabControllerDq4.sel1 = "Sitem1";
                    this.tabControllerDq4.StopButton.SsubLabel.text = "Curved";
                    this.tabControllerDq4.StopButton.SsubLabel.visible = true;
                    this.tabControllerDq4.sel2 = "Sitem1";
                    this.tabControllerDq4.ScenterButton.SsubLabel.text = "One";
                    this.tabControllerDq4.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerDq4.sel3 = "Sitem2";
                    this.tabControllerDq4.SbottomButton.SsubLabel.text = "Tilted";
                    this.tabControllerDq4.SbottomButton.SsubLabel.visible = true;
                    this.setModuleValue("Q4expState1", this.tabControllerCq4.captureXMLState());
                    this.setModuleValue("Q4expState2", this.tabControllerDq4.captureXMLState());
                    this.setSceneValue("initialized", true);
                    this.setSceneValue("complete", false);
                }
                this.q4Check2.label = "Bad Way";
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q4Good', this.q4Check1.captureLOGString);
                this.setModuleValue('q4Bad', this.q4Check2.captureLOGString);
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q4Check1.getChecked() || this.q4Check2.getChecked())
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ4APart1 = TQ4APart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ4APart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq4";
                this.imgTool2 = "imgToolDq4";
                this.tabController1 = "tabControllerCq4";
                this.tabController2 = "tabControllerDq4";
                this.q4TextControl1.bPersist = true;
            }
            $onEnterScene() {
                this.q4TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "curvedBody";
                this.selOneB = "straightBody";
                this.selTwoA = "oneWindow";
                this.selTwoB = "fourWindow";
                this.selThreeA = "downEngines";
                this.selThreeB = "tiltEngines";
                this.tabControllerCq4.enableTool(false);
                this.tabControllerDq4.enableTool(false);
                this.imgToolCq4.enableTool(false);
                this.imgToolDq4.enableTool(false);
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q4Response', this.q4TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q4TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ4APart2 = TQ4APart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ4APart3 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq4";
                this.imgTool2 = "imgToolDq4";
                this.tabController1 = "tabControllerCq4";
                this.tabController2 = "tabControllerDq4";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "curvedBody";
                this.selOneB = "straightBody";
                this.selTwoA = "oneWindow";
                this.selTwoB = "fourWindow";
                this.selThreeA = "downEngines";
                this.selThreeB = "tiltEngines";
                this.tabControllerCq4.enableTool(true);
                this.tabControllerDq4.enableTool(true);
                this.imgToolCq4.enableTool(true);
                this.imgToolDq4.enableTool(true);
                this.tabControllerCq4.useChanged = true;
                this.tabControllerDq4.useChanged = true;
                this.wireControls();
            }
            $preExitScene() {
                this.tabControllerCq4.useChanged = false;
                this.tabControllerDq4.useChanged = false;
                this.setModuleValue('q4CVS', this.encodeExptString("number of windows", "sel2", "sel1", "sel3"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                result = !this.tabControllerCq4.compareXMLState(this.getModuleValue("Q4expState1"));
                result = !this.tabControllerDq4.compareXMLState(this.getModuleValue("Q4expState2")) || result;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ4APart3 = TQ4APart3;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ4BPart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.imgTool1 = "imgToolCq4";
                this.imgTool2 = "imgToolDq4";
                this.tabController1 = "tabControllerCq4";
                this.tabController2 = "tabControllerDq4";
                this.imgToolCq4.bPersist = true;
                this.imgToolDq4.bPersist = true;
                this.tabControllerCq4.bPersist = true;
                this.tabControllerDq4.bPersist = true;
                this.q4Check1.bPersist = true;
                this.q4Check2.bPersist = true;
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "topClosed";
                this.selOneB = "topOpen";
                this.selTwoA = "doorsTwo";
                this.selTwoB = "doorsFour";
                this.selThreeA = "tiresLarge";
                this.selThreeB = "tiresSmall";
                this.tabControllerCq4.enableTool(false);
                this.tabControllerDq4.enableTool(false);
                this.imgToolCq4.enableTool(false);
                this.imgToolDq4.enableTool(false);
                if (!this.getSceneValue("initialized")) {
                    this.imgToolCq4.initState();
                    this.imgToolDq4.initState();
                    this.tabControllerCq4.initState();
                    this.tabControllerDq4.initState();
                    this.imgToolCq4["topClosed"].visible = true;
                    this.imgToolCq4["doorsTwo"].visible = true;
                    this.imgToolCq4["tiresLarge"].visible = true;
                    this.imgToolDq4["topOpen"].visible = true;
                    this.imgToolDq4["doorsFour"].visible = true;
                    this.imgToolDq4["tiresSmall"].visible = true;
                    this.tabControllerCq4.sel1 = "Sitem1";
                    this.tabControllerCq4.StopButton.SsubLabel.text = "Closed";
                    this.tabControllerCq4.StopButton.SsubLabel.visible = true;
                    this.tabControllerCq4.sel2 = "Sitem1";
                    this.tabControllerCq4.ScenterButton.SsubLabel.text = "Two";
                    this.tabControllerCq4.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerCq4.sel3 = "Sitem1";
                    this.tabControllerCq4.SbottomButton.SsubLabel.text = "Large";
                    this.tabControllerCq4.SbottomButton.SsubLabel.visible = true;
                    this.tabControllerDq4.sel1 = "Sitem2";
                    this.tabControllerDq4.StopButton.SsubLabel.text = "Open";
                    this.tabControllerDq4.StopButton.SsubLabel.visible = true;
                    this.tabControllerDq4.sel2 = "Sitem2";
                    this.tabControllerDq4.ScenterButton.SsubLabel.text = "Four";
                    this.tabControllerDq4.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerDq4.sel3 = "Sitem2";
                    this.tabControllerDq4.SbottomButton.SsubLabel.text = "Small";
                    this.tabControllerDq4.SbottomButton.SsubLabel.visible = true;
                    this.setModuleValue("Q4expState1", this.tabControllerCq4.captureXMLState());
                    this.setModuleValue("Q4expState2", this.tabControllerDq4.captureXMLState());
                    this.setSceneValue("initialized", true);
                    this.setSceneValue("complete", false);
                }
                this.q4Check2.label = "Bad Way";
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q4Good', this.q4Check1.captureLOGString);
                this.setModuleValue('q4Bad', this.q4Check2.captureLOGString);
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q4Check1.getChecked() || this.q4Check2.getChecked())
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ4BPart1 = TQ4BPart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ4BPart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq4";
                this.imgTool2 = "imgToolDq4";
                this.tabController1 = "tabControllerCq4";
                this.tabController2 = "tabControllerDq4";
                this.q4TextControl1.bPersist = true;
            }
            $onEnterScene() {
                this.q4TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "topClosed";
                this.selOneB = "topOpen";
                this.selTwoA = "doorsTwo";
                this.selTwoB = "doorsFour";
                this.selThreeA = "tiresLarge";
                this.selThreeB = "tiresSmall";
                this.tabControllerCq4.enableTool(false);
                this.tabControllerDq4.enableTool(false);
                this.imgToolCq4.enableTool(false);
                this.imgToolDq4.enableTool(false);
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q4Response', this.q4TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q4TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ4BPart2 = TQ4BPart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ4BPart3 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq4";
                this.imgTool2 = "imgToolDq4";
                this.tabController1 = "tabControllerCq4";
                this.tabController2 = "tabControllerDq4";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "topClosed";
                this.selOneB = "topOpen";
                this.selTwoA = "doorsTwo";
                this.selTwoB = "doorsFour";
                this.selThreeA = "tiresLarge";
                this.selThreeB = "tiresSmall";
                this.tabControllerCq4.enableTool(true);
                this.tabControllerDq4.enableTool(true);
                this.imgToolCq4.enableTool(true);
                this.imgToolDq4.enableTool(true);
                this.tabControllerCq4.useChanged = true;
                this.tabControllerDq4.useChanged = true;
                this.wireControls();
            }
            $preExitScene() {
                this.tabControllerCq4.useChanged = false;
                this.tabControllerDq4.useChanged = false;
                this.setModuleValue('q4CVS', this.encodeExptString("number of doors", "sel2", "sel1", "sel3"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                result = !this.tabControllerCq4.compareXMLState(this.getModuleValue("Q4expState1"));
                result = !this.tabControllerDq4.compareXMLState(this.getModuleValue("Q4expState2")) || result;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ4BPart3 = TQ4BPart3;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ5APart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNONE, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "studyAlone";
                this.selOneB = "studyFriend";
                this.selTwoA = "atHome";
                this.selTwoB = "atLibrary";
                this.selThreeA = "drinkWater";
                this.selThreeB = "drinkSoda";
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "q5DesignButton":
                        this.nextTrack("$onAction:" + target);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ5APart1 = TQ5APart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ5APart1B {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.imgTool1 = "imgToolAq5";
                this.imgTool2 = "imgToolBq5";
                this.tabController1 = "tabControllerAq5";
                this.tabController2 = "tabControllerBq5";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "studyAlone";
                this.selOneB = "studyFriend";
                this.selTwoA = "atHome";
                this.selTwoB = "atLibrary";
                this.selThreeA = "drinkWater";
                this.selThreeB = "drinkSoda";
                if (!this.getSceneValue("initialized")) {
                    this.imgToolAq5.bPersist = true;
                    this.imgToolBq5.bPersist = true;
                    this.tabControllerAq5.bPersist = true;
                    this.tabControllerBq5.bPersist = true;
                    this.imgToolAq5.initState();
                    this.imgToolBq5.initState();
                    this.tabControllerAq5.initState();
                    this.tabControllerBq5.initState();
                    this.setSceneValue("initialized", true);
                    this.setSceneValue("complete", false);
                }
                this.tabControllerAq5.enableTool(true);
                this.tabControllerBq5.enableTool(true);
                this.imgToolAq5.enableTool(true);
                this.imgToolBq5.enableTool(true);
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q5CVS', this.encodeExptString("study where", "sel2", "sel1", "sel3"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ5APart1B = TQ5APart1B;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ5APart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolAq5";
                this.imgTool2 = "imgToolBq5";
                this.tabController1 = "tabControllerAq5";
                this.tabController2 = "tabControllerBq5";
                this.q5TextControl1.bPersist = true;
                this.wireControls();
            }
            $onEnterScene() {
                this.q5TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "studyAlone";
                this.selOneB = "studyFriend";
                this.selTwoA = "atHome";
                this.selTwoB = "atLibrary";
                this.selThreeA = "drinkWater";
                this.selThreeB = "drinkSoda";
                this.tabControllerAq5.enableTool(false);
                this.tabControllerBq5.enableTool(false);
                this.imgToolAq5.enableTool(false);
                this.imgToolBq5.enableTool(false);
            }
            $preExitScene() {
                this.setModuleValue('q5Response', this.q5TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q5TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ5APart2 = TQ5APart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ5BPart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "lightBright";
                this.selOneB = "lightDim";
                this.selTwoA = "cardIcons";
                this.selTwoB = "cardWords";
                this.selThreeA = "minutesOne";
                this.selThreeB = "minutesFive";
                this.tabControllerAq5.enableTool(false);
                this.tabControllerBq5.enableTool(false);
                this.imgToolAq5.enableTool(false);
                this.imgToolBq5.enableTool(false);
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "q5DesignButton":
                        this.nextTrack("$onAction:" + target);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ5BPart1 = TQ5BPart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ5BPart1B {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolAq5";
                this.imgTool2 = "imgToolBq5";
                this.tabController1 = "tabControllerAq5";
                this.tabController2 = "tabControllerBq5";
                this.imgToolAq5.bPersist = true;
                this.imgToolBq5.bPersist = true;
                this.tabControllerAq5.bPersist = true;
                this.tabControllerBq5.bPersist = true;
                this.wireControls();
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "lightBright";
                this.selOneB = "lightDim";
                this.selTwoA = "cardIcons";
                this.selTwoB = "cardWords";
                this.selThreeA = "minutesOne";
                this.selThreeB = "minutesFive";
                this.imgToolAq5.initState();
                this.imgToolBq5.initState();
                this.tabControllerAq5.initState();
                this.tabControllerBq5.initState();
                this.tabControllerAq5.enableTool(true);
                this.tabControllerBq5.enableTool(true);
                this.imgToolAq5.enableTool(true);
                this.imgToolBq5.enableTool(true);
            }
            $preExitScene() {
                this.setModuleValue('q5CVS', this.encodeExptString("room lighting", "sel1", "sel2", "sel3"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ5BPart1B = TQ5BPart1B;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ5BPart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolAq5";
                this.imgTool2 = "imgToolBq5";
                this.tabController1 = "tabControllerAq5";
                this.tabController2 = "tabControllerBq5";
                this.q5TextControl1.bPersist = true;
                this.wireControls();
            }
            $onEnterScene() {
                this.q5TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "lightBright";
                this.selOneB = "lightDim";
                this.selTwoA = "cardIcons";
                this.selTwoB = "cardWords";
                this.selThreeA = "minutesOne";
                this.selThreeB = "minutesFive";
                this.tabControllerAq5.enableTool(false);
                this.tabControllerBq5.enableTool(false);
                this.imgToolAq5.enableTool(false);
                this.imgToolBq5.enableTool(false);
            }
            $preExitScene() {
                this.setModuleValue('q5Response', this.q5TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q5TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ5BPart2 = TQ5BPart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ6APart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.imgTool1 = "imgToolCq6";
                this.imgTool2 = "imgToolDq6";
                this.tabController1 = "tabControllerCq6";
                this.tabController2 = "tabControllerDq6";
                this.imgToolCq6.bPersist = true;
                this.imgToolDq6.bPersist = true;
                this.tabControllerCq6.bPersist = true;
                this.tabControllerDq6.bPersist = true;
                this.q6Check1.bPersist = true;
                this.q6Check2.bPersist = true;
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "studyAlone";
                this.selOneB = "studyFriend";
                this.selTwoA = "atHome";
                this.selTwoB = "atLibrary";
                this.selThreeA = "drinkWater";
                this.selThreeB = "drinkSoda";
                this.tabControllerCq6.enableTool(false);
                this.tabControllerDq6.enableTool(false);
                this.imgToolCq6.enableTool(false);
                this.imgToolDq6.enableTool(false);
                if (!this.getSceneValue("initialized")) {
                    this.imgToolCq6.initState();
                    this.imgToolDq6.initState();
                    this.tabControllerCq6.initState();
                    this.tabControllerDq6.initState();
                    this.imgToolCq6["studyAlone"].visible = true;
                    this.imgToolCq6["atLibrary"].visible = true;
                    this.imgToolCq6["drinkWater"].visible = true;
                    this.imgToolDq6["studyAlone"].visible = true;
                    this.imgToolDq6["atLibrary"].visible = true;
                    this.imgToolDq6["drinkWater"].visible = true;
                    this.tabControllerCq6.sel1 = "Sitem1";
                    this.tabControllerCq6.StopButton.SsubLabel.text = "Alone";
                    this.tabControllerCq6.StopButton.SsubLabel.visible = true;
                    this.tabControllerCq6.sel2 = "Sitem2";
                    this.tabControllerCq6.ScenterButton.SsubLabel.text = "Library";
                    this.tabControllerCq6.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerCq6.sel3 = "Sitem1";
                    this.tabControllerCq6.SbottomButton.SsubLabel.text = "Water";
                    this.tabControllerCq6.SbottomButton.SsubLabel.visible = true;
                    this.tabControllerDq6.sel1 = "Sitem1";
                    this.tabControllerDq6.StopButton.SsubLabel.text = "Alone";
                    this.tabControllerDq6.StopButton.SsubLabel.visible = true;
                    this.tabControllerDq6.sel2 = "Sitem2";
                    this.tabControllerDq6.ScenterButton.SsubLabel.text = "Library";
                    this.tabControllerDq6.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerDq6.sel3 = "Sitem1";
                    this.tabControllerDq6.SbottomButton.SsubLabel.text = "Water";
                    this.tabControllerDq6.SbottomButton.SsubLabel.visible = true;
                    this.setModuleValue("Q6expState1", this.tabControllerCq6.captureXMLState());
                    this.setModuleValue("Q6expState2", this.tabControllerDq6.captureXMLState());
                    this.setSceneValue("initialized", true);
                    this.setSceneValue("complete", false);
                }
                this.q6Check2.label = "Bad Way";
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q6Good', this.q6Check1.captureLOGString);
                this.setModuleValue('q6Bad', this.q6Check2.captureLOGString);
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q6Check1.getChecked() || this.q6Check2.getChecked())
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ6APart1 = TQ6APart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ6APart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq6";
                this.imgTool2 = "imgToolDq6";
                this.tabController1 = "tabControllerCq6";
                this.tabController2 = "tabControllerDq6";
                this.q6TextControl1.bPersist = true;
            }
            $onEnterScene() {
                this.q6TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "studyAlone";
                this.selOneB = "studyFriend";
                this.selTwoA = "atHome";
                this.selTwoB = "atLibrary";
                this.selThreeA = "drinkWater";
                this.selThreeB = "drinkSoda";
                this.tabControllerCq6.enableTool(false);
                this.tabControllerDq6.enableTool(false);
                this.imgToolCq6.enableTool(false);
                this.imgToolDq6.enableTool(false);
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q6Response', this.q6TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q6TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ6APart2 = TQ6APart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ6APart3 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq6";
                this.imgTool2 = "imgToolDq6";
                this.tabController1 = "tabControllerCq6";
                this.tabController2 = "tabControllerDq6";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "studyAlone";
                this.selOneB = "studyFriend";
                this.selTwoA = "atHome";
                this.selTwoB = "atLibrary";
                this.selThreeA = "drinkWater";
                this.selThreeB = "drinkSoda";
                this.tabControllerCq6.enableTool(true);
                this.tabControllerDq6.enableTool(true);
                this.imgToolCq6.enableTool(true);
                this.imgToolDq6.enableTool(true);
                this.tabControllerCq6.useChanged = true;
                this.tabControllerDq6.useChanged = true;
                this.wireControls();
            }
            $preExitScene() {
                this.tabControllerCq6.useChanged = false;
                this.tabControllerDq6.useChanged = false;
                this.setModuleValue('q6CVS', this.encodeExptString("who", "sel1", "sel2", "sel3"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                result = !this.tabControllerCq6.compareXMLState(this.getModuleValue("Q6expState1"));
                result = !this.tabControllerDq6.compareXMLState(this.getModuleValue("Q6expState2")) || result;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ6APart3 = TQ6APart3;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ6BPart1 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.imgTool1 = "imgToolCq6";
                this.imgTool2 = "imgToolDq6";
                this.tabController1 = "tabControllerCq6";
                this.tabController2 = "tabControllerDq6";
                this.imgToolCq6.bPersist = true;
                this.imgToolDq6.bPersist = true;
                this.tabControllerCq6.bPersist = true;
                this.tabControllerDq6.bPersist = true;
                this.q6Check1.bPersist = true;
                this.q6Check2.bPersist = true;
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "lightBright";
                this.selOneB = "lightDim";
                this.selTwoA = "cardIcons";
                this.selTwoB = "cardWords";
                this.selThreeA = "minutesOne";
                this.selThreeB = "minutesFive";
                this.tabControllerCq6.enableTool(false);
                this.tabControllerDq6.enableTool(false);
                this.imgToolCq6.enableTool(false);
                this.imgToolDq6.enableTool(false);
                if (!this.getSceneValue("initialized")) {
                    this.imgToolCq6.initState();
                    this.imgToolDq6.initState();
                    this.tabControllerCq6.initState();
                    this.tabControllerDq6.initState();
                    this.imgToolCq6["lightBright"].visible = true;
                    this.imgToolCq6["cardIcons"].visible = true;
                    this.imgToolCq6["minutesFive"].visible = true;
                    this.imgToolDq6["lightBright"].visible = true;
                    this.imgToolDq6["cardIcons"].visible = true;
                    this.imgToolDq6["minutesFive"].visible = true;
                    this.imgToolCq6.manageMasks("lightBright");
                    this.imgToolCq6.manageMasks("cardIcons");
                    this.imgToolCq6.manageMasks("minutesFive");
                    this.imgToolDq6.manageMasks("lightBright");
                    this.imgToolDq6.manageMasks("cardIcons");
                    this.imgToolDq6.manageMasks("minutesFive");
                    this.tabControllerCq6.sel1 = "Sitem1";
                    this.tabControllerCq6.StopButton.SsubLabel.text = "Bright";
                    this.tabControllerCq6.StopButton.SsubLabel.visible = true;
                    this.tabControllerCq6.sel2 = "Sitem1";
                    this.tabControllerCq6.ScenterButton.SsubLabel.text = "10 Pictures";
                    this.tabControllerCq6.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerCq6.sel3 = "Sitem2";
                    this.tabControllerCq6.SbottomButton.SsubLabel.text = "45 Seconds";
                    this.tabControllerCq6.SbottomButton.SsubLabel.visible = true;
                    this.tabControllerDq6.sel1 = "Sitem1";
                    this.tabControllerDq6.StopButton.SsubLabel.text = "Bright";
                    this.tabControllerDq6.StopButton.SsubLabel.visible = true;
                    this.tabControllerDq6.sel2 = "Sitem1";
                    this.tabControllerDq6.ScenterButton.SsubLabel.text = "10 Pictures";
                    this.tabControllerDq6.ScenterButton.SsubLabel.visible = true;
                    this.tabControllerDq6.sel3 = "Sitem2";
                    this.tabControllerDq6.SbottomButton.SsubLabel.text = "45 Seconds";
                    this.tabControllerDq6.SbottomButton.SsubLabel.visible = true;
                    this.setModuleValue("Q6expState1", this.tabControllerCq6.captureXMLState());
                    this.setModuleValue("Q6expState2", this.tabControllerDq6.captureXMLState());
                    this.setSceneValue("initialized", true);
                    this.setSceneValue("complete", false);
                }
                this.q6Check2.label = "Bad Way";
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q6Good', this.q6Check1.captureLOGString);
                this.setModuleValue('q6Bad', this.q6Check2.captureLOGString);
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q6Check1.getChecked() || this.q6Check2.getChecked())
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ6BPart1 = TQ6BPart1;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ6BPart2 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq6";
                this.imgTool2 = "imgToolDq6";
                this.tabController1 = "tabControllerCq6";
                this.tabController2 = "tabControllerDq6";
                this.q6TextControl1.bPersist = true;
            }
            $onEnterScene() {
                this.q6TextControl1.setFocus();
            }
            $preEnterScene() {
                this.selOneA = "lightBright";
                this.selOneB = "lightDim";
                this.selTwoA = "cardIcons";
                this.selTwoB = "cardWords";
                this.selThreeA = "minutesOne";
                this.selThreeB = "minutesFive";
                this.tabControllerCq6.enableTool(false);
                this.tabControllerDq6.enableTool(false);
                this.imgToolCq6.enableTool(false);
                this.imgToolDq6.enableTool(false);
                this.wireControls();
            }
            $preExitScene() {
                this.setModuleValue('q6Response', this.q6TextControl1.captureLogState());
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                if (this.q6TextControl1.hasMinWords(2, 9))
                    result = true;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ6BPart2 = TQ6BPart2;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class TQ6BPart3 {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVBOTH, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
                this.imgTool1 = "imgToolCq6";
                this.imgTool2 = "imgToolDq6";
                this.tabController1 = "tabControllerCq6";
                this.tabController2 = "tabControllerDq6";
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.selOneA = "lightBright";
                this.selOneB = "lightDim";
                this.selTwoA = "cardIcons";
                this.selTwoB = "cardWords";
                this.selThreeA = "minutesOne";
                this.selThreeB = "minutesFive";
                this.tabControllerCq6.enableTool(true);
                this.tabControllerDq6.enableTool(true);
                this.imgToolCq6.enableTool(true);
                this.imgToolDq6.enableTool(true);
                this.tabControllerCq6.useChanged = true;
                this.tabControllerDq6.useChanged = true;
                this.wireControls();
            }
            $preExitScene() {
                this.tabControllerCq6.useChanged = false;
                this.tabControllerDq6.useChanged = false;
                this.setModuleValue('q6CVS', this.encodeExptString("type of card", "sel2", "sel1", "sel3"));
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = false;
                result = !this.tabControllerCq6.compareXMLState(this.getModuleValue("Q6expState1"));
                result = !this.tabControllerDq6.compareXMLState(this.getModuleValue("Q6expState2")) || result;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.TQ6BPart3 = TQ6BPart3;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_PrePost;
    (function (EFMod_PrePost) {
        class WelcomeSplash {
            $preCreateScene() {
                this.setNavMode(EFMod_PrePost.CONST.NAVNEXT, EFMod_PrePost.CONST.NAVSCENE);
            }
            $onCreateScene() {
                this.setSceneValue("complete", true);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
                return this["$" + templID];
            }
            $nodePreEnter(nodeId) {
                switch (nodeId) {
                }
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.setSceneValue("complete", true);
                                break;
                        }
                        break;
                }
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_PrePost.WelcomeSplash = WelcomeSplash;
    })(EFMod_PrePost = EFTut_Suppl.EFMod_PrePost || (EFTut_Suppl.EFMod_PrePost = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
//# sourceMappingURL=mixins.js.map