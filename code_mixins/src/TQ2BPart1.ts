

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ2BPart1 {

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
            
            this.imgTool1		= "imgToolCq2";
            this.imgTool2		= "imgToolDq2";
            this.tabController1	= "tabControllerCq2";
            this.tabController2	= "tabControllerDq2";    

            this.imgToolCq2.bPersist        = true;			
            this.imgToolDq2.bPersist        = true;			            
            this.tabControllerCq2.bPersist  = true;
            this.tabControllerDq2.bPersist  = true;			
            this.q2Check1.bPersist          = true;
            this.q2Check2.bPersist          = true;
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
            
			// Disable the controllers
			//
            this.tabControllerCq2.enableTool(false);
            this.tabControllerDq2.enableTool(false);
            this.imgToolCq2.enableTool(false);
            this.imgToolDq2.enableTool(false);

            if(!this.getSceneValue("initialized"))
            {
                this.imgToolCq2.initState();			
                this.imgToolDq2.initState();			
                this.tabControllerCq2.initState();
                this.tabControllerDq2.initState();				      
    
                // Initialize the Experimental setups
                //
                this.imgToolCq2["temp350"].visible = true;
                this.imgToolCq2["sugar"].visible = true;
                this.imgToolCq2["threeEgg"].visible = true;
                
                this.imgToolDq2["temp350"].visible = true;
                this.imgToolDq2["honey"].visible = true;
                this.imgToolDq2["threeEgg"].visible = true;
                
                // Initialize the Controller Buttons
                //
                this.tabControllerCq2.sel1                            = "Sitem4";						
                this.tabControllerCq2.StopButton.SsubLabel.text	      = "350 Degrees";
                this.tabControllerCq2.StopButton.SsubLabel.visible	  = true;
                
                this.tabControllerCq2.sel2                            = "Sitem2";						
                this.tabControllerCq2.ScenterButton.SsubLabel.text    = "Sugar";
                this.tabControllerCq2.ScenterButton.SsubLabel.visible = true;
                
                this.tabControllerCq2.sel3                            = "Sitem2";						
                this.tabControllerCq2.SbottomButton.SsubLabel.text    = "Three"; 
                this.tabControllerCq2.SbottomButton.SsubLabel.visible = true;			
                
                this.tabControllerDq2.sel1                            = "Sitem4";						
                this.tabControllerDq2.StopButton.SsubLabel.text	      = "350 Degrees";
                this.tabControllerDq2.StopButton.SsubLabel.visible	  = true;
                
                this.tabControllerDq2.sel2                            = "Sitem1";						
                this.tabControllerDq2.ScenterButton.SsubLabel.text    = "Honey";
                this.tabControllerDq2.ScenterButton.SsubLabel.visible = true;
                
                this.tabControllerDq2.sel3                            = "Sitem2";						
                this.tabControllerDq2.SbottomButton.SsubLabel.text    = "Three"; 
                this.tabControllerDq2.SbottomButton.SsubLabel.visible = true;			
                
                this.setModuleValue("Q2expState1", this.tabControllerCq2.captureXMLState());
                this.setModuleValue("Q2expState2", this.tabControllerDq2.captureXMLState());

                this.setSceneValue("initialized", true);
                this.setSceneValue("complete", false);      
            }

            this.q2Check2.label = "Bad Way";

            this.wireControls();
        }

        public $preExitScene() {
            
            // Maintain global for summative assessment
            
            this.setModuleValue('q2Good', this.q2Check1.captureLOGString);
            this.setModuleValue('q2Bad' , this.q2Check2.captureLOGString);
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

            if(this.q2Check1.getChecked() || this.q2Check2.getChecked())
                                                             result = true;
        
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