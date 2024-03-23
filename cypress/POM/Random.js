    let randNumber = ''
    let randText = ''
    let randCategoryName = ''
    let randNewText = ''
    let bigvalue ='ABCDEFGHIJKONMLKJIHGFECDBAMNOPQRSTUVWXYZ'
    let mailKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let backKey = 'ZYXWVUTSRQPONMLKJIHGFECDBA'
        for (let i = 0; i < 5; i++)
        randText+=mailKey.charAt(Math.floor(Math.random() * mailKey.length));
     for (let i = 0; i < 5; i++)
        randNewText+=backKey.charAt(Math.floor(Math.random() * backKey.length));
        for (let i = 0; i < 7; i++)
           randCategoryName+=bigvalue.charAt(Math.floor(Math.random() * bigvalue.length));
        randNumber+= (Math.floor(Math.random() * 100000));
    class RandomNumber {

      CategoryName = 'Category' + '-' + randCategoryName;
        test = randText;
        text =  randNewText;
        number = randNumber;
        newtest='BLUE' + randText; 
        testname = 'CRE' + randText + 'AM';
        VIN = randText + randNumber;
        plateNumber = randNumber + randText;
        apartId = randText + randText + randNumber;
     Title = 'Guide' + '-' + randNumber + '-' + randText;
    }
    export default RandomNumber