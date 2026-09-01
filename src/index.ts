/**
 * Zaby SDK - Hello World API
 */

export interface HelloResponse {
  message: string;
  timestamp: string;
}

/**
 * Returns a simple "Hello, World!" string.
 *
 * @example
 * ```ts
 * import { getHelloWorld } from 'zaby-sdk';
 * console.log(getHelloWorld()); // "Hello, World!"
 * ```
 */
export function getHelloWorld(): string {
  return "Hello, World!";
}

/**
 * Alias for getHelloWorld()
 */
export function helloWorld(): string {
  return getHelloWorld();
}

/**
 * Returns a structured JSON-style response containing the hello message and timestamp.
 *
 * @example
 * ```ts
 * import { getHelloData } from 'zaby-sdk';
 * const res = getHelloData();
 * console.log(res.message); // "Hello, World!"
 * ```
 */
export function getHelloData(): HelloResponse {
  return {
    message: "Hello, World!",
    timestamp: new Date().toISOString(),
  };
}

/**
 * SDK Client instance
 *
 * @example
 * ```ts
 * import { ZabySDK } from 'zaby-sdk';
 * const sdk = new ZabySDK();
 * console.log(sdk.getHelloWorld()); // "Hello, World!"
 * ```
 */
export class ZabySDK {
  /**
   * Returns "Hello, World!"
   */
  public getHelloWorld(): string {
    return getHelloWorld();
  }

  /**
   * Alias for getHelloWorld()
   */
  public hello(): string {
    return getHelloWorld();
  }

  /**
   * Returns structured hello response
   */
  public getHelloData(): HelloResponse {
    return getHelloData();
  }
}

// Default export providing all utilities and the SDK class
export default {
  getHelloWorld,
  helloWorld,
  getHelloData,
  ZabySDK,
};
