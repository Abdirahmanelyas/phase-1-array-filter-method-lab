function findMatching(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.name.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

function findMatching(drivers, name) {
    if (!name) {
        return [];
    }
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    if (!letters) {
        return [];
    }
    return drivers.filter(driver => driver.name.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

function findMatching(drivers, name) {
    if (!name) {
        return [];
    }
    return drivers.filter(driver => driver.name && driver.name.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    if (!letters) {
        return [];
    }
    return drivers.filter(driver => driver.name && driver.name.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
function findMatching(drivers, name) {
    if (!name) {
        return [];
    }
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(drivers, letters) {
    if (!letters) {
        return [];
    }
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}
function fuzzyMatch(drivers, letters) {
    if (!letters) {
        return [];
    }
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}


