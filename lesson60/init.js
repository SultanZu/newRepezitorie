export function getData() {
    let name = prompt("name","Sultan");
    let surName = prompt("surname","Zamat uulu");
    let dateOfBirth = prompt("date of birth","04.11.2000");
    let placeOfBirth = prompt("place of birth","Talas");

    const data = {
        a: name,
        b: surName,
        c: dateOfBirth,
        d: placeOfBirth
    };
    return data;
}