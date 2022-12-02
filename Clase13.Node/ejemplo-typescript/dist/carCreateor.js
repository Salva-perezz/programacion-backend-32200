export var Status;
(function (Status) {
    Status[Status["NEW"] = 0] = "NEW";
    Status[Status["USED"] = 1] = "USED";
})(Status || (Status = {}));
const createCar = (carData, ownerData) => {
    const car = Object.assign(Object.assign({}, carData), { owner: ownerData });
    return car;
};
export default createCar;
