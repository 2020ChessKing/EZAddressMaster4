class Form
{
    constructor()
    {
        this.mobileNumber = createInput();
        this.enterOTP = createInput();
    }

    display()
    {
        this.mobileNumber.position(160, 170);
        this.enterOTP.position(160, 380);
        //this.enterOTP.hide();
        ///next1.visible = false;

        if(mousePressedOver(next1))
        {
            if(this.mobileNumber.value().length === 10)
            {
                if(this.enterOTP.value().length === 6)
                {
                
                this.update();

                //hide
                next1.x = 10000000;
                sendOTP.x = 10000000;
                this.mobileNumber.hide();
                this.enterOTP.hide();

                //next screen
                AddAddress.x = 200;
                SearchAddress.x = 200;

                EPNR.visible = false;
                EPN.visible = false;
                OTPN.visible = false;
                OTPNR.visible = false;
                }
                else{
                    if(OTPN.visible === true)
                    {
                    alert("Please Enter 6 Digit OTP");
                    }
                    OTPNR.visible = true;
                    OTPN.visible = false;
                }
            }
            else{
                if(EPN.visible === true)
                {
                    alert("Please Enter Valid Phone Number");
                }
                EPNR.visible = true;
                EPN.visible = false;
            }
        }

    }
    
    update()
    {
     var mobileN = "login/" + this.mobileNumber.value();
     database.ref(mobileN).update(
         {
             phone : this.mobileNumber.value(),
             otp : this.enterOTP.value(),
         }

     )
    }

}