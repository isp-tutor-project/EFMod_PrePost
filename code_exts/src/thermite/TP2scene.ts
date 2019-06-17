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

import { TRoot }			from "thermite/TRoot";
import { TObject }			from "thermite/TObject";
import { TScene }			from "thermite/TScene";
import { TSelectEvent }     from "thermite/events/TSelectEvent";
import { TMouseEvent } 		from "thermite/events/TMouseEvent";

import { CUtil } 			from "util/CUtil";
import { CONST }            from "util/CONST";

import MovieClip     		  = createjs.MovieClip;
import Timeline     		  = createjs.Timeline;
import DisplayObject 		  = createjs.DisplayObject;
import DisplayObjectContainer = createjs.Container;


export class TP2Scene extends TScene
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
    
	public fCompleteA:boolean = false;
    public fCompleteB:boolean = false;    

    private imgToolA:Function;
    private imgToolB:Function;
    private tabtoolA:Function;
    private tabtoolB:Function;
    private tabDoneA:Function;
    private tabDoneB:Function;
    
    private isPreconfigured:boolean;


	protected sType:string;

	public cvsEncoding:Array<string>;

   	/**
	 * 
	 */
	constructor() 
	{
		super();
		this.init5();
	}
	
	
	/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
	/* ######################################################### */

	public TP2SceneInitialize() {

        this.TSceneInitialize.call(this);
        this.init5();
    }

    public initialize() {

        this.TSceneInitialize.call(this);		
        this.init5();
    }

    private init5() {
		
		if(this.traceTP2) CUtil.trace("TP2Scene:Constructor");		
        
        this.selOneC = null;

		// Setup the scene-name type extension - This is pretest specific 
		// to allow dereferencing other scenes based upon test type
		
			 if(this.tutorDoc.testFeatureSet("FTR_TYPEA"))  this.sType = "_A";
		else if(this.tutorDoc.testFeatureSet("FTR_TYPEB"))  this.sType = "_B";
                                                       else this.sType = "";
                                                       
        this.cvsEncoding = ["NC","CVS","CVS_WV","SC","CVS_WV","SC","HOTAT","MC"];                                                       
    }

	/* ######################################################### */
	/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


    // 
    // 
    public onCreate() : void
	{
        super.onCreate();
    }


    public Destructor() : void
    {
        super.Destructor();

        this[this.imgTool1].off(TSelectEvent.WOZIMGSELECT, this.imgToolA);			
        this[this.imgTool2].off(TSelectEvent.WOZIMGSELECT, this.imgToolB);			
        this[this.tabController1].off(TSelectEvent.WOZTABSELECT, this.tabtoolA);
        this[this.tabController2].off(TSelectEvent.WOZTABSELECT, this.tabtoolB);				  
     		
		this[this.tabController1].off("Done", this.tabDoneA);			
        this[this.tabController2].off("Done", this.tabDoneB);	
    }


    // This must be called after the children are added to the control.
    // 
    public wireControls() : void
	{
        this.imgToolA = this[this.imgTool1].on(TSelectEvent.WOZIMGSELECT,  this.doImageMapA, this);			
        this.imgToolB = this[this.imgTool2].on(TSelectEvent.WOZIMGSELECT,  this.doImageMapB, this);			
        this.tabtoolA = this[this.tabController1].on(TSelectEvent.WOZTABSELECT,  this.doTabMapA, this);
        this.tabtoolB = this[this.tabController2].on(TSelectEvent.WOZTABSELECT,  this.doTabMapB, this);				  
     		
		this.tabDoneA = this[this.tabController1].on("Done",  this.questionFinishedA, this);			
        this.tabDoneB = this[this.tabController2].on("Done",  this.questionFinishedB, this);	
    }


	public questionFinishedA(evt:Event)
	{			
		CUtil.trace("#### QuestionA finished");
	
		this.fCompleteA = true;
		
		if(this.fCompleteB)
		{
            this.$questionFinished();
		}
	}
	
	public questionFinishedB(evt:Event)
	{
		CUtil.trace("#### QuestionB finished");
		
		this.fCompleteB = true;
		
		if(this.fCompleteA)
		{
            this.$questionFinished();
		}
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
					this[this.tabController1].topClick(new TMouseEvent("", CONST.BUTTON_CLICK));
					break;
					
			case this.selTwoA:
			case this.selTwoB:
					this[this.tabController1].centerClick(new TMouseEvent("", CONST.BUTTON_CLICK));
					break;
					
			case this.selThreeA:
			case this.selThreeB:
					this[this.tabController1].bottomClick(new TMouseEvent("", CONST.BUTTON_CLICK));
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
					this[this.tabController2].topClick(new TMouseEvent("", CONST.BUTTON_CLICK));
					break;
					
			case this.selTwoA:
			case this.selTwoB:
					this[this.tabController2].centerClick(new TMouseEvent("", CONST.BUTTON_CLICK));
					break;
					
			case this.selThreeA:
			case this.selThreeB:
					this[this.tabController2].bottomClick(new TMouseEvent("", CONST.BUTTON_CLICK));
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