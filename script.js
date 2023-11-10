const randUser = 'https://randomuser.me/api/';

async function call() {
  const fetched = await fetch(randUser);
  const final = await fetched.json();
  displayUser(final.results[0]);
}

document.getElementById('generate').addEventListener('click', call);

function displayUser(user) {
  console.log(user);
  const userDisplay = document.getElementById('user');
  userDisplay.innerHTML = `
  <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl" id="name">
                <span class="font-bold">Name: </span>${user.name.last} ${user.name.first}
              </p>
              <p class="text-xl" id="email">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl" id="phone">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl" id="location">
                <span class="font-bold">Location: </span> ${user.location.city}
              </p>
              <p class="text-xl" id="age">
                <span class="font-bold">Age: </span> ${user.registered.age}
              </p>
            </div>
          </div>
        </div>`;
}
