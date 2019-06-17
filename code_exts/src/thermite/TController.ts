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

import { TTabTool } 		from "./TTabTool";
import { TSelectorButton } 	from "./TSelectorButton";

import { TRoot }			from "thermite/TRoot";
import { TObject }			from "thermite/TObject";
import { TScene }			from "thermite/TScene";
import { CEFEvent }         from "events/CEFEvent";
import { TMouseEvent } 		from "thermite/events/TMouseEvent";
import { TSelectEvent }     from "thermite/events/TSelectEvent";
import { CUtil } 			from "util/CUtil";
import { CONST }            from "util/CONST";

import MovieClip     		  = createjs.MovieClip;
import Timeline     		  = createjs.Timeline;
import Point     		  	  = createjs.Point;
import DisplayObject 		  = createjs.DisplayObject;
import DisplayObjectContainer = createjs.Container;



export class TController extends TObject
{
	//************ Stage Symbols
	
	public StabTool:TTabTool;
	
	public StopButton:TSelectorButton;
	public ScenterButton:TSelectorButton;
	public SbottomButton:TSelectorButton;
	
	// non-interactive elements
	
	
	//************ Stage Symbols				

	
	public sel1:string = "";
	public sel2:string = "";
	public sel3:string = "";
	
	public useChanged:boolean = false;
			
	public item1Listener:string;
	public item2Listener:string;
	public item3Listener:string;
    
	public item1BndListener:Function;
	public item2BndListener:Function;
	public item3BndListener:Function;
	public item4BndListener:Function;
	public item5BndListener:Function;    

    private topBndListener:Function;
    private ctrBndListener:Function;
    private btmBndListener:Function;

    private dismissBndListener:Function;
    
    private toolEnabled:boolean = false;



	constructor()
	{
		super();
		this.init3();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TControllerInitialize() {

		this.TObjectInitialize.call(this);
		this.init3();
	}

	public initialize() {

		this.TObjectInitialize.call(this);		
		this.init3();
	}

	private init3() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TController:Constructor");

		// Note the CreateJS(AnimateCC) parts of the button have not been created
        // at this point.
        
        this.useChanged  = false;
        this.toolEnabled = false;
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public onAddedToStage(evt:CEFEvent) {

		console.log("TController On Stage");

        super.onAddedToStage(evt);
	}
    
    public onRemovedFromStage(evt:CEFEvent) {

		console.log("TController Off Stage");

        super.onRemovedFromStage(evt);
    }

    public initState() {

		this.StopButton.SsubLabel.visible 		 = false;
		this.ScenterButton.SsubLabel.visible 	 = false;
		this.SbottomButton.SsubLabel.visible 	 = false;
		
		this.StabTool.visible = false;
    }


	
//*************** Deep state management

	public deepStateCopy(src:TObject) : void
	{
		super.deepStateCopy(src);
		
		var ptrController:TController  = src as TController;
		
		this.sel1  = ptrController.sel1;
		this.sel2  = ptrController.sel2;
		this.sel3  = ptrController.sel3;
		
		this.StopButton.SsubLabel.text	     = ptrController.StopButton.SsubLabel.text;
		this.StopButton.SsubLabel.visible    = ptrController.StopButton.SsubLabel.visible;
		
		this.ScenterButton.SsubLabel.text    = ptrController.ScenterButton.SsubLabel.text;
		this.ScenterButton.SsubLabel.visible = ptrController.ScenterButton.SsubLabel.visible;
		
		this.SbottomButton.SsubLabel.text    = ptrController.SbottomButton.SsubLabel.text; 
		this.SbottomButton.SsubLabel.visible = ptrController.SbottomButton.SsubLabel.visible;
	}		

//*************** Deep state management
			
//*************** Logging state management
	

	public captureLogState(obj:any = null) : Object
	{
		obj = super.captureLogState(obj);
					
		obj['object']   = 'imgcontroller';
		obj['name']     = this.name;
		obj['Item1']    = this.StopButton.SsubLabel.text;
		obj['Changed1'] = this.StopButton.SchangeLabel.visible; 
		obj['Item2']    = this.ScenterButton.SsubLabel.text;
		obj['Changed2'] = this.ScenterButton.SchangeLabel.visible; 
		obj['Item3']    = this.SbottomButton.SsubLabel.text;
		obj['Changed3'] = this.SbottomButton.SchangeLabel.visible;
		
		return obj;											   
	}						
	
	public captureXMLState() :any
	{		
		let stateVal:any   = {topbutton:{}, centerbutton:{}, bottombutton:{}};

		stateVal.name= this.name;

		stateVal.topbutton.Item	    =this.sel1; 
		stateVal.topbutton.Changed    =this.StopButton.SchangeLabel.visible; 
		stateVal.topbutton.Text	    =this.StopButton.SsubLabel.text; 
		stateVal.topbutton.Visible    =this.StopButton.SsubLabel.visible;

		stateVal.centerbutton.Item	=this.sel2; 
		stateVal.centerbutton.Changed	=this.ScenterButton.SchangeLabel.visible; 
		stateVal.centerbutton.Text	=this.ScenterButton.SsubLabel.text; 
		stateVal.centerbutton.Visible	=this.ScenterButton.SsubLabel.visible;

		stateVal.bottombutton.Item	=this.sel3; 
		stateVal.bottombutton.Changed	=this.SbottomButton.SchangeLabel.visible; 
		stateVal.bottombutton.Text	=this.SbottomButton.SsubLabel.text; 
		stateVal.bottombutton.Visible	=this.SbottomButton.SsubLabel.visible;

		return stateVal;				
	}		

	public restoreXMLState(stateVal:any) : void
	{
		this.sel1							 = stateVal.topbutton.Item;
		this.StopButton.SsubLabel.text	   	 = stateVal.topbutton.Text;
		this.StopButton.SsubLabel.visible    = stateVal.topbutton.Visible;
		
		this.sel2							 = stateVal.centerbutton.Item;
		this.ScenterButton.SsubLabel.text    = stateVal.centerbutton.Text;
		this.ScenterButton.SsubLabel.visible = stateVal.centerbutton.Visible;
		
		this.sel3							 = stateVal.bottombutton.Item;
		this.SbottomButton.SsubLabel.text    = stateVal.bottombutton.Text;
		this.SbottomButton.SsubLabel.visible = stateVal.bottombutton.Visible;
	}		
	
	public compareXMLState(stateVal:any) :boolean
	{
		var bTest:boolean = true;

		this.StopButton.SchangeLabel.visible    = false;	
		this.ScenterButton.SchangeLabel.visible = false;	
		this.SbottomButton.SchangeLabel.visible = false;	
		
		if(this.sel1 != stateVal.topbutton.Item)
		{
			this.useChanged? this.StopButton.SchangeLabel.visible = true: null;	
			bTest = false;
		}
		if(this.sel2 != stateVal.centerbutton.Item)
		{
			this.useChanged? this.ScenterButton.SchangeLabel.visible = true: null;	
			bTest = false;
		}
		if(this.sel3 != stateVal.bottombutton.Item)
		{
			this.useChanged? this.SbottomButton.SchangeLabel.visible = true: null;	
			bTest = false;
		}
		
		return bTest;			
	}		
	
//*************** Logging state management
	
	
	public initLabels(label1:string, label2:string, label3:string)
	{
		this.StopButton.StopLabel.text 			 = label1;
		this.ScenterButton.StopLabel.text 		 = label2;
		this.SbottomButton.StopLabel.text	 	 = label3;
		
		this.StabTool.StopTab.StabLabel.text 	 = label1;
		this.StabTool.ScenterTab.StabLabel.text  = label2;
		this.StabTool.SbottomTab.StabLabel.text	 = label3;					
	}
	
	
	public enableTool(bFlag:boolean) : void
	{
		if(bFlag && !this.toolEnabled)
		{
			this.topBndListener = this.StopButton.on(CONST.BUTTON_CLICK, this.topClick, this);
			this.ctrBndListener = this.ScenterButton.on(CONST.BUTTON_CLICK, this.centerClick, this);
            this.btmBndListener = this.SbottomButton.on(CONST.BUTTON_CLICK, this.bottomClick, this);										
         
            this.StopButton.enableButton(bFlag);
            this.ScenterButton.enableButton(bFlag);
            this.SbottomButton.enableButton(bFlag);			
                
            this.toolEnabled = true;
		}
		else if(!bFlag && this.toolEnabled)
		{
			this.StopButton.off(CONST.BUTTON_CLICK, this.topBndListener);
			this.ScenterButton.off(CONST.BUTTON_CLICK, this.ctrBndListener);
            this.SbottomButton.off(CONST.BUTTON_CLICK, this.btmBndListener);										

            this.StopButton.enableButton(bFlag);
            this.ScenterButton.enableButton(bFlag);
            this.SbottomButton.enableButton(bFlag);			
                
            this.toolEnabled = false;
		}		
	}
	
	
	public showTabTool(item1ID:string, item2ID:string, checkedItem:string, tabID:string )
	{
		CUtil.trace("Show TabTool: " + item1ID + " : " +  item2ID + " : " + tabID);
		
//			//@@ Action Logging
//			var xmlVal:any = <action func="showTabTool" target=name} item1=item1ID} item2=item2ID} current=checkedItem} tabID=tabID}/>
//							
//			gTutor.logActionEvent(xmlVal);				
//			//@@ Action Logging
		
		this.item1Listener = item1ID;
		this.item2Listener = item2ID;
		
		this.StopButton.visible 			 = false;
		this.ScenterButton.visible 	 	 = false;
		this.SbottomButton.visible 	 	 = false;
		
		this.StabTool.StopTab.visible     = false;						
		this.StabTool.ScenterTab.visible  = false;						
		this.StabTool.SbottomTab.visible  = false;						
		
		this.StabTool.hideAllIcons();

		this.StabTool.Sitem1.visible = true;			
		this.StabTool.Sitem2.visible = true;			
		this.StabTool.Sitem3.visible = false;			
		this.StabTool.Sitem4.visible = false;			
		this.StabTool.Sitem5.visible = false;			
		
		this.StabTool.Sitem1.Scheckbox.setCheck(false);			
		this.StabTool.Sitem2.Scheckbox.setCheck(false);			
			
		if(checkedItem)
			this.StabTool[checkedItem].Scheckbox.setCheck(true);						
		
		this.StabTool.Sitem1.Sicons[item1ID].visible = true;
		this.StabTool.Sitem2.Sicons[item2ID].visible = true;

	    this.item1BndListener = this.StabTool.Sitem1.on(CONST.BUTTON_CLICK, this[item1ID], this);
		this.item2BndListener = this.StabTool.Sitem2.on(CONST.BUTTON_CLICK, this[item2ID], this);
		
		this.resizeDismissMask(true);
		this.dismissBndListener = this.StabTool.SdismissButton.on(CONST.BUTTON_CLICK, this.doDismiss, this);									
		
		this.StabTool[tabID].visible  = true;						
		this.StabTool.visible  = true;						
	}

	
	public show3TabTool(item1ID:string, item2ID:string, item3ID:string, checkedItem:string, tabID:string )
	{
		CUtil.trace("Show TabTool: " + item1ID + " : " +  item2ID + " : " +  item3ID + " : " + tabID);
		
//			//@@ Action Logging
//			var xmlVal:any = <action func="showTabTool" target=name} item1=item1ID} item2=item2ID} item3=item3ID} current=checkedItem} tabID=tabID}/>
//										
//			gTutor.logActionEvent(xmlVal);				
//			//@@ Action Logging
		
		this.item1Listener = item1ID;
		this.item2Listener = item2ID;
		this.item3Listener = item3ID;
		
		this.StopButton.visible 		 = false;
		this.ScenterButton.visible 	 	 = false;
		this.SbottomButton.visible 	 	 = false;
		
		this.StabTool.StopTab.visible     = false;						
		this.StabTool.ScenterTab.visible  = false;						
		this.StabTool.SbottomTab.visible  = false;						
		
		this.StabTool.hideAllIcons();

		this.StabTool.Sitem1.visible = false;			
		this.StabTool.Sitem2.visible = false;			
		this.StabTool.Sitem3.visible = true;			
		this.StabTool.Sitem4.visible = true;			
		this.StabTool.Sitem5.visible = true;			
		
		this.StabTool.Sitem3.Scheckbox.setCheck(false);			
		this.StabTool.Sitem4.Scheckbox.setCheck(false);			
		this.StabTool.Sitem5.Scheckbox.setCheck(false);			
			
		if(checkedItem)
			this.StabTool[checkedItem].Scheckbox.setCheck(true);						
		
		this.StabTool.Sitem3.Sicons[item1ID].visible = true;
		this.StabTool.Sitem4.Sicons[item2ID].visible = true;
		this.StabTool.Sitem5.Sicons[item3ID].visible = true;

		this.item3BndListener = this.StabTool.Sitem3.on(CONST.BUTTON_CLICK, this[item1ID], this);
		this.item4BndListener = this.StabTool.Sitem4.on(CONST.BUTTON_CLICK, this[item2ID], this);			
		this.item5BndListener = this.StabTool.Sitem5.on(CONST.BUTTON_CLICK, this[item3ID], this);			
		
		this.resizeDismissMask(true);
		this.dismissBndListener = this.StabTool.SdismissButton.on(CONST.BUTTON_CLICK, this.doDismiss, this);									
		
		this.StabTool[tabID].visible = true;						
		this.StabTool.visible 		 = true;						
	}

	
	//@@ Mod May 22 2013
	// Note that in the new framework we cannot set this size prior to INPLACE capture.
	// So we resize the dismiss button just when we show the selector tab
	//
	public resizeDismissMask(showHide:boolean) : void
	{
		var iPnt:Point = this.globalToLocal(0, 0);			
		var ePnt:Point = this.globalToLocal(this.tutorDoc.STAGEWIDTH, this.tutorDoc.STAGEHEIGHT );			

		// if(showHide)
		// {            
		// 	this.StabTool.SdismissButton.setBounds(iPnt.x, iPnt.y, ePnt.x - iPnt.x, ePnt.y - iPnt.y);
		// }
		// else
		// {
		// 	this.StabTool.SdismissButton.setBounds(0,0,0,0);
		// }
			
	}		
	
	
	public dismissTool(eventID:string )
	{
		CUtil.trace("dismiss TabTool: " + eventID);
					
		//@@ Action Logging			
		var logData:any = {'action':'dismissTool', 'targetid':name, 'selection':eventID};
		
		this.tutorDoc.log.logActionEvent(logData);							
		//@@ Action Logging
					
		// When Question is finished we enable the Navigation Panel
		//
		this.queryQuestionDone();						
		
		this.StabTool.Sitem1.off(CONST.BUTTON_CLICK, this.item1BndListener);
		this.StabTool.Sitem2.off(CONST.BUTTON_CLICK, this.item2BndListener);		
		
		this.resizeDismissMask(false);
		this.StabTool.SdismissButton.off(CONST.BUTTON_CLICK, this.dismissBndListener);									

		this.StopButton.visible 	 = true;
		this.ScenterButton.visible 	 = true;
		this.SbottomButton.visible 	 = true;
		
		this.StabTool.visible  = false;						
					
		if(eventID)
             this.dispatchEvent(new TSelectEvent(eventID, TSelectEvent.WOZTABSELECT));
             
		// User selection has been made
		//
        this.hostScene.onSelect(this.name); // Pass control name     
	}
	
	
	public dismiss3Tool(eventID:string )
	{
		CUtil.trace("dismiss 3 TabTool: " + eventID);
					
		//@@ Action Logging
		var logData:any = {'action':'this.dismiss3Tool', 'targetid':name, 'selection':eventID};
		
		this.tutorDoc.log.logActionEvent(logData);
		//@@ Action Logging
					
		// When Question is finished we enable the Navigation Panel
		//
		this.queryQuestionDone();						
		
		this.StabTool.Sitem3.off(CONST.BUTTON_CLICK, this.item3BndListener);
		this.StabTool.Sitem4.off(CONST.BUTTON_CLICK, this.item4BndListener);		
		this.StabTool.Sitem5.off(CONST.BUTTON_CLICK, this.item5BndListener);		
		
		this.resizeDismissMask(false);
		this.StabTool.SdismissButton.off(CONST.BUTTON_CLICK, this.dismissBndListener);									

		this.StopButton.visible 	 = true;
		this.ScenterButton.visible 	 = true;
		this.SbottomButton.visible 	 = true;
		
		this.StabTool.visible  = false;						
					
		if(eventID)
             this.dispatchEvent(new TSelectEvent(eventID, TSelectEvent.WOZTABSELECT));
             
		// User selection has been made
		//
        this.hostScene.onSelect(this.name); // Pass control name     
    }
    
	public doDismiss(evt:TMouseEvent)
	{
		this.dismissTool(null);
	}



//*************************   Overridable

//******* Utility functions		


	public queryQuestionDone() : void
	{
	}		
			
			
//******* Button Actions

	//  top Button has been clicked
	//
	public topClick(evt:TMouseEvent)
	{
	}

	
	// center Button has been clicked
	public centerClick(evt:TMouseEvent)
	{
	}
	
	
	// bottom Button has been clicked
	public bottomClick(evt:TMouseEvent)
	{
	}
	
}
