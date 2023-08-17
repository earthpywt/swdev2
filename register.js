function checkData(){
    let company = document.getElementById("company");
    let contact = document.getElementById("contact");
    let phone = document.getElementById("phone");
    let chair = document.getElementById("chair");

    if(!company.value){
        alert("ต้องใส่ชื่อบริษัท")
    }
    if(!contact.value){
        alert("ต้องใส่ชื่อผู้ติดต่อ")
    }
    if(!phone.value){
        alert("ต้องใส่เบอร์ผู้ติดต่อ")
    }
    if(chair.value && (chair.value<1 || chair.value>10)){
        alert("จำนวนเก้าอี้ ต้องอยู่ระหว่าง 1 ถึง 10 ตัว")
    }
}