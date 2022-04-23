        // Testing the balance due results page here:

        let renterName = "Mikel Sigler";
        let DLnumber = 090806158;
        let contractDate = "05/28/2021";
        let repo = "No";
        let damages = "No";
        let balance = 1245;
        let notes = `Mr Sigler rented for three days local and drove the car to zimbabwe to buy crack
        cocaine. In all fairness he did return the car in good condition, but was over his miles.`;
    
        let nameField = document.getElementById("name");
        nameField.innerText = `${renterName}`;
    
        let dlField = document.getElementById("dlNumber");
        dlField.innerText = `${DLnumber}`;
    
        let contractDateField = document.getElementById("contractDate");
        contractDateField.innerText = `${contractDate}`;
    
        let repoField = document.getElementById("repo");
        repoField.innerText = `${repo}`;
    
        let damagesField = document.getElementById("damages");
        damagesField.innerText = `${damages}`;
    
        let balanceField = document.getElementById("balance");
        balanceField.innerText = `$${balance}`;
    
        let notesField = document.getElementById("notes");
        notesField.innerText = `${notes}`;
    
    // That will probably all be moved when I actually wire it up but it helps to have something there to style.