
namespace EFTut_Suppl.EFMod_PrePost {
    
    export class $Common {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
    
        // Place any common code here 

        // public $var1:string = "test1";
        // public $var2:string = "test2";
        // public $var3:string = "test3";
        // public $var4:string = "";

        // Place empty defaults here - these just avoid unnecessary exceptions for missing methods.

        //***********************************************
        // Tutor graph methods
        //
        
        public $oncreate() { /* empty */  }

        public $onenter() { /* empty */  }
        
        public $preenter() { /* empty */  }

        public $preexit() { /* empty */  }

        public $demoinit() { /* empty */  }

        public $logging() { /* empty */  }

        public $rewind() { /* empty */  }


        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) { /* empty */  }

        public $nodePreExit(nodeId:string) { /* empty */  }

        public $nodeAction(actionId:string) : void { /* empty */  }
                
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            /* empty */ 

            return result;
        }

        public $cuePoints(script:string, id:string) { /* empty */  }

        public $timedEvents(script:string, id:string) { /* empty */  }


        
        //***********************************************
        // Scene State methods
        //

        public $onAction(target:string, evt:string) {}

        public $queryFinished() : boolean {             

            let stateComplete:boolean = false;
            return  stateComplete; 
        }

        public $canGoBack() : boolean {             

            let stateComplete:boolean = true;
            return  stateComplete; 
        }

		public $updateNav() : void {

			// Update the Navigation
            //
            if(!this.$queryFinished())
                this.enableNext(false);		
            else	
                this.enableNext(true);		

            if(!this.$canGoBack())
                this.enableBack(false);		
            else	
                this.enableBack(true);		

		}

    }   
}