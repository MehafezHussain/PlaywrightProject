let browser="Chrome";
switch(browser){
    case "Chrome":
    case "Firefox":
    case "Safari":
        console.log("This is a modern browser.");
        break;
    case "Internet Explorer":
        console.log("This is an older browser.");
        break;
    default:
        console.log("Unknown browser.");
}