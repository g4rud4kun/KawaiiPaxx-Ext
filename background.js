// background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "makeRequest") {
            fetch('https://kawaiipaxx.pythonanywhere.com/api/endpoint/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
               
                }),
            })
            .then(response => response.json())
            .then(data => {
               
                console.log(data);
            })
            .catch(error => {
          
                console.error(error);
            });
        }
    }
);
// function getCSRFToken() {
//     return new Promise((resolve, reject) => {
//         
//         chrome.cookies.getAll({ domain: 'kawaiipaxx.pythonanywhere.com' }, cookies => {
//             const csrfCookie = cookies.find(cookie => cookie.name === 'csrftoken');

//             if (csrfCookie) {
//                 resolve(csrfCookie.value);
//             } else {
//                 reject(new Error('CSRF token not found in cookies'));
//             }
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching CSRF token:', error);
//         throw error; 
//     });
// }

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.action === "makeRequest") {
//             getCSRFToken()
//                 .then(csrfToken => {
//                     if (!csrfToken) {
//                         console.error("CSRF token not found");
//                         return;
//                     }

//                  
//                     fetch('https://kawaiipaxx.pythonanywhere.com/api/endpoint/', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'X-CSRFToken': csrfToken, 
//                         },
//                         body: JSON.stringify({
//                            
//                         }),
//                     })
//                     .then(response => response.json())
//                     .then(data => {
//                        
//                         console.log(data);
//                     })
//                     .catch(error => {
//                  
//                         console.error(error);
//                     });
//                 })
//                 .catch(error => {
//                  
//                     console.error(error);
//                 });
//         }
//     }
// );
