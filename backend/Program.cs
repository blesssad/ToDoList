using backend.Models;
using System.Net;

class Program
{
    static void Main(string[] args)
    {
        var server = new Server(80, IPAddress.Any);

        server.StartServer();
        server.Listen();

        Console.WriteLine(server.CurrentClients.First().ToString());
        server.StopServer();
    }
}