// Code your solutions in this file
//let names = ['name1','name2','name3'];
function writeCards(names){
    let thanksArray=[];
  for(let i=0;i<names.length;i++){      
      thanksArray.push('Thank you, '+names[i]+', for the wonderful surprise gift!');      
  }
    return thanksArray;
  }
function countDown(number){
    for(let num=number;num>=0;num--){
        console.log(num);
    }
}