




const usersArray = [
  { id: 1, name: "Roshan Kumar", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "roshan.kumar123@gmail.com" },
  { id: 2, name: "Amit Verma", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000", email: "amit.verma87@gmail.com" },
  { id: 3, name: "Rupesh Mourya", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000", email: "rupesh.mourya01@gmail.com" },
  { id: 4, name: "Priya Sharma", image: "https://images.unsplash.com/photo-1678286742832-26543bb49959?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000", email: "priya.sharma44@gmail.com" },
  { id: 5, name: "Neha Patel", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000", email: "neha.patel09@gmail.com" },
  { id: 6, name: "Rahul Mehta", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "rahul.mehta76@gmail.com" },
  { id: 7, name: "Karan Singh", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "karan.singh55@gmail.com" },
  { id: 8, name: "Sneha Yadav", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "sneha.yadav32@gmail.com" },
  { id: 9, name: "Anjali Gupta", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "anjali.gupta20@gmail.com" },
  { id: 10, name: "Vikas Tiwari", image: "https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "vikas.tiwari91@gmail.com" },
  { id: 11, name: "Deepak Sharma", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "deepak.sharma14@gmail.com" },
  { id: 12, name: "Meena Joshi", image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "meena.joshi07@gmail.com" },
  { id: 13, name: "Ravina Chauhan", image: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "ravina.chauhan63@gmail.com" },
  { id: 14, name: "Pooja Mishra", image: "https://media.istockphoto.com/id/1354946118/photo/young-asian-business-woman-in-a-black-jacket-and-hat-in-a-cafe-sits-at-a-table-with-a-cup-of.webp?a=1&s=612x612&w=0&k=20&c=o3D8F7DrVGzKwj-z2JpszyR5KawuBSFkde7RgrVB9eU=", email: "pooja.mishra88@gmail.com" },
  { id: 15, name: "Arjun Yadav", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "arjun.yadav29@gmail.com" },
  { id: 16, name: "Nisha Rani", image: "https://images.unsplash.com/photo-1551648289-51cbfd636ce9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500", email: "nisha.rani47@gmail.com" },
  { id: 17, name: "Gaurav Thakur", image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000", email: "gaurav.thakur05@gmail.com" },
  { id: 18, name: "Simran Kaur", image: "https://images.unsplash.com/photo-1686711473833-87d0ac3de224?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500", email: "simran.kaur39@gmail.com" },
  { id: 19, name: "Ankit Raj", image: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000", email: "ankit.raj66@gmail.com" },
  { id: 20, name: "Tanya Agarwal", image: "https://plus.unsplash.com/premium_photo-1681827232414-9ea822631ab3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500", email: "tanya.agarwal12@gmail.com" },
  { id: 21, name: "Mohit Chauhan", image: "https://media.istockphoto.com/id/1280100017/photo/young-man-in-kurta-pyjamas-at-home-crossed-arms-on-a-festival-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=lX1ngu5w4L_rCCiRlztXOXmxAYe3IOZLIJlkTz4wNAk=", email: "mohit.chauhan77@gmail.com" },
  { id: 22, name: "Ritika Sharma", image: "https://media.istockphoto.com/id/2170816744/photo/pensive-woman-drinking-a-coffee-on-the-street.webp?a=1&s=612x612&w=0&k=20&c=NFAB4KRkSXmGcfMo-V8cxFTys0fgsbKbRlrOfPkhQ-o=", email: "ritika.sharma58@gmail.com" },
  { id: 23, name: "Abhishek Jain", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000", email: "abhishek.jain34@gmail.com" },
  { id: 24, name: "Suman Yadav", image: "https://images.unsplash.com/photo-1658283116293-d02d3cf6ac9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500", email: "suman.yadav02@gmail.com" },
  { id: 25, name: "Rohit Kumar", image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "rohit.kumar90@gmail.com" },
  { id: 26, name: "Divya Sharma", image: "https://images.unsplash.com/photo-1600972163045-e3211653e5a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500", email: "divya.sharma24@gmail.com" },
  { id: 27, name: "Aarav Singh", image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "aarav.singh08@gmail.com" },
  { id: 28, name: "Isha Verma", image: "https://images.unsplash.com/photo-1547285641-f4d1d27ea8e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500", email: "isha.verma69@gmail.com" },
  { id: 29, name: "Kunal Joshi", image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000", email: "kunal.joshi71@gmail.com" },
  { id: 30, name: "Snehal Patil", image: "https://plus.unsplash.com/premium_photo-1661478165353-bd62a981a1b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500", email: "snehal.patil56@gmail.com" },
];


let usersList = document.querySelector(".users-list");
console.log(usersList);

usersArray.map((item)=>{
    // console.log(item);

    usersList.innerHTML += `<div class="user">
                <div class="user-image">
                    <img src=${item.image} alt="" height="50" width="50">
                </div>

                <div class="user-details">
                    <h3>${item.name}</h3>
                    <p>${item.email}</p>
                </div>
            </div>`
});



//input se related work start

let inputField = document.querySelector('input');
console.log(inputField);

//add eventlistner for getting its value

inputField.addEventListener("input", ()=>handleSearch(usersArray));


let filteredArray;

function handleSearch(usersArray){
    // console.log("search par input krte hi kuch kaam hoga");

    let searchText = (inputField.value).toLowerCase();
    console.log(searchText);


    //ab yaha kaam karna filter wala
    console.log(usersArray);


    filteredArray = usersArray.filter((item)=>{
        // console.log(item);

        if(
            ((item.name).toLowerCase()).includes(searchText) || ((item.name).toLowerCase()).includes(searchText)){

            return item;
        }
    })

    console.log(filteredArray);

    //filterArray screen par dikhana
    usersList.innerHTML = ""; //cleanup

    filteredArray.forEach(elem => {
        console.log(elem);

        usersList.innerHTML += `<div class="user">
                <div class="user-image">
                    <img src=${elem.image} alt="" height="50" width="50">
                </div>

                <div class="user-details">
                    <h3>${elem.name}</h3>
                    <p>${elem.email}</p>
                </div>
            </div>`;

            




        
    });

    
}

let searchBtn = document.querySelector("#searchBtn");
console.log(searchBtn);

searchBtn.addEventListener("click", ()=>handleSearch(usersArray))
