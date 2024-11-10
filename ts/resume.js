"use strict";
window.addEventListener('load', () => {
    let f1name = document.getElementById('fname');
    let s1name = document.getElementById('sname');
    let designation = document.getElementById('desig');
    // about
    let phone = document.getElementById('phone');
    let email = document.getElementById('mail');
    let address = document.getElementById('addres');
    // skills
    let skill1 = document.getElementById('skill-1');
    let skill2 = document.getElementById('skill-2');
    let skill3 = document.getElementById('skill-3');
    // achievement
    let atitle1 = document.getElementById('atitle1');
    let adescription1 = document.getElementById('adescription1');
    let atitle2 = document.getElementById('atitle2');
    let adescription2 = document.getElementById('adescription2');
    // education
    let eschool1 = document.getElementById('eschool1');
    let edegree1 = document.getElementById('edegree1');
    let ecity1 = document.getElementById('ecity1');
    let estart1 = document.getElementById('estart1');
    let eend1 = document.getElementById('eend1');
    let edescription1 = document.getElementById('edescription1');
    // 
    let eschool2 = document.getElementById('eschool2');
    let edegree2 = document.getElementById('edegree2');
    let ecity2 = document.getElementById('ecity2');
    let estart2 = document.getElementById('estart2');
    let eend2 = document.getElementById('eend2');
    let edescription2 = document.getElementById('edescription2');
    //experiences 
    let extitle1 = document.getElementById('extitle1');
    let exname1 = document.getElementById('exname1');
    let exaddress1 = document.getElementById('exaddress1');
    let exstart1 = document.getElementById('exstart1');
    let exend1 = document.getElementById('exend1');
    let exdescription1 = document.getElementById('exdescription1');
    // 
    let extitle2 = document.getElementById('extitle2');
    let exname2 = document.getElementById('exname2');
    let exaddress2 = document.getElementById('exaddress2');
    let exstart2 = document.getElementById('exstart2');
    let exend2 = document.getElementById('exend2');
    let exdescription2 = document.getElementById('exdescription2');
    // projects
    let prtitle1 = document.getElementById('prtitle1');
    let prlink1 = document.getElementById('prlink1');
    let prdescription1 = document.getElementById('prdescription1');
    let prtitle2 = document.getElementById('prtitle2');
    let prlink2 = document.getElementById('prlink2');
    let prdescription2 = document.getElementById('prdescription2');
    // get for about
    let dara = localStorage.getItem("aboutData");
    if (dara) {
        let aboutt = JSON.parse(dara);
        // console.log(aboutt);
        f1name.innerText = aboutt.fname;
        s1name.innerText = aboutt.sname;
        designation.innerText = aboutt.designation;
        phone.innerText = aboutt.phoneNo;
        email.innerText = aboutt.email;
        address.innerText = aboutt.address;
    }
    // get for achievemnts
    let tro = localStorage.getItem("achievementData");
    if (tro) {
        let ab = JSON.parse(tro);
        // console.log(ab);
        atitle1.innerText = ab.at1;
        atitle2.innerText = ab.at2;
        adescription1.innerText = ab.adesc1;
        adescription2.innerText = ab.adesc2;
    }
    // get dor wxpweriences
    let fro = localStorage.getItem("experienceData");
    if (fro) {
        let c = JSON.parse(fro);
        // console.log(c);
        extitle1.innerText = c.tit1;
        exname1.innerText = c.com1;
        exaddress1.innerText = c.loc1;
        exstart1.innerText = c.sta1;
        exend1.innerText = c.end1;
        exdescription1.innerText = c.des1;
        extitle2.innerText = c.tit2;
        exname2.innerText = c.com2;
        exaddress2.innerText = c.loc2;
        exstart2.innerText = c.sta2;
        exend2.innerText = c.end2;
        exdescription2.innerText = c.des2;
    }
    // get for education
    let fo = localStorage.getItem("educationData");
    if (fo) {
        let s = JSON.parse(fo);
        // console.log(s);
        eschool1.innerText = s.sch1;
        edegree1.innerText = s.deg1;
        ecity1.innerText = s.cit1;
        estart1.innerText = s.sta1;
        eend1.innerText = s.end1;
        edescription1.innerText = s.des1;
        eschool2.innerText = s.sch2;
        edegree2.innerText = s.deg2;
        ecity2.innerText = s.cit2;
        estart2.innerText = s.sta2;
        eend2.innerText = s.end2;
        edescription2.innerText = s.des2;
    }
    let qo = localStorage.getItem("projectData");
    if (qo) {
        let t = JSON.parse(qo);
        // console.log(t);
        prtitle1.innerText = t.pn1;
        prlink1.innerText = t.pl1;
        prdescription1.innerText = t.pd1;
        prtitle2.innerText = t.pn2;
        prlink2.innerText = t.pl2;
        prdescription2.innerText = t.pd2;
    }
    let yo = localStorage.getItem("skillData");
    if (yo) {
        let w = JSON.parse(yo);
        // console.log(w);
        skill1.innerText = w.sk1;
        skill2.innerText = w.sk2;
        skill3.innerText = w.sk3;
    }
    let pic = localStorage.getItem('profile_pic');
    let profileImg = document.getElementById('porfolio');
    profileImg.src = pic;
});
let pr = document.getElementById('print1');
pr === null || pr === void 0 ? void 0 : pr.addEventListener('click', () => {
    window.print();
});
let edit = document.getElementById('');
edit === null || edit === void 0 ? void 0 : edit.addEventListener('click', () => {
    window.history.back();
});
