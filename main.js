function billingFunction(case_same){
  if(case_same.checked){
    var case_name=document.getElementById('shippingName').value;//if it is clicked, define a varible to store the value of name
    var case_zip=document.getElementById('shippingZip').value;//if it is clicked, define a varible to store the value of ZIP address
  }else{
    case_name='';// define a void value as the clear function
    case_zip='';// define a void value as the clear function
  }
  document.getElementById('billingName').value=case_name; // change the value
  document.getElementById('billingZip').value=case_zip;    //change the value
  
}
