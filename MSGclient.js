class MSGclient extends Client
{
    constructor()
    {
        super();
        this.Connect("127.0.0.1", 12345);
    }
}