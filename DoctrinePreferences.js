/*
 * Copyright (c) 2013-2014 Minkyu Lee. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of Minkyu Lee. The intellectual and technical concepts
 * contained herein are proprietary to Minkyu Lee and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Minkyu Lee (niklaus.lee@gmail.com).
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, regexp: true */
/*global define, $, _, window, appshell, staruml */

define(function (require, exports, module) {
    "use strict";

    var AppInit           = app.getModule("utils/AppInit"),
        Core              = app.getModule("core/Core"),
        PreferenceManager = app.getModule("core/PreferenceManager");

    var preferenceId = "doctrine";
    
    var doctrinePreferences = {
        "doctrine.gen": {
            text: "Doctrine 2 Code Generation",
            type: "Section"
        },
        "doctrine.gen.phpDoc": {
            text: "PHPDoc",
            description: "Generate PHPDoc comments.",
            type: "Check",
            default: true
        },
        "doctrine.gen.useTab": {
            text: "Use Tab",
            description: "Use Tab for indentation instead of spaces.",
            type: "Check",
            default: false
        },
        "doctrine.gen.indentSpaces": {
            text: "Indent Spaces",
            description: "Number of spaces for indentation.",
            type: "Number",
            default: 4
        },
        "doctrine.gen.classExtension": {
            text: "Append to class filename",
            description: "Insert value into class filename extensions (e.g. MyClass.class.php)",
            type: "String",
            default: ".class"
        },
        "doctrine.gen.interfaceExtension": {
            text: "Append to interface filename",
            description: "Insert value into interface filename extensions (e.g. MyInterface.interface.php)",
            type: "String",
            default: ".interface"
        },
        "doctrine.rev": {
            text: "Doctrine 2 Reverse Engineering",
            type: "Section"
        },
        "doctrine.rev.association": {
            text: "Use Association",
            description: "Reverse Doctrine 2 Fields as UML Associations.",
            type: "Check",
            default: true
        },
        "doctrine.rev.publicOnly": {
            text: "Public Only",
            description: "Reverse public members only.",
            type: "Check",
            default: false
        },
        "doctrine.rev.typeHierarchy": {
            text: "Type Hierarchy Diagram",
            description: "Create a type hierarchy diagram for all classes and interfaces",
            type: "Check",
            default: true
        },
        "doctrine.rev.packageOverview": {
            text: "Package Overview Diagram",
            description: "Create overview diagram for each package",
            type: "Check",
            default: true
        },
        "doctrine.rev.packageStructure": {
            text: "Package Structure Diagram",
            description: "Create a package structure diagram for all packages",
            type: "Check",
            default: true
        }
    };
    
    function getId() {
        return preferenceId;
    }

    function getGenOptions() {
        return {
            phpDoc       : PreferenceManager.get("doctrine.gen.phpDoc"),
            useTab        : PreferenceManager.get("doctrine.gen.useTab"),
            indentSpaces  : PreferenceManager.get("doctrine.gen.indentSpaces"),
            classExtension : PreferenceManager.get("doctrine.gen.classExtension"),
            interfaceExtension : PreferenceManager.get("doctrine.gen.interfaceExtension")
        };
    }

    function getRevOptions() {
        return {
            association      : PreferenceManager.get("doctrine.rev.association"),
            publicOnly       : PreferenceManager.get("doctrine.rev.publicOnly"),
            typeHierarchy    : PreferenceManager.get("doctrine.rev.typeHierarchy"),
            packageOverview  : PreferenceManager.get("doctrine.rev.packageOverview"),
            packageStructure : PreferenceManager.get("doctrine.rev.packageStructure")
        };
    }

    AppInit.htmlReady(function () {
        PreferenceManager.register(preferenceId, "Doctrine", doctrinePreferences);
    });

    exports.getId         = getId;
    exports.getGenOptions = getGenOptions;
    exports.getRevOptions = getRevOptions;

});
