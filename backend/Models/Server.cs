using System.Net;
using System.Net.Sockets;
using backend.Exceptions;

namespace backend.Models;

public class Server
{
    private TcpListener _listener;
    private List<TcpClient> _currentClients;

    public Server(int port, IPAddress ipAddress)
    {
        if (ipAddress is null)
        {
            throw new ArgumentNullException(nameof(ipAddress));
        }

        if (port <= 0)
        {
            throw new InvalidPortNumberException("Your port number is negative or null");
        }

        _listener = new TcpListener(ipAddress, port);  
        _currentClients = new List<TcpClient>();
    }

    public IReadOnlyList<TcpClient> CurrentClients => _currentClients;

    public void StartServer()
    {
        _listener.Start();
    }

    public void Listen()
    {
        while (true)
        {
            Console.Write("Waiting for a connection... ");

            var client = _listener.AcceptTcpClient();

            _currentClients.Add(client);
            Console.Write("Connected!");
        }
    }

    public void StopServer()
    {
        _listener.Stop();
    }
}
