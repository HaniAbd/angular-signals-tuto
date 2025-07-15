import { SignalsService } from "./signals.service";

describe("SignalsService", () => {
  let service: SignalsService;

  beforeEach(() => {
    service = new SignalsService();
  });

  it("should initialize count to 0", () => {
    expect(service.count()).toBe(0);
  });

  it("should increment count", () => {
    service.incrementCount();
    expect(service.count()).toBe(1);
  });

  it("should decrement count", () => {
    service.decrementCount();
    expect(service.count()).toBe(-1);
  });

  it("should increment and decrement correctly", () => {
    service.incrementCount(); // 1
    service.incrementCount(); // 2
    service.decrementCount(); // 1
    expect(service.count()).toBe(1);
  });
});
