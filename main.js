//console.log('Hello World!');
function encoder() {
let frmInp = document.getElementById('message').value; 
let inpArr = Array.from(frmInp, x => x.codePointAt());
//alert(inpArr);
const cmap = {0:"z",1:"o",2:"t",3:"T",4:"f",5:"F",6:"s",7:"S",8:"e",9:"n"};
let pkey = document.getElementById("key").value;
//pkey = pkey.length == 10? ;
//alert(pkey);
let fstrng = "";  let nidf = ""; let nid = "";
if (Array.from(pkey, x => x.codePointAt()).length === 10) {
  //alert(Array.from(pkey, x => x.charCodeAt()));
  console.log("Pkey: "+Array.from(pkey, x => x.codePointAt()));
  nidf = Math.max(...Array.from(pkey, x => x.codePointAt())); //alert(String.fromCharCode(nidf));
  console.log("Max: " + nidf);
nidf++;
console.log("INC: " + nidf);
nid = nidf;
  nidf = String.fromCodePoint(nidf);
console.log("ID: " + nidf);

  fstrng = inpArr.toString().replaceAll(",",nidf);
  
} else {
  fstrng = inpArr.toString().replaceAll(",","c");
}
//console.log("ID: "+nidf);
let noupt="";
if (Array.from(pkey, x => x.codePointAt()).length === 10) {
  for (let prop of fstrng) {
    if (prop != nidf) {
      noupt += pkey[prop]+cmap[prop];
      //console.log(cmap[prop]);
    } else {
      noupt += prop;
    }
  }
  noupt = nidf + noupt + "0"; 
} else {
  for (let prop of fstrng) {
    if (prop != "c") {
      noupt += cmap[prop];
    } else {
      noupt += prop;
    }
  }
}

document.getElementById('enMsg').value = noupt;
document.getElementById('ecc').innerText = "Character Count: " + noupt.length;
document.getElementById('rcc').innerText = "Character Count: " + frmInp.length;
}
