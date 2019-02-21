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
import { TDrinkImgTool } 	from "../../thermite/TDrinkImgTool";
import { TDrinkController } from "../../thermite/TDrinkController";

import { TRoot }			from "thermite/TRoot";
import { TObject }			from "thermite/TObject";
import { TButton }			from "thermite/TButton";
import { TScene }			from "thermite/TScene";
import { THtmlText } 		from "thermite/THtmlText";
import { TTextEvent } 		from "thermite/events/TTextEvent";
import { CUtil } 			from "util/CUtil";

import MovieClip     		  = createjs.MovieClip;
import Timeline     		  = createjs.Timeline;
import DisplayObject 		  = createjs.DisplayObject;
import DisplayObjectContainer = createjs.Container;



export class TQ1APart2 extends TExpSceneTyp2
{
	//************ Stage Symbols
	
	public q1Title1:TObject;
	public q1Title2:TObject;
	public q1Title3:TObject;
	public q1Title4:TObject;
	public q1Title5:TObject;
	public q1Title6:TObject;
	public q1Title7:TObject;
	public q1Title8:TObject;
	
	public q1MarkRight:TObject;
	public q1MarkLeft:TObject;
	
	public q1IFrame1:TObject;
	public q1QFrame1:TObject;
	public q1QFrame2:TObject;
	
	public imgToolAq1:TDrinkImgTool;
	public imgToolBq1:TDrinkImgTool;
	
	public tabControllerAq1:TDrinkController;
	public tabControllerBq1:TDrinkController;
	
	public q1TextControl1:THtmlText;
	
	// non-interactive elements
	
	public q1FrameA:TObject;
	public q1FrameB:TObject;
	
	//************ Stage Symbols				
	
			
	public fStateCap:boolean = false;
	public expState:any;
	
	
	
	constructor()
	{
		super();
		
		CUtil.trace("TQ1APart2:Constructor");
		
		this.selOneA   = "clockNoon";
		this.selOneB   = "clockThree";
		this.selOneC   = "clockSix";
		this.selTwoA   = "ageYoung";
		this.selTwoB   = "ageOlder";
		this.selThreeA = "drinkLemon";
		this.selThreeB = "drinkTea";
			
		this.imgTool1		= "imgToolAq1";
		this.imgTool2		= "imgToolBq1";
		this.tabController1	= "tabControllerAq1";
		this.tabController2	= "tabControllerBq1";

		// Disable the controllers
		//
		//parseObject(this.imgToolAq1);
		
		this.imgToolAq1.enableTool(false);			
		this.imgToolBq1.enableTool(false);			
		this.tabControllerAq1.enableTool(false);			
		this.tabControllerBq1.enableTool(false);						
		
		// Init the text control
		//
		this.q1TextControl1.StxtField.addEventListener(TTextEvent.CHANGE,  this.questionFinished);			
	}
			
	
//******** Navigation update control		
	
	public questionFinished(evt:Event) : void 
	{			
		if(this.q1TextControl1.hasMinWords(2,9)) this.fComplete = true;
										else this.fComplete = false;			
		// Update the Navigation
		//
		this.updateNav();
	}
							
//****** Overridden Behaviors


	// Update the Navigation Features on entry
	//
	public preEnterScene(lTutor:any, sceneLabel:string, sceneTitle:string, scenePage:string, Direction:string ) :string
	{
		CUtil.trace("TQ1APart2 Pre-Enter Scene Behavior: " + sceneTitle);		
					
		// If they have previously made a decision check if it changed
		// If so clear there previous response
		//
		if(this.fStateCap)
		{
			if(!this.tutorAutoObj["Sq1p1b" + this.sType].compareXMLState(this.expState))																 
			{
				CUtil.trace("State Changed: clearing text");
				
				// Note we clear the text box on q1p1b as it will be copied into
				// the q1p2 text box
				//
				this.tutorAutoObj["Sq1p1b" + this.sType].this.q1TextControl1.wozClear();
				this.fComplete = false;
				
				// recapture the current state
				//
				this.expState = this.tutorAutoObj["Sq1p1b" + this.sType].captureXMLState();
			}
		}			
		// Capture the experimental setup state
		//
		else
		{
			this.expState = this.tutorAutoObj["Sq1p1b" + this.sType].captureXMLState();
			this.fStateCap = true;				
		}			
		
		return super.preEnterScene(lTutor, sceneLabel, sceneTitle, scenePage, Direction );
	}
	
		
	public onEnterScene(Direction:string) : void
	{				
		CUtil.trace("TQ1APart2 Enter Scene Behavior:");
		
		// Init the text control
		//
		this.q1TextControl1.setFocus(true);						
	}


	public preExitScene(Direction:string, sceneCurr:number ) :string
	{				
		CUtil.trace("TQ1APart2 Enter Scene Behavior:");
		
		return("OK");
	}
	
//****** Overridable Behaviors
	
}