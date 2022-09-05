var getBirthday=document.querySelector('#birthday');
var inputNum=document.querySelector('#is-lucky')
var checkBtn=document.querySelector('#check');

checkBtn.addEventListener('click',function clickHandler(){
    if(getBirthday.value==='' || inputNum.value===''){
        document.getElementById('luck-check').innerText='Both fields required'
    }
    else{
        var sum=calculateSum(getBirthday.value);
        if(sum%inputNum.value===0){
            document.getElementById('luck-check').innerText=`${inputNum.value} is a lucky number!! 🥳 🥳 🥳`
        }
        else{
            document.getElementById('luck-check').innerText=`${inputNum.value} is not that lucky 😕`
        }
    }
    

});

function calculateSum(value){
    let dob=value.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
    return sum;
}