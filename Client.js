function Client()
{
    // Method to start connection with server
    Connect = async function(ip, port)
    {
        _tcp = new TCP();
        await _tcp.Connect(ip, port);
        return;
    };
    // Passes a packet to the tcp of udp class
    SendData = function(packet, useUDP)
    {
        if (!useUDP)
        {
            _tcp.SendData(packet);
        }
        else
        {
            _udp.SendData(packet);
        }
    }
    
    Handles = new Map();
    // Disconnects the sockets and disposes of the tcp and udp classes
    Disconnect = function()
    {
        if (_tcp != null)
        {
            _tcp.Disconnect();
            _tcp = null;        
        }
        if (_udp != null)
        {
            _udp.Disconnect();
            _udp = null;
        }
        console.log("Disconnected");
    }
    let _tcp;
    let _udp;
    class TCP
    {
        #_socket;
        // method starts the connection to the server and return the socket
        async Connect(ip, port)
        {
            console.log("Attempting to connect to> " + ip + ":" + port);
            this.#_socket = new WebSocket("ws://" + ip + ":" + port);
            // waits for socket to connect
            if (await new Promise((Connected) => { const timeout = setInterval(() => {
                    if (this.#_socket.readyState != 0) { clearInterval(timeout); Connected(this.#_socket.readyState == 1); }}, 500); }))
            {
                // Connection found
                console.log("Connection established..."); 
                this.#_socket.onmessage = this.HandleData(this.#_socket.data);
            }
            else
            {
                // Connection failed
                console.log("Connection failed");
                Disconnect();
            }
        }
        // takes a byte array and passes it into the handle 
        HandleData = function(data)
        {
            const packet = new Packet(data);
            Handles[packet.PacketID]();
        }
        SendData(packet)
        {
            this.#_socket.send(packet.Data)
        }
        Disconnect()
        {
            if (this.#_socket != null)
            {
                this.#_socket.close();
                console.log("Disconnected TCP");
            }
        }

    }
    class UDP
    {
        constructor()
        {

        }
        SendData(Packet)
        {

        }
        Disconnect()
        {

        }
    }
};