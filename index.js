const getTen = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
};

getTen()                     
    .then((number) => {      
        return number + 5;  
    })
    .then((number) => {      
        return number * 2;  
    })
    .then((finalNumber) => { 
        console.log("Result number:", finalNumber);
    })
    .catch((error) => {    
        console.error("Error:", error);
    });


const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("UserName");
        }, 1000);
    });
};

const getOrder = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order for "+ user);
        }, 1000);
    });
};

const getDiscount = (order) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Discount for " + order);
        }, 1000);
    });
};

getUser()
    .then((user) => {
        return getOrder(user);
    })
    .then((order) => {
        return getDiscount(order);
    })
    .then((discount) => {
        console.log(discount);
    })
    .catch((error) => {
        console.error("Error:", error);
    });



const PromiseAllFunc = (promisesArray) => {
    promisesArray.forEach((promise) => { 
        promise
            .then((result) => {
                console.log("Result:", result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
};

const testPromises = [
    Promise.resolve('1'),
    Promise.resolve('2'),
    Promise.resolve('Успех 3')
];

PromiseAllFunc(testPromises);

