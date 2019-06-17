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



export class THouseImgTool extends TImgTool
{
	//************ Stage Symbols
	
	public singleDoor:TButton;
	public doubleDoor:TButton;
	public bluePaint:TButton;
	public pinkPaint:TButton;
	public chimneyLeft:TButton;
	public chimneyRight:TButton;

	// non-interactive elements
	
	
	//************ Stage Symbols				
	
	    
    constructor()
	{
		super();
		this.init5();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public THouseImgToolInitialize() {

		this.TImgToolInitialize.call(this);
		this.init5();
	}

	public initialize() {

		this.TImgToolInitialize.call(this);		
		this.init5();
	}

	private init5() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("THouseImgTool:Constructor");

    
		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public onAddedToStage(evt:CEFEvent) {

		console.log("THouseImgTool On Stage");

		this.feature1A = "singleDoor";
		this.feature1B = "doubleDoor";
		this.feature2A = "bluePaint";
		this.feature2B = "pinkPaint";
		this.feature3A = "chimneyLeft";
		this.feature3B = "chimneyRight";
		
		// now that everything is named - wire it up
		//
        this.initListeners();			
        
        super.onAddedToStage(evt);
	}
    
}