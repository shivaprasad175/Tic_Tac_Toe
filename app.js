let btn=document.querySelectorAll(".Button");
let P1=document.querySelector("#p1");
let P2=document.querySelector("#p2");
let r=document.querySelector("#res");
let restart=document.querySelector(".res");
let p=0,f=0,p1=0,p2=0,click=1;    
btn.forEach((b) => {
    b.addEventListener("click",()=>{
        if(click==1){
        if (p==0 && b.innerText===""){
            b.innerText="X";
            f++;
            p=1;
        }
        else if(p==1 && b.innerText===""){
           b.innerText="O";
           f++;
           p=0;
        };
        let res=evaluate(Array.from(btn).indexOf(b));
        if (f==9){
            r.innerText="Draw";
            click=0;
        }
        if(res==true){
            if(p==0){
                r.innerText="Winner Is Player_O"
                P1.textContent=String(++p1);
                click=0;
            }
            else{
                r.innerText="Winner Is Player_X"
                P2.textContent=String(++p2);
                click=0;
            } 
        } 
        }    
    });      
 });
function Reset(){
    f=0,p=0,click=1;
    r.innerText="";
    btn.forEach((b)=>{
        b.innerText="";
    });
};
restart.addEventListener("click",()=>{
    Reset();
});


function evaluate(index){
let h=horizontal_check(index);
let v=vertical_check(index);
let d=diagonal_check(index);
if(h==true || v==true || d==true){
    return true;
}
return false;
}
function horizontal_check(index){
    let s=Math.floor(index/3)*3;
    for(let i=0;i<3;i++){
        if(btn[s+i].innerText===""){
            return false;
        }
    }
    if(btn[s].innerText===btn[s+1].innerText && btn[s+1].innerText===btn[s+2].innerText){
        return true;
    }
    return false;

}
function vertical_check(index){
    let s=index%3;
    let x=s;
    for(let i=0;i<3;i++){
        if(btn[x].innerText===""){
            return false;
        }
        x+=3;
    }
    if(btn[s].innerText===btn[s+3].innerText && btn[s+3].innerText===btn[s+6].innerText){
        return true;
    }
    return false;
}
function diagonal_check(index){
    let v1=true,v2=true;
    if(index%2!=0){
        return false;
    } 
    if(index==0 || index%4==0){
       for(let x=0;x<=8;x+=4){
        if(btn[x].innerText==="")v1=false;
       }
       if(v1==true){
        if(btn[0].innerText===btn[4].innerText && btn[4].innerText===btn[8].innerText) return true;
       }
    }
    if(index>0 && index%2==0){
        for(let x=2;x<=6;x+=2){
            if(btn[x].innerText==="")v2=false;
        }
        if(v2==true){
        if(btn[2].innerText===btn[4].innerText && btn[4].innerText===btn[6].innerText) return true;
        }
    }
    return false;
}