// kode : tipe data number
document.writeln(100);
document.writeln("</br>");
document.writeln(100.123);
document.writeln("</br>");
document.writeln("</br>");

// Number Notation
/* hexa = 0x
   binary = 0b
   oxta = 0o    */
document.writeln(0x1111010);
document.writeln("</br>");
document.writeln(0b1111010);
document.writeln("</br>");
document.writeln(0o1111010);
document.writeln("</br>");
document.writeln("</br>");

// kode tipe data boolean
document.writeln(true);
document.writeln("</br>");
document.writeln(false);
document.writeln("</br>");
document.writeln("</br>");

// tipe data string
document.writeln("yudha jaya");
document.writeln("</br>");
document.writeln("saltacademy");
document.writeln("</br>");
document.writeln("</br>");

// menggunakan + data string
document.writeln("Nama :" + "Yudha" + "Jaya");
document.writeln("</br>");
document.writeln("Pelajar : " + "Salt" + "Academy");
document.writeln("</br>");
document.writeln("</br>");

// escape sequence data string 
document.writeln("<textarea cols='30' rows='10'>");
document.writeln("yudha \njaya");
document.writeln("\\Home\\yudha");
document.writeln("\"SaltAcademy\"");
document.writeln('\'Belajar Javascript\'');
document.writeln("</textarea>");

const day = 'monday'
switch (day) {
    case 'monday':
        console.log('senin')
        break;
    case 'thusday':
        console.log('selasa')
        break;
    case 'whenesday':
        console.log('rabu')
        break;
    default:
        console.log('tidak ada hari')
}

let number = 1

if (number == 1) {
    console.log('kesatu')
}
else if (number == 2) {
    console.log('kedua')
}

else {
    console.log('tidak ada')
}