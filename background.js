// background.js

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "makeRequest") {
            // Your existing fetch code here, without including the CSRF token
            fetch('https://kawaiipaxx.pythonanywhere.com/api/endpoint/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // You may include other headers if needed
                },
                body: JSON.stringify({
                    // Your request payload
                }),
            })
            .then(response => response.json())
            .then(data => {
                // Handle the response
                console.log(data);
            })
            .catch(error => {
                // Handle errors
                console.error(error);
            });
        }
    }
);
// function getCSRFToken() {
//     return new Promise((resolve, reject) => {
//         // Fetch cookies for the target domain
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
//         throw error;  // Throw the error to propagate it further
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

//                     // Your existing fetch code here, using the retrieved CSRF token
//                     fetch('https://kawaiipaxx.pythonanywhere.com/api/endpoint/', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
//                         },
//                         body: JSON.stringify({
//                             // Your request payload
//                         }),
//                     })
//                     .then(response => response.json())
//                     .then(data => {
//                         // Handle the response
//                         console.log(data);
//                     })
//                     .catch(error => {
//                         // Handle errors
//                         console.error(error);
//                     });
//                 })
//                 .catch(error => {
//                     // Handle errors from getCSRFToken
//                     console.error(error);
//                 });
//         }
//     }
// );
// function getCSRFToken() {
//     return fetch('https://kawaiipaxx.pythonanywhere.com/get-csrf-token/', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         credentials: 'include', // Include credentials to allow cookies to be sent
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Failed to fetch CSRF token. Status: ${response.status}`);
//         }
//         return response.text();
//     })
//     .then(data => data.csrf_token)
//     .catch(error => {
//         console.error('Error fetching CSRF token:', error);
//         throw error;  // Throw the error to propagate it further
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

//                     // Your existing fetch code here, using the retrieved CSRF token
//                     fetch('https://kawaiipaxx.pythonanywhere.com/api/endpoint/', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
//                         },
//                         body: JSON.stringify({
//                             // Your request payload
//                         }),
//                     })
//                     .then(response => response.json())
//                     .then(data => {
//                         // Handle the response
//                         console.log(data);
//                     })
//                     .catch(error => {
//                         // Handle errors
//                         console.error(error);
//                     });
//                 })
//                 .catch(error => {
//                     // Handle errors from getCSRFToken
//                     console.error(error);
//                 });
//         }
//     }
// );
