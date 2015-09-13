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
        "doctrine.gen.bundleSuffix": {
            text: "Bundle suffix",
            description: "Suffix appended at the end of package name.",
            type: "String",
            default: "Bundle"
        },
        "doctrine.gen.entityFolder": {
            text: "Entity directory",
            description: "Will be added to the path of generated files.",
            type: "String",
            default: "Entity"
        },
        "doctrine.gen.defaultPk": {
            text: "Default PK",
            description: "Default primary key for entities.",
            type: "String",
            default: "id"
        },
        "doctrine.gen.unknownType": {
            text: "Unknown type",
            description: "Will be used for unknown variable type.",
            type: "String",
            default: "void"
        },
		"doctrine.gen.mapping": {
            text: "Mapping",
            description: "Type of mapping.",
            type: "Dropdown",
            options: [{text: "Annotations", value: 0}],
            default: 0
        },
        "doctrine.gen.setterChaining": {
            text: "Setters chaining",
            description: "Make setters return $this.",
            type: "Check",
            default: false
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
            description: "Create a type hierarchy diagram for all classes and interfaces.",
            type: "Check",
            default: true
        },
        "doctrine.rev.packageOverview": {
            text: "Package Overview Diagram",
            description: "Create overview diagram for each package.",
            type: "Check",
            default: true
        },
        "doctrine.rev.packageStructure": {
            text: "Package Structure Diagram",
            description: "Create a package structure diagram for all packages.",
            type: "Check",
            default: true
        }
    };
    
    function getId() {
        return preferenceId;
    }

    function getGenOptions() {
        return {
            bundleSuffix       : PreferenceManager.get("doctrine.gen.bundleSuffix"),
            entityFolder       : PreferenceManager.get("doctrine.gen.entityFolder"),
            defaultPk          : PreferenceManager.get("doctrine.gen.defaultPk"),
            unknownType        : PreferenceManager.get("doctrine.gen.unknownType"),
            setterChaining     : PreferenceManager.get("doctrine.gen.setterChaining"),
            phpDoc             : PreferenceManager.get("doctrine.gen.phpDoc"),
            mapping            : PreferenceManager.get("doctrine.gen.mapping"),
            useTab             : PreferenceManager.get("doctrine.gen.useTab"),
            indentSpaces       : PreferenceManager.get("doctrine.gen.indentSpaces")
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
        PreferenceManager.register(preferenceId, "Doctrine 2", doctrinePreferences);
    });

    exports.getId         = getId;
    exports.getGenOptions = getGenOptions;
    exports.getRevOptions = getRevOptions;
});
