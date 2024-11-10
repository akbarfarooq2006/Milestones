let form =document.querySelector('.cv-form') as HTMLFormElement;


const inputs = form.querySelectorAll("input");
inputs.forEach(input => {
    input.addEventListener("input", function () {
        if (input.value.trim() !== "") {
            input.style.border = ""; // Border reset jab user kuch likhna shuru kare
            input.style.backgroundColor="#ffffff"
        }
    });
});



form.addEventListener('submit',(event)=>{
    event.preventDefault();

    // all data collect
// about
let firstName = (document.getElementById('firstName') as HTMLInputElement).value;
let lastName = (document.getElementById('lastName') as HTMLInputElement).value;
let f_designation = (document.getElementById('f-designation') as HTMLInputElement).value;
let f_mail = (document.getElementById('e-mail') as HTMLInputElement).value;
let f_address = (document.getElementById('address') as HTMLInputElement).value;
let f_phone = (document.getElementById('phone-no') as HTMLInputElement).value;
 //photo remain
// console.log(photo);

// achievement
let atitle1 =(document.getElementById('a-title1') as HTMLInputElement).value;
let adescription1 =(document.getElementById('a-description1') as HTMLInputElement).value;
let atitle2 =(document.getElementById('a-title2') as HTMLInputElement).value;
let adescription2 =(document.getElementById('a-description2') as HTMLInputElement).value;

// experiences
let ex_title1=(document.getElementById('ex-title1') as HTMLInputElement).value;
let ex_company1=(document.getElementById('ex-company1') as HTMLInputElement).value;
let ex_location1=(document.getElementById('ex-location1') as HTMLInputElement).value;
let ex_start_date1=(document.getElementById('ex-start-date1') as HTMLInputElement).value;
let ex_end_date1=(document.getElementById('ex-end-date1') as HTMLInputElement).value;
let ex_description1=(document.getElementById('ex-description1') as HTMLInputElement).value;
// 
let ex_title2=(document.getElementById('ex-title2') as HTMLInputElement).value;
let ex_company2=(document.getElementById('ex-company2') as HTMLInputElement).value;
let ex_location2=(document.getElementById('ex-location2') as HTMLInputElement).value;
let ex_start_date2=(document.getElementById('ex-start-date2') as HTMLInputElement).value;
let ex_end_date2=(document.getElementById('ex-end-date2') as HTMLInputElement).value;
let ex_description2=(document.getElementById('ex-description2') as HTMLInputElement).value;

// education
let e_school1   =(document.getElementById('e-school1') as HTMLInputElement).value;
let e_degree1   =(document.getElementById('e-degree1') as HTMLInputElement).value;
let e_city1   =(document.getElementById('e-city1') as HTMLInputElement).value;
let e_start_date1   =(document.getElementById('e-start-date1') as HTMLInputElement).value;
let e_end_date1   =(document.getElementById('e-end-date1') as HTMLInputElement).value;
let e_description1   =(document.getElementById('e-description1') as HTMLInputElement).value;

let e_school2   =(document.getElementById('e-school2') as HTMLInputElement).value;
let e_degree2   =(document.getElementById('e-degree2') as HTMLInputElement).value;
let e_city2   =(document.getElementById('e-city2') as HTMLInputElement).value;
let e_start_date2   =(document.getElementById('e-start-date2') as HTMLInputElement).value;
let e_end_date2   =(document.getElementById('e-end-date2') as HTMLInputElement).value;
let e_description2   =(document.getElementById('e-description2') as HTMLInputElement).value;

// project
let pr_name1       =(document.getElementById('pr-name1') as HTMLInputElement).value;
let pr_link1       =(document.getElementById('pr-link1') as HTMLInputElement).value;
let pr_decription1   =(document.getElementById('pr-decription1') as HTMLInputElement).value;

let pr_name2   =(document.getElementById('pr-name2') as HTMLInputElement).value;
let pr_link2   =(document.getElementById('pr-link2') as HTMLInputElement).value;
let pr_decription2   =(document.getElementById('pr-decription2') as HTMLInputElement).value;


// skills
let skill1 =(document.getElementById('skill1') as HTMLInputElement).value;
let skill2 =(document.getElementById('skill2') as HTMLInputElement).value;
let skill3 =(document.getElementById('skill3') as HTMLInputElement).value;





// for about
const about={
fname:firstName,
sname:lastName,
designation:f_designation,
email:f_mail,
address:f_address,
phoneNo:f_phone
}
localStorage.setItem("aboutData", JSON.stringify(about));

// for achievement
const achievement={
    at1:atitle1,
    adesc1:adescription1,
    at2:atitle2,
    adesc2: adescription2,
}
localStorage.setItem("achievementData", JSON.stringify(achievement));
// for experience
const experience={
    tit1:ex_title1,
    com1:ex_company1,
    loc1:ex_location1,
    sta1:ex_start_date1,
    end1:ex_end_date1,
    des1:ex_description1,
    // 
    tit2:ex_title2,
    com2:ex_company2,
    loc2:ex_location2,
    sta2:ex_start_date2,
    end2:ex_end_date2,
    des2:ex_description2    
}
localStorage.setItem("experienceData", JSON.stringify(experience));

// for education 
const education ={
sch1:e_school1,
deg1:e_degree1 ,
cit1:e_city1  ,
sta1:e_start_date1 , 
end1:e_end_date1  ,
des1:e_description1,  
// 
sch2:e_school2,
deg2:e_degree2 ,
cit2:e_city2  ,
sta2:e_start_date2 , 
end2:e_end_date2  ,
des2:e_description2,  

}
localStorage.setItem("educationData", JSON.stringify(education));

// for project
const project={
pn1:pr_name1,      
pl1:pr_link1,      
pd1:pr_decription1,
pn2:pr_name2,      
pl2:pr_link2,      
pd2:pr_decription2,
}
localStorage.setItem("projectData", JSON.stringify(project));


const skills={
    sk1:skill1,
    sk2:skill2,
    sk3:skill3,
}
localStorage.setItem("skillData", JSON.stringify(skills));


let pic= document.getElementById('profile') as HTMLInputElement;
console.log(pic);

if (pic.files && pic.files[0]) {
    let reader= new FileReader()
    reader.addEventListener('load',()=>{
        let textimg:any =reader.result;
        localStorage.setItem("profile_pic",textimg)
    })
    reader.readAsDataURL(pic.files[0])
}



let allFilled = true;

inputs.forEach(input => {
    if (input.value.trim() === "") {
        allFilled = false;
        input.style.border = "1px solid #f52828c7"; // Empty fields ke liye red border
    } else {
        input.style.border = ""; // Filled fields ke liye normal border
    }
});

if (allFilled) {
    // Sab fields filled hain toh agle page pe redirect kar do
    window.location.href = "/resume.html"; // Replace with actual next page URL
} else {
    alert("Please fill all the fields before submitting!");
}






})

