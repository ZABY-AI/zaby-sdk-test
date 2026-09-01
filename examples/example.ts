import { getHelloWorld, helloWorld, getHelloData, ZabySDK } from '../src/index';

console.log('--- Testing SDK Functions ---');
console.log('1. getHelloWorld():', getHelloWorld());
console.log('2. helloWorld():   ', helloWorld());

console.log('\n--- Testing SDK Structured Data ---');
const data = getHelloData();
console.log('3. getHelloData(): ', data);

console.log('\n--- Testing SDK Class Instance ---');
const sdk = new ZabySDK();
console.log('4. sdk.getHelloWorld():', sdk.getHelloWorld());
console.log('5. sdk.hello():        ', sdk.hello());
console.log('6. sdk.getHelloData(): ', sdk.getHelloData());
