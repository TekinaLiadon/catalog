

function switchMy(conditionsObj, a) {
    let result
    if (a === 0) {
        result = conditionsObj[a] ?? false
    } else {
        result = conditionsObj[a] || false
    }
    return result
};