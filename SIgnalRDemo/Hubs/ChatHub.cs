using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SIgnalRDemo.Hubs
{
    public class ChatHub : Hub
    {
        
        public async Task SendMessage()
        {
            string time = DateTime.Now.ToString();
            await Clients.All.SendAsync("ReceiveMessage", time);
        }
       
    }
}
