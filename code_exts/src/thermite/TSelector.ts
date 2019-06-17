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

import { TRoot }		from "thermite/TRoot";
import { TObject }		from "thermite/TObject";
import { TScene }		from "thermite/TScene";
import { TMouseEvent } 	from "thermite/events/TMouseEvent";
import { CUtil } 		from "util/CUtil";

import MovieClip     		  = createjs.MovieClip;
import Timeline     		  = createjs.Timeline;
import DisplayObject 		  = createjs.DisplayObject;
import DisplayObjectContainer = createjs.Container;
import { CEFEvent } from "events/CEFEvent";



export class TSelector extends TObject
{


	constructor()
	{
		super();
		this.init3();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TSelectorInitialize() {

		this.TObjectInitialize.call(this);
		this.init3();
	}

	public initialize() {

		this.TObjectInitialize.call(this);		
		this.init3();
	}

	private init3() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TSelector:Constructor");

    
		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public onAddedToStage(evt:CEFEvent) {

		console.log("TSelector On Stage");

        super.onAddedToStage(evt);

		this.button.on("WOZMOUSE_OVER", this.doButtonOver);
		this.button.on("WOZMOUSE_CLICK", this.doMouseClick);
		
		
		this.clicker.on("WOZMOUSE_OVER", this.doMouseOver);
		this.clicker.on("WOZMOUSE_OUT", this.doMouseOut);
		this.clicker.on("WOZMOUSE_DOWN", this.doMouseDown);
		this.clicker.on("WOZMOUSE_CLICK", this.doMouseClick);
	}

	
//***************** Automation *******************************		

	public setAutomation(bFlag:boolean)
	{
		this.bAuto = bFlag;
		
		
		
	}
	
//***************** Automation *******************************		



//***********  WOZ automatable event stream -
	
	
	public doMouseClick(evt:TMouseEvent)
	{
		
	}
	
	public doMouseDown(evt:TMouseEvent)
	{
	}
	
	public doMouseUp(evt:TMouseEvent)
	{
	}

	public doMouseOver(evt:TMouseEvent)
	{
	}
	
	public doMouseOut(evt:TMouseEvent)
	{
	}
	
}