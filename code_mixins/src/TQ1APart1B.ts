

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ1APart1B {

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
            
            this.imgTool1		= "imgToolAq1";
            this.imgTool2		= "imgToolBq1";
            this.tabController1	= "tabControllerAq1";
            this.tabController2	= "tabControllerBq1";    
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {

            this.selOneA   = "clockNoon";
            this.selOneB   = "clockThree";
            this.selOneC   = "clockSix";
            this.selTwoA   = "ageYoung";
            this.selTwoB   = "ageOlder";
            this.selThreeA = "drinkLemon";
            this.selThreeB = "drinkTea";
            
            if(!this.getSceneValue("initialized"))
            {
                this.imgToolAq1.bPersist = true;			
                this.imgToolBq1.bPersist = true;			
                this.tabControllerAq1.bPersist = true;
                this.tabControllerBq1.bPersist = true;				      
    
                this.imgToolAq1.initState();			
                this.imgToolBq1.initState();			
                this.tabControllerAq1.initState();
                this.tabControllerBq1.initState();		
                
                this.setSceneValue("initialized", true)
                this.setSceneValue("complete", false);      
            }
            this.tabControllerAq1.enableTool(true);
            this.tabControllerBq1.enableTool(true);

            this.imgToolAq1.enableTool(true);
            this.imgToolBq1.enableTool(true);

            this.wireControls();
        }

        public $preExitScene() {

            this.setModuleValue('q1CVS', this.encodeExptString("time of day", "sel1", "sel2", "sel3"));
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