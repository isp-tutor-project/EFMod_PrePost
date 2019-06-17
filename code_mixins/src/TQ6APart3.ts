

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ6APart3 {

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

            this.imgTool1		= "imgToolCq6";
            this.imgTool2		= "imgToolDq6";
            this.tabController1	= "tabControllerCq6";
            this.tabController2	= "tabControllerDq6";    
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {

            this.selOneA   = "studyAlone";
		    this.selOneB   = "studyFriend";
		    this.selTwoA   = "atHome";
		    this.selTwoB   = "atLibrary";
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

        public $preExitScene() {

            this.tabControllerCq6.useChanged = false;
            this.tabControllerDq6.useChanged = false;

            this.setModuleValue('q6CVS', this.encodeExptString("who", "sel1", "sel2", "sel3"));			
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

            result = !this.tabControllerCq6.compareXMLState(this.getModuleValue("Q6expState1"));
            result = !this.tabControllerDq6.compareXMLState(this.getModuleValue("Q6expState2")) || result;
            
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