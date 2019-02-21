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

/// <reference path="../../../../dist/TutorEngineOne.d.ts" />

//** Imports

import { TSelectEvent } 	from "./events/TSelectEvent";

import { TRoot }			from "thermite/TRoot";
import { TObject }			from "thermite/TObject";
import { TScene }			from "thermite/TScene";
import { TMouseEvent } 		from "thermite/events/TMouseEvent";

import { CUtil } 			from "util/CUtil";

import MovieClip     		  = createjs.MovieClip;
import Timeline     		  = createjs.Timeline;
import DisplayObject 		  = createjs.DisplayObject;
import DisplayObjectContainer = createjs.Container;


export class TP2scene extends TScene
{
	public traceTP2:boolean = false;
	
	public selOneA:string;
	public selOneB:string;
	public selOneC:string;
	public selTwoA:string;
	public selTwoB:string;
	public selThreeA:string;
	public selThreeB:string;
	
	public imgTool1:string;
	public imgTool2:string;		
	public tabController1:string;
	public tabController2:string;
	
	protected sType:string;

	public cvsEncoding:Array<string> = ["NC","CVS","CVS_WV","SC","CVS_WV","SC","HOTAT","MC"];

	constructor()
	{
		super();
		
		if(this.traceTP2) CUtil.trace("TP2scene:Constructor");		
        
        this.selOneC = null;

		// Setup the scene-name type extension - This is pretest specific 
		// to allow dereferencing other scenes based upon test type
		
			 if(this.tutorDoc.testFeatureSet("FTR_TYPEA"))  this.sType = "_A";
		else if(this.tutorDoc.testFeatureSet("FTR_TYPEB"))  this.sType = "_B";
                                                       else this.sType = "";		
                                                          
        this.imgTool1		= "imgToolAq1";
        this.imgTool2		= "imgToolBq1";
        this.tabController1	= "tabControllerAq1";
        this.tabController2	= "tabControllerBq1";
    
        this.imgToolAq1.addEventListener(TSelectEvent.WOZIMGSELECT,  this.doImageMapA);			
        this.imgToolBq1.addEventListener(TSelectEvent.WOZIMGSELECT,  this.doImageMapB);			
        this.tabControllerAq1.addEventListener(TSelectEvent.WOZTABSELECT,  this.doTabMapA);
        this.tabControllerBq1.addEventListener(TSelectEvent.WOZTABSELECT,  this.doTabMapB);				  
                                                                                                            
	}
	
	
	public encodeExptString(TVTEXT:string, TV:string, NTV1:string, NTV2:string) :string
	{
		var code:number = 0;
		
		if(this[this.tabController1][TV]   != this[this.tabController2][TV])   code += 1;
		if(this[this.tabController1][NTV1] != this[this.tabController2][NTV1]) code += 2;
		if(this[this.tabController1][NTV2] != this[this.tabController2][NTV2]) code += 4;
		
		var strEncoding:string = this.cvsEncoding[code];			
		
		return strEncoding;
	}
	
	
	public encodeExptState(TVTEXT:string, TV:string, NTV1:string, NTV2:string) :any
	{
		let stateVal:any = {CVS:{}};

		var code:number = 0;
		
		if(this[this.tabController1][TV]   != this[this.tabController2][TV])   code += 1;
		if(this[this.tabController1][NTV1] != this[this.tabController2][NTV1]) code += 2;
		if(this[this.tabController1][NTV2] != this[this.tabController2][NTV2]) code += 4;
		
		stateVal.CVS.code= this.cvsEncoding[code];
		stateVal.CVS.tv  = TVTEXT;
		
		return stateVal;
	}
	
	
//***** Clickable image - imgTool actions

	// image map clicked -- spawn a tabController Tab
	//
	public doImageMapA(evt:TSelectEvent)
	{
		if(this.traceTP2) CUtil.trace("doImgMap: " + evt.selection);
		
		switch(evt.selection)
		{
			case this.selOneA:
			case this.selOneB:
			case this.selOneC:
					this[this.tabController1].topClick(new TMouseEvent("", TMouseEvent.WOZCLICK));
					break;
					
			case this.selTwoA:
			case this.selTwoB:
					this[this.tabController1].centerClick(new TMouseEvent("", TMouseEvent.WOZCLICK));
					break;
					
			case this.selThreeA:
			case this.selThreeB:
					this[this.tabController1].bottomClick(new TMouseEvent("", TMouseEvent.WOZCLICK));
					break;						
		}
	}
	
	public doTabMapA(evt:TSelectEvent)
	{
		if(this.traceTP2) CUtil.trace(" this.doTabMap: " + evt.selection);
		
		// Turn off both in the set selected
		//
		switch(evt.selection)
		{
			case this.selOneA:
			case this.selOneB:
			case this.selOneC:
					this[this.imgTool1][this.selOneA].visible = false;
                    this[this.imgTool1][this.selOneB].visible = false;
                    
                    if(this.selOneC)
    					this[this.imgTool1][this.selOneC].visible = false;
					break;
					
			case this.selTwoA:
			case this.selTwoB:
					this[this.imgTool1][this.selTwoA].visible = false;
					this[this.imgTool1][this.selTwoB].visible = false;
					break;
			
			case this.selThreeA:
			case this.selThreeB:
					this[this.imgTool1][this.selThreeA].visible = false;
					this[this.imgTool1][this.selThreeB].visible = false;
					break;						
		}
		
		//  Turn on the one selected from the set
		//
		this[this.imgTool1][evt.selection].visible = true;
		
	}
	
	
	
	// image map clicked -- spawn a tabController Tab
	//
	public doImageMapB(evt:TSelectEvent)
	{
		if(this.traceTP2) CUtil.trace("doImgMap: " + evt.selection);
		
		switch(evt.selection)
		{
			case this.selOneA:
			case this.selOneB:
			case this.selOneC:
					this[this.tabController2].topClick(new TMouseEvent("", TMouseEvent.WOZCLICK));
					break;
					
			case this.selTwoA:
			case this.selTwoB:
					this[this.tabController2].centerClick(new TMouseEvent("", TMouseEvent.WOZCLICK));
					break;
					
			case this.selThreeA:
			case this.selThreeB:
					this[this.tabController2].bottomClick(new TMouseEvent("", TMouseEvent.WOZCLICK));
					break;												
		}
	}
	
	public doTabMapB(evt:TSelectEvent)
	{
		if(this.traceTP2) CUtil.trace(" this.doTabMap: " + evt.selection);
		
		// Turn off both in the set selected
		//
		switch(evt.selection)
		{
			case this.selOneA:
			case this.selOneB:
			case this.selOneC:
					this[this.imgTool2][this.selOneA].visible = false;
                    this[this.imgTool2][this.selOneB].visible = false;
                    
                    if(this.selOneC)
					    this[this.imgTool2][this.selOneC].visible = false;
					break;
					
			case this.selTwoA:
			case this.selTwoB:
					this[this.imgTool2][this.selTwoA].visible = false;
					this[this.imgTool2][this.selTwoB].visible = false;
					break;
			
			case this.selThreeA:
			case this.selThreeB:
					this[this.imgTool2][this.selThreeA].visible = false;
					this[this.imgTool2][this.selThreeB].visible = false;
					break;						
		}
		
		//  Turn on the one selected from the set
		//
		this[this.imgTool2][evt.selection].visible = true;
		
	}
	
}