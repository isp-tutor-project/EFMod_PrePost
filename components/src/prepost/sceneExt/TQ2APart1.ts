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

import { TExpSceneTyp2 } 	from "./TExpSceneTyp2";
import { TDrinkImgTool } 	from "../com/TDrinkImgTool";
import { TDrinkController } from "../com/TDrinkController";
import { TCircleControl }	from "../com/common/TCircleControl";

import { TRoot }			from "thermite/TRoot";
import { TObject }			from "thermite/TObject";
import { TButton }			from "thermite/TButton";
import { TScene }			from "thermite/TScene";
import { TTextInput } 		from "thermite/TTextInput";
import { TMouseEvent } 		from "thermite/events/TMouseEvent";
import { CUtil } 			from "util/CUtil";

import MovieClip     		  = createjs.MovieClip;
import Timeline     		  = createjs.Timeline;
import DisplayObject 		  = createjs.DisplayObject;
import DisplayObjectContainer = createjs.Container;


export class TQ2APart1 extends TExpSceneTyp2
{
	//************ Stage Symbols
	
	public q2Title1:TObject;
	public q2Title3:TObject;
	public q2Title5:TObject;
	
	public q2MarkRight:TObject;
	public q2MarkLeft:TObject;
	
	public q2IFrame1:TObject;
	public q2QFrame1:TObject;
	
	public imgToolCq2:TDrinkImgTool;
	public imgToolDq2:TDrinkImgTool;
	
	public tabControllerCq2:TDrinkController;
	public tabControllerDq2:TDrinkController;
	
	public q2Check1:TCircleControl;
	public q2Check2:TCircleControl;
	
	// non-interactive elements
	
	public q2Arrow1:TObject;
	
	public q2FrameA:TObject;
	public q2FrameB:TObject;
	public q2FrameC:TObject;
	public q2FrameD:TObject;
	
	//************ Stage Symbols				
	
	
	constructor()
	{
		super();
		
		CUtil.trace("TQ2APart1:Constructor");

		this.selOneA   = "clockNoon";
		this.selOneB   = "clockThree";
		this.selOneC   = "clockSix";
		this.selTwoA   = "ageYoung";
		this.selTwoB   = "ageOlder";
		this.selThreeA = "drinkLemon";
		this.selThreeB = "drinkTea";
		
		this.imgTool1		= "imgToolCq2";
		this.imgTool2		= "imgToolDq2";
		this.tabController1	= "tabControllerCq2";
		this.tabController2	= "tabControllerDq2";
			
		// Disable the controllers
		//
		this.imgToolCq2.enableTool(false);			
		this.imgToolDq2.enableTool(false);			
		this.tabControllerCq2.enableTool(false);			
		this.tabControllerDq2.enableTool(false);						
		
		// Initialize the Experimental setups
		//
		this.imgToolCq2["clockThree"].visible = true;
		this.imgToolCq2["ageYoung"].visible = true;
		this.imgToolCq2["drinkLemon"].visible = true;
		
		this.imgToolDq2["clockThree"].visible = true;
		this.imgToolDq2["ageYoung"].visible = true;
		this.imgToolDq2["drinkTea"].visible = true;
		
		// Initialize the Controller Buttons
		//
		this.tabControllerCq2.this.sel1 = "Sitem4";						
		this.tabControllerCq2.this.StopButton.SsubLabel.text	   = "3:00 pm";
		this.tabControllerCq2.this.StopButton.SsubLabel.visible	   = true;
		
		this.tabControllerCq2.this.sel2 = "Sitem1";						
		this.tabControllerCq2.this.ScenterButton.SsubLabel.text    = "Younger";
		this.tabControllerCq2.this.ScenterButton.SsubLabel.visible = true;
		
		this.tabControllerCq2.this.sel3 = "Sitem1";						
		this.tabControllerCq2.this.SbottomButton.SsubLabel.text    = "Lemonade"; 
		this.tabControllerCq2.this.SbottomButton.SsubLabel.visible = true;			
		
		this.tabControllerDq2.this.sel1 = "Sitem4";						
		this.tabControllerDq2.this.StopButton.SsubLabel.text	   = "3:00 pm";
		this.tabControllerDq2.this.StopButton.SsubLabel.visible	   = true;
		
		this.tabControllerDq2.this.sel2 = "Sitem1";						
		this.tabControllerDq2.this.ScenterButton.SsubLabel.text    = "Younger";
		this.tabControllerDq2.this.ScenterButton.SsubLabel.visible = true;
		
		this.tabControllerDq2.this.sel3 = "Sitem2";						
		this.tabControllerDq2.this.SbottomButton.SsubLabel.text    = "Iced Tea"; 
		this.tabControllerDq2.this.SbottomButton.SsubLabel.visible = true;			
		
		this.this.q2Check2.setLabel("Bad Way");
		
		this.this.q2Check1.addEventListener(TMouseEvent.WOZCLICK, this.check1Clicked);			
		this.this.q2Check2.addEventListener(TMouseEvent.WOZCLICK, this.check2Clicked);						
	}

	
	public check1Clicked(evt:Event)
	{
		//@@ Action Logging
		var logData:any = {'action':'check1Clicked', 'targetid':name, 'label':'Good Way', 'state':this.q2Check1.getChecked()};
		
		this.tutorDoc.log.logActionEvent(logData);			
		//@@ Action Logging
		
		 this.questionFinished(evt);
	}
	
	public check2Clicked(evt:Event)
	{
		//@@ Action Logging
		var logData:any = {'action':'check2Clicked', 'targetid':name, 'label':'Bad Way', 'state':this.q2Check2.getChecked()};
		
		this.tutorDoc.log.logActionEvent(logData);
		//@@ Action Logging
		
		 this.questionFinished(evt);
	}
	
	
//******** Navigation update control		
	
	public questionFinished(evt:Event) : void 
	{			
		if(this.q2Check1.getChecked() || this.q2Check2.getChecked())
			this.fComplete = true;
		else 
			this.fComplete = false;
		
		// Update the Navigation
		//
		this.updateNav();
	}
	
	
//****** Overridden Behaviors

//*************** Logging state management

	public captureLogState(obj:any = null) : Object
	{
		obj = super.captureLogState(obj);
		
		obj['scene']   = this.name;
		obj['Check1']  = this.q2Check1.captureLogState();
		obj['Check2']  = this.q2Check2.captureLogState();
		
		return obj;											   
	}				
	
	public captureXMLState() :any
	{		
		var sceneState:any = {};
				
		sceneState.appendChild(this.q2Check1.captureXMLState());
		sceneState.appendChild(this.q2Check2.captureXMLState());
														
		return sceneState;											   
	}		

	public restoreXMLState(xmlState:any) : void
	{
		this.this.q2Check1.restoreXMLState(xmlState.button[0]);
		this.this.q2Check2.restoreXMLState(xmlState.button[1]);
	}		
	
	public compareXMLState(xmlState:any) :boolean
	{
		var bTest:boolean = true;
		
		if(!this.q2Check1.compareXMLState(xmlState.button[0]) ||
			!this.q2Check2.compareXMLState(xmlState.button[1]))
														bTest = false;			
		return bTest;			
	}		
	
//*************** Logging state management


	public preExitScene(Direction:string, sceneCurr:number ) :string
	{				
		CUtil.trace("TQ2APart1 Enter Scene Behavior:");
		
		// Maintain global for summative assessment
		
		this.assertGlobal('q2Good', this.q2Check1.captureLOGString);
		this.assertGlobal('q2Bad' , this.q2Check2.captureLOGString);
		
		return("OK");
	}
	
//****** Overridable Behaviors

}