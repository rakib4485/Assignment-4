function publicBusFare(public){
    if(typeof public !== 'number'){
        return 'Enter A valid Input';
    }
    const busFare = 250;
    const carPasenger = public % 50 ;
    const busPasenger = carPasenger % 11;
    const ticketPrice = busFare * busPasenger;

    return ticketPrice;
}

const public = '365';
const ticketPrice  = publicBusFare(public);
console.log(ticketPrice)