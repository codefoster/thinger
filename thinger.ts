class Thinger {
    private design;
    
    constructor(adsk:AutoDeskFusion) {
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