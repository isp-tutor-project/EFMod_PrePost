/// <reference path="../../dist/TutorEngineOne.d.ts" />
/// <reference types="easeljs" />
declare module "thermite/TAssessIcon" {
    import { TObject } from "thermite/TObject";
    import { CEFEvent } from "events/CEFEvent";
    export class TAssessIcon extends TObject {
        Sright: TObject;
        Swrong: TObject;
        SplaceKeeper: TObject;
        constructor();
        TAssessIconInitialize(): void;
        initialize(): void;
        private init3;
        onAddedToStage(evt: CEFEvent): void;
        showIcon(icon: string): void;
    }
}
declare module "thermite/TSelectorIcons" {
    import { TObject } from "thermite/TObject";
    import DisplayObject = createjs.DisplayObject;
    import { CEFEvent } from "events/CEFEvent";
    export class TSelectorIcons extends TObject {
        minutesOne: DisplayObject;
        minutesFive: DisplayObject;
        lightBright: DisplayObject;
        lightDim: DisplayObject;
        cardWords: DisplayObject;
        cardIcons: DisplayObject;
        studyAlone: DisplayObject;
        studyFriend: DisplayObject;
        drinkSoda: DisplayObject;
        drinkWater: DisplayObject;
        atLibrary: DisplayObject;
        atHome: DisplayObject;
        tiresSmall: DisplayObject;
        tiresLarge: DisplayObject;
        topClosed: DisplayObject;
        topOpen: DisplayObject;
        doorsFour: DisplayObject;
        doorsTwo: DisplayObject;
        threeEgg: DisplayObject;
        oneEgg: DisplayObject;
        sugar: DisplayObject;
        honey: DisplayObject;
        oneWindow: DisplayObject;
        fourWindows: DisplayObject;
        tiltEngines: DisplayObject;
        downEngines: DisplayObject;
        straightBody: DisplayObject;
        curvedBody: DisplayObject;
        ageYounger: DisplayObject;
        ageOlder: DisplayObject;
        drinkLemon: DisplayObject;
        drinkTea: DisplayObject;
        bluePaint: DisplayObject;
        pinkPaint: DisplayObject;
        doubleDoor: DisplayObject;
        singleDoor: DisplayObject;
        chimneyRight: DisplayObject;
        chimneyLeft: DisplayObject;
        temp500: DisplayObject;
        temp350: DisplayObject;
        temp200: DisplayObject;
        clockNoon: DisplayObject;
        clockThree: DisplayObject;
        clockSix: DisplayObject;
        constructor();
        TSelectorIconsInitialize(): void;
        initialize(): void;
        private init3;
        onAddedToStage(evt: CEFEvent): void;
        hideAllIcons(): void;
        showIcon(iName: string): void;
    }
}
declare module "thermite/TImgButton" {
    import { TObject } from "thermite/TObject";
    import { TButton } from "thermite/TButton";
    import { CEFEvent } from "events/CEFEvent";
    import MovieClip = createjs.MovieClip;
    export class TImgButton extends TButton {
        Sup: MovieClip;
        Sover: MovieClip;
        Sdown: MovieClip;
        Sdisabled: MovieClip;
        Sfocused: MovieClip;
        STATE_FOCUS: string;
        constructor();
        TImgButtonInitialize(): void;
        initialize(): void;
        private init4;
        Destructor(): void;
        onAddedToStage(evt: CEFEvent): void;
        captureDefState(thisObj: TObject): void;
        restoreDefState(thisObj: TObject): void;
        captureLogState(obj?: any): TObject;
        capturestringState(): string;
        resetState(): void;
    }
}
declare module "thermite/TSelectorItemButton" {
    import { TSelectorIcons } from "thermite/TSelectorIcons";
    import { TImgButton } from "thermite/TImgButton";
    import { TRadioButton } from "thermite/TRadioButton";
    import { CEFEvent } from "events/CEFEvent";
    export class TSelectorItemButton extends TImgButton {
        Sicons: TSelectorIcons;
        Scheckbox: TRadioButton;
        constructor();
        TSelectorItemButtonInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TLabeledTab" {
    import { TObject } from "thermite/TObject";
    import DisplayObject = createjs.DisplayObject;
    import Text = createjs.Text;
    import { CEFEvent } from "events/CEFEvent";
    export class TLabeledTab extends TObject {
        StabLabel: Text;
        SselTab: DisplayObject;
        constructor();
        TLabeledTabInitialize(): void;
        initialize(): void;
        private init3;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TTabTool" {
    import { TSelectorItemButton } from "thermite/TSelectorItemButton";
    import { TButton } from "thermite/TButton";
    import { TLabeledTab } from "thermite/TLabeledTab";
    import { CEFEvent } from "events/CEFEvent";
    import { TObject } from "thermite/TObject";
    import DisplayObject = createjs.DisplayObject;
    export class TTabTool extends TObject {
        Sitem1: TSelectorItemButton;
        Sitem2: TSelectorItemButton;
        Sitem3: TSelectorItemButton;
        Sitem4: TSelectorItemButton;
        Sitem5: TSelectorItemButton;
        SdismissButton: TButton;
        StopTab: TLabeledTab;
        ScenterTab: TLabeledTab;
        SbottomTab: TLabeledTab;
        Sframe: DisplayObject;
        constructor();
        TTabToolInitialize(): void;
        initialize(): void;
        private init3;
        onAddedToStage(evt: CEFEvent): void;
        hideAllIcons(): void;
    }
}
declare module "thermite/TSelectorButton" {
    import { CEFEvent } from "events/CEFEvent";
    import { TButton } from "thermite/TButton";
    import DisplayObject = createjs.DisplayObject;
    import Text = createjs.Text;
    export class TSelectorButton extends TButton {
        SchangeLabel: DisplayObject;
        StopLabel: Text;
        SsubLabel: Text;
        constructor();
        TSelectorButtonInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TController" {
    import { TTabTool } from "thermite/TTabTool";
    import { TSelectorButton } from "thermite/TSelectorButton";
    import { TObject } from "thermite/TObject";
    import { CEFEvent } from "events/CEFEvent";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    export class TController extends TObject {
        StabTool: TTabTool;
        StopButton: TSelectorButton;
        ScenterButton: TSelectorButton;
        SbottomButton: TSelectorButton;
        sel1: string;
        sel2: string;
        sel3: string;
        useChanged: boolean;
        item1Listener: string;
        item2Listener: string;
        item3Listener: string;
        item1BndListener: Function;
        item2BndListener: Function;
        item3BndListener: Function;
        item4BndListener: Function;
        item5BndListener: Function;
        private topBndListener;
        private ctrBndListener;
        private btmBndListener;
        private dismissBndListener;
        private toolEnabled;
        constructor();
        TControllerInitialize(): void;
        initialize(): void;
        private init3;
        onAddedToStage(evt: CEFEvent): void;
        onRemovedFromStage(evt: CEFEvent): void;
        initState(): void;
        deepStateCopy(src: TObject): void;
        captureLogState(obj?: any): Object;
        captureXMLState(): any;
        restoreXMLState(stateVal: any): void;
        compareXMLState(stateVal: any): boolean;
        initLabels(label1: string, label2: string, label3: string): void;
        enableTool(bFlag: boolean): void;
        showTabTool(item1ID: string, item2ID: string, checkedItem: string, tabID: string): void;
        show3TabTool(item1ID: string, item2ID: string, item3ID: string, checkedItem: string, tabID: string): void;
        resizeDismissMask(showHide: boolean): void;
        dismissTool(eventID: string): void;
        dismiss3Tool(eventID: string): void;
        doDismiss(evt: TMouseEvent): void;
        queryQuestionDone(): void;
        topClick(evt: TMouseEvent): void;
        centerClick(evt: TMouseEvent): void;
        bottomClick(evt: TMouseEvent): void;
    }
}
declare module "thermite/TBakingController" {
    import { TController } from "thermite/TController";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import { CEFEvent } from "events/CEFEvent";
    export class TBakingController extends TController {
        constructor();
        TBakingControllerInitialize(): void;
        initialize(): void;
        private init4;
        onAddedToStage(evt: CEFEvent): void;
        topClick(evt: TMouseEvent): void;
        temp200(evt: TMouseEvent): void;
        temp350(evt: TMouseEvent): void;
        temp500(evt: TMouseEvent): void;
        centerClick(evt: TMouseEvent): void;
        honey(evt: TMouseEvent): void;
        sugar(evt: TMouseEvent): void;
        bottomClick(evt: TMouseEvent): void;
        oneEgg(evt: TMouseEvent): void;
        threeEgg(evt: TMouseEvent): void;
        queryQuestionDone(): void;
    }
}
declare module "thermite/TImgTool" {
    import { TObject } from "thermite/TObject";
    import { CEFEvent } from "events/CEFEvent";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    export class TImgTool extends TObject {
        feature1A: string;
        feature1B: string;
        feature2A: string;
        feature2B: string;
        feature3A: string;
        feature3B: string;
        protected useFeatureMask: boolean;
        protected featureMaskA: string;
        protected featureMaskB: string;
        constructor();
        TImgToolInitialize(): void;
        initialize(): void;
        private init3;
        onAddedToStage(evt: CEFEvent): void;
        initState(): void;
        initListeners(): void;
        manageMasks(target: string): void;
        deepStateCopy(src: TObject): void;
        readonly captureLOGString: string;
        captureLogState(obj?: any): Object;
        captureXMLState(): any;
        restoreXMLState(stateVal: any): void;
        compareXMLState(xmlState: any): boolean;
        hideAllButtons(): void;
        enableTool(bFlag: boolean): void;
        logSelection(feature: string): void;
        dofeature1A(evt: TMouseEvent): void;
        dofeature1B(evt: TMouseEvent): void;
        dofeature2A(evt: TMouseEvent): void;
        dofeature2B(evt: TMouseEvent): void;
        dofeature3A(evt: TMouseEvent): void;
        dofeature3B(evt: TMouseEvent): void;
    }
}
declare module "thermite/TImgTool322" {
    import { TImgTool } from "thermite/TImgTool";
    import { TObject } from "thermite/TObject";
    import { CEFEvent } from "events/CEFEvent";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    export class TImgTool322 extends TImgTool {
        [key: string]: any;
        feature1C: string;
        constructor();
        TImgTool322Initialize(): void;
        initialize(): void;
        private init4;
        onAddedToStage(evt: CEFEvent): void;
        initListeners(): void;
        deepStateCopy(src: TObject): void;
        readonly captureLOGString: string;
        captureLogState(obj?: any): Object;
        captureXMLState(): any;
        restoreXMLState(stateVal: any): void;
        enableTool(bFlag: boolean): void;
        dofeature1C(evt: TMouseEvent): void;
    }
}
declare module "thermite/TBakingImgTool" {
    import { TImgTool322 } from "thermite/TImgTool322";
    import { TButton } from "thermite/TButton";
    import { CEFEvent } from "events/CEFEvent";
    export class TBakingImgTool extends TImgTool322 {
        temp200: TButton;
        temp350: TButton;
        temp500: TButton;
        honey: TButton;
        sugar: TButton;
        oneEgg: TButton;
        threeEgg: TButton;
        constructor();
        TBakingImgToolInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TCarsController" {
    import { TController } from "thermite/TController";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import { CEFEvent } from "events/CEFEvent";
    export class TCarsController extends TController {
        constructor();
        TCarsControllerInitialize(): void;
        initialize(): void;
        private init4;
        onAddedToStage(evt: CEFEvent): void;
        topClick(evt: TMouseEvent): void;
        topClosed(evt: TMouseEvent): void;
        topOpen(evt: TMouseEvent): void;
        centerClick(evt: TMouseEvent): void;
        doorsTwo(evt: TMouseEvent): void;
        doorsFour(evt: TMouseEvent): void;
        bottomClick(evt: TMouseEvent): void;
        tiresLarge(evt: TMouseEvent): void;
        tiresSmall(evt: TMouseEvent): void;
        queryQuestionDone(): void;
    }
}
declare module "thermite/TCarsImgTool" {
    import { TImgTool } from "thermite/TImgTool";
    import { TButton } from "thermite/TButton";
    import { CEFEvent } from "events/CEFEvent";
    export class TCarsImgTool extends TImgTool {
        topClosed: TButton;
        topOpen: TButton;
        doorsTwo: TButton;
        doorsFour: TButton;
        tiresLarge: TButton;
        tiresSmall: TButton;
        constructor();
        TCarsImgToolInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TComboButton" {
    import { TImgButton } from "thermite/TImgButton";
    import { CEFEvent } from "events/CEFEvent";
    import DisplayObject = createjs.DisplayObject;
    import Text = createjs.Text;
    export class TComboButton extends TImgButton {
        SchangeLabel: DisplayObject;
        StopLabel: Text;
        SsubLabel: Text;
        constructor();
        TComboButtonInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TDrinkController" {
    import { TController } from "thermite/TController";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import { CEFEvent } from "events/CEFEvent";
    export class TDrinkController extends TController {
        constructor();
        TDrinkControllerInitialize(): void;
        initialize(): void;
        private init4;
        onAddedToStage(evt: CEFEvent): void;
        topClick(evt: TMouseEvent): void;
        clockNoon(evt: TMouseEvent): void;
        clockThree(evt: TMouseEvent): void;
        clockSix(evt: TMouseEvent): void;
        centerClick(evt: TMouseEvent): void;
        ageYoung(evt: TMouseEvent): void;
        ageOlder(evt: TMouseEvent): void;
        bottomClick(evt: TMouseEvent): void;
        drinkLemon(evt: TMouseEvent): void;
        drinkTea(evt: TMouseEvent): void;
        queryQuestionDone(): void;
    }
}
declare module "thermite/TDrinkImgTool" {
    import { TImgTool322 } from "thermite/TImgTool322";
    import { TButton } from "thermite/TButton";
    import { CEFEvent } from "events/CEFEvent";
    export class TDrinkImgTool extends TImgTool322 {
        clockNoon: TButton;
        clockThree: TButton;
        clockSix: TButton;
        ageYoung: TButton;
        ageOlder: TButton;
        drinkLemon: TButton;
        drinkTea: TButton;
        constructor();
        TDrinkImgToolInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/THouseController" {
    import { TController } from "thermite/TController";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import { CEFEvent } from "events/CEFEvent";
    export class THouseController extends TController {
        constructor();
        THouseControllerInitialize(): void;
        initialize(): void;
        private init4;
        onAddedToStage(evt: CEFEvent): void;
        topClick(evt: TMouseEvent): void;
        chimneyLeft(evt: TMouseEvent): void;
        chimneyRight(evt: TMouseEvent): void;
        centerClick(evt: TMouseEvent): void;
        pinkPaint(evt: TMouseEvent): void;
        bluePaint(evt: TMouseEvent): void;
        bottomClick(evt: TMouseEvent): void;
        singleDoor(evt: TMouseEvent): void;
        doubleDoor(evt: TMouseEvent): void;
        queryQuestionDone(): void;
    }
}
declare module "thermite/THouseImgTool" {
    import { TImgTool } from "thermite/TImgTool";
    import { TButton } from "thermite/TButton";
    import { CEFEvent } from "events/CEFEvent";
    export class THouseImgTool extends TImgTool {
        singleDoor: TButton;
        doubleDoor: TButton;
        bluePaint: TButton;
        pinkPaint: TButton;
        chimneyLeft: TButton;
        chimneyRight: TButton;
        constructor();
        THouseImgToolInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TImgCheckButton" {
    import { TImgButton } from "thermite/TImgButton";
    import { CEFEvent } from "events/CEFEvent";
    import { TObject } from "thermite/TObject";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import MovieClip = createjs.MovieClip;
    export class TImgCheckButton extends TImgButton {
        Schecked: MovieClip;
        STATE_CHECKED: string;
        constructor();
        TImgCheckButtonInitialize(): void;
        initialize(): void;
        private init5;
        protected fChecked: boolean;
        private _ftrChecked;
        private _ftrUnchecked;
        Destructor(): void;
        onAddedToStage(evt: CEFEvent): void;
        highLight(color: string): void;
        label: string;
        showLabel: boolean;
        captureDefState(TutScene: TObject): void;
        restoreDefState(TutScene: TObject): void;
        deepStateCopy(src: any): void;
        captureLogState(obj?: any): TObject;
        captureXMLState(): any;
        resetState(): void;
        gotoState(sState: string): void;
        doMouseClicked(evt: TMouseEvent): void;
        setCheck(bCheck: boolean): void;
        getChecked(): boolean;
        assertFeatures(): string;
        retractFeatures(): void;
        loadXML(xmlSrc: any): void;
        saveXML(): any;
        deSerializeObj(objData: any): void;
    }
}
declare module "thermite/TImgCircleControl" {
    import { TImgCheckButton } from "thermite/TImgCheckButton";
    import DisplayObject = createjs.DisplayObject;
    export class TImgCircleControl extends TImgCheckButton {
        SdisabledUp: DisplayObject;
        SdisabledDown: DisplayObject;
        constructor();
        TImgCircleControlInitialize(): void;
        initialize(): void;
        private init6;
        logClick(): void;
        resetState(): void;
        gotoState(sState: string): void;
        readonly captureLOGString: string;
        captureLOGState(): any;
        restoreXMLState(xmlState: any): void;
        compareXMLState(xmlState: any): boolean;
    }
}
declare module "thermite/TImgRadioButton" {
    import { TImgCheckButton } from "thermite/TImgCheckButton";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    export class TImgRadioButton extends TImgCheckButton {
        constructor();
        TImgRadioButtonInitialize(): void;
        initialize(): void;
        private init6;
        doMouseClicked(evt: TMouseEvent): void;
        setCheck(bCheck: boolean): void;
    }
}
declare module "thermite/TLabelControl" {
    import Text = createjs.Text;
    export class TLabelControl extends Text {
        Slabel: Text;
        constructor();
        setLabel(newLabel: string, colour?: number): void;
    }
}
declare module "thermite/TMemoryController" {
    import { TController } from "thermite/TController";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import { CEFEvent } from "events/CEFEvent";
    export class TMemoryController extends TController {
        constructor();
        TMemoryControllerInitialize(): void;
        initialize(): void;
        private init4;
        onAddedToStage(evt: CEFEvent): void;
        topClick(evt: TMouseEvent): void;
        lightBright(evt: TMouseEvent): void;
        lightDim(evt: TMouseEvent): void;
        centerClick(evt: TMouseEvent): void;
        cardIcons(evt: TMouseEvent): void;
        cardWords(evt: TMouseEvent): void;
        bottomClick(evt: TMouseEvent): void;
        minutesOne(evt: TMouseEvent): void;
        minutesFive(evt: TMouseEvent): void;
        queryQuestionDone(): void;
    }
}
declare module "thermite/TMemoryImgTool" {
    import { TImgTool } from "thermite/TImgTool";
    import { TButton } from "thermite/TButton";
    import { CEFEvent } from "events/CEFEvent";
    export class TMemoryImgTool extends TImgTool {
        lightBright: TButton;
        lightDim: TButton;
        cardIcons: TButton;
        cardWords: TButton;
        minutesOne: TButton;
        minutesFive: TButton;
        currentEvtTar: Function;
        constructor();
        TMemoryImgToolInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
        manageMasks(target: string): void;
    }
}
declare module "thermite/TNavCollection" {
    import { TObject } from "thermite/TObject";
    import { CEFEvent } from "events/CEFEvent";
    export class TNavCollection extends TObject {
        traceMode: boolean;
        constructor();
        TNavCollectionInitialize(): void;
        initialize(): void;
        private init3;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TPrompt" {
    import { TObject } from "thermite/TObject";
    import { CEFEvent } from "events/CEFEvent";
    export class TPrompt extends TObject {
        traceTPrompt: boolean;
        constructor();
        TPromptInitialize(): void;
        initialize(): void;
        private init3;
        onAddedToStage(evt: CEFEvent): void;
        setObjMode(TutScene: any, sMode: string): void;
        dumpSceneObjs(TutScene: any): void;
    }
}
declare module "thermite/TNextPrompt" {
    import { TPrompt } from "thermite/TPrompt";
    export class TNextPrompt extends TPrompt {
        constructor();
    }
}
declare module "thermite/TP2Scene" {
    import { TScene } from "thermite/TScene";
    import { TSelectEvent } from "thermite/events/TSelectEvent";
    export class TP2Scene extends TScene {
        traceTP2: boolean;
        selOneA: string;
        selOneB: string;
        selOneC: string;
        selTwoA: string;
        selTwoB: string;
        selThreeA: string;
        selThreeB: string;
        imgTool1: string;
        imgTool2: string;
        tabController1: string;
        tabController2: string;
        fCompleteA: boolean;
        fCompleteB: boolean;
        private imgToolA;
        private imgToolB;
        private tabtoolA;
        private tabtoolB;
        private tabDoneA;
        private tabDoneB;
        private isPreconfigured;
        protected sType: string;
        cvsEncoding: Array<string>;
        constructor();
        TP2SceneInitialize(): void;
        initialize(): void;
        private init5;
        onCreate(): void;
        Destructor(): void;
        wireControls(): void;
        questionFinishedA(evt: Event): void;
        questionFinishedB(evt: Event): void;
        encodeExptString(TVTEXT: string, TV: string, NTV1: string, NTV2: string): string;
        encodeExptState(TVTEXT: string, TV: string, NTV1: string, NTV2: string): any;
        doImageMapA(evt: TSelectEvent): void;
        doTabMapA(evt: TSelectEvent): void;
        doImageMapB(evt: TSelectEvent): void;
        doTabMapB(evt: TSelectEvent): void;
    }
}
declare module "thermite/TPanelDark" {
    import { TButton } from "thermite/TButton";
    export class TPanelDark extends TButton {
        constructor();
    }
}
declare module "thermite/TPanelLight" {
    import { TButton } from "thermite/TButton";
    export class TPanelLight extends TButton {
        constructor();
    }
}
declare module "thermite/TRocketController" {
    import { TController } from "thermite/TController";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import { CEFEvent } from "events/CEFEvent";
    export class TRocketController extends TController {
        constructor();
        TRocketControllerInitialize(): void;
        initialize(): void;
        private init4;
        onAddedToStage(evt: CEFEvent): void;
        topClick(evt: TMouseEvent): void;
        curvedBody(evt: TMouseEvent): void;
        straightBody(evt: TMouseEvent): void;
        centerClick(evt: TMouseEvent): void;
        oneWindow(evt: TMouseEvent): void;
        fourWindow(evt: TMouseEvent): void;
        bottomClick(evt: TMouseEvent): void;
        downEngines(evt: TMouseEvent): void;
        tiltEngines(evt: TMouseEvent): void;
        queryQuestionDone(): void;
    }
}
declare module "thermite/TRocketImgTool" {
    import { TImgTool } from "thermite/TImgTool";
    import { TButton } from "thermite/TButton";
    import { CEFEvent } from "events/CEFEvent";
    export class TRocketImgTool extends TImgTool {
        curvedBody: TButton;
        straightBody: TButton;
        oneWindow: TButton;
        fourWindow: TButton;
        downEngines: TButton;
        tiltEngines: TButton;
        constructor();
        TRocketImgToolInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TSelector" {
    import { TObject } from "thermite/TObject";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import { CEFEvent } from "events/CEFEvent";
    export class TSelector extends TObject {
        constructor();
        TSelectorInitialize(): void;
        initialize(): void;
        private init3;
        onAddedToStage(evt: CEFEvent): void;
        setAutomation(bFlag: boolean): void;
        doMouseClick(evt: TMouseEvent): void;
        doMouseDown(evt: TMouseEvent): void;
        doMouseUp(evt: TMouseEvent): void;
        doMouseOver(evt: TMouseEvent): void;
        doMouseOut(evt: TMouseEvent): void;
    }
}
declare module "thermite/TStudyController" {
    import { TController } from "thermite/TController";
    import { TMouseEvent } from "thermite/events/TMouseEvent";
    import { CEFEvent } from "events/CEFEvent";
    export class TStudyController extends TController {
        constructor();
        TStudyControllerInitialize(): void;
        initialize(): void;
        private init4;
        onAddedToStage(evt: CEFEvent): void;
        topClick(evt: TMouseEvent): void;
        studyAlone(evt: TMouseEvent): void;
        studyFriend(evt: TMouseEvent): void;
        centerClick(evt: TMouseEvent): void;
        atHome(evt: TMouseEvent): void;
        atLibrary(evt: TMouseEvent): void;
        bottomClick(evt: TMouseEvent): void;
        drinkWater(evt: TMouseEvent): void;
        drinkSoda(evt: TMouseEvent): void;
        queryQuestionDone(): void;
    }
}
declare module "thermite/TStudyImgTool" {
    import { TImgTool } from "thermite/TImgTool";
    import { TButton } from "thermite/TButton";
    import { CEFEvent } from "events/CEFEvent";
    export class TStudyImgTool extends TImgTool {
        studyAlone: TButton;
        studyFriend: TButton;
        atHome: TButton;
        atLibrary: TButton;
        drinkWater: TButton;
        drinkSoda: TButton;
        constructor();
        TStudyImgToolInitialize(): void;
        initialize(): void;
        private init5;
        onAddedToStage(evt: CEFEvent): void;
    }
}
declare module "thermite/TTip1" {
    import { TScene } from "thermite/TScene";
    export class TTip1 extends TScene {
        constructor();
    }
}
