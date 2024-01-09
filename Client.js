function Client()
{
    this.Connect = function(ip, port)
    {
        _tcp = new TCP(ip, port);
    };
    let _tcp;
    let _udp;
    class TCP
    {
        constructor(ip, port)
        {
            console.log(ip + ":" + port)
        }
    }
    class UDP
    {

    }
    return;
};