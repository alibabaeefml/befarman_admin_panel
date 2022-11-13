export declare interface Url {
  [key: string]: string;
}

declare interface Parameter {
  [key: string]: string | number;
}

export const urlGenerator = (urls: Url) => {
  return function (routeAddress: string, parameters: Parameter = {}) {
    const urlPath = urls[routeAddress].split("/");
    const newPath = [];
    for (const iterator of urlPath) {
      if (iterator.startsWith(":")) {
        if (iterator.endsWith("?")) {
          if (
            Object.prototype.hasOwnProperty.call(
              parameters,
              iterator.slice(1, -1)
            )
          ) {
            newPath.push(parameters[iterator.slice(1, -1)]);
          }
        } else {
          console.assert(
            Object.prototype.hasOwnProperty.call(parameters, iterator.slice(1)),
            'parameter "' + iterator.slice(1) + '" not specified in parameters.'
          );
          newPath.push(parameters[iterator.slice(1)]);
        }
      } else {
        newPath.push(iterator);
      }
    }
    return "/api/v1/" + newPath.join("/");
  };
};
