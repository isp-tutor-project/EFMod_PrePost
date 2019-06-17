

namespace EFTut_Suppl.EFMod_PrePost {

    export class EndScene {

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
            this.setNavMode(CONST.NAVBACK, CONST.NAVTUTOR);
        }

        public $onCreateScene() { 
            
            this.setSceneValue("complete", true);      
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {

			var _assessCorrect:number = 0;
			var _designCorrect:number = 0;
			
			if((this.getModuleValue('q2Good') == "unchecked") && (this.getModuleValue('q2Bad')  == "checked"))
			{
				_assessCorrect++;
			}
			
			//--
			
			if((this.getModuleValue('q4Good') == "unchecked") && (this.getModuleValue('q4Bad')  == "checked"))
			{
				_assessCorrect++;
			}
			
			//--
			
			if((this.getModuleValue('q6Good') == "unchecked") && (this.getModuleValue('q6Bad')  == "checked"))
			{
				_assessCorrect++;
			}

			
			if(this.getModuleValue('q1CVS') == "CVS") 
			{
				_designCorrect++;
			}
			
			//--
			
			if(this.getModuleValue('q2CVS') == "CVS") 
			{
				_designCorrect++;
			}
			
			//--
			
			if(this.getModuleValue('q3CVS') == "CVS") 
			{
				_designCorrect++;
			}
			
			//--
			
			if(this.getModuleValue('q4CVS') == "CVS") 
			{
				_designCorrect++;
			}
			
			//--
			
			if(this.getModuleValue('q5CVS') == "CVS") 
			{
				_designCorrect++;
			}
			
			//--
			
			if(this.getModuleValue('q6CVS') == "CVS") 
			{
				_designCorrect++;
			}
			
			// Maintain global for summative assessment
			
			this.setModuleValue('Correct_Designs'    , _designCorrect);
			this.setModuleValue('Correct_Assessments', _assessCorrect);
        }

        public $preExitScene() {
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
                case "SdoneButton":
                this.nextTrack("$onAction:" + target);
                break;
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