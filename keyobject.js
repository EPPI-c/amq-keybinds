export {
    makeKeyObject,
    makeKeyObjectsAllModifiers,
    inKeys,
    isEqual
};

function makeKeyObject(code, ctrlKey = false, altKey = false, metaKey = false, shiftKey = false) {
    return {
        code: code,
        ctrlKey: ctrlKey,
        altKey: altKey,
        metaKey: metaKey,
        shiftKey: shiftKey
    }
};

function makeKeyObjectsAllModifiers(code) {
    var keyObjects = []
    var options = [false, true]
    for (var ctrlKey of options)
        for (var altKey of options)
            for (var metaKey of options)
                for (var shiftKey of options)
                    keyObjects.push(makeKeyObject(code, ctrlKey, altKey, metaKey, shiftKey))
    return keyObjects
};

function inKeys(key, keys) {
    var isIn = false
    for (var otherKey of keys) {
        if (isEqual(key, otherKey)) {
            isIn = true
            break
        }
    }
    return isIn
};

function isEqual(key1, key2) {
    return key1.code === key2.code
        && !!key1.ctrlKey === !!key2.ctrlKey
        && !!key1.metaKey === !!key2.metaKey
        && !!key1.shiftKey === !!key2.shiftKey
};
