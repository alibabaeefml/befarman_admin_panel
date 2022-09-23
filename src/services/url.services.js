const urlGenerator = (urls) => {
    return function(routeAddress, parameters) {
        let urlPath = urls[routeAddress].split("/");
        let newPath = [];
        for (const iterator of urlPath) {
            if (iterator.startsWith(":")) {
                if (iterator.endsWith("?")) {
                    if (parameters.hasOwnProperty(iterator.slice(1, -1))) {
                        newPath.push(parameters[iterator.slice(1, -1)]);
                    }
                } else {
                    console.assert(parameters.hasOwnProperty(iterator.slice(1)), 'parameter "' + iterator.slice(1) + '" not specified in parameters.')
                    newPath.push(parameters[iterator.slice(1)]);
                }
            } else {
                newPath.push(iterator);
            }
        }
        return '/api/v1/' + newPath.join("/");
    }
};

export {
    urlGenerator
}