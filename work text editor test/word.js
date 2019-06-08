function changeAlign(arg)	{
	document.getElementById("text").style.textAlign = arg;
}
function changeSize(arg)	{
	document.getElementById("text").style.fontSize = arg;
}
function dropMenu(id)	{
	document.getElementById(id).style.visibility = "visible";
}
function hideDropMenu(id)	{
	document.getElementById(id).style.visibility = "hidden";
}
function changeFamily(arg)	{
	document.getElementById("text").style.fontFamily = arg;
}

var italic = false;
var bold = false;
var underline = false;
var strike = false;
var autoReplace = true;
var roundingValue;

function chnageRoundingValue(value)	{
	if ((value == "") || (value == null))	{
		roundingValue = null;
	} else {
		roundingValue = Math.abs(value);
	}
}

function changeAnglesType(type)	{
	angles = type;
}

function changeAutoReplaceSettings()	{
	if (autoReplace == false)	{
		autoReplace = true;
		document.getElementById("changeAutoReplaceStatus").innerHTML = "&nbsp; Auto replace on";
		document.getElementById("changeAutoReplaceStatus").title = "Auto replace enabled. Click to disabled it";
		document.getElementById("status_image").src = "images/switch-on.png";
		document.getElementById("myonoffswitch").checked = true;
	} else if (autoReplace == true)	{
		autoReplace = false;
		document.getElementById("changeAutoReplaceStatus").innerHTML = "&nbsp; Auto replace off";
		document.getElementById("changeAutoReplaceStatus").title = "Auto replace disabled. Click to enable it";
		document.getElementById("status_image").src = "images/switch-off.png";
		document.getElementById("myonoffswitch").checked = false;
	}
}

var documentStyleBgColor = "rgb(34,177,76)";
var documentStyleColor = "white";

function changeTheme(theme)	{
	if (theme == "shado-modern")	{
		// for the bold, italic, underline
		documentStyleBgColor = "rgb(255,242,0)";
		documentStyleColor = "black";

		// for the top and bottom of the document
		document.getElementsByClassName("toolbar")[0].style.background = "rgb(34,177,76)";
		document.getElementsByClassName("doc_info")[0].style.background = "rgba(34,177,76,.8)";

		// Settings alert
		getElement("title_bar_settings").style.background = "rgb(34,177,76)";
		getElement("tab").style.background = "rgb(34,177,76)";
		getElement("apply_btn_2").style.background = "rgb(34,177,76)";
		getElement("settings").style.borderColor = "rgb(34,177,76)";

		// for the menus
		var menu = document.getElementsByClassName("sub_menu");
		for (let i = 0; i < menu.length; i++)	{
			menu[i].style.background = "rgb(255,242,0)";
			menu[i].style.color = "black";
		}

		// for the Shado logo
		var logo = document.getElementsByClassName("sub_logo");
		for (let i = 0; i < logo.length; i++)	{
			logo[i].style.color = "rgb(255,242,0)";
		}
	} else if (theme == "shado-classic")	{
		// for the bold, italic, underline
		documentStyleBgColor = "rgb(34,177,76)";
		documentStyleColor = "white";

		// for the top and bottom of the document
		document.getElementsByClassName("toolbar")[0].style.background = "rgba(181,230,29,.5)";
		document.getElementsByClassName("doc_info")[0].style.background = "rgba(181,230,29,.5)";

		// Settings alert
		getElement("title_bar_settings").style.background = "rgb(34,177,76)";
		getElement("tab").style.background = "rgb(34,177,76)";
		getElement("apply_btn_2").style.background = "rgb(34,177,76)";
		getElement("settings").style.borderColor = "rgb(34,177,76)";

		// for the menus
		var menu = document.getElementsByClassName("sub_menu");
		for (let i = 0; i < menu.length; i++)	{
			menu[i].style.background = "rgb(34,177,76)";
			menu[i].style.color = "white";
		}

		// for the Shado logo
		var logo = document.getElementsByClassName("sub_logo");
		logo[0].style.color = "rgb(34,177,76)";
		logo[1].style.color = "rgb(255,242,0)";
		logo[2].style.color = "rgb(34,177,76)";
		logo[3].style.color = "rgb(255,242,0)";
	} else if (theme == "shado-blue")	{
		// for the bold, italic, underline
		documentStyleBgColor = "rgb(0, 162, 232)";
		documentStyleColor = "white";

		// for the top and bottom of the document
		document.getElementsByClassName("toolbar")[0].style.background = "lightblue";
		document.getElementsByClassName("doc_info")[0].style.background = "lightblue";

		// Settings alert
		getElement("title_bar_settings").style.background = "rgb(0, 162, 232)";
		getElement("tab").style.background = "rgb(0, 162, 232)";
		getElement("apply_btn_2").style.background = "rgb(0, 162, 232)";
		getElement("settings").style.borderColor = "rgb(0, 162, 232)";

		// for the menus
		var menu = document.getElementsByClassName("sub_menu");
		for (let i = 0; i < menu.length; i++)	{
			menu[i].style.background = "rgb(0, 162, 232)";
			menu[i].style.color = "white";
		}

		// for the Shado logo
		var logo = document.getElementsByClassName("sub_logo");
		for (let i = 0; i < logo.length; i++)	{
			logo[i].style.color = "rgb(0, 162, 232)";
		}
	}
}

function styleBold()	{
	if (bold == false)	{
		document.getElementById("text").style.fontWeight = "bold";
		bold = true;
		document.getElementById("bold").style.backgroundColor = documentStyleBgColor;
		document.getElementById("bold").style.color = documentStyleColor;
	} else	{
		document.getElementById("text").style.fontWeight = "";
		bold = false;
		document.getElementById("bold").style.backgroundColor = "transparent";
		document.getElementById("bold").style.color = "black";
	}
}

function styleItalic()	{
	if (italic == false)	{
		document.getElementById("text").style.fontStyle = "italic";
		italic = true;
		document.getElementById("italic").style.backgroundColor = documentStyleBgColor;
		document.getElementById("italic").style.color = documentStyleColor;
	} else	{
		document.getElementById("text").style.fontStyle = "";
		italic = false;
		document.getElementById("italic").style.backgroundColor = "transparent";
		document.getElementById("italic").style.color = "black";
	}
}

function styleUnderline()	{
	if (underline == false)	{
		document.getElementById("text").style.textDecoration = "underline";
		underline = true;
		document.getElementById("underline").style.backgroundColor = documentStyleBgColor;
		document.getElementById("strike").style.backgroundColor = "transparent";
		document.getElementById("underline").style.color = documentStyleColor;
		document.getElementById("strike").style.color = "black";
	} else	{
		document.getElementById("text").style.textDecoration = "none";
		underline = false;
		document.getElementById("underline").style.backgroundColor = "transparent";
		document.getElementById("underline").style.color = "black";
	}
}

function styleStrike()	{
	if (strike == false)	{
		document.getElementById("text").style.textDecoration = "line-through";
		strike = true;
		document.getElementById("strike").style.backgroundColor = documentStyleBgColor;
		document.getElementById("underline").style.backgroundColor = "transparent";
		document.getElementById("strike").style.color = documentStyleColor;
		document.getElementById("underline").style.color = "black";
	} else	{
		document.getElementById("text").style.textDecoration = "none";
		strike = false;
		document.getElementById("strike").style.backgroundColor = "transparent";
		document.getElementById("strike").style.color = "black";
	}
}

function changeColor(thecolor)	{
	document.getElementById("text").style.color = thecolor;
}

function autoCalculate()	{
	var whatTosum = window.getSelection();
	var str = whatTosum.toString();
	var number;
	if (roundingValue != null)	{
		number = round(eval(str), roundingValue);
	} else {
		number = eval(str);
	}
	var newValue = document.getElementById("text").value + " = " + number;
	document.getElementById("text").value = newValue;
}

var keyBind = 18;
window.addEventListener("keyup", function(event)	{
	if (event.keyCode == keyBind)	{
		//window.alert("Alt pressed");
		autoCalculate();
	}
});

function calculateMyLog()	{
	var whatToLog = document.getElementById("text").value;
	var logArray = whatToLog.split("_");
	for (let i = 0; i < logArray.length; i++)	{
		if (logArray[i] == "e")	{
			logArray[i] = Math.E;
		}
	}
	var answer = Math.log(logArray[2]) / Math.log(logArray[1]);
	var newValue = whatToLog + " = " + answer;
	document.getElementById("text").value = newValue;

}

function power()	{
	var whatToLog = window.getSelection().toString();
	var logArray = whatToLog.split("^");
	for (let i = 0; i < logArray.length; i++)	{
		if (logArray[i] == "e")	{
			logArray[i] = Math.E;
		}
	}
	var answer = Math.pow(logArray[0], logArray[1]);
	var newValue = whatToLog + " = " + answer;
	document.getElementById("text").value = newValue;

}

function saveTextAsFile()
{
    var textToSave = document.getElementById("text").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("title").value;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function loadFileAsText()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent)
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("text").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

function copyText()	{
	var copyText = document.getElementById("text");
	copyText.select();
	return document.execCommand("Copy");
}

function detectPrime()	{
	var number = window.getSelection().toString();
	var cond;
	var conditionNumber = 0;

	for (let i = 0; i <= 9; i++)	{
		if (i == number)	{
			continue;
		};

		if (number % i != 0)	{
			conditionNumber = conditionNumber;
		} else	if (number % i == 0)	{
			conditionNumber += 1;
		}
	}

	if (conditionNumber > 1)	{
		cond = false;
	} else	{
		cond = true;
	}

	document.getElementById("text").value = document.getElementById("text").value + " " + cond;
}

function countWords()	{
	var data = document.getElementById("text").value;
	var dataArray = data.split(" ");
	var dataArray2 = data.split("");
	var paragraphs = data.split("\n");
	document.getElementById("words").innerHTML = "<b>" + dataArray.length + "</b> words";
	document.getElementById("char").innerHTML = "<b>" + dataArray2.length + "</b> characters";
	document.getElementById("par").innerHTML = "<b>" + paragraphs.length + "</b> lines";
}

cmd_visibility = false;

function showCMD()	{
	if (cmd_visibility == false)	{
		document.getElementById("command").style.visibility = "visible";
		cmd_visibility = true;
	} else {
		document.getElementById("command").style.visibility = "hidden";
		cmd_visibility = false;
	}
}

var time = 5;

window.addEventListener("keypress", function(event)	{
	var value1;
	if ((event.keyCode == 13) && (cmd_visibility == true))	{
		var exe = document.getElementById("cmd");
		if (exe.value == "exit")	{
			window.close();
		} else if (exe.value == "help")	{
			value1 = "This command line uses JavaScript. You can enter any javascript command to be executed. This cmd also supports Shado frameware v1.0.5\n\n\n Here is a list of commands:\n\n exit (close current window)\n\n log(x) (console.log(x))\n\n write(id, arg) (document.getElementById(id).innerHTML = arg)\n\n";
			time = 15;
		} else if (exe.value == "expand")	{
			document.getElementById("cmd").style.width = "500px";
			document.getElementById("command").style.width = "500px";
			document.getElementById("command").style.marginLeft = "1400px";
			value1 = "command line expanded by 500px \n\n";
		} else	{
			eval(exe.value);
			value1 = exe.value + "\n\n command has been executed successfully!\n\n Please wait before entering another command ...\n\n command will clear after\n\n ";
		}
		var myvar = setInterval(function()	{
						time -= 1;
						exe.value = value1 + "\n" +time + " seconds";
					}, 1000);

		setTimeout(function()	{
			clearInterval(myvar);
			exe.value = '';
			time = 5;
		},time * 1000)
	};
});

window.addEventListener("keypress", function(event)	{
	if (event.keyCode == 87)	{
		window.alert("You pressed Alt");
	}
}, false);

function replaceAll(myid)	{
	if (autoReplace == true)	{
		replaceSomething('delta', 'Δ', myid);
		replaceSomething('-->', '→', myid);
		replaceSomething('==>', '⇒', myid);
		replaceSomething('<->', '⇋', myid);
		replaceSomething('beta', 'β', myid);
		replaceSomething('alpha', 'α', myid);
		replaceSomething('teta', 'θ', myid);
		replaceSomething('sigma', 'σ', myid);
		replaceSomething('micro', 'μ', myid);
		replaceSomething('pi', 'π', myid);
		replaceSomething('Pi', 'π', myid);
		replaceSomething(':\)', '🙂', myid);
		replaceSomething('<3', '❤️', myid);
		replaceSomething(':\(', '☹️', myid);
		replaceSomething('rho', 'ρ', myid);
		replaceSomething('celsius', '°C', myid);
		replaceSomething('xD', '😂', myid);
		replaceSomething(':|', '😐', myid);
		replaceSomething(':p', '😛', myid);
		replaceSomething(';\)', '😉', myid);
		replaceSomething('integral', '∫', myid);
		replaceSomething('proportionnel', '∝', myid);
		replaceSomething('<--', '←', myid);
		replaceSomething('approx\.', '≈', myid);
		replaceSomething('omega', 'Ω', myid);
		replaceSomething('ohm', 'Ω', myid);
		replaceSomething('O/', 'Ø', myid);
		replaceSomething('!=', '≠', myid);
	}
}

function replaceSomething(replace, replaceWith, id)	{
	var val = document.getElementById(id).value;
	var valArray = val.split(" ");
	for (let i = 0; i < valArray.length; i++)	{
		if (valArray[i] == replace)	{
			valArray[i] = replaceWith;
		}
	}
	document.getElementById(id).value = valArray.join(" ");
}

function convertToHTML()	{
	var initialValue = document.getElementById("text").value;
	var converted = '<html>\n	<head>\n		<title>'
	+ document.getElementById("title").value +
	'</title>\n		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n		<meta http-equiv="refresh" content="">\n<script src="Main_scripts/shado_JS_frameware.js"></script>\n<style type="text/css">\n</style>\n<script language="JavaScript" type="text/javascript">\n<!--\n//using Shado Javascript Frameware v1.0.5\n//#include shado_JS_frameware\.js\nconsole.log(filename + " is reading shado_JS_frameware.js file properly")\n//-->\n</script>\n	</head>\n	<body style="background-image:' + document.getElementById("document").style.backgroundImage + '">' + '\n		<div>\n			'
	+ initialValue
	+ '\n		</div>\n	</body>\n</html>';
	document.getElementById("text").value = converted;
	changeFamily("Lucida Console");
}

function changebg(color)	{
	document.getElementById("text").style.backgroundColor = color;
}

function findReplace()	{
	var whatToreplace = document.getElementById("text").value;
	var find = document.getElementById("input_find").value;
	var replacWith = document.getElementById("input_replace").value;
	var spliter;
	var number = 0;
	if (find.length > 1)	{
		spliter = " ";
	} else	{
		spliter = "";
	}
	var whatToreplaceArray = whatToreplace.split(spliter);
	for (let i = 0; i < whatToreplaceArray.length; i++)	{
		if (whatToreplaceArray[i] == find)	{
			whatToreplaceArray[i] = replacWith;
			number += 1;
		}
	}

	if (number == 0)	{
		document.getElementById("result").innerHTML = "Replace faild! " + number + " result found.";
		document.getElementById("result").style.color = "red";
	} else	{
		document.getElementById("result").innerHTML = "Replace successful! " + number + " results found.";
		document.getElementById("result").style.color = "green";
	}
	document.getElementById("text").value = whatToreplaceArray.join(spliter);
}

var mouse = {
	x: undefined,
	y: undefined
}

var reposition = false;

window.addEventListener("mousemove", function(event)	{
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener("mousedown", function()	{
	var reposition = true;
});

window.addEventListener("mouseup", function()	{
	var reposition = false;
});

function changePosition()	{
	if (reposition == true)	{
		document.getElementById("replaceAlert").style.marginLeft = mouse.x -500;
		document.getElementById("replaceAlert").style.marginTop = mouse.y - 1200;
	}
}

function zoom(value)	{
	var zoomValue = 8.5 * (value / 100);
	document.getElementById("document").style.width = zoomValue + "in";
	console.log(value);
}

function imagebg()	{
	//var filename = document.getElementById("fileUpload").files[0].pathname;
	var input = document.getElementById("fileUpload");
	var fReader = new FileReader();
	fReader.readAsDataURL(input.files[0]);
	fReader.onloadend = function(event){
		var bg = "url('" + event.target.result; + "')";
		document.getElementById("document").style.backgroundImage = bg;
		document.getElementById("text").style.backgroundColor = "transparent";
}
	/*var neUrl = url.split("\\");
	var truURL = neUrl.join("/"); */

}

function reverse()	{
	var find = document.getElementById('input_find').value;
	var replace = document.getElementById('input_replace').value;

	 document.getElementById('input_replace').value = find;
	 document.getElementById('input_find').value = replace;
}

function changeMargins(a, b)	{
	getElement("text").style.paddingTop = a + "cm";
	getElement("text").style.paddingBottom = a + "cm";
	getElement("text").style.paddingLeft = b + "cm";
	getElement("text").style.paddingRight = b + "cm";
}

function changeLayout(w, h)	{
	getElement("document").style.width = w + "in";
	getElement("document").style.height = h + "in";
}

var googleSearch = false;

function toggleSearch()	{
	if (googleSearch == false)	{
		// Creating iframe
		var iframe = document.createElement("iframe");
		document.querySelector("body").appendChild(iframe);
		iframe.setAttribute("src", "https://www.bing.com/");
		iframe.setAttribute("id", "searchWindow");
		iframe.style.position = "absolute";
		iframe.style.left = 50;
		iframe.style.top = 230;
		iframe.style.width = window.innerWidth / 2 - 50;
		iframe.style.height = "11in";
		document.getElementById("document").style.marginLeft = window.innerWidth / 2;
		document.getElementById("document").style.marginTop = 30;
		document.getElementsByClassName("doc_info")[0].style.zIndex = "10";
		googleSearch = true;
	} else {
		document.getElementById("searchWindow").style.display = "none";
		document.getElementById("document").style.marginLeft = 0;
		googleSearch = false;
	}
}
