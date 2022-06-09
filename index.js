
function submitData(userName, userEmail){
    let userObj = {
        name: userName,
        email: userEmail,
    }
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        },
        body:JSON.stringify(userObj)
    })
        .then(res => res.json())
        .then(object => {
           const body = document.querySelector('body');
           const h4 = document.createElement('h4');
           h4.textContent = object.id;
           body.append(h4);
        })
        .catch((error) => {
           let message = `${error} Unauthorized Access`
           document.querySelector('body').append(message);
           
        });
       
    }

    
