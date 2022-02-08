module.exports = function toReadable (number) {
    let dict = {
        0: ["zero"],
        1: ["one", ],
        2: ["two", "twen"],
        3: ["three", "thir"],
        4: ["four", "for", "forteen"],
        5: ["five", "fif"],
        6: ["six", "six"],
        7: ["seven", "seven"],
        8: ["eight", "eigh"],
        9: ["nine", "nine"], 
        10: ["ten"], 
        11: ["eleven"],
        12: ["twelve"]
    }
  
    let entries = Object.entries(dict);

    if(number >= 0 && number < 20 ) {
        return once(number, entries);
    }
    
    if(number >= 20 && number < 100) {
        return double(number, entries);
    }
    
    if(number >= 100 && number < 1000) {
        return triple(number, entries);
    }
  }

  
function findConc(entries, numb) {
    return  entries.find(elem => {
          let [num, word] = elem;
          return numb == num;
    });
  }

  function once(number, entries) {
    if(number < 10) {
     let conc = findConc(entries, number);
      console.log("c", conc);
     return conc[1][0];
   }
   
   if(number >= 10 && number < 20) {
     if(number == 14) return 'fourteen';
     if(number >=10 && number <=12) {
       let conc = findConc(entries, number);
       return conc[1].toString();
     }
     else {
       let rest = number - 10;
       let conc = findConc(entries, rest);
       return conc[1][1] + "teen";
     }
   }
 }
  
  function double(number, entries) {
      if(number >=20 && number < 100) {
      let rest = number % 10;
      
       let divider = number / 10;
      
       let conc = findConc(entries, Math.floor(divider));
       let x = conc[1][1] + "ty";
      
      if(rest == 0) {
        console.log(x);
        return x;
      } else {
        let match = findConc(entries, rest);
        console.log(`${x} ${match[1][0]}`);
        return `${x} ${match[1][0]}`;
      }
    }
  }
  
  
  function triple(number, entries) {
      if(number >= 100 && number < 1000) {
      let rest = number % 100;
      let divider = number / 100;
      let conc = findConc(entries, Math.floor(divider));
      
      let x = `${conc[1][0]} hundred`;
      if(rest == 0) {
        return x;
      } else {
        if(rest < 20) {
        let match = once(rest, entries);
            
        return `${x} ${match}`;
        }
        if(rest >= 20) {
        let match = double(rest, entries);
        
        return `${x} ${match}`;
        } else {
          let match = once(rest, entries);
  
          return `${x} ${match}`;
        }
      }
    }
  }
