class AddForm
{
    constructor()
    {
        this.name = createInput("");
        this.addressline1 = createInput("");
        this.addressline2 = createInput("");
        this.city = createInput("");
        this.state = createInput("");
        this.zipcode = createInput("");
        this.landmark = createInput("");
        this.country = createInput("");
        this.email = createInput("");
        this.mobile = createInput("");

        this.EZAddress = " ";

        this.AddressFull = this.addressline1.value() + " " + this.addressline2.value() + " " + this.city.value() + " " + this.state.value() + " " + this.country.value() + " " + this.landmark.value();

        this.x = null;
        this.xi = null;
        this.xii = null;

    //    this.star1 = null;
    //    this.star2 = null;
    //    this.star3 = null;
    //    this.star4 = null;
    //    this.star5 = null;
    //    this.star6 = null;
    //    this.star7 = null;

          this.y = 2;
       
    }

    display()
    {

        this.getInfo();
        //this.xii = Math.round(this.x);
        this.xi = this.x;

        this.name.position(120, 170);
        this.addressline1.position(120, 210);
        this.addressline2.position(120, 250);
        this.city.position(120, 290);
        this.state.position(120, 330);
        this.zipcode.position(120, 370);
        this.country.position(120, 410);
        this.landmark.position(120, 450);
        this.email.position(120, 490);
        this.mobile.position(120, 530);
        // stroke(0, 58, 188);
        // strokeWeight(2);
        ///line(120, 170, 120, 550);


        if(this.y === 2)
        {
        this.star1 = image(AsteriskText, 300, 175, 10, 10);
        this.star2 = image(AsteriskText, 300, 215, 10, 10);
        //image(AsteriskText, 300, 255, 10, 10);
        this.star3 = image(AsteriskText, 300, 295, 10, 10);
        this.star4 = image(AsteriskText, 300, 335, 10, 10);
        this.star5 = image(AsteriskText, 300, 375, 10, 10);
        //image(AsteriskText, 300, 320, 10, 10);
        this.star6 = image(AsteriskText, 300, 415, 10, 10);
        this.star7 = image(AsteriskText, 300, 535, 10, 10);
        }
        else{
          
            this.star1 = null;
            this.star2 = null;
            this.star3 = null;
            this.star4 = null;
            this.star5 = null;
            this.star6 = null;
            this.star7 = null;
        }
  

       // next3.x = 200;

        // if(mousePressedOver(next3))
        // {
        //     this.update();
        // }
        

    }

    update()
    {
     this.AddressFull = this.addressline1.value() + " " + this.addressline2.value() + " " + this.city.value() + " " + this.state.value() + " " + this.country.value() + " " + this.landmark.value();
     var EZAddressOfficialCode = "users/" + this.xi;
     database.ref(EZAddressOfficialCode).update(
         {
            Name : this.name.value(),
            Email : this.email.value(),
            Phone : this.mobile.value(),
            Address : this.AddressFull,
         }

     )
    }

    hide()
    {
            this.name.hide();
            this.addressline1.hide();
            this.addressline2.hide();
            this.city.hide();
            this.state.hide();
            this.zipcode.hide();
            this.country.hide();
            this.landmark.hide();
            this.email.hide();
            this.mobile.hide();

        
            NameT.visible = false;
            AddressLine1T.visible = false;
            AddressLine2T.visible = false;
            CityT.visible = false;
            StateT.visible = false;
            CountryT.visible = false;
            EmailT.visible = false;
            ZipcodeT.visible = false;
            LandmarkT.visible = false;
            PhoneT.visible = false;

            // this.star1.position(1000000, 175);
            // this.star2.position(1000000, 175);
            // this.star4.position(1000000, 175);
            // this.star5.position(1000000, 175);
            // this.star6.position(1000000, 175);
            // this.star7.position(1000000, 175);
            // this.star8.position(1000000, 175);
    
            // this.star1.x = 10000;
            // console.log(this.star1.x);

            this.y = 1;
    }

    getInfo()
    {
     var pc = database.ref("EZAddresses/" + form.mobileNumber.value() + "/EZAddress");
     pc.on("value", (data)=>{
         this.x = data.val();
     });
     console.log(this.x);
    }

}