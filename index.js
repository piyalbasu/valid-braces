var isValid = function(s) {
    let left = ['(', '{', '['],
        right = [')', '}', ']'],
        sArr = s.split('');
    
    if (s.length % 2 !== 0) {
        return false;
    }
    
    let elimMatches = (sArr) => {
        if (sArr.length) {
            for(let i = 0; i < sArr.length; i++) {
                if (left.includes(sArr[i]) && right.indexOf(sArr[i + 1]) === left.indexOf(sArr[i])) {

                  sArr.splice(i, 2);
                  return elimMatches(sArr);
                }
              
            }
          
            
        }
    };
    
    elimMatches(sArr);
  
    return !sArr.length; 
    
};
