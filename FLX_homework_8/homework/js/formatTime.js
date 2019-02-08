// Task #7
function formatTime(min) {
    const days = Math.floor(min / 1440);
    const hours = Math.floor((min - (days * 1440)) / 60);
    const minutes = min - (days * 1440) - (hours * 60);
    
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`
}


formatTime(120);
