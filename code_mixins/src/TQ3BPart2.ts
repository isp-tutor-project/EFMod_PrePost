

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ3BPart2 {

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

            this.imgTool1		= "imgToolAq3";
            this.imgTool2		= "imgToolBq3";
            this.tabController1	= "tabControllerAq3";
            this.tabController2	= "tabControllerBq3";    

            this.q3TextControl1.bPersist = true;
        }

        public $onEnterScene() {

            // Init the text control
			//
            this.q3TextControl1.setFocus();            
        }
        
        public $preEnterScene() {

		    this.selOneA   = "topClosed";
		    this.selOneB   = "topOpen";
		    this.selTwoA   = "doorsTwo";
		    this.selTwoB   = "doorsFour";
		    this.selThreeA = "tiresLarge";
		    this.selThreeB = "tiresSmall";
	 	 
            this.tabControllerAq3.enableTool(false);
            this.tabControllerBq3.enableTool(false);

            this.imgToolAq3.enableTool(false);
            this.imgToolBq3.enableTool(false);
        }

        public $preExitScene() {

            this.setModuleValue('q3Response', this.q3TextControl1.captureLogState());
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

            if(this.q3TextControl1.hasMinWords(2,9)) result = true;
        
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