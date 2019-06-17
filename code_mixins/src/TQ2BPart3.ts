

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ2BPart3 {

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

            this.imgTool1		= "imgToolCq2";
            this.imgTool2		= "imgToolDq2";
            this.tabController1	= "tabControllerCq2";
            this.tabController2	= "tabControllerDq2";    
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {

		    this.selOneA   = "temp200";
		    this.selOneB   = "temp350";
		    this.selOneC   = "temp500";
		    this.selTwoA   = "honey";
		    this.selTwoB   = "sugar";
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

        public $preExitScene() {

            this.tabControllerCq2.useChanged = false;
            this.tabControllerDq2.useChanged = false;

            this.setModuleValue('q2CVS', this.encodeExptString("number of eggs", "sel3", "sel1", "sel2"));
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

            result = !this.tabControllerCq2.compareXMLState(this.getModuleValue("Q2expState1"));
            result = !this.tabControllerDq2.compareXMLState(this.getModuleValue("Q2expState2")) || result;
            
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