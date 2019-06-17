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

import { TImgTool } from "./TImgTool";

import { TRoot }		from "thermite/TRoot";
import { TObject }		from "thermite/TObject";
import { TButton }		from "thermite/TButton";
import { TScene }		from "thermite/TScene";
import { CUtil } 		from "util/CUtil";

import MovieClip     		  = createjs.MovieClip;
import Timeline     		  = createjs.Timeline;
import DisplayObject 		  = createjs.DisplayObject;
import DisplayObjectContainer = createjs.Container;
import { CEFEvent } from "events/CEFEvent";


export class TRocketImgTool extends TImgTool
{
	//************ Stage Symbols
	
	public curvedBody:TButton;
	public straightBody:TButton;
	public oneWindow:TButton;
	public fourWindow:TButton;
	public downEngines:TButton;
	public tiltEngines:TButton;
	
	// non-interactive elements
	
	
	//************ Stage Symbols				
	
	    
    constructor()
	{
		super();
		this.init5();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TRocketImgToolInitialize() {

		this.TImgToolInitialize.call(this);
		this.init5();
	}

	public initialize() {

		this.TImgToolInitialize.call(this);		
		this.init5();
	}

	private init5() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TRocketImgTool:Constructor");

    
		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public onAddedToStage(evt:CEFEvent) {

		console.log("TRocketImgTool On Stage");

		this.feature1A = "curvedBody";
		this.feature1B = "straightBody";
		this.feature2A = "oneWindow";
		this.feature2B = "fourWindow";
		this.feature3A = "downEngines";
		this.feature3B = "tiltEngines";
		
		// now that everything is named - wire it up
		//
		this.initListeners();			

        super.onAddedToStage(evt);
	}
    
}