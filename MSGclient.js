class MSGclient extends Client
{
    constructor()
    {
        super();
        // set handles
        Handles.set(0, () => { this.RecieveMSG(packet); })
        // call connect
        Connect("127.0.0.1", 25578);
    }
    RecieveMSG(packet)
    {
        packet
    }
}