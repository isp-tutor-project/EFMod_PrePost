//*********************************************************************************
//
//  Copyright(c) 2008,2018 Kevin Willows. All Rights Reserved
//
//	License: Proprietary
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
//
//*********************************************************************************

/// <reference path="../../../../dist/TutorEngineOne.d.ts" />

//** Imports

import { TObject }     	from "thermite/TObject";
import { TButton }     	from "thermite/TButton";

import { CEFEvent } 	from "events/CEFEvent";
import { CUtil } 		from "util/CUtil";

import MovieClip     		  = createjs.MovieClip;
import Text          		  = createjs.Text;
import Timeline     		  = createjs.Timeline;



export class TImgButton extends TButton
{
	//************ Stage Symbols
    
	public Sup:MovieClip;
	public Sover:MovieClip;
	public Sdown:MovieClip;
	public Sdisabled:MovieClip;
	public Sfocused:MovieClip;
	
	//************ Stage Symbols
    
    public STATE_FOCUS:string;
	

	constructor()
	{
		super();
		this.init4();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TImgButtonInitialize() {

		this.TButtonInitialize.call(this);
		this.init4();
	}

	public initialize() {

		this.TButtonInitialize.call(this);		
		this.init4();
	}

	private init4() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TImgButton:Constructor");

		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public Destructor() : void
	{
		super.Destructor();
	}

	public onAddedToStage(evt:CEFEvent) {

		console.log("ImgButton On Stage");

		this.mouseChildren = false;
		
		// Remove the AnimateCC created button timeline
		//
		this.timeline = new Timeline(null,null,null);

        this.STATE_UP       = "Sup";
        this.STATE_OVER     = "Sover";
        this.STATE_DOWN     = "Sdown";
        this.STATE_DISABLED = "Sdisabled";
        this.STATE_FOCUS    = "Sfocus";

        this.curState = this.STATE_UP;

		this.addChild(this[this.STATE_UP]);
		this.addChild(this[this.STATE_OVER]);
		this.addChild(this[this.STATE_DOWN]);
		this.addChild(this[this.STATE_DISABLED]);
		this.addChild(this[this.STATE_FOCUS]);

        if(this.Slabel)
    		this.addChild(this.Slabel);

        this.resetState();
        
        this[this.STATE_UP].visible = true;
	}


	// Walk the WOZ Objects to capture their default state
	//
	public captureDefState(thisObj:TObject ) : void 
	{
        super.captureDefState(thisObj );
        
        thisObj.defState = {
            "curState":this.curState,
            "fPressed":this.fPressed,
            "fEnabled":this.fEnabled,
            "fOver"   :this.fOver    
        }

	}
	
	
	// Walk the WOZ Objects to restore their default state
	//
	public restoreDefState(thisObj:TObject ) : void 
	{
		if(this.traceMode) CUtil.trace("Button Reseting: " + this.name);
		
		this.curState = thisObj.defState.curState;
		this.fPressed = thisObj.defState.fPressed;
		this.fEnabled = thisObj.defState.fEnabled;
		this.fOver    = thisObj.defState.fOver;   
					
		this.enable(this.fEnabled);
		
		super.restoreDefState(thisObj );
	}
	

//*************** Logging state management
	
	public captureLogState(obj:any = null) : TObject
	{
		obj = super.captureLogState(obj);
		
		obj['target']  = 'button'; 
		obj['name']	   = this.name; 
		obj['state']   = this.curState; 
		obj['pressed'] = this.fPressed.toString(); 
		obj['enabled'] = this.fEnabled.toString(); 
		obj['over']    = this.fOver.toString();
		
		return obj;											   
	}				
	
	public capturestringState() : string
	{		
		let stringVal:string = "<button this.name={this.name} state={curState} pressed={fPressed.toString()} enabled={fEnabled.toString()} over={fOver.toString()}/>";
		
		return stringVal;
	}		

//*************** Logging state management

	public resetState() : void 
	{											
		this[this.STATE_UP].visible 	  = false;
		this[this.STATE_OVER].visible 	  = false;
		this[this.STATE_DOWN].visible 	  = false;		
		this[this.STATE_DISABLED].visible = false;		
		this[this.STATE_FOCUS].visible    = false;		
	}



	
//*************** Serialization


//*************** Serialization
	
}
