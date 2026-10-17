interface Transport {
    deliver(cargo: string): void;
    costPerKm(): number;
}

class Truck implements Transport {
    deliver(cargo: string): void {
        console.log(`🚚 Delivering ${cargo} by road`);
    }

    costPerKm(): number {
        return 2;
    }
}

abstract class Logistics {
    abstract createTransport(): Transport;

    planDelivery(cargo: string): void {
        console.log(`Planning delivery of ${cargo}...`);

        const transport = this.createTransport();

        transport.deliver(cargo);

        console.log("Delivery logged.");
    }

    estimateCost(km: number): number {
        const transport = this.createTransport();

        return km * transport.costPerKm();
    }
}

class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}

const roadLogistics = new RoadLogistics();

roadLogistics.planDelivery("cement");
console.log("Road delivery cost:", roadLogistics.estimateCost(100));
