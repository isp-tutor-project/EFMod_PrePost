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

import { CEFEvent }     from "events/CEFEvent";
import { TButton } 		from "thermite/TButton";
import { CUtil } 		from "util/CUtil";

import MovieClip     		  = createjs.MovieClip;
import Timeline     		  = createjs.Timeline;
import DisplayObject 		  = createjs.DisplayObject;
import DisplayObjectContainer = createjs.Container;
import Text					  = createjs.Text;

export class TSelectorButton extends TButton
{
	//************ Stage Symbols
	
	public SchangeLabel:DisplayObject;
	public StopLabel:Text;
	public SsubLabel:Text;
	
	// non-interactive elements
	
	
	//************ Stage Symbols				
	
	constructor()
	{
		super();
        this.init5();
	}
    
/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TSelectorButtonInitialize() {

		this.TImgButtonInitialize.call(this);
		this.init5();
	}

	public initialize() {

		this.TImgButtonInitialize.call(this);		
		this.init5();
	}

	private init5() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TSelectorButton:Constructor");
		
		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */
    
	public onAddedToStage(evt:CEFEvent) {

		console.log("SelectorButton On Stage");

        super.onAddedToStage(evt);

		this.SchangeLabel.visible = false;

	}
	
}