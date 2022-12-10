const users = [
  {
    id: 1,
    url: "./assets/1.jpeg",
  },
  {
    id: 2,
    url: "./assets/2.jpeg",
  },
  {
    id: 3,
    url: "./assets/3.jpeg",
  },
  {
    id: 4,
    url: "./assets/4.jpeg",
  },
  {
    id: 5,
    url: "./assets/5.jpeg",
  },
  {
    id: 6,
    url: "./assets/6.jpeg",
  },
];

let usersContainer = document.getElementById("container");

const mappedUsers = users.map((user, index) => {
  return ` 
  <div key=${index}>
          <div 
           style="background-image: url(${user.url});position:absolute;inset: 0;background-size:cover;background-position:center;z-index:0;  "></div>
          <div 
          class="opacity-0 hover:cursor-pointer hover:opacity-100 hover:bg-orange-600 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center"
          style=""
          >
            <p class="text-gray-300 text-xs">CATEGORY</p>
            <div>
              <p class="text-white text-lg">Project Name</p>
            </div>
          </div>
        </div>
  `;
});

usersContainer.innerHTML = mappedUsers;
