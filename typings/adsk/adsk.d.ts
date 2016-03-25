/// <reference path="core/application.d.ts"/>
/// <reference path="fusion/fusion.d.ts"/>

declare var adsk:Autodesk;

interface Autodesk {
    core:Core;
    fusion:Fusion;
}

interface Core {
    Application:Application;
}

interface Fusion {
    Design:Design;
}