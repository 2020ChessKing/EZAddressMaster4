var headImage, Signup, Login, next, logo, AddAddresso, SearchAddresso, next31;
var next1, sendOTP, AddAddress, SearchAddress, EZAddress, EZAddressHome;
var mobile, isit, homeS, EPN, EnterPhoneNumber, EPNR, OTPN, OTPNR, NameText, AddressLine1;
var AddressLine2, CityText, StateText, CountryText, EmailText;
var NameT, AddressLine1T, AddressLine1T, CityT, StateT, CountryT, EmailT;
var ZipcodeText, LandmarkText, PhoneText;
var ZipcodeT, LandmarkT, PhoneT, AsteriskText;
var next2, closeT, closeButton, decider;

function preload()
{
  headImage = loadImage("EZAddressHead.PNG");
  AddAddresso = loadImage("Add Adress.PNG");
  SearchAddresso = loadImage("Search Address.PNG");
  Login = loadImage("login.PNG");
  next = loadImage("NextIcon.PNG");
  closeButton = loadImage("Close.PNG.PNG")
  next21 = loadImage("next32.PNG");
  next31 = loadImage("NextIcon - Copy.PNG");
  //logo = loadImage("Img/EZaddresslogo.PNG");
 // home = loadImage("Img/EZAddressHome.png");
  EnterPhoneNumber = loadImage("EnterPhoneNumber.PNG");
  EnterPhoneNumber2 = loadImage("EnterPhoneNumberRed.PNG");
  EnterOTP = loadImage("EnterOTP.PNG");
  EnterOTP2 = loadImage("EnterOTPRed.PNG");
  NameText = loadImage("NameText.PNG");
  AddressLine1 = loadImage("AddressLine1.PNG");
  AddressLine2 = loadImage("AddresLine2.PNg")
  CityText = loadImage("CityText.PNG");
  StateText = loadImage("StateText.PNG");
  CountryText = loadImage("CountryText..png");
  EmailText = loadImage("EmailText.png")
  ZipcodeText = loadImage("ZipCodeText.PNG")
  LandmarkText = loadImage("LandmarkText.PNG");
  PhoneText = loadImage("PhoneText.PNG")
  AsteriskText = loadImage("AsteriskRed.PNG");

  decider = '2';

}

function setup() 
{
  createCanvas(400, 700); 

  database = firebase.database();

  elf = new addIt();


  next2 = createSprite(1000000, 250, 100, 100);
  next2.addImage(next21);
  next2.scale = 0.6;

  // homeS = createSprite(350, 650, 100, 100);
  // homeS.addImage(home);
  // homeS.scale = 0.3;

  next3 = createSprite(1000000,  600, 100, 100);
  next3.addImage(next31);
  next3.scale = 0.6;

  AddAddress = createSprite(1000000, 200, 100, 100);
  AddAddress.addImage(AddAddresso);
  AddAddress.scale = 0.5;

  SearchAddress = createSprite(1000000, 300, 100, 100);
  SearchAddress.addImage(SearchAddresso);
  SearchAddress.scale = 0.5;

  sendOTP = createSprite(200, 280, 100, 100);
  sendOTP.addImage(Login);
  sendOTP.scale = 0.3;

  next1 = createSprite(200, 500, 100, 100);
  next1.addImage(next);
  next1.scale = 0.6;

  pointer = createSprite(0, 0, 1, 1);
  pointer.visible = false;

  EPN = createSprite(80, 177, 100, 100);
  EPN.addImage(EnterPhoneNumber);
  EPN.scale = 0.26;

  EPNR = createSprite(80, 177, 100, 100);
  EPNR.addImage(EnterPhoneNumber2);
  EPNR.scale = 0.26;
  EPNR.visible = false;

  OTPN = createSprite(60, 390, 100, 100);
  OTPN.addImage(EnterOTP);
  OTPN.scale = 0.26;

  OTPNR = createSprite(60, 390, 100, 100);
  OTPNR.addImage(EnterOTP2);
  OTPNR.scale = 0.26;
  OTPNR.visible = false;
  
  NameT = createSprite(85, 180, 100, 100);
  NameT.addImage(NameText);
  NameT.scale = 0.26;
  NameT.visible = false;

  AddressLine1T = createSprite(60, 220, 100, 100);
  AddressLine1T.addImage(AddressLine1);
  AddressLine1T.scale = 0.26;
  AddressLine1T.visible = false;

  AddressLine2T = createSprite(60, 260, 100, 100);
  AddressLine2T.addImage(AddressLine2);
  AddressLine2T.scale = 0.26;
  AddressLine2T.visible = false;

  CityT = createSprite(85, 300, 270, 100);
  CityT.addImage(CityText);
  CityT.scale = 0.26;
  CityT.visible = false;

  StateT = createSprite(85, 340, 100, 100);
  StateT.addImage(StateText);
  StateT.scale = 0.26;
  StateT.visible = false;

  CountryT = createSprite(75, 424, 100, 100);
  CountryT.addImage(CountryText);
  CountryT.scale = 0.26;
  CountryT.visible = false;

  EmailT = createSprite(85, 498, 100, 100);
  EmailT.addImage(EmailText);
  EmailT.scale = 0.26;
  EmailT.visible = false;

  ZipcodeT = createSprite(75, 380, 100, 100);
  ZipcodeT.addImage(ZipcodeText);
  ZipcodeT.scale = 0.26;
  ZipcodeT.visible = false;

  LandmarkT = createSprite(65, 460, 100, 100);
  LandmarkT.addImage(LandmarkText);
  LandmarkT.scale = 0.26;
  LandmarkT.visible = false;

  PhoneT = createSprite(85, 540, 100, 100);
  PhoneT.addImage(PhoneText);
  PhoneT.scale = 0.26;
  PhoneT.visible = false;

  closeT = createSprite(10000000, 630, 100, 100);
  closeT.addImage(closeButton);
  closeT.scale = 0.6;

  closeT2 = createSprite(10000000, 660, 100, 100);
  closeT2.addImage(closeButton);
  closeT2.scale = 0.6;

  createSprite(0, 350, 6, 700);
  createSprite(400, 350, 6, 700);
  createSprite(200, 0, 400, 6);
  createSprite(200, 700, 400, 6);



  form = new Form();

  x = 0;

}

function draw() 
{
  background(245);


  //headImage = loadImage("EZAddressHead.PNG")


  form.display();
  image(headImage, 0, 0, 400, 133);
  pointer.x = mouseX;
  pointer.y = mouseY;

  if(pointer.isTouching(sendOTP))
  {
    sendOTP.scale = 0.34;
  }
  else{sendOTP.scale = 0.3}

  if(pointer.isTouching(next1))
  {
    next1.scale = 0.64;
  }
  else{next1.scale = 0.6}

  if(pointer.isTouching(next3))
  {
    next3.scale = 0.64;
  }
  else{next3.scale = 0.6}

  // if(pointer.isTouching(homeS))
  // {
  //   homeS.scale = 0.34;
  // }
  // else{homeS.scale = 0.3}



  if(pointer.isTouching(next2))
  {
    next2.scale = 0.64;
  }
  else{next2.scale = 0.6}

  if(pointer.isTouching(closeT))
  {
    closeT.scale = 0.64;
  }
  else{closeT.scale = 0.6}

  if(pointer.isTouching(closeT2))
  {
    closeT2.scale = 0.64;
  }
  else{closeT2.scale = 0.6}

  if(pointer.isTouching(AddAddress))
  {
    AddAddress.scale = 0.54;
  }
  else{AddAddress.scale = 0.5}

  if(pointer.isTouching(SearchAddress))
  {
    SearchAddress.scale = 0.54;
  }
  else{SearchAddress.scale = 0.5}

  if(mousePressedOver(SearchAddress))
  {
    form2 = new searchForm();
    next2.x = 200;
    closeT.x = 200;
     SearchAddress.x =100000;
     AddAddress.x = 1000000;
    x = 2;
  }

  if(mousePressedOver(next2))
  {
    form2.step2();
    closeT.x = 200;
  }

  if(mousePressedOver(AddAddress))
  {
    form3 = new AddForm();
    x = 3;
    closeT2.x = 200;
    next3.x = 200;
    decider = 'form3';
    AddAddress.x = 10000000;
    SearchAddress.x = 10000000;

    setTimeout(function()
    {
       if(form3.x === null)
       {  
         elf.addEZAddress();
       }
   }, 1500)  
   
        NameT.visible = true;
        AddressLine1T.visible = true;
        AddressLine2T.visible = true;
        CityT.visible = true;
        StateT.visible = true;
        CountryT.visible = true;
        EmailT.visible = true;
        ZipcodeT.visible = true;
        LandmarkT.visible = true;
        PhoneT.visible = true;
        
        // this.star1 = null;
        // this.star2 = null;
        // this.star3 = null;
        // this.star4 = null;
        // this.star5 = null;
        // this.star6 = null;
  }

  if(mousePressedOver(closeT))
  {
    form2.hide();
    AddAddress.x = 200;
    SearchAddress.x = 200;
    next2.x = 100000;
    closeT.x = 100000;
  }

  if(mousePressedOver(next3))
  {

  fill('red');
  stroke('red');


  if(form3.email.value().includes('@') && form2.email.value().includes('.'))
  {
    if(form3.name.value().length >= 2)
    {
      if(form3.city.value().length >= 1)
      {          
        if(form3.state.value().length >= 1)
         {          
          if(form3.zipcode.value().length === 6)
          {          
            if(form3.country.value().length >= 1)
             {          
                 SearchAddress.x = 200;
                 AddAddress.x = 200;
                 next3.x = 10000000;
                 form3.hide();
                 form3.update();
                 x = 5;
                 
                form3.update();
                closeT2.x = 100000;
                   setTimeout(function()
                 {
                   var it = createElement('h3', 'Your EZAddress Code is ' + form3.xi);
                   it.position(70, 650);
                 }, 2000);
             }
             else{
              text("Please Enter Proper Information", 120, 160)
              push();
              noFill();
              rectMode(CENTER);
              rect(200, 155, 200, 20);
              pop();
            }
           
            }
            else{
              text("Please Enter Proper Information", 120, 160)
              push();
              noFill();
              rectMode(CENTER);
              rect(200, 155, 200, 20);
              pop();
            }
           
            
           }
           else{
            text("Please Enter Proper Information", 120, 160)
            push();
            noFill();
            rectMode(CENTER);
            rect(200, 155, 200, 20);
            pop();
          }
         
 
         }
         else{
          text("Please Enter Proper Information", 120, 160)
          push();
          noFill();
          rectMode(CENTER);
          rect(200, 155, 200, 20);
          pop();
        }
       

       }
       else{
        text("Please Enter Proper Information", 120, 160)
        push();
        noFill();
        rectMode(CENTER);
        rect(200, 155, 200, 20);
        pop();
      }
     
}
 
    
    else
    {
      text("Please Enter Proper Information", 120, 160)
        push();
        noFill();
        rectMode(CENTER);
        rect(200, 155, 200, 20);
        pop();              
    }
    
  }

  if(mousePressedOver(closeT2))
  {
    form3.hide();
    closeT2.x = 100000;
    AddAddress.x = 200;
    SearchAddress.x = 200;
    next3.x = 100000;
  }


  if(x === 2)
  {
    form2.display();
    //closeT.x = 200;
  }
  if(x === 3)
  {
    form3.display();
  }

  drawSprites();
}


