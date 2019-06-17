

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ6BPart1 {

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
            
            this.imgTool1		= "imgToolCq6";
            this.imgTool2		= "imgToolDq6";
            this.tabController1	= "tabControllerCq6";
            this.tabController2	= "tabControllerDq6";    

            this.imgToolCq6.bPersist        = true;			
            this.imgToolDq6.bPersist        = true;			            
            this.tabControllerCq6.bPersist  = true;
            this.tabControllerDq6.bPersist  = true;			
            this.q6Check1.bPersist          = true;
            this.q6Check2.bPersist          = true;
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {

		    this.selOneA   = "lightBright";
		    this.selOneB   = "lightDim";
		    this.selTwoA   = "cardIcons";
		    this.selTwoB   = "cardWords";
		    this.selThreeA = "minutesOne";
		    this.selThreeB = "minutesFive";
	 	 
			// Disable the controllers
			//
            this.tabControllerCq6.enableTool(false);
            this.tabControllerDq6.enableTool(false);
            this.imgToolCq6.enableTool(false);
            this.imgToolDq6.enableTool(false);

            if(!this.getSceneValue("initialized"))
            {
                this.imgToolCq6.initState();			
                this.imgToolDq6.initState();			
                this.tabControllerCq6.initState();
                this.tabControllerDq6.initState();				      
    
                // Initialize the Experimental setups
                //
                this.imgToolCq6["lightBright"].visible = true;
                this.imgToolCq6["cardIcons"].visible = true;
                this.imgToolCq6["minutesFive"].visible = true;
                
                this.imgToolDq6["lightBright"].visible = true;
                this.imgToolDq6["cardIcons"].visible = true;
                this.imgToolDq6["minutesFive"].visible = true;
                
                this.imgToolCq6.manageMasks("lightBright");
                this.imgToolCq6.manageMasks("cardIcons");
                this.imgToolCq6.manageMasks("minutesFive");
                
                this.imgToolDq6.manageMasks("lightBright");
                this.imgToolDq6.manageMasks("cardIcons");
                this.imgToolDq6.manageMasks("minutesFive");			
                
                
                // Initialize the Controller Buttons
                //
                this.tabControllerCq6.sel1                            = "Sitem1";						
                this.tabControllerCq6.StopButton.SsubLabel.text	      = "Bright";
                this.tabControllerCq6.StopButton.SsubLabel.visible	  = true;
                
                this.tabControllerCq6.sel2                            = "Sitem1";						
                this.tabControllerCq6.ScenterButton.SsubLabel.text    = "10 Pictures";
                this.tabControllerCq6.ScenterButton.SsubLabel.visible = true;
                
                this.tabControllerCq6.sel3                            = "Sitem2";						
                this.tabControllerCq6.SbottomButton.SsubLabel.text    = "45 Seconds"; 
                this.tabControllerCq6.SbottomButton.SsubLabel.visible = true;			
                
                this.tabControllerDq6.sel1                            = "Sitem1";						
                this.tabControllerDq6.StopButton.SsubLabel.text	      = "Bright";
                this.tabControllerDq6.StopButton.SsubLabel.visible	  = true;
                
                this.tabControllerDq6.sel2                            = "Sitem1";						
                this.tabControllerDq6.ScenterButton.SsubLabel.text    = "10 Pictures";
                this.tabControllerDq6.ScenterButton.SsubLabel.visible = true;
                
                this.tabControllerDq6.sel3                            = "Sitem2";						
                this.tabControllerDq6.SbottomButton.SsubLabel.text    = "45 Seconds"; 
                this.tabControllerDq6.SbottomButton.SsubLabel.visible = true;			
                
                this.setModuleValue("Q6expState1", this.tabControllerCq6.captureXMLState());
                this.setModuleValue("Q6expState2", this.tabControllerDq6.captureXMLState());

                this.setSceneValue("initialized", true);
                this.setSceneValue("complete", false);      
            }

            this.q6Check2.label = "Bad Way";

            this.wireControls();
        }

        public $preExitScene() {
            
            // Maintain global for summative assessment
            
            this.setModuleValue('q6Good', this.q6Check1.captureLOGString);
            this.setModuleValue('q6Bad' , this.q6Check2.captureLOGString);
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

            if(this.q6Check1.getChecked() || this.q6Check2.getChecked())
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