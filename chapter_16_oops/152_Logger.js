export default class Logger {
    log(message) {
        console.log("Log: " + message);
    }   
    error(message) {
        console.error("Error: " + message);
    }
    warn(message) {
        console.warn("Warning: " + message);
    }
}