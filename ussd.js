var validUssd;
while (validUssd = true){
    var ussd = prompt("Enter ussd code");
    if(ussd == "*777#") {
        var entry = prompt(
            "Enter 1 to change language\n" +
            "Enter 2 to buy airtime\n" +
            "Enter 3 to buy data \n" +
            "Enter 0 to cancel Transaction \n"
        );
        if (entry == 1){

        } else if (entry == 2) {
            var air = prompt(
                "Enter 1 to buy Airtime \n" +
                "Enter 2 to check Airtime Balance \n" +
                "Enter 9 to go back to previous \n" +
                "Enter 0 to cancel Transaction" 
            );
            if (air == 1) {

            } else if (air == 2) {

            } else if (air == 9) {
                break;
            }
            else if (air == 0){
                alert("Thanks for using this channel");
                validUssd = false;

            }
        } else if (entry == 3) {

        } else if (entry == 0) {
            alert("Thanks for using this channel");
            break;
            
        }
        
    } else {
        alert("Unknown USSD Code!\n" + "Try again!!!");
        validUssd = true;
    }
}