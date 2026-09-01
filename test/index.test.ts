import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getHelloWorld, helloWorld, getHelloData, ZabySDK } from '../src/index';

describe('Zaby SDK Unit Tests', () => {
  it('should return "Hello, World!" from getHelloWorld()', () => {
    assert.strictEqual(getHelloWorld(), 'Hello, World!');
  });

  it('should return "Hello, World!" from helloWorld()', () => {
    assert.strictEqual(helloWorld(), 'Hello, World!');
  });

  it('should return valid structured data from getHelloData()', () => {
    const data = getHelloData();
    assert.strictEqual(data.message, 'Hello, World!');
    assert.ok(data.timestamp);
    assert.ok(!isNaN(Date.parse(data.timestamp)));
  });

  it('should return "Hello, World!" from ZabySDK instance methods', () => {
    const sdk = new ZabySDK();
    assert.strictEqual(sdk.getHelloWorld(), 'Hello, World!');
    assert.strictEqual(sdk.hello(), 'Hello, World!');
    assert.strictEqual(sdk.getHelloData().message, 'Hello, World!');
  });
});
