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

//** Imports

import { TImgCheckButton } from "./TImgCheckButton";
import { CUtil } from "util/CUtil";
import { TMouseEvent } from "thermite/events/TMouseEvent";
import { TButtonEvent } from "thermite/events/TButtonEvent";



export class TImgRadioButton extends TImgCheckButton
{
		
	constructor()
	{
		super();
		this.init6();
	}
    
    
/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TImgRadioButtonInitialize() {

		this.TImgCheckButtonInitialize.call(this);
		this.init6();
	}

	public initialize() {

		this.TImgCheckButtonInitialize.call(this);		
		this.init6();
	}

	private init6() {
		
		this.traceMode = true;
        if(this.traceMode) CUtil.trace("TImgRadioButton:Constructor");
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */

    
	
	/**
	 * Don't allow radio buttons to be clicked off
	 * @param	evt
	 */
	public doMouseClicked(evt:TMouseEvent) : void 
	{		
		// Radio buttons can only be clicked to the ON state - you cannot turn them off independently only the button group can turn them off
		this.setCheck(true);

        if(this.traceMode) CUtil.trace("Setting Checked State: " + this.fChecked + " on button: " + name)				

        this.doClickActions(evt);        
	}					

	/**
	 * Dispatch message to tell listeners that selection has been made
	 * @param	bCheck
	 */
	public setCheck(bCheck:boolean)
	{
		super.setCheck(bCheck);			
		
		if (this.fChecked)
			this.dispatchEvent(new TButtonEvent(TButtonEvent.WOZCHECKED));
		else
			this.dispatchEvent(new TButtonEvent(TButtonEvent.WOZUNCHECKED));
	}
	
}
