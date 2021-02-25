export const createLogger = (debug: boolean) => {
  const log = (type: 'log' | 'dir' | 'error', ...args: unknown[]): void => {
    if (debug) {
      console[type](...args);
    }
  };

  return {
    log: (...args: unknown[]) => log('log', ...args),
    dir: (...args: unknown[]) => log('dir', ...args),
    error: (...args: unknown[]) => log('error', ...args),
  };
};