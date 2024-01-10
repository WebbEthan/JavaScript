class MSGclient extends Client
{
    constructor()
    {
        super();
        Connect("127.0.0.1", 25578);
    }
}