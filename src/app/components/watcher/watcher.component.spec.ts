import { signal } from "@angular/core";
import { WatcherComponent } from "./watcher.component";

describe("WatcherComponent", () => {
  let component: WatcherComponent;

  const mockMessageService = {
    add: jest.fn(),
  };

  const mockSignalsService = {
    count: signal(0),
  };

  beforeEach(() => {
    component = new WatcherComponent(
      mockSignalsService as any,
      mockMessageService as any
    );
  });

  it("should initialize with default quantity and pricePerItem", () => {
    expect(component.quantity()).toBe(1);
    expect(component.pricePerItem()).toBe(10);
    expect(component.totalPrice()).toBe(10);
  });

  it("should increase quantity", () => {
    component.increaseQty();
    expect(component.quantity()).toBe(2);
    expect(component.totalPrice()).toBe(20);
  });

  it("should decrease quantity", () => {
    component.decreaseQty();
    expect(component.quantity()).toBe(0);
    expect(component.totalPrice()).toBe(0);
  });

  it("should update quantity and price correctly", () => {
    component.updateQuantity(5);
    component.updatePrice(12);
    expect(component.quantity()).toBe(5);
    expect(component.pricePerItem()).toBe(12);
    expect(component.totalPrice()).toBe(60);
  });

  it("should call MessageService with warning when totalPrice > 50", () => {
    component.updateQuantity(6); // 6 * 10 = 60
    expect(mockMessageService.add).toHaveBeenCalledWith({
      severity: "warn",
      summary: "Warn",
      detail: "Total price exceeds limit: 60",
    });
  });

  it("should call MessageService with success when totalPrice <= 50", () => {
    component.updateQuantity(3); // 3 * 10 = 30
    expect(mockMessageService.add).toHaveBeenCalledWith({
      severity: "success",
      summary: "Success",
      detail: "Current total price: 30",
    });
  });
});
