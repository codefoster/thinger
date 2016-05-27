/// <reference path="typings/adsk/adsk.d.ts"/>
/// <reference path="typings/adsk/fusion/brep.d.ts"/>
/// <reference path="typings/adsk/core/userInterface.d.ts"/>

class Thinger {
    config: Object;
    design: Design;
    ui: UserInterface;
    constructor(adsk: Autodesk) {
        let app = adsk.core.Application.get();
        this.ui = app.userInterface;
        this.design = adsk.fusion.Design.cast(app.activeProduct);

        //create a custom 'extension method' on a BRepBody 
        adsk.fusion.BRepBody.sayHi = () => { alert('hi from sayHi'); }
    }

    //experimenting with the options argument method here
    makeCube(options: { width: number, depth: number, height: number } = { width: 15, depth: 15, height: 15 }) {
        let selection = this.ui.selectEntity('Select a body', 'Bodies');

    }

    sayHi() {
        this.ui.messageBox('in thinger.js');
    }

    readConfig() {
        try {
            this.ab2str(adsk.readFile('c:\\temp\\junk\\.thinger'));
            // this.ui.messageBox(JSON.stringify(this.config));
        }
        catch (e) {
            this.ui.messageBox(e);
        }
    }

    writeConfig() {
        adsk.writeFile('c:\\temp\\junk\\.thinger', JSON.stringify(this.config));
    }

    ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    }

}
