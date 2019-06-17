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
import { TObject }		from "thermite/TObject";
import { CUtil }        from "util/CUtil";
import { CEFEvent }     from "events/CEFEvent";


export class TAssessIcon extends TObject
{
	//************ Stage Symbols
	
	public Sright:TObject;
	public Swrong:TObject;
	public SplaceKeeper:TObject;
	
	// non-interactive elements
	
	
	//************ Stage Symbols				
	
	    
	constructor()
	{
		super();
		this.init3();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TAssessIconInitialize() {

		this.TObjectInitialize.call(this);
		this.init3();
	}

	public initialize() {

		this.TObjectInitialize.call(this);		
		this.init3();
	}

	private init3() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TAssessIcon:Constructor");

    
		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public onAddedToStage(evt:CEFEvent) {

		console.log("TAssessIcon On Stage");

        super.onAddedToStage(evt);

		this.Sright.visible = false;
		this.Swrong.visible = false;
		this.SplaceKeeper.visible = false;
	}
    


	public showIcon(icon:string) : void
	{
		this.fadeChild(icon,"on",true);
	}		
}
