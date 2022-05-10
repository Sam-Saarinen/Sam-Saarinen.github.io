// CREATED BY (S)AM TO LOAD HELPER CLASSES/METHODS AND START INITIAL SCREEN

/*jslint node: true */ //Needed by JSLint to silence warning about global use strict
/*global $, localStorage, document, window*/ //Needed by JSLint to use jQuery loaded globally.
"use strict";
var EVAL_IS_BAD__AVOID_THIS = function (to_eval) {
    try {
        return eval(to_eval)
    }
    catch(e) {
        console.log("Tried to eval:")
        console.log(to_eval)
        console.log("Message:")
        console.log(e.message)
        return "ERROR:__This part corrupted due to a bug.__"
    }
}; //Used to get around JSLint complaints about eval

//+++ Define save, read, and delete helpers.
function saveLocal(key, jsonObject) {
    localStorage[key] = JSON.stringify(jsonObject);
}

function readLocal(key) {
    return JSON.parse(localStorage[key]);
}

function detectSave(key) {
    return (key in localStorage);
}

function clearLocal(key) {
    localStorage.removeItem(key);
}

function clearLocalExcept(exceptionsInput) {
    var keys = [],
        exceptions = [].concat(exceptionsInput), //prevent undefined
        i,
        j,
        key, //Used in for below
        deleteItem,
        exception; //Used in for below

    //get storage keys
    $.each(localStorage, function (key) {
        keys.push(key);
    });

    //loop through keys
    for (i = 0; i < keys.length; i += 1) {
        key = keys[i];
        deleteItem = true;

        //check if key excluded
        for (j = 0; j < exceptions.length; j += 1) {
            exception = exceptions[j];
            if (key === exception) {
                deleteItem = false;
            }
        }

        //delete key
        if (deleteItem) {
            clearLocal(key);
        }
    }
}

//+++ Define Renderable Text - Wrap paragraphs, etc.
function Renderable(scriptString) {
    /*
    * A string that has components that can be dynamically looked up/executed.
    * The normal text is a string, but {{javascript here}} is executed dynamically
    * and because of its commonality, {{condition->renderable}} is a convenient tool
    * for rendering text conditionally.
    */
    this.openDelimiter = '{{';
    this.closeDelimiter = '}}';
    this.conditionalSplitter = '->';
    
    this.scriptString = scriptString;
    
    this.parse = function (parseableString, depth) {
        var firstOpen = parseableString.search(this.openDelimiter),
            firstClose = parseableString.search(this.closeDelimiter),
            parts,
            conditionTrue,
            toReturn;
        if (firstOpen >= 0 && firstClose >= 0 && firstOpen < firstClose) {
            parts = parseableString.split(new RegExp(this.openDelimiter + '([\\s\\S]+)'));
            toReturn = this.parse(parts[0] + this.parse(parts[1], depth + 1), depth);
        } else if ((firstOpen >= 0 && firstClose === -1) || (firstClose >= 0 && depth <= 0)) {
            toReturn = 'String Parsing Error: Unmatched Brackets';
        } else if (firstClose >= 0) {
            //Process the substring up to the first closing bracket.
            parts = (parseableString).split(new RegExp(this.closeDelimiter + '([\\s\\S]*)'));
            if (parts[0].indexOf(this.conditionalSplitter) >= 0) {
                conditionTrue = EVAL_IS_BAD__AVOID_THIS(parts[0].substr(0, parts[0].indexOf(this.conditionalSplitter)));
                if (conditionTrue) {
                    toReturn = parts[0].substr(parts[0].indexOf(this.conditionalSplitter) + this.conditionalSplitter.length) + parts[1];
                } else {
                    toReturn = parts[1];
                }
            } else {
                toReturn = EVAL_IS_BAD__AVOID_THIS(parts[0]) + parts[1];
            }
        } else {
            //No expressions to process.
            toReturn = parseableString;
        }
        return toReturn;
    };
    
    this.conditionalWrap = function (htmlString) {
        //If the string does not begin and end with brackets (force by adding a trailing space)
        //wrap with <p></p>
        if (htmlString[0] === '<' && htmlString[htmlString.length - 1] === '>') {
            return htmlString;
        } else {
            return '<p>' + htmlString + '</p>';
        }
    };
    
    this.toHTML = function () {
        var text = this.parse(this.scriptString, 0);
        return text.split(/\n\s*\n/).map(this.conditionalWrap).join('');
        //Split on double newlines with whitespace in between.
    };
    
    this.toHTMLNoTags = function () {
        var text = this.parse(this.scriptString, 0);
        return text;
    }
}

//+++ Define Choices, Choice Screen, Etc.
function Chooseable(specificationString) {
    var consequenceDelimiter = '->',
        blockDelimiter = ']]]',
        grayDelimiter = ']]',
        parts,
        conditionParts;
    parts = specificationString.split(consequenceDelimiter);
    conditionParts = parts[0].split(blockDelimiter);
    if (conditionParts.length > 1) {
        this.blockConditionString = conditionParts[0]
    } else {
        this.blockConditionString = 'false';
    }
    conditionParts = conditionParts[conditionParts.length - 1].split(grayDelimiter);
    if (conditionParts.length > 1) {
        this.grayConditionString = conditionParts[0];
    } else {
        this.grayConditionString = 'false';
    }
    this.text = new Renderable(conditionParts[conditionParts.length - 1].trim());
    this.next = new Renderable(parts[1].trim());
    this.blocked = false;
    this.grayed = false;
    
    if (parts.length > 2) {
        this.consequence = parts[2];
    } else {
        this.consequence = '';
    }
    
    this.toHTML = function () {
        return this.text.toHTML();
        //Consequences and Next are handled by calling function
    };
    
    this.blocked = function () {
        return EVAL_IS_BAD__AVOID_THIS(this.blockConditionString);
    }
    
    this.grayed = function () {
        return EVAL_IS_BAD__AVOID_THIS(this.grayConditionString);
    }
}

//Define Choice Screen
function ChoiceScreen(scriptText) {
    //Parse the choice, and store the story,
    //  Automatically wrapping paragraphs
    //And list of choices, consequences, nextChoice names.
    var storyDelimiter = new RegExp('___+'),
        storyAndRest = scriptText.split(storyDelimiter),
        choices = storyAndRest[1].trim().split('\n').filter(function(choice) {return choice && choice.trim()}); //Uses fact choice is defined and has non-zero trim length.
    this.story = new Renderable(storyAndRest[0].trim());
    this.choices = choices.map(function (choice) {return new Chooseable(choice); });
}

//+++ Render the story and clickable options corresponding to a choice.
function renderChoice(someChoice) {
    //Render Menu Bar, depending on story content
    htmlString = '';
    for(i = 0; i < game.menu.length; i++){
        if(game.menu[i].active){
            htmlString += "<div class='menubutton " + game.menu[i].name + "', style='background-image:url(\"" + game.menu[i].backgroundURL + "\");'></div>";
        }
    }
    $(".menubar").html(htmlString);
    //Add event listeners to the menu buttons
    for ( i = 0; i < game.menu.length; i++){
        var menuClosure = function(pageName) {
            return function() {
                game.returnPage = game.currentChoiceName; //Just in Case
                loadChoice(pageName);
            }
        }
        $('.' + game.menu[i].name).click(menuClosure(game.menu[i].choicePath));
    }
    
    //Render Choices
    var htmlString = '', i = 0, prefix='choice';
    htmlString += '<div class="narrative">' + someChoice.story.toHTML() + '</div>';
    for (i = 0; i < someChoice.choices.length; i += 1) {
        if (!someChoice.choices[i].blocked()) {
            htmlString += '<div class="choice" id="' + prefix + i + '">' + someChoice.choices[i].toHTML() + '</div>';
        }
    }
    $(".nonmenu").html(htmlString);
    //Attach choice events.
    for (i = 0; i < someChoice.choices.length; i += 1) {
        if (someChoice.choices[i].grayed()) {
            $('#' + prefix + i).addClass('grayed-out');
        } else {
            var generateClosure = function (next, consequence) {
                return function () {
                    var nextChoice;
                    EVAL_IS_BAD__AVOID_THIS(consequence);
                    $('.nonmenu').html("loading...");
                    if ($('.menubar').hasClass('is-hidden')) {
                        $('.nonmenu').addClass('top-aligned');
                    }
                    $('body').scrollTop(0); //Reset the scrollbar to the top.
                    nextChoice = next.toHTMLNoTags().trim();//next is a renderable to allow dynamic next choice lookup.
                    game.previousChoice = game.currentChoiceName;
                    game.currentChoiceName = nextChoice;
                    saveGame()
                    loadChoice(nextChoice);
                };
            }; // immediately evaluated function expression model used to keep next and consequence distinct in loop.
            var next = someChoice.choices[i].next;
            var consequence = someChoice.choices[i].consequence;
            $('#' + prefix + i).click(generateClosure(next, consequence));
        }
    }
    // Attach a menu-hiding option to the non-menu portion
    $(".narrative").click(function () {
        var navbar = $('.menubar'),
            rest = $('.nonmenu');
        if (navbar.hasClass('is-hidden')) {
            navbar.removeClass('is-hidden');
            rest.removeClass('top-aligned');
        } else {
            navbar.addClass('is-hidden');
            rest.addClass('top-aligned');
        }
    });
}

// Load Choices with Caching
var parsedChoices = {};
function loadChoice(filePath) {
    var longPath = 'story/' + filePath + '.txt';
    if (parsedChoices.hasOwnProperty(longPath)) { //Load cached choices if possible.
        renderChoice(parsedChoices[longPath]);
    } else {
        $.get(longPath, function (data) {
            parsedChoices[longPath] = new ChoiceScreen(data);
            renderChoice(parsedChoices[longPath]);
        }).fail(function() {
            console.log('Failed to laod: ' + longPath)
            if(filePath!='debug/noload'){
                loadChoice('debug/noload');
            }
        });
    }
}

//Define Menu Option
function MenuItem(name, backgroundURL, choicePath, active){
    //name(alphabetic, no spaces), URL to image, path to menu Choosable, and boolean if they should be shown.
    this.name = name;
    this.backgroundURL = backgroundURL;
    this.choicePath = choicePath;
    this.active = active;
}

//Define GameSave Object
//GameSave contains no functions (allowing simple JSON export)
function GameSave() {
    this.currentChoiceName = 'start';
    this.previousChoice = this.currentChoiceName;
    this.menu = [
        new MenuItem('reset', "https://sam-saarinen.github.io/assets/reset.png", 'menu/reset', true),
        new MenuItem('about', "https://sam-saarinen.github.io/assets/about.png", 'menu/about', true)
    ];
}
//Purely for convenience
var game_save_key = "holidays-2018";
function saveGame() {
    saveLocal(game_save_key, game);
}
function loadGame() {
    if (detectSave(game_save_key)) {
        game=readLocal(game_save_key);
    }
}
function setMenuItem(name, value){
    for(var i = 0; i < game.menu.length; i++){
        if(game.menu[i].name === name) {
            game.menu[i].active = value;
        }
    }
}

var game = new GameSave(); loadGame(); //Used globally.

$(document).ready(function () { //jQuery calls this block once everything is loaded.
    //clearLocalExcept([]); //Used to do hard reset of data while developing.
    //Add event listener to autohide menubar
    var c, currentScrollTop = 0,
        navbar = $('.menubar'),
        rest = $('.nonmenu');
    
    //  Set scroll-based hiding of menu.
    //  renderChoice() creates click-based listener.
    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass("is-hidden");
        } else if (c > currentScrollTop && !(a <= b)) {
            navbar.removeClass("is-hidden");
            rest.removeClass('top-aligned');
        }
        c = currentScrollTop;
    });

    //Load the screen
    loadChoice(game.currentChoiceName);
});

// EXTRA (CUSTOM) GAME FUNCTIONS HERE

//For capitalization
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
String.prototype.capitalize = function() {
    return this.split(" ").map(inString => inString.capitalizeFirstLetter()).join(' ')
}