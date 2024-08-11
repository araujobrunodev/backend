import Manager from "@/manager";
import exit from "@/types/exitType";

export default (manager:Manager) => {
    setInterval(() => {
        if (!exit.state) return;

        exit.room.map((uuid) => {
            manager.send("EXIT",{
                nick:exit.player.name,
                value:exit.value
            },uuid);
        })

        exit.state = false;
        exit.player = {name:"",available:false,uuid:""}
        exit.room.length = 0;
        exit.value = "";
    },1000)
}