// var state = {
//     taskList: [
//         {
//             imageurl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: "",
//         },

//         {
//             imageurl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: "",
//         },

//         {
//             imageurl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: "",
//         },

//         {
//             imageurl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: "",
//         },

//         {
//             imageurl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: "",
//         },
//     ],
// }

const state = {
    taskList: [],
};

// DOM Operations

const taskcontents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__Modal__body");

console.log(taskcontents);
console.log(taskModal);

const htmlTaskContent = ({ id, title, description, type, url}) => `
    <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
    <div class='card shadow-sm task__card'>
      <div class='card-header d-flex gap-2 justify-content-end task__card__header'>
        <button type='button' class='btn btn-outline-info mr-2' name=${id} onclick="editTask.apply(this, arguments)">
          <i class='fas fa-pencil-alt' name=${id}></i>
        </button>
        <button type='button' class='btn btn-outline-danger mr-2' name=${id} onclick="deleteTask.apply(this, arguments)">
          <i class='fas fa-trash-alt' name=${id}></i>
        </button>
      </div>
            </div>

            <div class='card-body'>
                ${
                    url && 
                    `<img width='100%' src=${url} alt='Card Image' class='card-image-top md-3 rounded-lg' />`
                }
                <h4 class='card-title task__card'>${title}</h4>
                <p class='description trim-3-lines text-muted'>description</p>
                <div class='tags' text-white d-flex-wrap>
                  <span class='badge bg-primary m-1'>${type}</span>
                </div>
                <div class='card-footer'>
                  <button type='button' class='btn btn-outline-primary float-right data-bs-toggle="modal" data-bs-target="#exampleModal"'></button>
                </div>
            </div>
        </div>
    </div>
`;