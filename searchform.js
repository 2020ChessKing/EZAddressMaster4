class searchForm
{
    constructor()
    {
     this.searchInput = createInput("Search Here");
     this.mobile = 0;

     this.phone = createElement('h3');
     this.name = createElement('h3');
     this.email = createElement('h3');
     this.address = createElement('h3');
     this.address2 = createElement('h3');


     this.phoneI = 'Not Found';
     this.nameI = 'Not Found';
     this.emailI = 'Not Found';
     this.addressI = 'Not Found';
     this.addressII = 'Not Found';

     this.x = 1;
    }

    display()
    {
     this.searchInput.position(115, 170);


    //  SearchAddress.x =100000;
    //  AddAddress.x = 1000000;
    //  if(this.x === 1)
    //  {
    //  next2.x = 200;
    //  }
    this.getInfo();
    this.getInfo2();
    this.getInfo3();
    this.getInfo4();


   
     }

    step2()
    {
        // setTimeout(function()
        // {
        //     if(this.emailI === '')
        // {
        //     this.emailI = 'Not Found';
        // }
        // if(this.emailI === 'null')
        // {
        //     this.emailI = 'Not Found';
        // }
        // if(this.phoneI === 'null')
        // {
        //     this.phoneI = 'Not Found';
        // }
        // if(this.addressI === 'null')
        // {
        //     this.addressI = 'Not Found'
        // }
       
        
            //this.searchInput.hide();
            //next2 = 10000000;
            //closeT.x = 200;
            this.phone.html("Phone : " + this.phoneI);
            this.name.html("Name : " + this.nameI);
            this.email.html("Email : " + this.emailI);
            this.address.html("Address");
            this.address2.html(" " + this.addressI)
            //this.address3.html(" " + this.addressII)
    
            this.name.position(0, 280);
            this.phone.position(0, 320);
            this.email.position(0, 360);
            this.address.position(195, 400);      
            this.address2.position(0, 440);
            //this.address3.position(0, 400);
        // }, 100);
        // }, 1000);
       
    }

    
    getInfo()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Phone");
     pc.on("value", (data)=>{
         this.phoneI = data.val();
     });
    // console.log(this.phoneI);
    }

    getInfo2()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Name");
     pc.on("value", (data)=>{
         this.nameI = data.val();
     });
    // console.log(this.phoneI);
    }

    getInfo3()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Email");
     pc.on("value", (data)=>{
         this.emailI = data.val();
     });
     //console.log(this.phoneI);
    }

    getInfo4()
    {
     var pc = database.ref("users/" + this.searchInput.value() +  "/Address");
     pc.on("value", (data)=>{
         this.addressI = data.val();
     });
     //console.log(this.addressI);
    }

    hide()
    {
        this.phone.hide();
        this.name.hide();
        this.email.hide();
        this.address.hide();
        this.address2.hide();
        this.searchInput.hide();
        //AddAddress.x = 200;
    }
}