/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(tran) {
  const answer=[]
  let hashMap=new Map();
  for(let i=0;i<tran.length;i++){
      if(hashMap.has(tran[i]["category"])){
        hashMap.set(tran[i]["category"],hashMap.get(tran[i]["category"])+tran[i]["price"])
      }
      else{
        hashMap.set(tran[i]["category"],tran[i]["price"])
      }
  }
  for(let [category,totalSpent] of hashMap)
  {
    answer.push({
      "category":category,
      "totalSpent":totalSpent
    })
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
