

namespace EFTut_Suppl.EFMod_PrePost {

    export class TQ4APart1 {

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
            
            this.imgTool1		= "imgToolCq4";
            this.imgTool2		= "imgToolDq4";
            this.tabController1	= "tabControllerCq4";
            this.tabController2	= "tabControllerDq4";    

            this.imgToolCq4.bPersist        = true;			
            this.imgToolDq4.bPersist        = true;			            
            this.tabControllerCq4.bPersist  = true;
            this.tabControllerDq4.bPersist  = true;			
            this.q4Check1.bPersist          = true;
            this.q4Check2.bPersist          = true;
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
	 	 
			// Disable the controllers
			//
            this.tabControllerCq4.enableTool(false);
            this.tabControllerDq4.enableTool(false);
            this.imgToolCq4.enableTool(false);
            this.imgToolDq4.enableTool(false);

            if(!this.getSceneValue("initialized"))
            {
                this.imgToolCq4.initState();			
                this.imgToolDq4.initState();			
                this.tabControllerCq4.initState();
                this.tabControllerDq4.initState();				      
    
                // Initialize the Experimental setups
                //
                this.imgToolCq4["straightBody"].visible = true;
                this.imgToolCq4["fourWindow"].visible = true;
                this.imgToolCq4["downEngines"].visible = true;
                
                this.imgToolDq4["curvedBody"].visible = true;
                this.imgToolDq4["oneWindow"].visible = true;
                this.imgToolDq4["tiltEngines"].visible = true;
                
                // Initialize the Controller Buttons
                //
                this.tabControllerCq4.sel1                            = "Sitem2";						
                this.tabControllerCq4.StopButton.SsubLabel.text	      = "Straight";
                this.tabControllerCq4.StopButton.SsubLabel.visible	  = true;
                
                this.tabControllerCq4.sel2                            = "Sitem2";						
                this.tabControllerCq4.ScenterButton.SsubLabel.text    = "Four";
                this.tabControllerCq4.ScenterButton.SsubLabel.visible = true;
                
                this.tabControllerCq4.sel3                            = "Sitem1";						
                this.tabControllerCq4.SbottomButton.SsubLabel.text    = "Down"; 
                this.tabControllerCq4.SbottomButton.SsubLabel.visible = true;			
                
                this.tabControllerDq4.sel1                            = "Sitem1";						
                this.tabControllerDq4.StopButton.SsubLabel.text	      = "Curved";
                this.tabControllerDq4.StopButton.SsubLabel.visible	  = true;
                
                this.tabControllerDq4.sel2                            = "Sitem1";						
                this.tabControllerDq4.ScenterButton.SsubLabel.text    = "One";
                this.tabControllerDq4.ScenterButton.SsubLabel.visible = true;
                
                this.tabControllerDq4.sel3                            = "Sitem2";						
                this.tabControllerDq4.SbottomButton.SsubLabel.text    = "Tilted"; 
                this.tabControllerDq4.SbottomButton.SsubLabel.visible = true;			
                
                this.setModuleValue("Q4expState1", this.tabControllerCq4.captureXMLState());
                this.setModuleValue("Q4expState2", this.tabControllerDq4.captureXMLState());

                this.setSceneValue("initialized", true);
                this.setSceneValue("complete", false);      
            }

            this.q4Check2.label = "Bad Way";

            this.wireControls();
        }

        public $preExitScene() {
            
            // Maintain global for summative assessment
            
            this.setModuleValue('q4Good', this.q4Check1.captureLOGString);
            this.setModuleValue('q4Bad' , this.q4Check2.captureLOGString);
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

            if(this.q4Check1.getChecked() || this.q4Check2.getChecked())
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