export function promiseHash<K extends string, T>(hash: Record<K, Promise<T>>): Promise<Record<K, T>> {
  const keys = Object.keys(hash);
  return Promise.all(keys.map(key => hash[key]))
    .then(list => keys.reduce((acc, key, index) => {
      acc[key] = list[index];
      return acc;
    }, {}) as Record<K, T>);
}

export function wsPromise(ws: WebSocket): Promise<WebSocket> {
  return new Promise(function(resolve, reject) {
    ws.onopen = () => resolve(ws);
    ws.onerror = reject;
  });
}

export function objectMap<T, R>(
  obj: Record<string, T>,
  handler: (value: T, key: string) => R,
): Record<string, R> {
  return Object.keys(obj || {}).reduce((next, name) => {
    next[name] = handler(obj[name], name);
    return next;
  }, {});
};
