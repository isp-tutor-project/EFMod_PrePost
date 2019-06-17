

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ4BPart2 {

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
            this.setNavMode(CONST.NAVBOTH, CONST.NAVSCENE);
        }

        public $onCreateScene() { 
            
            this.setSceneValue("complete", false);      

            this.imgTool1		= "imgToolCq4";
            this.imgTool2		= "imgToolDq4";
            this.tabController1	= "tabControllerCq4";
            this.tabController2	= "tabControllerDq4";    

            this.q4TextControl1.bPersist = true;
        }

        public $onEnterScene() {

            // Init the text control
			//
            this.q4TextControl1.setFocus();            
        }
        
        public $preEnterScene() {

		    this.selOneA   = "topClosed";
		    this.selOneB   = "topOpen";
		    this.selTwoA   = "doorsTwo";
		    this.selTwoB   = "doorsFour";
		    this.selThreeA = "tiresLarge";
		    this.selThreeB = "tiresSmall";
	 	 
            this.tabControllerCq4.enableTool(false);
            this.tabControllerDq4.enableTool(false);

            this.imgToolCq4.enableTool(false);
            this.imgToolDq4.enableTool(false);

            this.wireControls();
        }

        public $preExitScene() {

            this.setModuleValue('q4Response', this.q4TextControl1.captureLogState());
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

            if(this.q4TextControl1.hasMinWords(2,9)) result = true;
        
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