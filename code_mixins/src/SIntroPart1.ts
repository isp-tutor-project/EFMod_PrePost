/// <reference path="../../../dist/TutorEngineOne.d.ts" />

namespace EFTut_Suppl.EFMod_PrePost {

    export class SIntroPart1 {
    
        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;

        
        //***********************************************
        // Tutor graph methods
        //
        
        public $preCreateScene() {

            // By default disable all Navigation - Let scenes decide
            // 
            this.setNavMode(CONST.NAVNEXT, CONST.NAVSCENE);
        }

        public $onCreateScene() { 
            
            this.setSceneValue("complete", false);      

            this.selOneA   = "clockNoon";
            this.selOneB   = "clockThree";
            this.selOneC   = "clockSix";
            this.selTwoA   = "ageYoung";
            this.selTwoB   = "ageOlder";
            this.selThreeA = "drinkLemon";
            this.selThreeB = "drinkTea";
            
            this.i1p2imgTool.on(CONST.WOZIMGSELECT,  this.$doImageMap, this);			
            this.i1p2tabController.on(CONST.WOZTABSELECT,  this.$doTabMap, this);			
            
            this.i1p2tabController.on("Done",  this.$questionFinished, this);
    	}


        public $onEnterScene() {
        }
        
        public $preEnterScene() {
        }

        public $preExitScene() {
        }

        public $demoInitScene() {
        }

        public $logScene() {
        }

        public $rewindScene() {
        }

        public $resolveTemplate(templID:string) { 
        
            return this["$"+templID];
        }


        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) {            

            switch(nodeId) {
            }

        }

        public $nodePreExit(nodeId:string) {
        }

        public $nodeAction(actionId:string) : void {
            
            switch(actionId) {
            }
        }
        
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            switch(constrainId) {
            }

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {

            switch(trackID) {

                case "track1":
                    switch(cueID) {
                        
                        case "$start":
                            break;

                        case "$end":
                            break;
                    }
                    break;
            }
        }

       //***********************************************
        // Scene State methods
        //

        public $queryFinished() : boolean {             

            let result:boolean = this.getSceneValue("complete"); 

            return  result; 
        }


        public $onAction(target:string) {         
            
            switch(target) {
            }
        }


        public $onSelect(target:string) {            

            switch(target) {
            }
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }        



        // image map clicked -- spawn a this.i1p2tabController Tab
        //
        public $doImageMap(evt:any)
        {			
            switch(evt.selection)
            {
                case "chimneyLeft":
                case "chimneyRight":
                        this.i1p2tabController.topClick(new TMouseEvent("", CONST.BUTTON_CLICK));
                        break;
                        
                case "pinkPaint":
                case "bluePaint":
                        this.i1p2tabController.centerClick(new TMouseEvent("", CONST.BUTTON_CLICK));
                        break;
                        
                case "singleDoor":
                case "doubleDoor":
                        this.i1p2tabController.bottomClick(new TMouseEvent("", CONST.BUTTON_CLICK));
                        break;
                        
            }
        }

        public $doTabMap(evt:any)
        {            
            // Turn off both in the set selected
            //
            switch(evt.selection)
            {
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
            
            //  Turn on the one selected from the set
            //
            this.i1p2imgTool[evt.selection].visible = true;			
        }

    }
}

