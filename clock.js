function updateclock(){
    const now=new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    
    const date=now.getDate().toString().padStart(2,0);
    const month=now.getMonth().toString().padStart(2,0);
    const year=now.getFullYear().toString().padStart(2,0);
    
    const timestring=`${hours}:${minutes}:${seconds}`;
    
    document.getElementById("clock").textContent=timestring;
   



}
updateclock();
setInterval(updateclock,10);
const username = document.getElementById("username");
        const submit = document.getElementById("submit");
        submit.onclick = function() {
            if (username.value.trim() === "") {
                document.getElementById("display").textContent = `Enter a valid username`;
            } else {
                document.getElementById("display").textContent = `Hello ${username.value}`;
            }
        }
