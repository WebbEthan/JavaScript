function Client()
{
    // Method to start connection with server
    Connect = function(ip, port)
    {
        _tcp = new TCP(ip, port);
    };
    SendData = function(packet, protocall)
    {

    }
    Disconnect = function()
    {
        _tcp.Disconnect();
    }
    let _tcp;
    let _udp;
    function TCP(ip, port)
    {
        const _socket = _connect(ip, port);
        async function _connect(ip, port)
        {
            console.log("Attempting to connect to> " + ip + ":" + port);
            const socket = new WebSocket("ws://" + ip + ":" + port);
            // waits for socket to connect
            if (await new Promise((Connected) => { let timeout = setInterval(() => {
                    if (socket.readyState == 1) { Connected(true); }
                     else if (socket.readyState != 0) { Connected(false); } }, 1000); }))
            {
                console.log("Connection established...");   
            }
            else
            {
                console.log("Connection failed");
            }
            return socket;
        }

        Disconnect = function()
        {

        }

    }
    function UDP()
    {
        constructor()
        {

        }
    }
    return;
};