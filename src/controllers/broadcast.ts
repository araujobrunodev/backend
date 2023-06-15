import Manager from "@/manager"

export default (manager: Manager) => {

  manager.on("BROADCAST", (context, msg) => {
    context.sendBroadcast("BROADCAST", msg);
  })
}