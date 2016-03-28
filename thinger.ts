/// <reference path="typings/adsk/adsk.d.ts"/>
/// <reference path="typings/adsk/fusion/brep.d.ts"/>

class Thinger {
    design: Design;

    constructor(adsk: Autodesk) {
        let app = adsk.core.Application.get();
        let ui = app.userInterface;
        this.design = adsk.fusion.Design.cast(app.activeProduct);

        //create a custom 'extension method' on a BRepBody 
        adsk.fusion.BRepBody.sayHi = () => { alert('hi from sayHi'); }
        
    }

    //experimenting with the options argument method here
    makeCube(options: { width: number, depth: number, height: number } = {width:15,depth:15,height:15}) {
        
    }

    sayHi() {
        debugger;
        alert('hi');
    }


}
