﻿//*********************************************************************************
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

/// <reference path="../../../../../dist/TutorEngineOne.d.ts" />

//** Imports




import { TRoot }		from "thermite/TRoot";
import { TObject }		from "thermite/TObject";
import { TScene }		from "thermite/TScene";
import { CUtil } 		from "util/CUtil";

import MovieClip     		  = createjs.MovieClip;
import Text     		      = createjs.Text;
import Timeline     		  = createjs.Timeline;
import DisplayObject 		  = createjs.DisplayObject;
import DisplayObjectContainer = createjs.Container;

/**
* ...
*/
export class TTextControl extends TObject
{
	//************ this.stage Symbols
	
	public StxtField:Text;
	public SfocusBox:MovieClip;
	
	//************ this.stage Symbols
	
	public caret: number = 0;			// current this.caret position
	
	public  sSel: number = 0;			// current selection start
	public  eSel: number = 0;			// current selection end

	public	hScroll: number = 0;		// current scroll position horizontal
	public	vScroll: number = 0;		// current scroll position vertical 		
	
	//private var fm:FocusManager;
	
	private _valid:string = "";
	



	constructor()
	{
		super();

		if(this.traceMode) CUtil.trace("CWOZTextControl:Constructor");						
		
		this.SfocusBox.visible = false;			
	}
	
	
	public Destructor() : void
	{
		this.removeEventListener(TMouseEvent.WOZCLICKED, this.liveSetFocus);
		this.removeEventListener(TTextEvent.this.wozInputText, this.wozInputText);				
		
		this.StxtField.removeEventListener(FocusEvent.FOCUS_IN,  this.liveFocusIN);						
		this.StxtField.removeEventListener(FocusEvent.FOCUS_OUT, this.liveFocusOUT);									
		
		if(this.stage != null)
		{
			this.stage.removeEventListener(MouseEvent.MOUSE_UP,   this.liveMouseUp);			
			this.stage.removeEventListener(MouseEvent.MOUSE_MOVE, this.liveMouseMove);			
		}
		
		this.StxtField.removeEventListener(KeyboardEvent.KEY_UP,liveKeyUp);			
		this.StxtField.removeEventListener(MouseEvent.CLICK, liveMouseClick);			// When Mouse Clicked make sure the current position is updated and accurate
		this.StxtField.removeEventListener(MouseEvent.MOUSE_DOWN, liveMouseDown);		// Local MouseDown and global MouseUp may change the current selection
		this.StxtField.removeEventListener(Event.SCROLL, liveScroll);					// This may change the scroll position
		this.StxtField.removeEventListener(TextEvent.TEXT_INPUT, liveTextInput);			// This may add text
		this.StxtField.removeEventListener(KeyboardEvent.KEY_DOWN,liveKeyDown);			// This may delete text or modify the this.caret position or current selection
		
		super.Destructor();
	}
	
	
	// Walk the WOZ Objects to capture their default state
	//
	public captureDefState(TutScene:Object ) : void 
	{
		super.captureDefState(TutScene );
	}
	
	
	// Walk the WOZ Objects to restore their default state
	//
	public restoreDefState(TutScene:Object ) : void 
	{
		wozClear();
					
		super.restoreDefState(TutScene );
	}
	
	
	public hasMinWords(cnt: number = 0, minLen: number = 8) : Boolean
	{
		var regEx:RegExp;
		var regStr:string;
		var i1: number;
		var fResult:Boolean = false;
		
		if(cnt == 0)
		{
			if(this.StxtField.text.length >= 1)
								fResult = true;
		}
		else if(this.StxtField.text.length >= minLen)
		{			
			// default to a single word
			
			regStr = "^(.+";
			
			// Do as many words as requested
			
			for(i1 = 1 ; i1 < cnt ; i1++)
			{
				regStr += "\\s+.+";
			}
			regStr += "(\b|\.))";
							
			regEx = new RegExp(regStr,"i");
			
			fResult = (this.StxtField.text.search(regEx) != -1);
		}			
		
		return fResult; 
	}

	// @@ Mod Apr 28 2011
	// Limit the text length to ensure the XML state packet does not overflow
	//
	public get text() :string
	{
		var maxString: number = 250;
		
		if(this.StxtField.text.length > maxString)	
			return this.StxtField.text.substring(0,maxString);		  
		else 
			return this.StxtField.text;
	}
	
					
//*************** Deep state management

	public deepStateCopy(src:CWOZObject) : void 
	{
		this.StxtField.text = src["this.StxtField"].text;
		
		super.deepStateCopy(src);
	}		

//*************** Deep state management
	
	
//***************** Automation *******************************		


	// Walk the WOZ Objects to initialize their automation mode
	// to do any special initialization - but call super to propogate
	//
	public setAutomationMode(sceneObj:Object, sMode:string) : void 
	{
		// If runnning from live mouse input wire up the mouse to the WOZ 
		// event engine.
		//
		if(sMode == "LiveMode")
		{		
			CUtil.trace("CWOZTextControl: Live");
			
			this.addEventListener(TMouseEvent.WOZCLICKED, this.liveSetFocus);
			
			this.StxtField.addEventListener(FocusEvent.FOCUS_IN,  this.liveFocusIN);			// These will change the Controls Focus state						
			this.StxtField.addEventListener(FocusEvent.FOCUS_OUT, this.liveFocusOUT);									
			
			this.removeEventListener(TTextEvent.this.wozInputText, this.wozInputText);								
		}		
		else // replay mode
		{
			CUtil.trace("CWOZTextControl: Replay");

			this.removeEventListener(TMouseEvent.WOZCLICKED, this.liveSetFocus);
			
			this.StxtField.removeEventListener(FocusEvent.FOCUS_IN,  this.liveFocusIN);		// These will change the Controls Focus state						
			this.StxtField.removeEventListener(FocusEvent.FOCUS_OUT, this.liveFocusOUT);									
			
			this.addEventListener(TTextEvent.this.wozInputText, this.wozInputText);				
		}
		
		// Walk any children
		//
		super.setAutomationMode(sceneObj, sMode);			
	}

	
//*** Live user interactions create automation events here
	
	public liveMouseDown(evt:MouseEvent)
	{
		this.stage.addEventListener(MouseEvent.MOUSE_UP,   this.liveMouseUp);			
		this.stage.addEventListener(MouseEvent.MOUSE_MOVE, this.liveMouseMove);			
	}
	
	public liveMouseUp(evt:MouseEvent)
	{
		this.stage.removeEventListener(MouseEvent.MOUSE_UP,   this.liveMouseUp);			
		this.stage.removeEventListener(MouseEvent.MOUSE_MOVE, this.liveMouseMove);			
		
		var wEvt:TTextEvent = new TTextEvent(objID, TTextEvent.this.wozInputText, this.StxtField.selectionBeginIndex, this.StxtField.selectionEndIndex, this.StxtField.text);		
		gLogR.logLiveEvent(wEvt.captureLogState());
	}
	
	public liveMouseMove(evt:MouseEvent)
	{
		var wEvt:TTextEvent = new TTextEvent(objID, TTextEvent.WOZSETSELECTION, this.StxtField.selectionBeginIndex, this.StxtField.selectionEndIndex);			
		gLogR.logLiveEvent(wEvt.captureLogState());
	}
	
	public liveMouseClick(evt:MouseEvent)
	{
		var wEvt:TTextEvent = new TTextEvent(objID, TTextEvent.WOZSETSELECTION, this.StxtField.selectionBeginIndex, this.StxtField.selectionEndIndex);			
		gLogR.logLiveEvent(wEvt.captureLogState());
	}
	
	public liveScroll(evt:Event) : void
	{
		var wEvt:TTextEvent = new TTextEvent(objID, TTextEvent.WOZSETSCROLL, this.StxtField.scrollH, this.StxtField.scrollV);
		gLogR.logLiveEvent(wEvt.captureLogState());
	}

	public liveTextInput(evt:TextEvent) : void
	{
		var wEvt:TTextEvent = new TTextEvent(objID, TTextEvent.this.wozInputText, this.StxtField.selectionBeginIndex, this.StxtField.selectionEndIndex, this.StxtField.text);		
		gLogR.logLiveEvent(wEvt.captureLogState());
	}
	
	public liveKeyDown(evt:KeyboardEvent) : void
	{
		if(this.traceMode) CUtil.trace("LiveKeyDown");
		this.StxtField.addEventListener(KeyboardEvent.KEY_UP,liveKeyUp);			
	}
	
	public liveKeyUp(evt:KeyboardEvent) : void
	{
		if(this.traceMode) CUtil.trace("LiveKeyUp");			
		this.StxtField.removeEventListener(KeyboardEvent.KEY_UP,liveKeyUp);
		
		var wEvt:TTextEvent = new TTextEvent(objID, TTextEvent.this.wozInputText, this.StxtField.selectionBeginIndex, this.StxtField.selectionEndIndex, this.StxtField.text);		
		gLogR.logLiveEvent(wEvt.captureLogState());			
	}
	
//*** Focus Management		
	
	public liveSetFocus(evt:TMouseEvent): void
	{		
		setFocus();
	}
	
	public setFocus(): void
	{
		if(this.traceMode) CUtil.trace("Set Focus: " + name);
		
//            fm = new FocusManager(this);		
//			
//			if(!this.StxtField)
//				CUtil.trace("this.StxtField Failed - null");
//			else
//			{
//				if(fm)
//					fm.setFocus(this.StxtField);
//				else
//					CUtil.trace("fm Failed - null");
//			}
		
		//## Mod Mar 13 2013 - when returning from pause state to full-screen view this may be null momentarily  
		
		if(this.stage)
			this.stage.focus = this.StxtField;
		
	}
	
	public liveFocusIN(evt:FocusEvent) : void
	{
		if(this.traceMode) CUtil.trace("Text Focus Capture: ");

		// Hide the Virtual Mouse
		//
		//gTutor.cCursor.show(false);
		
		this.StxtField.addEventListener(MouseEvent.CLICK, liveMouseClick);		// When Mouse Clicked make sure the current position is updated and accurate

		this.StxtField.addEventListener(MouseEvent.MOUSE_DOWN, liveMouseDown);	// Local MouseDown and global MouseUp may change the current selection
		
		this.StxtField.addEventListener(Event.SCROLL, liveScroll);				// This may change the scroll position
		
		this.StxtField.addEventListener(TextEvent.TEXT_INPUT, liveTextInput);		// This may add text
		
		this.StxtField.addEventListener(KeyboardEvent.KEY_DOWN,liveKeyDown);		// This may delete text or modify the this.caret position or current selection
			
		// Add this to the live event logging stream
		//
		var wEvt:TTextEvent = new TTextEvent(objID, TTextEvent.WOZCAPTUREFOCUS);
		gLogR.logLiveEvent(wEvt.captureLogState());

		this.SfocusBox.visible = true;

	}
	
	public liveFocusOUT(evt:FocusEvent) : void
	{
		if(this.traceMode) CUtil.trace("Text Focus Release: ");

		// Hide the Hardware Mouse
		//
		//gTutor.cCursor.show(true);

		this.StxtField.removeEventListener(MouseEvent.CLICK, liveMouseClick);			// When Mouse Clicked make sure the current position is updated and accurate

		this.StxtField.removeEventListener(MouseEvent.MOUSE_DOWN, liveMouseDown);		// Local MouseDown and global MouseUp may change the current selection
		
		this.StxtField.removeEventListener(Event.SCROLL, liveScroll);					// This may change the scroll position
		
		this.StxtField.removeEventListener(TextEvent.TEXT_INPUT, liveTextInput);		// This may add text
		
		this.StxtField.removeEventListener(KeyboardEvent.KEY_DOWN,liveKeyDown);		// This may delete text or modify the this.caret position or current selection
								
		// Add this to the live event logging stream
		//
		var wEvt:TTextEvent = new TTextEvent(objID, TTextEvent.WOZRELEASEFOCUS);
		gLogR.logLiveEvent(wEvt.captureLogState());

		this.SfocusBox.visible = false;

	}
	
	
//***************** Automation *******************************		
	
	
	
// ************************** Automation Stream 

//*************** Logging state management
	
// 		public captureLogState() : XML
//		{		
//			var xmlVal:XML = <TTextEvent text={this.StxtField.text} this.caret={this.caret} selstart={this.sSel} selend={this.eSel} scrollh={this.hScroll} scrollv={this.vScroll}/>;
//								
//			xmlVal.appendChild(super.captureLogState());
//			
//			return xmlVal;
//		}		
	
	public get captureLOGString() :string
	{		
		var strVal:string = text;										//@@ Mod Apr 28 2011 Limit string length
		
		return strVal;
	}		
	
	public captureLOGState() : XML
	{		
		var xmlVal:XML = <self_explanation id={name} textdata={this.StxtField.text}/>;
					
		return xmlVal;
	}		
	
	/**
	 * Create Experimenter Log Value
	 * @return
	 */
	public logState() : XML
	{		
		var xmlVal:XML = <textfield value={this.StxtField.text}/>;
					
		return xmlVal;
	}		

	public createLogAttr(objprop:string, restart:Boolean = false) :string
	{
		return this[objprop];
	}
	
	
//*************** Logging state management


	public wozClear() : void
	{
		CUtil.trace("CWOZTextControl: wozClear");
		this.StxtField.text = "";
		this.StxtField.setSelection(0, 0);
	}		
	
	// Note: In automation mode we simulate the this.caret by highlighting the character
	//       the cursor is currently at. This is required since only one control can 
	//       have the focus at a time, and the wizard interface can display multiple 
	//       instances simultaneously along with any actuve wizard controls.
	//
	public wozSetSelection(startSel: number, endSel: number ) : void
	{
		this.sSel = startSel;
		this.eSel = endSel;
		
		if(this.sSel == this.eSel)
			this.StxtField.setSelection(this.sSel, this.eSel+1);
		else 	
			this.StxtField.setSelection(this.sSel, this.eSel);				
	}
	
	
	public wozInputText(evt:TTextEvent) : void
	{
		CUtil.trace("replay this.wozInputText: ", evt.index1, evt.index2, evt.textdata);
					
		wozSetSelection(evt.index1, evt.index2 );
		
		this.StxtField.text = evt.textdata;
	}

	
	public wozSetScroll(this.hScroll: number, this.vScroll: number ) : void
	{
		this.StxtField.scrollH = this.hScroll;
		this.StxtField.scrollV = this.vScroll;			
	}

	
	public wozSetFocus(bState:Boolean ) : void
	{
		// If we are not live then simulate the selection process
		// and this.caret. 
		//
		if(bState)
		{
			wozSetSelection(this.sSel, this.eSel );
			this.StxtField.alwaysShowSelection = true;
		}
		else
			this.StxtField.alwaysShowSelection = false;
		
		this.SfocusBox.visible = bState;
	}

	
	public get isValid() :string
	{
		var sResult:string;

		
		sResult = (this.StxtField.text == this._valid)? "true":"false";
		
		
		return sResult;
	}
	
	
	public get ansText() :string
	{			
		var sResult:string;

		sResult = this.StxtField.text;
		
		if(sResult.length == 0)
				sResult	= "**empty_string**";
		
		return sResult;
	}
	
			
//*************** Serialization
	
	/*
	* 
	*/
	public loadXML(xmlSrc:XML) : void
	{			
		super.loadXML(xmlSrc);
		
		if(xmlSrc.@wozname != undefined)			
			wozName = xmlSrc.@wozname;
		
		if(xmlSrc.@valid != undefined)
			this._valid = xmlSrc.@valid;
		
		if(xmlSrc.@label != undefined)
			this.StxtField.text = xmlSrc.@label;
	}
	
	/*
	*/
	public saveXML() : XML
	{
		var propVector:XML;
		
		return propVector;
	}	
	
//*************** Serialization		
	
}