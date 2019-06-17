﻿

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ1BPart2 {

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

            this.imgTool1		= "imgToolAq1";
            this.imgTool2		= "imgToolBq1";
            this.tabController1	= "tabControllerAq1";
            this.tabController2	= "tabControllerBq1";    

            this.q1TextControl1.bPersist = true;
            
            this.wireControls();
        }

        public $onEnterScene() {

            // Init the text control
			//
			this.q1TextControl1.setFocus();            
        }
        
        public $preEnterScene() {

		    this.selOneA   = "temp200";
		    this.selOneB   = "temp350";
		    this.selOneC   = "temp500";
		    this.selTwoA   = "honey";
		    this.selTwoB   = "sugar";
		    this.selThreeA = "oneEgg";
		    this.selThreeB = "threeEgg";

            this.tabControllerAq1.enableTool(false);
            this.tabControllerBq1.enableTool(false);

            this.imgToolAq1.enableTool(false);
            this.imgToolBq1.enableTool(false);
        }

        public $preExitScene() {

            this.setModuleValue('q1Response', this.q1TextControl1.captureLogState());
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
                            this.setSceneValue("complete", true);   
                            break;
                    }
                    break;
            }
        }

       //***********************************************
        // Scene State methods
        //

        public $queryFinished() : boolean {             

            let result:boolean = false;

            if(this.q1TextControl1.hasMinWords(2,9)) result = true;
        
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
    }
}