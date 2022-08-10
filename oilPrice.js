function oilPrice(disel , petrol, octen){
    if((typeof disel !== 'number') || (typeof petrol !== 'number') || (typeof octen !== 'number')){
        return 'Enter a valid Input';
    }
    const diselPrice = 114;
    const petrolPrice = 130;
    const octenPrice = 135;

    const totalPrice = (disel * diselPrice) + (petrol * petrolPrice) + (octen * octenPrice);
    return totalPrice;
}

const totalPrice = oilPrice(30,'20',10);
console.log(totalPrice);