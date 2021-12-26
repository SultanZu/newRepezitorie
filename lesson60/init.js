export function getData() {
    let name = prompt("name","Sultan");
    let surName = prompt("surname","Zamat uulu");
    let dateOfBirth = prompt("date of birth","04.11.2000");
    let placeOfBirth = prompt("place of birth","Talas");

    const data = {
        nameOfUser: name,
        surname: surName,
        dateOfBirth: dateOfBirth,
        placeOfBirth: placeOfBirth
    };
    return data;
}