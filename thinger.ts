/// <reference path="typings/adsk/adsk.d.ts"/>

class Thinger {
    private design;
    
    constructor(adsk:Autodesk) {
        let app = adsk.core.Application.get();
        let ui = app.userInterface;
        this.design = adsk.fusion.Design.cast(app.activeProduct);
    }

    makeCube() {
        // design.rootComponent
        this.design
        
    }   
     
    sayHi() {
        debugger;
        alert('hi');
    }
}