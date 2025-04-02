/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?do it by your shelf
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    return false;
  }
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();

  const hashMap1=new Map();
  const hashMap2=new Map();
  for(let i=0;i<str1.length;i++){
    if(hashMap1.has(str1[i])){
      hashMap1.set(str1[i],hashMap1.get(str1[i])+1);
    }
    else{
      hashMap1.set(str1[i],1);
    }

    if(hashMap2.has(str2[i])){
      hashMap2.set(str2[i],hashMap2.get(str2[i])+1);
    }
    else{
      hashMap2.set(str2[i],1);
    }
  }

  for(let [key,value] of hashMap1){
    if(value!=hashMap2.get(key)){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
