

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ5APart1B {

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
            
            this.imgTool1		= "imgToolAq5";
            this.imgTool2		= "imgToolBq5";
            this.tabController1	= "tabControllerAq5";
            this.tabController2	= "tabControllerBq5";    
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
	 	 
            if(!this.getSceneValue("initialized"))
            {
                this.imgToolAq5.bPersist = true;			
                this.imgToolBq5.bPersist = true;			
                this.tabControllerAq5.bPersist = true;
                this.tabControllerBq5.bPersist = true;				      
    
                this.imgToolAq5.initState();			
                this.imgToolBq5.initState();			
                this.tabControllerAq5.initState();
                this.tabControllerBq5.initState();		
                
                this.setSceneValue("initialized", true)
                this.setSceneValue("complete", false);      
            }
            this.tabControllerAq5.enableTool(true);
            this.tabControllerBq5.enableTool(true);

            this.imgToolAq5.enableTool(true);
            this.imgToolBq5.enableTool(true);

            this.wireControls();
        }

        public $preExitScene() {

            this.setModuleValue('q5CVS', this.encodeExptString("study where", "sel2", "sel1", "sel3"));	
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
    }
}