/////////////////////////Arrays

var year = [];
var fullage = [];
var age = [];

function printFullAge() {
  for(var i=0; i< year.length ; i++)
    age[i] = new Date().getFullYear() - year[i] ;

  for(var i=0; i < age.length ; i++) {
  if(age[i] > 18) {
    fullage[i] = true ;
  }
  else
    fullage[i] = false;
}

 return fullage;
}

var full_1 = printFullAge(year = [1965,2008,1992]);
console.log(full_1);

var full_2 = printFullAge(year = [1975,1988,2000,2010]);
console.log(full_2); 
/////////////////////////////////// Arrays and Nested Loops


function numberTable1(rows,columns){

  var arr = [];

  for(var i=0 ; i < rows ; i++){

      arr.push([]);

      arr[i].push( new Array(columns) );

      for(var j=0; j < columns; j++){

        arr[i][j] = 0;
      }
  }

console.log(arr);
}
numberTable1(3,5);
/// 2. should have an ascending number from 0 to columns.
function numberTable2(rows,columns){

  var arr = [];

  for(var i=0 ; i < rows ; i++){

      arr.push([]);

      arr[i].push( new Array(columns) );

      for(var j=1; j <= columns; j++){

        arr[i][j] = j;
      }
  }

console.log(arr);
}
numberTable2(3,5);
/// 3. numberTable(3, 4) would return
/// [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ];
function numberTable3(rows,columns){

  var arr = [];

  for(var i=0 ; i < rows ; i++){

      arr.push([]);

      arr[i].push( new Array(columns) );

      for(var j=1; j <= columns; j++){

        arr[i][j] = j+(columns*i);
      }
  }

console.log(arr);
}
numberTable3(3,5);