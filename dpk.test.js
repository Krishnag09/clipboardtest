const { deterministicPartitionKey } = require("./dpk");
const LARGE_PARTITION_KEY =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu placerat mauris. Vestibulum non vulputate nibh. Etiam consectetur vel neque quis molestie. Etiam quis vulputate dolor, ac pulvinar arcu. Quisque non ipsum tortor. Maecenas nunc nisl, mattis a malesuada venenatis, ultrices nec tortor. Quisque libero erat, pretium vitae velit non, vestibulum efficitur enim. In quis lacus nec magna vestibulum consequat quis quis elit.";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns candidate when partitionKey is 0", () => {
    testEvent = { partitionKey: 0 };
    const trivialKey = deterministicPartitionKey(testEvent);
    expect(trivialKey).not.toBe(null);
  });
  it("Returns candidate when candidate is not string", () => {
    testEvent = { partitionKey: { partitionName: "test", partitionValue: 4 } };
    const trivialKey = deterministicPartitionKey(testEvent);
    expect(trivialKey.isVA).not.toBe(null);
  });
  it("Returns candidate when partition key length > 256", () => {
    testEvent = {
      partitionKey: LARGE_PARTITION_KEY,
    };
    const trivialKey = deterministicPartitionKey(testEvent);
    expect(trivialKey.isVA).not.toBe(null);
  });
});

//If time permitted i would try and write more edge cases and negative tests.
