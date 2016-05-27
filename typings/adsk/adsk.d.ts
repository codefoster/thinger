/// <reference path="core/application.d.ts"/>
/// <reference path="fusion/fusion.d.ts"/>

declare var adsk:Autodesk;

interface Autodesk {
    debug:boolean;
    terminate();
    objectTypes;
    createObject(handle, expectedType);
    core:Core;
    fusion:Fusion;
}

interface Core {
    Application:Application;
}

interface Fusion {
    Design:Design;
    BRepBody:BRepBody;
}

//TODO: bring all enums (defined in the individual files) into here inside of the Core and Fusion interfaces
