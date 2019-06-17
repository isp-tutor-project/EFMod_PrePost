

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ4APart3 {

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
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {

		    this.selOneA   = "curvedBody";
		    this.selOneB   = "straightBody";
		    this.selTwoA   = "oneWindow";
		    this.selTwoB   = "fourWindow";
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

        public $preExitScene() {

            this.tabControllerCq4.useChanged = false;
            this.tabControllerDq4.useChanged = false;

            this.setModuleValue('q4CVS', this.encodeExptString("number of windows", "sel2", "sel1", "sel3"));				
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

            result = !this.tabControllerCq4.compareXMLState(this.getModuleValue("Q4expState1"));
            result = !this.tabControllerDq4.compareXMLState(this.getModuleValue("Q4expState2")) || result;
            
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