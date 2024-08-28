import {Car} from "./car";
import {BmwCar} from "./bmw-car";
import {MercedesBenzCar} from "./mercedes-benz-car";
import {RenaultCar} from "./renault-car";

const cars: Car[] = [];

cars.push(new BmwCar("First", 10000, 2000, 100, "1.9", false));
cars.push(new BmwCar("Second", 999999, 2024, 80, "2.9", true));
cars.push(new MercedesBenzCar("yesyesyes", 999999, 2024, 80, "22.9", true));
cars.push(new MercedesBenzCar("some another", 9123999, 2022, 42, "23.9", false));
cars.push(new RenaultCar("very cool", 12341, 2024, 12, "999.999", false));
cars.push(new RenaultCar("not so cool", 9876, 2025, 99, "43.01", true));


cars.forEach(car => {
    car.showInfo();
});