const checkLicensePlateInHanoi = (LicensePlate) => {
    let arr = ['29', '30', '31', '32', '33', '40']
    for (const item of arr) {
        if(LicensePlate.startsWith(item)){
            return true
        }
    }
    return false
}

const listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231","74L1-12345"];

let listLicensePlateInHanois = [];
for (const value of listLicensePlates) {
    if(checkLicensePlateInHanoi(value)){
        listLicensePlateInHanois.push(value);
    }
}
console.log(listLicensePlateInHanois);