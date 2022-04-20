/* Custom JS */

fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('This is an error', err);
    });

function appendData(data) {
    let mainContainer = document.getElementById("copy-text");
    data
        .filter(item => ["1", "2", "3", "4"].includes(item.stepNumber))
        .sort((a, b) => +a.stepNumber - b.stepNumber)
        .forEach(({
            id, stepNumber, versionContent
        }) => {

            const div = document.createElement("div");
            div.setAttribute('class', 'column')

            const divabs = document.createElement("h1");
            const divTwo = document.createElement("span");
            const divThree = document.createElement("p");

            const line = document.createElement("hr");
            line.setAttribute('class', 'divider')

            const {
                title, body
            } = versionContent.slice().pop();

            divabs.innerHTML = '0' + stepNumber;
            divTwo.innerHTML = versionContent[stepNumber == 3 ? 1 : 0].title;
            divThree.innerHTML = body;

            mainContainer.appendChild(div);
            div.append(divabs);
            div.appendChild(line)
            div.appendChild(divTwo);
            div.appendChild(divThree);
        });

}

// Vue JS
Vue.createApp({
    data() {
      return {
        message: 'How It Works'
      }
    }
  }).mount('#app')

   
Vue.createApp({
        data() {
          return {
            headlineOne: "New Games & Accessories",
            headlineTwo: "Monthly packages. Excitement delivered daily.",
            subheadline: "What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep — every month.",
            cta: "Get Started"       
          }
        }
    }).mount('#copy-zone')    