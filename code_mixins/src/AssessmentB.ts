

namespace EFTut_Suppl.EFMod_PrePost {

    export class AssessmentB {

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
            this.setNavMode(CONST.NAVNEXT, CONST.NAVTUTOR);
        }

        public $onCreateScene() { 
            
            this.setSceneValue("complete", true);      
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {

			var nCorrect:number = 0;

			if(this.getModuleValue('q1CVS') == "CVS") 
			{
				nCorrect++;
				this.Sassess.Sstar1.Sright.visible = true;
			}
			else this.Sassess.Sstar1.Swrong.visible = true;
			
//--
			
			if((this.getModuleValue('q2Good') == "unchecked") && (this.getModuleValue('q2Bad')  == "checked"))
			{
				nCorrect++;
				this.Sassess.Sstar2.Sright.visible = true;
			}
			else this.Sassess.Sstar2.Swrong.visible = true;

			
			if(this.getModuleValue('q2CVS') == "CVS") 
			{
				nCorrect++;
				this.Sassess.Sstar3.Sright.visible = true;
			}
			else this.Sassess.Sstar3.Swrong.visible = true;
			
//--
						
			if(this.getModuleValue('q3CVS') == "CVS") 
			{
				nCorrect++;
				this.Sassess.Sstar4.Sright.visible = true;
			}
			else this.Sassess.Sstar4.Swrong.visible = true;
			
//--
			
			if((this.getModuleValue('q4Good') == "unchecked") && (this.getModuleValue('q4Bad')  == "checked"))
			{
				nCorrect++;
				this.Sassess.Sstar5.Sright.visible = true;
			}
			else this.Sassess.Sstar5.Swrong.visible = true;
			
			if(this.getModuleValue('q4CVS') == "CVS") 
			{
				nCorrect++;
				this.Sassess.Sstar6.Sright.visible = true;
			}
			else this.Sassess.Sstar6.Swrong.visible = true;
			
//--
			
			if(this.getModuleValue('q5CVS') == "CVS") 
			{
				nCorrect++;
				this.Sassess.Sstar7.Sright.visible = true;
			}
			else this.Sassess.Sstar7.Swrong.visible = true;
			
//--
			
			if((this.getModuleValue('q6Good') == "unchecked") && (this.getModuleValue('q6Bad')  == "checked"))
			{
				nCorrect++;
				this.Sassess.Sstar8.Sright.visible = true;
			}
			else this.Sassess.Sstar8.Swrong.visible = true;

			if(this.getModuleValue('q6CVS') == "CVS") 
			{
				nCorrect++;
				this.Sassess.Sstar9.Sright.visible = true;
			}
			else this.Sassess.Sstar9.Swrong.visible = true;
			
//--
			
			this.Sassess.Sresult.text = nCorrect + " / 9"; 			

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