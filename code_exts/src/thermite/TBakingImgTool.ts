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

import { TImgTool } 	from "./TImgTool";
import { TImgTool322 } 	from "./TImgTool322";

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


export class TBakingImgTool extends TImgTool322
{
	//************ Stage Symbols
	
	public temp200:TButton;
	public temp350:TButton;
	public temp500:TButton;
	public honey:TButton;
	public sugar:TButton;
	public oneEgg:TButton;
	public threeEgg:TButton;			
			
	// non-interactive elements
	
	
	//************ Stage Symbols				
			
	
    constructor()
	{
		super();
		this.init5();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TBakingImgToolInitialize() {

		this.TImgTool322Initialize.call(this);
		this.init5();
	}

	public initialize() {

		this.TImgTool322Initialize.call(this);		
		this.init5();
	}

	private init5() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TBakingImgTool:Constructor");

    
		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public onAddedToStage(evt:CEFEvent) {

		console.log("TBakingImgTool On Stage");

		this.feature1A = "temp200";
		this.feature1B = "temp350";
		this.feature1C = "temp500";
		this.feature2A = "honey";
		this.feature2B = "sugar";
		this.feature3A = "oneEgg";
		this.feature3B = "threeEgg";			
		
		// now that everything is named - wire it up
		//
		this.initListeners();			

        super.onAddedToStage(evt);
    }

}